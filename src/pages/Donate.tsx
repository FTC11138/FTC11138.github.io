import FloatIn from "../components/FloatIn";

const tiers = [
  { name: "Signal Booster", amount: "$250", perks: "Logo on website + pit banner" },
  { name: "Circuit Partner", amount: "$750", perks: "Robot sticker placement + social media feature" },
  { name: "Flight Sponsor", amount: "$1,500", perks: "Full-season branding + shop tour + demo" },
];

export default function Donate() {
  return (
    <section className="container-std py-16 text-white">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <FloatIn delay={0}>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Support Robo Eclipse</h1>
        </FloatIn>
        <FloatIn delay={100}>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Donations keep us manufacturing, traveling, and teaching. Funds cover robot parts,
            registration fees, and community outreach workshops.
          </p>
        </FloatIn>
      </div>

      <FloatIn delay={150}>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8 shadow-2xl shadow-black/40">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Where your support goes</h2>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>• Machining materials, motors, control hubs, and sensors</li>
              <li>• FIRST Tech Challenge registration, leagues, and state travel</li>
              <li>• Outreach supplies for classroom demos and summer camps</li>
            </ul>
            <p className="mt-6 text-gray-400">
              Robo Eclipse is fiscally sponsored so contributions can be tax-deductible. Reach out for
              paperwork, invoices, or in-kind donation receipts.
            </p>
            <a
              href="mailto:ftc11138robotics@gmail.com?subject=I%20want%20to%20sponsor%20Robo%20Eclipse"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/40 transition hover:bg-red-500"
            >
              Email us for sponsor info
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur shadow-2xl shadow-black/40">
            <h3 className="text-xl font-semibold text-white">Sponsorship Tiers</h3>
            <ul className="mt-4 space-y-5 text-gray-200">
              {tiers.map((tier) => (
                <li key={tier.name} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{tier.name}</span>
                    <span className="text-red-300">{tier.amount}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">{tier.perks}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FloatIn>
    </section>
  );
}
