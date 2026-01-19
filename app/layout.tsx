import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* HEADER */}
        <header className="header">
          <h1 className="logo">My Website Header</h1>

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="main">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="footer">
          © 2026 My Website
        </footer>
      </body>
    </html>
  );
}
