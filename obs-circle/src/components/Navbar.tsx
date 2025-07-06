import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    <nav className="flex max-w-screen-xl items-center justify-between p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">
        <Link href="/">OBSCIRCLE</Link>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link href="/airdrops" className="hover:text-blue-400 transition-colors">Airdrops</Link>
        <Link href="/trading" className="hover:text-blue-400 transition-colors">Trading</Link>
        <Link href="/bold" className="hover:text-blue-400 transition-colors">Bold</Link>
      </div>
      
      <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
        Join Our Community
      </button>
      
    </nav>
    </>
  );
}