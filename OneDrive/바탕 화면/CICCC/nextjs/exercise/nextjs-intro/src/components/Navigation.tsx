import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
