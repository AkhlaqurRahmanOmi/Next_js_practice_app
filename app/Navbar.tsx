'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { status, data: session } = useSession()
    // if (status === 'loading') { return null }
    return (
        <div className='flex bg-slate-400 space-x-3'>
            <Link href='/' className='mr-5'>Home</Link>
            <Link href='/users' className='mr-5'>Users</Link>
            {status === 'authenticated' && <div>
                {session.user!.name}
                <Link href='/api/auth/signout' className='ml-4'>Sign Out</Link>
            </div>}
            {status === 'unauthenticated' && <Link href='/api/auth/signin' className='mr-5'>LogIn</Link>}
        </div >
    )
}

export default Navbar