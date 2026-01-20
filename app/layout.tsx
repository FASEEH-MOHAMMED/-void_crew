import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "VOID_CREW",
  description: "Official website of Team VOID_CREW",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* NAVBAR */}
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
        </nav>

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
