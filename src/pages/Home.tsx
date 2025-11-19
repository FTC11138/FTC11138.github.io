import { Link } from "react-router-dom";
import { MapPin, CircuitBoard, Rocket, Users } from "lucide-react";
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
  return (
    <div className="text-white">
      <section className="relative py-16 text-center">
        <div className="container-std">
          <FloatIn delay={0}>
            <Tag className="mb-6 inline-flex">
              <MapPin className="w-4 h-4 mr-1.5 text-red-300" />
              Bellevue, Washington
            </Tag>
          </FloatIn>
          <FloatIn delay={100}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight max-w-4xl mx-auto">
              Robo Eclipse
            </h1>
          </FloatIn>
          <FloatIn delay={200}>
            <h2 className="text-2xl md:text-4xl text-gray-400">FTC 11138</h2>
          </FloatIn>
          <FloatIn delay={300}>
            <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
              Robo Eclipse is a student-led FTC team specializing in bold
              hardware, reliable software, and outreach that inspires the next
              wave of builders.
            </p>
          </FloatIn>
          <FloatIn delay={400}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/competitions"
                className="group relative inline-flex items-center rounded-full px-7 py-3 bg-gradient-to-r from-red-600 via-red-500 to-rose-500 text-white text-base font-semibold shadow-xl shadow-red-600/40 hover:translate-y-[-1px] transition"
              >
                <span className="relative z-10">Follow The Season</span>
              </Link>
              <Link
                to="/robots"
                className="group inline-flex items-center rounded-full px-7 py-3 border border-white/40 text-white hover:bg-white/10 transition"
              >
                Explore Our Robots
              </Link>
            </div>
          </FloatIn>

          <section className="container-std mt-12 text-center">
            <FloatIn delay={500}>
              <Statistics />
            </FloatIn>
          </section>

          <section className="container-std mt-16">
            <FloatIn delay={600}>
              <div className="grid gap-6 md:grid-cols-3">
                {missionPillars.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur shadow-lg shadow-black/40"
                  >
                    <item.icon className="h-8 w-8 text-red-400" />
                    <h3 className="mt-4 text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </FloatIn>
          </section>
        </div>
      </section>

      <section className="container-std pb-16 text-center">
        <FloatIn delay={700}>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/20 via-black to-black p-8 md:p-12 shadow-2xl shadow-black/50">
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
