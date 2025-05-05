import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>This is the Home Page!</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
