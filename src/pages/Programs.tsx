import FloatIn from "../components/FloatIn";

const seasonTimeline = [
  {
    title: "Kickoff & Preseason",
    period: "August – September",
    description:
      "We launch our season by analyzing the new challenge, aligning on goals, and building the foundation for robot design and team systems. Preseason is all about planning, prototyping, and getting every subsystem ready to evolve.",
    highlights: [
      "Full-team kickoff meeting to break down constraints and brainstorm initial concepts.",
      "Early prototyping for drivetrains, manipulators, and sensor layouts.",
      "Codebase initialization: drive controls, localization framework, and subsystem templates.",
    ],
    resources: [
      {
        label: "FTC Game & Season Info",
        href: "https://www.firstinspires.org/robotics/ftc",
      },
      { label: "Our Team Github", href: "https://github.com/FTC11138" },
    ],
  },
  {
    title: "League Meets",
    period: "October – December",
    description:
      "League meets are where the robot transforms. We stress-test mechanisms, refine code, evaluate failure points, and collect data to guide iteration. Consistency and reliability become the focus.",
    highlights: [
      "Match-by-match logging to track performance, failure modes, and driver routines.",
      "Iterative hardware improvements based on wear patterns and stress testing.",
      "Drive team calibration sessions to build communication, speed, and repeatability.",
    ],
    resources: [
      {
        label: "FTA Live Scoring",
        href: "https://ftc-scoring.firstinspires.org/scoreCalculator",
      },
      {
        label: "Current Game Manual",
        href: "https://ftc-resources.firstinspires.org/ftc/game/manual",
      },
    ],
  },
  {
    title: "Interleague & State Prep",
    period: "January – February",
    description:
      "As the robot stabilizes, we sharpen documentation, judging preparation, and match strategy. This is where engineering storytelling becomes as important as engineering execution.",
    highlights: [
      "Refinement of control loops, sensor integration, and subsystem coordination.",
      "Comprehensive engineering portfolio detailing design decisions and iteration timelines.",
      "Mock judging sessions focusing on clarity, teamwork, and professional presentation.",
    ],
    resources: [
      {
        label: "Judging Rubrics",
        href: "https://www.firstinspires.org/hubfs/web/program/ftc/ftc-judging-summary-sheet.pdf?hsLang=en",
      },
    ],
  },
  {
    title: "Championship-Level Events",
    period: "March – April",
    description:
      "High-level competitions demand strategic consistency, clean execution, and strong professionalism. We polish everything—from scouting workflows to pit organization—to perform at scale.",
    highlights: [
      "Pre-match strategy discussions using shared team metrics and observations.",
      "Structured pit protocols for inspection, repairs, and quick between-match checks.",
      "Final optimization of autonomous routines, driving, and subsystem performance under event pressure.",
    ],
    resources: [
      { label: "Event Results", href: "https://ftc-events.firstinspires.org" },
      { label: "Worlds Info", href: "https://www.firstchampionship.org" },
    ],
  },
  {
    title: "Outreach & Community Engagement",
    period: "Year-Round",
    description:
      "We extend our impact beyond competitions by running events that grow STEM access in our community. Outreach is central to our identity and fuels recruitment, fundraising, and mentorship.",
    highlights: [
      "Workshops at schools, libraries, and community spaces introducing students to robotics.",
      "Team-hosted camps teaching CAD, coding, electronics, and engineering problem-solving.",
      "Long-term mentorship of rookie FTC and FLL teams to help build sustainable programs.",
    ],
    resources: [
      { label: "Contact Us", href: "mailto:ftc11138robotics@gmail.com" },
    ],
  },
  {
    title: "Offseason Innovation & R&D",
    period: "May – July",
    description:
      "After competitions end, we experiment, explore new technologies, and train new members. Offseason lets us take risks, test new ideas, and prepare leaders for the next cycle.",
    highlights: [
      "Rapid prototyping cycles to explore drivetrain, sensor, and mechanism concepts.",
      "Technical deep-dives into topics like vision, motion planning, and reliability testing.",
      "Leadership development as veterans mentor rookies through independent build projects.",
    ],
    resources: [
      {
        label: "Onshape public docs",
        href: "https://cad.onshape.com/documents",
      },
      { label: "PedroPathing Tools", href: "https://pedropathing.com/" },
    ],
  },
];

export default function Programs() {
  return (
    <section className="container-std py-16 text-white">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <FloatIn delay={0}>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Season Timeline
          </h1>
        </FloatIn>
        <FloatIn delay={100}>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            From kickoff to championships, here’s how FTC 11138 Robo Eclipse
            plans, builds, competes, and gives back over a full season.
          </p>
        </FloatIn>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 hidden md:block">
          <div className="h-full w-px bg-white/10" />
        </div>

        <div className="space-y-10">
          {seasonTimeline.map((phase, index) => (
            <FloatIn key={phase.title} delay={200 + index * 100}>
              <article className="relative flex gap-6 md:gap-10">
                {/* Timeline marker */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="hidden md:block w-12" />
                  <div className="md:-ml-1 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-red-400 shadow-lg shadow-red-500/40 border border-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-black/60 p-6 md:p-8 shadow-2xl shadow-black/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {phase.title}
                    </h2>
                    <span className="text-sm font-semibold uppercase tracking-wide text-red-300">
                      {phase.period}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-300 max-w-3xl">
                    {phase.description}
                  </p>
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-white">Highlights</h3>
                      <ul className="mt-3 space-y-2 text-gray-300">
                        {phase.highlights.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 text-red-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Resources</h3>
                      <ul className="mt-3 space-y-2 text-sm text-red-200">
                        {phase.resources.map((resource) => (
                          <li key={resource.label}>
                            <a
                              className="hover:text-white underline-offset-4 hover:underline"
                              href={resource.href}
                              target={
                                resource.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                resource.href.startsWith("http")
                                  ? "noreferrer"
                                  : undefined
                              }
                            >
                              {resource.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </FloatIn>
          ))}
        </div>
      </div>
    </section>
  );
}
