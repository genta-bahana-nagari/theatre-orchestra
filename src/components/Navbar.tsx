// src/components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-yellow-400">
          🎬 Teater & Orkestra
        </Link>
        <div className="space-x-6">
          <Link href="/theatre" className="hover:text-yellow-400">
            Broadway
          </Link>
          <Link href="/concerts" className="hover:text-yellow-400">
            Concerts
          </Link>
        </div>
      </div>
    </nav>
  );
}
