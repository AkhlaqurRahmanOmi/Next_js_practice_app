import NextAuth, { NextAuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import bcrypt from 'bcrypt'

import prisma from "@/prisma/client";


export const authOption : NextAuthOptions = {
    adapter : PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials : {
                email : {label: 'email', type: 'email', placeholder: 'Email'},
                password: {label: 'password', type: 'password', placeholder: 'Password'},
            },
            async authorize (credentials, req){
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique(
                    {where : 
                        {email: credentials.email}
                    })
                if (!user) return null;
                
                const matchPassword = await bcrypt.compare(credentials.password, user.password!)
                return matchPassword ? user : null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session : { strategy: 'jwt'}
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST}