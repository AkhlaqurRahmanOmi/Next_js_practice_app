import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './Components/ProductCard'
import { getServerSession } from 'next-auth'


import { authOption } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOption)
  return (
    <main >
      <h1>hello {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
      <Link href='/users'>users</Link>
    </main>
  )
}
