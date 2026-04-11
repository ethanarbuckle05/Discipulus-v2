"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Something went wrong</h1>
        <p className="text-[#ddd] mb-8">An unexpected error occurred.</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-white text-black px-6 py-2 rounded-[75px] font-semibold hover:bg-opacity-90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-white px-6 py-2 rounded-[75px] font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
