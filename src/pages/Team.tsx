import members from "../data/members.json";
import FloatIn from "../components/FloatIn";

type Member = {
  id: string;
  name: string;
  role?: string[];
  subjects?: string[];
  bio?: string;
  description?: string;
  school?: string;
  grade?: string;
  graduationYear?: number;
  college?: string;
  yearsOnTeam?: number;
  links?: { image?: string };
};

export default function Team() {
  const { students = [], coaches = [], alumni = [] } = members as {
    students?: Member[];
    coaches?: Member[];
    alumni?: Member[];
  };
  const imageMap = import.meta.glob("../assets/people/*", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const resolveImage = (file?: string) => {
    if (!file) return undefined;
    // If absolute URL, use directly
    if (/^https?:\/\//.test(file)) return file;
    // Find a match in the assets/people folder by filename
    const entry = Object.entries(imageMap).find(([path]) =>
      path.endsWith(`/${file}`)
    );
    return entry ? entry[1] : undefined;
  };

  const renderMemberCard = (person: Member, delay: number) => (
    <FloatIn key={person.id} delay={delay} className="h-full">
      <article
        data-reveal
        className="h-full flex flex-col rounded-3xl border border-white/10 bg-black/70"
      >
        <div className="p-8 flex-1 flex flex-col items-center text-center">
          {person.links?.image ? (
            <img
              src={resolveImage(person.links.image)}
              alt={person.name}
              className={`h-48 w-48 rounded-full object-cover ring-2 ring-red-500/40 ${
                person.id === "chinmayi-buddhavarapu"
                  ? "object-[center_60%]"
                  : ""
              }`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <div className="h-48 w-48 rounded-full bg-white/10" />
          )}

          <h3 className="mt-4 text-xl font-semibold text-white">
            {person.name}
          </h3>
          {person.school || person.grade ? (
            <p className="mt-1 text-sm text-gray-400">
              {person.school}
              {person.school && person.grade ? " • " : ""}
              {person.grade}
            </p>
          ) : null}

          {person.role?.length ? (
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {person.role.map((r) => (
                <span
                  key={r}
                  className="inline-block rounded-full bg-red-600/20 text-red-200 px-2.5 py-0.5 text-xs"
                >
                  {r}
                </span>
              ))}
            </div>
          ) : null}

          {person.subjects?.length ? (
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {person.subjects.map((s) => (
                <span
                  key={s}
                  className="inline-block rounded-md border border-white/20 px-2.5 py-0.5 text-xs text-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </FloatIn>
  );
  return (
    <section className="container-std py-20 text-white">
      <FloatIn delay={0}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Meet Our Team
          </h1>
        </div>
      </FloatIn>
      <FloatIn delay={100}>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the coaches and students behind Robo Eclipse.
          </p>
        </div>
      </FloatIn>

      {coaches.length ? (
        <div className="mt-16">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {coaches.map((coach, index) => (
              <FloatIn key={coach.id} delay={200 + index * 100}>
                <article
                  data-reveal
                  className="rounded-3xl border border-red-500/30 bg-black/70 p-6"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-red-300">
                      C O A C H
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {coach.name}
                    </h3>
                    {coach.role?.length ? (
                      <p className="mt-2 text-sm text-gray-400">
                        {coach.role.join(" / ")}
                      </p>
                    ) : null}
                    <p className="mt-4 text-gray-300 text-sm">
                      {coach.bio ??
                        coach.description ??
                        "Volunteer mentor guiding design reviews, match strategy, and outreach."}
                    </p>
                  </div>
                </article>
              </FloatIn>
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
        {students.map((t, i) => renderMemberCard(t, 500 + i * 100))}
      </div>

      {alumni.length ? (
        <div className="mt-20">
          <FloatIn delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">
              Alumni
            </h2>
          </FloatIn>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {alumni.map((alum, index) => (
              <FloatIn key={alum.id} delay={100 + index * 100} className="h-full">
                <article
                  data-reveal
                  className="h-full flex flex-col rounded-3xl border border-amber-500/20 bg-black/70"
                >
                  <div className="p-8 flex-1 flex flex-col items-center text-center">
                    {alum.links?.image ? (
                      <img
                        src={resolveImage(alum.links.image)}
                        alt={alum.name}
                        className="h-48 w-48 rounded-full object-cover ring-2 ring-amber-500/40 grayscale-[30%]"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="h-48 w-48 rounded-full bg-white/10" />
                    )}

                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {alum.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Class of {alum.graduationYear}
                    </p>
                    <p className="text-sm text-gray-400">
                      {alum.college}
                    </p>

                    <p className="mt-3 text-xs text-gray-500">
                      {alum.yearsOnTeam} year{(alum.yearsOnTeam ?? 0) !== 1 ? "s" : ""} on team
                    </p>
                  </div>
                </article>
              </FloatIn>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
