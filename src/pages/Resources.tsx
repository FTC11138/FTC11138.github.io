export default function Resources() {
  const posts = [
    {
      id: "cad-library",
      title: "Public CAD & Onshape Docs",
      date: "Updated monthly",
      href: "https://cad.onshape.com/documents",
      summary: "Grab our drivetrain, slide, and intake references to jumpstart your own design.",
    },
    {
      id: "scouting",
      title: "FTC Scouting Guide",
      date: "CENTERSTAGE Edition",
      href: "https://ftc-docs.firstinspires.org/en/latest/scoring/scouting.html",
      summary: "Alliance selection tips and templates for capturing autonomous, teleop, and judging data.",
    },
    {
      id: "software-stack",
      title: "Road Runner + AprilTag Starter",
      date: "Source code snippets",
      href: "https://github.com/acmerobotics/road-runner-quickstart",
      summary: "Recommended libraries, camera configs, and telemetry patterns we rely on.",
    },
  ];
  return (
    <section className="container-std section text-white">
      <h1 className="text-3xl font-semibold mb-6">Resources</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.id} className="rounded-2xl border border-white/10 bg-black/70 p-5 shadow-lg shadow-black/40">
            <div className="text-sm text-red-300 uppercase tracking-[0.3em]">{p.date}</div>
            <h3 className="font-medium text-2xl mt-2">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.summary}</p>
            <a
              className="mt-4 inline-flex text-sm text-red-200 underline-offset-4 hover:text-white hover:underline"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              Open resource
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
