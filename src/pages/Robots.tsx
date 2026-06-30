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
    return match ? match[1] : undefined;
  };
  return (
    <section className="container-std py-16 text-white">
      <FloatIn delay={0}>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Our Robots
          </h1>
        </div>
      </FloatIn>
      <FloatIn delay={100}>
        <div className="text-center mb-12">
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Hardware we’ve shipped to the field
          </p>
        </div>
      </FloatIn>

      <div className="space-y-10">
        {list.map((robot, index) => (
          <FloatIn key={robot.id} delay={200 + index * 80}>
            <article className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-neutral-900 overflow-hidden shadow-2xl shadow-black/40">
              {/* super slow fade-in accent glow */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[700ms]" 
                style={{ backgroundImage: `radial-gradient(circle at top right, ${robot.accent ? robot.accent + '25' : 'rgba(255,255,255,0.1)'}, transparent 60%)` }}
              />
              {(() => {
                const img = resolveImage(robot.media);
                return img ? (
                  <div className="w-full flex items-center p-6 justify-center overflow-hidden">
                    <img
                      src={img}
                      alt={robot.name}
                      className="max-h-[26rem] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      loading="lazy"
                    />
                  </div>
                ) : null;
              })()}

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
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
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

                    {robot.specs?.length ? (
                      <div>
                        <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400">
                          Specifications
                        </h3>
                        <ul className="mt-3 space-y-1 text-gray-200 text-sm">
                          {robot.specs.map((spec) => (
                            <li key={spec} className="flex gap-2">
                              <span className="text-red-400">•</span>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          </FloatIn>
        ))}
      </div>
    </section>
  );
}
