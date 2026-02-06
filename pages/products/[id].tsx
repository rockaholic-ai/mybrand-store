import { GetStaticPaths, GetStaticProps } from 'next'
import Header from '../../components/Header'
import products from '../../data/products.json'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  product: any
}

export default function ProductPage({ product }: Props) {
  if (!product) return <div>Not found</div>

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="relative w-full h-[360px] rounded-lg overflow-hidden">
              <Image src={product.img} alt={product.name} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-gray-700">{product.specs}</p>
            <p className="mt-4 text-lg">{product.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-2xl font-semibold">{product.priceText}</div>
              <button className="px-5 py-3 rounded-xl bg-brand text-white">Buy now</button>
              <Link href="/compare"><a className="px-4 py-2 rounded-lg border">Add to compare</a></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(p => ({ params: { id: p.id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string }
  const product = products.find(p => p.id === id) || null
  return { props: { product } }
}
