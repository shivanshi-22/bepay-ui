import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="bepay" className="h-8 w-8" />
        <span className="font-bold text-lg">bepay</span>
      </div>

      {/* Links */}
      <div className="space-x-8 text-sm font-medium">
        <Link href="/" className="text-black">PERSONAL</Link>
        <Link href="/" className="text-gray-500">BUSINESS</Link>
        <Link href="/" className="text-gray-500">CRYPTO CARD</Link>
      </div>

      {/* Button */}
      <button className="px-4 py-2 border rounded-full text-sm">
        Download bepay app
      </button>
    </nav>
  );
}
