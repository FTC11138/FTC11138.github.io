import seasons from "../data/pastSeasons.json";
import FloatIn from "../components/FloatIn";

type Highlight = {
  event: string;
  notes: string[];
};

type Season = {
  season: string;
  game: string;
  highlights: Highlight[];
};

export default function PastSeasons() {
  const list = seasons as Season[];
  return (
    <section className="container-std py-16 text-white">
      <FloatIn delay={0}>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Past Seasons
          </h1>
        </div>
      </FloatIn>
      <FloatIn delay={100}>
        <div className="text-center mb-12">
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Awards, Ranks, and Highlights from recent seasons
          </p>
        </div>
      </FloatIn>

      <div className="space-y-10">
        {list.map((season, index) => (
          <FloatIn key={season.season} delay={200 + index * 80}>
            <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-neutral-900 p-8 shadow-2xl shadow-black/40">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-red-300">
                    Season
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {season.season}: {season.game}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {season.highlights.map((highlight) => (
                  <div
                    key={`${season.season}-${highlight.event}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {highlight.event}
                    </h3>
                    <ul className="mt-3 space-y-1 text-gray-300 text-sm">
                      {highlight.notes.map((note) => (
                        <li key={note} className="flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </FloatIn>
        ))}
      </div>
    </section>
  );
}
