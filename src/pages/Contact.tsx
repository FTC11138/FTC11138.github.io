import FloatIn from "../components/FloatIn";

const cards = [
  {
    eyebrow: "Prospective Members",
    title: "Join the Team",
    copy: "We recruit driven high school students who love prototyping, coding, media, and outreach. Expect CAD reviews, design notebooks, and late nights polishing autonomous.",
    action: {
      label: "Share your interest",
      href: "mailto:ftc11138robotics@gmail.com?subject=I%20want%20to%20join%20Robo%20Eclipse",
    },
  },
  {
    eyebrow: "Mentors & Sponsors",
    title: "Coach or back the team",
    copy: "Industry mentors keep us accountable while sponsors power travel, registration fees, and machine shop upgrades. From sheet metal to software critiques, we welcome your expertise.",
    action: {
      label: "Request the sponsor kit",
      href: "mailto:ftc11138robotics@gmail.com?subject=Sponsor%20packet%20request",
    },
  },
];

export default function Contact() {
  return (
    <section className="container-std py-16 md:py-20 text-white">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <FloatIn delay={0}>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Contact Robo Eclipse
          </h1>
        </FloatIn>
        <FloatIn delay={100}>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            FTC 11138 is a student-led program. We look for teammates and
            mentors who are ready to iterate fast, document everything, and
            share STEM with our community.
          </p>
        </FloatIn>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {cards.map((card, index) => (
          <FloatIn
            key={card.title}
            delay={200 + index * 100}
            className="h-full"
          >
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/70 p-8 shadow-2xl shadow-black/50">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
                {card.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white">
                {card.title}
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">{card.copy}</p>
              <a
                href={card.action.href}
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/40 transition hover:bg-red-500"
              >
                {card.action.label}
              </a>
            </article>
          </FloatIn>
        ))}
      </div>

      <FloatIn delay={450}>
        <article className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur shadow-2xl shadow-black/40">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
            General Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white">
            Have questions or want to visit?
          </h2>
          <p className="mt-4 text-gray-200 leading-relaxed max-w-3xl">
            Whether you&apos;re a rookie team looking for advice, a class that
            wants a demo, or a sponsor with questions, drop us a note and
            we&apos;ll get back to you within the week.
          </p>
          <a
            className="mt-6 inline-flex items-center justify-center rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            href="mailto:ftc11138robotics@gmail.com?subject=Contact%20Robo%20Eclipse"
          >
            Email us
          </a>
        </article>
      </FloatIn>
    </section>
  );
}
