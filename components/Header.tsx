import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/60 backdrop-blur z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/"><a className="text-2xl font-bold text-brand">MyBrand</a></Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/products"><a className="hover:underline">Products</a></Link>
            <Link href="/compare"><a className="hover:underline">Compare</a></Link>
            <Link href="/support"><a className="hover:underline">Support</a></Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <input aria-label="Search" placeholder="Search products" className="hidden sm:inline-block px-3 py-2 rounded-xl border border-gray-200" />
          <Link href="/store"><a className="text-sm">Cart</a></Link>
        </div>
      </div>
    </header>
  )
}
