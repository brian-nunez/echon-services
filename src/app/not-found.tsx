import React from 'react';
import Link from 'next/link';
import TopBar from './_components/topbar';
import Footer from './_components/footer';

export default function NotFound() {
  return (
    <React.Fragment>
      <TopBar />
      <div class="grid h-screen px-4 my-40 bg-white place-content-stretch">
        <div class="text-center">
          <h1 class="font-black text-cyan-600 text-9xl">404</h1>

    <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Uh-oh!
    </p>

    <p class="mt-4 text-gray-500">We can't find that page.</p>

          <Link
            href="/"
            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-cyan-600 rounded hover:bg-cyan-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
