import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <h1> $VOID_CREW</h1>
      <p>
        We are a futuristic team building modern, scalable and creative web
        solutions.
      </p>

      <Link href="/team" className="hero-btn">
        Meet the Team
      </Link>
    </main>
  );
}
