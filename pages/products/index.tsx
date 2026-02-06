import React from 'react'
import Header from '../../components/Header'
import products from '../../data/products.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Products() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <article key={p.id} className="bg-white rounded-xl p-4 shadow-sm">
              <Link href={`/products/${p.id}`}><a>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="mt-3">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{p.specs}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">{p.priceText}</span>
                    <button className="px-3 py-1 rounded-lg bg-brand text-white text-sm">Buy</button>
                  </div>
                </div>
              </a></Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
