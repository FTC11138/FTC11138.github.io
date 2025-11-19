import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found.</p>
      <Link to="/" className="mt-6 inline-block underline">Go home</Link>
    </section>
  );
}