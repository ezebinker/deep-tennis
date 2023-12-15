import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">We are sorry... :(</h2>
      <p>Could not find the requested player.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}