import robots from "../data/robots.json";
import FloatIn from "../components/FloatIn";

type Robot = {
  id: string;
  name: string;
  season: string;
  role: string;
  description: string;
  specs: string[];
  stats: string[];
  media?: string;
  accent?: string;
};

export default function Robots() {
  const list = robots as Robot[];
  const imageMap = import.meta.glob("../assets/robots/*", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const resolveImage = (file?: string) => {
    if (!file) return undefined;
    if (/^https?:\/\//.test(file) || file.startsWith("/")) return file;
    const match = Object.entries(imageMap).find(([path]) =>
      path.endsWith(`/${file}`)
    );
    return match ? match[1] : `/assets/robots/${file}`;
  };
  return (
    <section className="container-std py-16 text-white">
      <FloatIn delay={0}>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Our Robots
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Hardware we’ve shipped to the field
          </p>
        </div>
      </FloatIn>

      <div className="space-y-10">
        {list.map((robot, index) => (
          <FloatIn key={robot.id} delay={100 + index * 80}>
            <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-neutral-900 overflow-hidden shadow-2xl shadow-black/40">
              {robot.media ? (
                <div className="w-full flex items-center m-6 justify-center overflow-hidden">
                  <img
                    src={resolveImage(robot.media)}
                    alt={robot.name}
                    className="max-h-[26rem] object-contain"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="p-8 space-y-6">
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.4em] text-red-300">
                    {robot.season}
                  </p>
                  <p
                    className="mt-4 text-6xl font-black"
                    style={{ color: robot.accent ?? "#ef4444" }}
                  >
                    {robot.name}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400">
                    Highlights
                  </h3>
                  <ul className="mt-3 space-y-1 text-gray-200 text-sm">
                    {robot.stats.map((stat) => (
                      <li key={stat} className="flex gap-2">
                        <span className="text-red-400">•</span>
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </FloatIn>
        ))}
      </div>
    </section>
  );
}
