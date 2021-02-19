import Link from "next/link";

export default function PageTwo() {
  return (
    <>
      <h1 className="mx-auto text-4xl font-bold">Page 2</h1>
      <Link href="/">
        <a className="mx-auto">Back to Home</a>
      </Link>
    </>
  );
}
