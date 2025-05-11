import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Web for sale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="flex gap-4" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
