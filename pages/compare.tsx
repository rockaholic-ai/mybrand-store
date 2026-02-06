import Header from '../components/Header'
import products from '../data/products.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Compare() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">Compare</h1>
        <p className="text-sm text-gray-600 mb-6">Select products to compare — (demo: showing all)</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded-xl p-4 shadow">
              <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3">
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.specs}</p>
              <div className="mt-4 font-semibold">{p.priceText}</div>
              <Link href={`/products/${p.id}`}><a className="mt-3 inline-block text-sm text-brand">View</a></Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
