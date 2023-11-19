import Link from "next/link";
import Card from "~/app/_components/card";

function MainContent() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="my-4 py-4 px-6 w-full flex justify-center items-center gap-4 h-14">
        <h1 className="text-3xl font-bold text-cyan-700">All Products</h1>
      </div>
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <Link
          href="/apps/bdocs"
          className="group relative block h-60"
        >
          <Card
            title="Documents"
            linkText="Start Writing"
          />
        </Link>
        <Link
          href="/apps/bfin"
          className="group relative block h-60"
        >
          <Card
            title="Finance Tools"
            linkText="Begin Calculating"
          />
        </Link>
        <Link
          href=""
          className="group relative block h-60"
        >
          <Card
            title="More Coming Soon"
            linkText="Enroll in our email newsletter"
            description="Let us know what products and tools you want!"
          />
        </Link>
      </div>
    </main>
  );
}

export default MainContent;
