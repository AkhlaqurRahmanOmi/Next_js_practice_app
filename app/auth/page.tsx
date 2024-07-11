'use client'
import React, { ReactNode } from 'react'
import { SessionContext, SessionProvider } from 'next-auth/react'

const Authprovider = ({ children }: { children: ReactNode }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default Authprovider