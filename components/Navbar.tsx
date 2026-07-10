import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-purple-600 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain rounded-md"
        />
        <span className="text-xl font-bold text-white tracking-tight">To-Do List</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
                <ThemeToggle />
            <Link href="#Home" className="text-white  font-bold px-6 py-2 hover:text-gray-900">Home</Link>
            <Link href="#features" className="text-white font-bold px-6 py-2 hover:text-gray-900">Features</Link>
            <Link href="#About" className="text-white font-bold  px-6 py-2 hover:text-gray-900">About</Link>
            <Link href="/dashboard" className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100">Get Started</Link>
        
          </div>

        </div>
      </div>
    </nav>
  );
}
