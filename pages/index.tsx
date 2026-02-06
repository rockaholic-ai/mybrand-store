import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import products from '../data/products.json'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Beautiful devices. Thoughtfully different.</h1>
            <p className="mt-4 text-lg text-gray-700">Products crafted with soft aesthetics, rounded forms, and human-centered design.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/products"><a className="px-5 py-3 rounded-xl bg-brand text-white">Shop Products</a></Link>
              <Link href="/about"><a className="px-5 py-3 rounded-xl border border-gray-200">Our Story</a></Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 flex items-center justify-center shadow-lg">
              <Image src="/hero/hero-device.jpg" alt="Hero device" width={700} height={420} className="rounded-xl" />
            </div>
          </motion.div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Featured products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <Link href={`/products/${p.id}`}>
                  <a className="block">
                    <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden bg-gray-100">
                      <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium">{p.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{p.specs}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-semibold">{p.priceText}</span>
                        <button className="px-3 py-1 rounded-lg bg-brand text-white text-sm">Buy</button>
                      </div>
                    </div>
                  </a>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600">© {new Date().getFullYear()} MyBrand — Designed differently.</div>
      </footer>
    </div>
  )
}
