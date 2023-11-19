import React from 'react';
import Link from 'next/link';

export default async function MainContent() {
  return (
    <section className="bg-gray-50">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32"
      >
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Streamline Your Success
            <strong className="font-extrabold text-cyan-700 sm:block">
              with Echon Services
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Your one-stop digital hub for transforming everyday tasks into opportunities for growth and efficiency
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-cyan-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring active:bg-cyan-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-cyan-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
