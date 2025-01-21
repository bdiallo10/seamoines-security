import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
          </li>
          <li>
            <Link href="/About" className="text-gray-700 hover:text-black">About</Link>
          </li>
          <li>
            <Link href="/Services" className="text-gray-700 hover:text-black">Services</Link>
          </li>
          <li>
            <Link href="/Career" className="text-gray-700 hover:text-black">Career</Link>
          </li>
          <li>
            <Link href="/Contact" className="text-gray-700 hover:text-black">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}