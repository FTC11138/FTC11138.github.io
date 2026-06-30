import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, CircuitBoard, Rocket, Users, ChevronDown } from "lucide-react";
import Tag from "../components/Tag";
import FloatIn from "../components/FloatIn";
import { Statistics } from "../components/Statistics";

const missionPillars = [
  {
    icon: CircuitBoard,
    title: "Cutting-Edge Engineering",
    copy: "Carbon fiber, CNC aluminum, and rapid CAD reviews keep our bots feather-light but competition ready.",
  },
  {
    icon: Rocket,
    title: "Software First Mindset",
    copy: "Autonomous modes use FTCLib, Limelight AprilTags, and PedroPathing for predictable scoring.",
  },
  {
    icon: Users,
    title: "Student-Led Culture",
    copy: "Drivers, strategists, and outreach leads are all high school students learning by doing.",
  },
];

export default function Home() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollHint(window.scrollY < 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 min-h-screen flex items-center -mt-16 pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.15),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(0,0,0,1),_black)]" />

        <div className="container-std relative py-20 grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT SIDE — BRANDING */}
          <div className="space-y-6">
            <FloatIn delay={0}>
              <a href="https://www.google.com/maps/place/1805+136th+Pl+NE,+Bellevue,+WA" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition cursor-pointer">
                <Tag className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-300" />
                  <span className="text-xs tracking-wider uppercase text-red-200/90">
                    Bellevue, Washington
                  </span>
                </Tag>
              </a>
            </FloatIn>

            <FloatIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                Robo Eclipse
              </h1>
            </FloatIn>

            <FloatIn delay={150}>
              <h2 className="text-2xl md:text-4xl text-gray-400 font-semibold">
                FTC 11138
              </h2>
            </FloatIn>

            <FloatIn delay={200}>
              <p className="max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed">
                A student-led FTC team building bold hardware, reliable
                software, and outreach that inspires the next wave of builders.
              </p>
            </FloatIn>

            <FloatIn delay={260}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/competitions"
                  className="inline-flex items-center rounded-full px-7 py-3 bg-gradient-to-r from-red-600 via-red-500 to-rose-500 text-white font-semibold shadow-xl shadow-red-600/40 hover:translate-y-[-1px] transition"
                >
                  Follow the season
                </Link>
                <Link
                  to="/robots"
                  className="inline-flex items-center rounded-full px-7 py-3 border border-white/40 text-white/90 hover:bg-white/10 transition"
                >
                  Explore our robots
                </Link>
              </div>
            </FloatIn>
          </div>

          {/* RIGHT SIDE — STATISTICS CARD */}
          <FloatIn delay={200}>
            {/* <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50 p-8"> */}
            <Statistics />
            {/* </div> */}
          </FloatIn>
        </div>

        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[0.6rem] tracking-[0.5em] uppercase text-gray-200 transition-opacity duration-300 ${
            showScrollHint ? "opacity-90" : "opacity-0 pointer-events-none"
          }`}
        >
          <span>Scroll</span>
          <ChevronDown
            className="mt-2 h-6 w-6 text-red-200 animate-bounce"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* WHAT DRIVES US / PILLARS */}
      <section className="container-std py-14 md:py-18">
        <div className="flex flex-col gap-8 md:gap-10">
          <FloatIn delay={0}>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-red-300">
                How we build
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                The three pillars behind every Robo Eclipse robot
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-300">
                From kickoff whiteboards to final alliance selections, these are
                the principles that shape every design decision on our team.
              </p>
            </div>
          </FloatIn>

          <FloatIn delay={120}>
            <div className="grid gap-6 md:grid-cols-3">
              {missionPillars.map((item) => (
                <div
                  key={item.title}
                  className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/70 to-black/95 p-5 md:p-6 backdrop-blur shadow-lg shadow-black/40 transition-transform duration-200 hover:-translate-y-1 hover:border-red-400/60"
                >
                  <div className="inline-flex items-center justify-center rounded-2xl bg-red-500/10 border border-red-400/40 p-3">
                    <item.icon className="h-6 w-6 text-red-300" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </FloatIn>
        </div>
      </section>

      {/* PATHWAYS STRIP */}
      <section className="border-y border-white/10 bg-gradient-to-r from-black via-black to-red-950/40">
        <div className="container-std py-12 md:py-16">
          <FloatIn delay={0}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-red-300">
                  Choose your path
                </p>
                <h2 className="mt-3 text-3xl font-bold">
                  Compete with us. Learn from us. Back us.
                </h2>
                <p className="mt-3 max-w-xl text-sm md:text-base text-gray-300">
                  Whether you&apos;re a future driver, a mentor, or a sponsor,
                  there&apos;s a way to plug into Robo Eclipse.
                </p>
              </div>
            </div>
          </FloatIn>

          <FloatIn delay={120}>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                to="/competitions"
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-left hover:border-red-400/60 hover:bg-white/10 transition"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-red-300">
                  For competitors
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  See our season &amp; results
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Match recaps, awards, and how our robots evolved from league
                  meets to championship fields.
                </p>
                <p className="mt-4 text-xs text-red-200 group-hover:underline">
                  View competitions →
                </p>
              </Link>

              <Link
                to="/robots"
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-left hover:border-red-400/60 hover:bg-white/10 transition"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-red-300">
                  For builders
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Dive into our robots
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  CAD, mechanisms, subsystems, and the software stack that keeps
                  everything in sync.
                </p>
                <p className="mt-4 text-xs text-red-200 group-hover:underline">
                  Explore robot gallery →
                </p>
              </Link>

              <Link
                to="/contact"
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-left hover:border-red-400/60 hover:bg-white/10 transition"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-red-300">
                  For supporters
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Partner, mentor, or sponsor
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Help fund parts, provide mentorship, or host workshops that
                  bring FTC to more students.
                </p>
                <p className="mt-4 text-xs text-red-200 group-hover:underline">
                  Get in touch →
                </p>
              </Link>
            </div>
          </FloatIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-std py-14 md:py-16 text-center">
        <FloatIn delay={700}>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/20 via-black to-black p-8 md:p-12 shadow-2xl shadow-black/50 transition-transform duration-200 hover:-translate-y-1">
            <div className="flex flex-col gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-red-300">
                  Get involved
                </p>
                <h2 className="mt-3 text-4xl font-bold">
                  Drive with us or support the journey
                </h2>
                <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
                  We recruit ambitious builders, mentors, and sponsors who
                  believe in student-led engineering. Reach out, visit our shop,
                  or back our next competition run.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black font-semibold hover:bg-gray-100 transition"
                >
                  Join the team
                </Link>
              </div>
            </div>
          </div>
        </FloatIn>
      </section>
    </div>
  );
}
