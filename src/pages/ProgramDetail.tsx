import { useParams, Link } from "react-router-dom";
import programs from "../data/programs.json";

type Program = {
  id: string;
  title: string;
  blurb: string;
  rounds?: string[];
  schedule?: { day: string; time: string; tz?: string }[];
  gradeMin: number;
  gradeMax: number;
  price: number;
};

export default function ProgramDetail() {
  const { id } = useParams();
  const program = (programs as Program[]).find((p) => p.id === id);

  if (!program) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-10 text-white">
        <h1 className="text-2xl font-semibold">Competition not found</h1>
        <p className="mt-2 text-gray-400">The page you are looking for was archived or never existed.</p>
        <Link to="/competitions" className="mt-6 inline-block text-red-300 underline-offset-4 hover:underline">
          Back to competitions
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-white">
      <h1 className="text-4xl font-black">{program.title}</h1>
      <p className="mt-3 text-lg text-gray-300">{program.blurb}</p>

      <div className="mt-6 text-sm text-gray-400 flex flex-wrap gap-6">
        <div>Students: Grades {program.gradeMin}–{program.gradeMax}</div>
        <div>Timeline: {program.schedule?.[0]?.time ?? "Season"}</div>
      </div>

      {program.rounds?.length ? (
        <div className="mt-6">
          <h2 className="font-semibold uppercase tracking-[0.3em] text-red-300 text-xs">Focus Areas</h2>
          <ul className="mt-3 space-y-2 text-gray-200">
            {program.rounds.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {program.schedule?.length ? (
        <div className="mt-6">
          <h2 className="font-semibold uppercase tracking-[0.3em] text-red-300 text-xs">Season Rhythm</h2>
          <ul className="mt-3 text-gray-300 space-y-1">
            {program.schedule.map((s, i) => (
              <li key={`${s.day}-${i}`}>
                {s.day} • {s.time} {s.tz ?? ""}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <Link
        to={`/join?program=${program.id}`}
        className="mt-8 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-500"
      >
        Connect with the team
      </Link>
    </section>
  );
}
