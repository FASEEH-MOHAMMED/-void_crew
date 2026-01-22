"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const texts = [
    "building modern web solutions",
    "creating scalable applications",
    "designing futuristic experiences",
    "turning ideas into reality",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <main className="hero">
      <h1>$VOID_CREW</h1>

      {/* 🔥 Dynamic second line */}
      <p>
        We are a futuristic team{" "}
        <span className="typing">
          {texts[textIndex].slice(0, charIndex)}
        </span>
      </p>

      <Link href="/team" className="hero-btn">
        Meet the Team
      </Link>
    </main>
  );
}
