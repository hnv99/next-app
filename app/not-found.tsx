import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-1/2">
      404 - Not Found Page.{" "}
      <Link href="/" className="text-blue-400 hover:underline">
        Click to Homepage
      </Link>
    </div>
  );
}
