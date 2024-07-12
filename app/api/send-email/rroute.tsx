import WelcomeEmail from '@/emails/WelcomeEmail'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST() {

    resend.emails.send({
        from: '...',
        to: 'lookochori25@gmail.com',
        subject: '..',
        react: <WelcomeEmail name='Omi' />
    })
    return NextResponse.json({})
}