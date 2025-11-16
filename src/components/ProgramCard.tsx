import { Link } from "react-router-dom";

type Program = {
  id: string; title: string; blurb: string;
  gradeMin: number; gradeMax: number; price: number;
};

export default function ProgramCard({ p }: { p: Program }) {
  return (
    <article className="card p-6 flex flex-col">
      <h3 className="font-medium text-lg">{p.title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-1">{p.blurb}</p>
      <div className="mt-4 text-sm text-gray-600">
        Grades {p.gradeMin}–{p.gradeMax} • {p.price === 0 ? "Free" : `$${p.price}`}
      </div>
      <Link to={`/programs/${p.id}`} className="mt-4 inline-block text-sm underline">
        Learn more
      </Link>
    </article>
  );
}