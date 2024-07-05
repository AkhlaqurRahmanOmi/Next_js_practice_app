import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './Components/ProductCard'

export default function Home() {
  return (
    <main >
      <h1>hello</h1>
      <ProductCard />
      <Link href='/users'>users</Link>
    </main>
  )
}
