import FloatIn from "../components/FloatIn";
import Tag from "../components/Tag";
import OutreachStats from "../components/OutreachStats";

const globalConnections = [
  {
    title: "Global Impact",
    body: [
      "Met with Electrohephathetnix (India), Electrohephathetnix Outreach Organization, 19013 G-Force (India), 22534 The Function Machine (South Carolina), and 12808 RevAmped Robotics (Oregon) to exchange ideas and share season recaps.",
      "Hosted Discord sessions with ACE Robotics (Australia) to compare leadership structures and celebrate award strategies.",
    ],
  },
  {
    title: "Supporting Less Privileged Communities",
    body: [
      "Hosted two virtual robotics workshops for schools in rural India.",
      "Donated over $1000 worth of FTC parts to help establish teams in Ghana.",
      "Provided CAD resources and mentoring for 24965 ZOK Juniors in Kazakhstan.",
    ],
  },
];

const lessonsLearned = [
  {
    title: "Taking Advantage of the Offseason",
    text: "Planning ahead allows us to schedule events before the season crunch hits, keeping outreach consistent.",
  },
  {
    title: "Time Management",
    text: "We now lock in events at least two weeks ahead so families and partners have time to prepare and promote.",
  },
];

const galleryIntl = [
  {
    title: "Robot demo with students in Amalapuram, India",
    date: "June 14, 2025",
    image: "1.png",
    caption:
      "We ran a live remote demonstration, answering questions about AI and how to launch a local team.",
  },
  {
    title: "ZPHS Karakuduru presentation",
    date: "January 2, 2025",
    image: "2.png",
    caption:
      "Government high school students learned about FIRST pathways and our CAD workflow.",
  },
  {
    title: "Tutoring center watch party",
    date: "June 14, 2025",
    image: "3.png",
    caption:
      "Over 90 students in Southern India tuned in despite limited internet access.",
  },
  {
    title: "High school outreach session",
    date: "January 2, 2025",
    image: "4.png",
    caption:
      "Students shared ambitions to launch their own robotics clubs after the call.",
  },
];

const galleryLocal = [
  {
    title: "Bennett Elementary STEM Night",
    date: "April 25, 2024",
    image: "5.png",
  },
  {
    title: "Woodridge PTSA Carnival",
    date: "May 29, 2024",
    image: "6.png",
  },
  {
    title: "Discovery Afterschool Expo",
    date: "December 19, 2024",
    image: "7.png",
  },
  {
    title: "Sammamish Farmers Market",
    date: "August 28 & September 4, 2024",
    image: "8.png",
  },
  {
    title: "International Buddy Sunday",
    date: "January 19, 2025",
    image: "9.png",
  },
  {
    title: "STEM Summer Camps Fair",
    date: "May 4, 2025",
    image: "10.png",
  },
];

const teamConnectionGroups = [
  {
    name: "Scrimmages",
    description:
      "Pre-season scrimmages let us stress-test robots while strengthening bonds with nearby FTC teams.",
    items: [
      {
        title: "Pre-League FTC Scrimmage",
        date: "October 23, 2024",
        caption:
          "Full-field dry run that helped us finalize drive team roles before leagues opened.",
        image: "scrimmage-1.png",
      },
      {
        title: "Scrimmage w/ 18225, 14343 & 23511",
        date: "November 21, 2024",
        caption:
          "Refined autonomous tuning and practiced collaborative strategy with veteran teams.",
        image: "scrimmage-2.png",
      },
      {
        title: "Scrimmage w/ 14343 & 19745",
        date: "January 26, 2025",
        caption:
          "Final tune-up ahead of State that deepened relationships with our local alliance partners.",
        image: "scrimmage-3.png",
      },
    ],
  },
  {
    name: "Global Meetings",
    description:
      "This season, we met with four international teams plus mentors worldwide to swap lessons and celebrate wins.",
    items: [
      {
        title: "23863 Electrohephathetnix · India",
        date: "November 23, 2024",
        caption:
          "Joined the Electrohephathetnix Outreach Organization after a joint strategy session.",
        image: "meeting-1.png",
      },
      {
        title: "Global FIRST Inclusivity Conference",
        date: "December 7-8, 2024",
        caption:
          "Participated in a worldwide panel to discuss inclusive recruiting practices.",
        image: "meeting-2.png",
      },
      {
        title: "19013 G-Force · India",
        date: "December 15, 2024",
        caption:
          "Shared scouting templates and exchanged CAD libraries during a virtual meetup.",
        image: "meeting-3.png",
      },
      {
        title: "22534 The Function Machine · South Carolina",
        date: "January 12, 2025",
        caption:
          "Compared offseason training plans and electrical layouts to boost reliability.",
        image: "meeting-4.png",
      },
      {
        title: "12808 RevAmped · Oregon",
        date: "January 12, 2025",
        caption:
          "Collaborated on alliance prep before their league tournament and set up future practice calls.",
        image: "meeting-5.png",
      },
    ],
  },
];

const globalSupport = {
  description:
    "We donated nearly $1,000 of parts to teams starting programs in Ghana, coordinating with FTC 5773 Ink and Metal and 21227 Legend from Fremont, CA to deliver the kits.",
  stats: [
    { value: "20", label: "U-Channels" },
    { value: "2", label: "Linear Slides" },
    { value: "139", label: "Assorted Hubs" },
    { value: "48", label: "GoBilda Motors" },
  ],
};

const seminarOverview = {
  summary:
    "We reached 452 people across five seminars and presentations. Except for our online talk, each event partnered with local organizations such as FRC NRG 948, FLL 59830, FTC 19669, and Microsoft engineers to raise awareness of FIRST and strengthen regional STEM ties.",
  events: [
    {
      title: "FIRST Robotics Seminar",
      date: "July 14, 2024",
      image: "seminar-1.png",
    },
    {
      title: "Online FIRST Presentation",
      date: "December 1, 2024",
      image: "seminar-2.png",
    },
    {
      title: "Microsoft Consumer Electronics Seminar",
      date: "December 8, 2024",
      image: "seminar-3.png",
    },
    {
      title: "Tesla STEM Presentation",
      date: "January 30, 2025",
      image: "seminar-4.png",
    },
    {
      title: "FIRST Presentation & Demonstration",
      date: "February 9, 2025",
      image: "seminar-5.png",
    },
  ],
};

const sponsors = [
  "Microsoft",
  "Boeing",
  "FIRST Washington",
  "FIRST Tech Challenge",
];

const imageMap = import.meta.glob("../assets/outreach/*", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const resolveImage = (file?: string) => {
  if (!file) return undefined;
  if (/^https?:\/\//.test(file) || file.startsWith("/")) return file;
  const entry = Object.entries(imageMap).find(([path]) =>
    path.endsWith(`/${file}`)
  );
  return entry ? entry[1] : undefined;
};

export default function Outreach() {
  return (
    <section className="container-std py-16 text-white space-y-16">
      <FloatIn delay={0}>
        <div className="text-center space-y-4">
          <Tag className="inline-flex">Outreach Overview</Tag>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Impact Beyond The Field
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We devote as much energy to empowering our community as we do to
            robot performance. Every season we track hours, build relationships,
            and ship knowledge across the globe.
          </p>
        </div>
      </FloatIn>

      <OutreachStats />

      <FloatIn delay={200}>
        <div className="grid gap-6 lg:grid-cols-2">
          {globalConnections.map((block) => (
            <article
              key={block.title}
              className="rounded-3xl border border-white/10 bg-black/70 p-6 shadow-xl shadow-black/40"
            >
              <h2 className="text-2xl font-semibold">{block.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {block.body.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </FloatIn>

      <FloatIn delay={300}>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 text-gray-100">
          <h2 className="text-2xl font-semibold">Lessons Learned</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {lessonsLearned.map((lesson) => (
              <div
                key={lesson.title}
                className="rounded-2xl border border-white/10 bg-black/60 p-4"
              >
                <h3 className="font-semibold text-red-300 uppercase text-xs tracking-[0.3em]">
                  {lesson.title}
                </h3>
                <p className="mt-2 text-sm text-gray-200">{lesson.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Through persistence and adaptiveness we learned to operate
            efficiently, capitalized on existing relationships, and kept morale
            high despite leadership changes.
          </p>
        </article>
      </FloatIn>

      <FloatIn delay={400}>
        <div className="space-y-6">
          <h2 className="text-center text-5xl font-bold">
            International Outreach
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {galleryIntl.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/70 p-4 shadow-xl shadow-black/40"
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/50 mb-4">
                  {item.image ? (
                    <img
                      src={resolveImage(item.image)}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  {item.date}
                </p>
                <p className="mt-2 text-sm text-gray-300">{item.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </FloatIn>

      <FloatIn delay={500}>
        <div className="space-y-6">
          <h2 className="text-center text-5xl font-bold">Local Impact</h2>
          <p className="text-sm text-gray-300">
            This season we participated in 16 marquee events locally, logging
            191.5 hours and reaching 1,224 people. From PTA carnivals to city
            council STEM nights, we keep FIRST top-of-mind in our community.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {galleryLocal.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/70 p-4 shadow-xl shadow-black/40"
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/50 mb-4">
                  {item.image ? (
                    <img
                      src={resolveImage(item.image)}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black" />
                  )}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </FloatIn>

      <FloatIn delay={550}>
        <div className="space-y-10">
          <h2 className="text-center text-5xl font-bold">Team Connections</h2>
          {teamConnectionGroups.map((group, idx) => (
            <section key={group.name} className="space-y-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-300">{group.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-black/70 p-4 shadow-xl shadow-black/40"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden bg-black/50 mb-4">
                      {item.image ? (
                        <img
                          src={resolveImage(item.image)}
                          alt={item.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black" />
                      )}
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      {item.date}
                    </p>
                    {item.caption ? (
                      <p className="mt-3 text-sm text-gray-300">
                        {item.caption}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
              {idx === teamConnectionGroups.length - 1 ? (
                <article className="rounded-3xl border border-red-500/30 bg-red-500/10 p-6 shadow-xl shadow-black/40 mt-10">
                  <h4 className="text-xl font-semibold">Global Support</h4>
                  <p className="mt-2 text-sm text-gray-100">
                    {globalSupport.description}
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {globalSupport.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-black/50 p-4 text-center"
                      >
                        <p className="text-3xl font-bold text-red-300">
                          {stat.value}
                        </p>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-2">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ) : null}
            </section>
          ))}
        </div>
      </FloatIn>

      <FloatIn delay={600}>
        <div className="space-y-6">
          <h2 className="text-center text-5xl font-bold">
            Seminars & Presentations
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1.1fr,1.6fr]">
            <article className="rounded-3xl border border-white/10 bg-black/70 p-6 shadow-xl shadow-black/40">
              <p className="text-sm text-gray-300 whitespace-pre-line">
                {seminarOverview.summary}
              </p>
            </article>
            <div className="grid gap-6 md:grid-cols-2">
              {seminarOverview.events.map((event) => (
                <article
                  key={event.title}
                  className="rounded-3xl border border-white/10 bg-black/70 p-4 shadow-xl shadow-black/40"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden bg-black/50 mb-4">
                    {event.image ? (
                      <img
                        src={resolveImage(event.image)}
                        alt={event.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {event.date}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </FloatIn>

      <FloatIn delay={650}>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40 text-center">
          <h2 className="text-3xl font-bold">Volunteering & Sponsors</h2>
          <p className="mt-4 text-sm text-gray-300 max-w-3xl mx-auto">
            Beyond robotics outreach, our members volunteered 372.5 service
            hours this year—about 41 hours per person—supporting STEM fairs,
            farmer&apos;s markets, and mentoring rookie teams. None of this
            would be possible without our sponsors.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-100">
            {sponsors.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/10 px-4 py-1 bg-black/60"
              >
                {name}
              </span>
            ))}
          </div>
        </article>
      </FloatIn>
    </section>
  );
}
