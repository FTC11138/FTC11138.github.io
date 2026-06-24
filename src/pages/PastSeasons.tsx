import seasons from "../data/pastSeasons.json";
import FloatIn from "../components/FloatIn";

type Highlight = {
  event: string;
  notes: string[];
  upcoming?: boolean;
};

type Season = {
  season: string;
  game: string;
  current?: boolean;
  highlights: Highlight[];
};

export default function PastSeasons() {
  const list = seasons as Season[];

  return (
    <section className="container-std py-16 md:py-20 text-white">
      {/* Header */}
      <FloatIn delay={0}>
        <div className="text-center mb-6">
          <h1 className="mt-3 text-5xl md:text-6xl font-black tracking-tight">
            Past Seasons
          </h1>
        </div>
      </FloatIn>

      <FloatIn delay={100}>
        <div className="text-center mb-12">
          <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto">
            A look back at the games we’ve played, the events we’ve attended,
            and the milestones that shaped Robo Eclipse.
          </p>
        </div>
      </FloatIn>

      {/* Seasons list */}
      <div className="relative space-y-10 md:space-y-12">
        {/* timeline line on larger screens */}
        <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 to-red-500/20 pointer-events-none" />

        {list.map((season, index) => (
          <FloatIn key={season.season} delay={200 + index * 80}>
            <article className="relative md:pl-12">
              {/* timeline dot */}
              <div className="hidden md:flex absolute left-4 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-red-400 shadow-[0_0_0_6px_rgba(248,113,113,0.25)]" />

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-neutral-900/90 p-7 md:p-8 shadow-2xl shadow-black/40">
                {/* subtle glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[3000ms] bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.24),transparent_55%)]" />

                {/* season header */}
                <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="inline-flex items-center rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-red-200">
                        {season.season}
                      </span>
                      {season.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/40 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                          </span>
                          Currently Competing
                        </span>
                      )}
                    </div>
                    <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                      {season.game}
                    </h2>
                  </div>
                </div>

                {/* highlights */}
                <div className="relative mt-6 grid gap-5 md:grid-cols-2">
                  {season.highlights.map((highlight) => (
                    <div
                      key={`${season.season}-${highlight.event}`}
                      className={`rounded-2xl border p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                        highlight.notes.length > 0
                          ? "border-red-500/40 bg-red-950/20 shadow-red-500/10"
                          : "border-white/5 bg-black/20 opacity-60 hover:opacity-100 shadow-black/20"
                      }`}
                    >
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {highlight.event}
                      </h3>
                      {highlight.upcoming && (
                        <p className="mt-2 text-sm italic text-amber-300/80">Upcoming Event</p>
                      )}
                      {highlight.notes.length > 0 && (
                        <ul className="mt-3 space-y-1.5 text-gray-300 text-sm">
                          {highlight.notes.map((note) => (
                            <li key={note} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </FloatIn>
        ))}
      </div>
    </section>
  );
}
