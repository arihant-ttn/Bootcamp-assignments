import React from 'react'
import Link from 'next/link';
export default function Header() {
  return (
    <nav className="bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-4">
            <li>
              <Link href="/" className="hover:text-gray-300 text-lg font-medium">Home</Link>
            </li>
            <li>
              <Link href="./About" className="hover:text-gray-300 text-lg font-medium">About</Link>
            </li>
            <li>
              <Link href="./Contact-Us" className="hover:text-gray-300 text-lg font-medium">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}
