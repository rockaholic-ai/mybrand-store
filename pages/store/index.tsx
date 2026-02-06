import Header from '../../components/Header'
import Link from 'next/link'

export default function Store() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-6">Cart</h1>
        <p className="text-gray-600">Cart is demo-only. Integrate Stripe for production checkout.</p>
        <div className="mt-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Alpha Phone</div>
                <div className="text-sm text-gray-600">1 × $799</div>
              </div>
              <div className="font-semibold">$799</div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Link href="/products"><a className="px-4 py-2 rounded-lg border">Continue shopping</a></Link>
              <button className="px-4 py-2 rounded-lg bg-brand text-white">Checkout (demo)</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
