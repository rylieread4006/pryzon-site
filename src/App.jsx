import ParticleHero from "./components/ParticleHero.jsx";

const services = [
  "Website Security Review",
  "Email Spoofing / DMARC Check",
  "External Vulnerability Assessment",
  "Public Exposure / OSINT Check",
  "Microsoft 365 or Google Workspace Review",
  "Plain-English Security Report",
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#process" },
  { label: "Recent work", href: "#recent-work" },
  { label: "Contact", href: "#contact" },
];

const steps = [
  "Business submits their website and contact details",
  "Pryzon confirms scope and permission",
  "Pryzon performs a non-invasive external check",
  "Business receives a short plain-English report",
  "Optional call to explain the findings",
];

const packages = [
  {
    badge: "Recommended first step",
    name: "Starter Cyber Exposure Check",
    price: "\u00a3145 fixed price",
    description:
      "The best first step for small businesses that want to understand their public cyber risk without committing to a full review.",
    features: [
      "Public website exposure review",
      "Email spoofing and DMARC check",
      "Basic DNS and domain security checks",
      "Security header review",
      "Public OSINT exposure indicators",
      "Shopify, Wix or WordPress basic checks where relevant",
      "Plain-English PDF report",
      "Ranked priority fixes",
      "No website login required",
      "Non-invasive public review",
    ],
    button: "Book the Starter Check",
    featured: true,
  },
  {
    badge: "Specialist-led",
    name: "Full Security Review",
    price: "From \u00a3999+",
    description:
      "For businesses that need a deeper security assessment beyond a starter exposure check. Pryzon manages the scope, communication and final report, with specialist testing support used where required.",
    features: [
      "Everything in the Starter Cyber Exposure Check",
      "Manual web application security testing where in scope",
      "Deeper external vulnerability assessment",
      "Cloud, email and admin configuration review",
      "Shopify, WordPress, Wix or custom website review",
      "Findings verified and explained in plain English",
      "Prioritised remediation plan",
      "Optional retest after fixes",
      "Final report with severity-rated findings",
    ],
    button: "Request a Full Review",
    note:
      "Full reviews are scoped before testing begins. Final price depends on website type, number of systems, user accounts and testing depth.",
  },
];

const reasons = [
  {
    title: "Attackers look for easy signals",
    text: "Small businesses are often targeted through exposed services, weak email protection and public information that is simple to collect.",
  },
  {
    title: "Small fixes can reduce risk",
    text: "Many issues can be improved with practical configuration changes, better visibility and clearer ownership.",
  },
  {
    title: "Plain English matters",
    text: "Pryzon explains findings without alarmist language, jargon-heavy reports or pressure to buy services you do not need.",
  },
];

const recentWork = [
  {
    title: "Website and email exposure check",
    text: "A focused review of public website signals, domain records and email spoofing protections for a small business.",
  },
  {
    title: "Public OSINT review",
    text: "A plain-English look at public business information that could support impersonation or social engineering attempts.",
  },
  {
    title: "Starter security report",
    text: "A short PDF-style report format designed to show priority fixes without overwhelming non-technical business owners.",
  },
];

const trustPoints = [
  "Written scope first",
  "Non-destructive testing",
  "Plain-English reports",
];

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{children}</p>
      ) : null}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-5 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <span className="relative grid h-16 w-16 place-items-center">
            <svg
              viewBox="0 0 80 80"
              aria-hidden="true"
              className="h-14 w-14 overflow-visible drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] transition duration-300 group-hover:scale-105"
              fill="none"
            >
              <path
                d="M31 68V13h22.5C67.6 13 77 21.6 77 34S67.6 55 53.5 55H40"
                stroke="url(#pryzonMarkBody)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="6.2"
              />
              <path
                d="M40 22h13.2c8 0 13.2 5 13.2 12s-5.2 12-13.2 12H40"
                stroke="url(#pryzonEdge)"
                strokeLinecap="round"
                strokeWidth="1.35"
              />
              <path d="M31 13h22.5C67.6 13 77 21.6 77 34" stroke="rgba(255,255,255,0.24)" strokeLinecap="round" strokeWidth="0.9" />
              <defs>
                <linearGradient id="pryzonMarkBody" x1="31" x2="70" y1="13" y2="68">
                  <stop stopColor="#ffffff" />
                  <stop offset="0.58" stopColor="#f8fafc" />
                  <stop offset="1" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="pryzonEdge" x1="40" x2="66" y1="22" y2="46">
                  <stop stopColor="#e0f2fe" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-wide text-white group-hover:text-cyan-100">
              Pryzon
            </span>
          </span>
        </a>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300 sm:gap-x-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-cyan-200">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex w-fit rounded bg-emerald-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-200"
          >
            Book a Check
          </a>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <ParticleHero />

      <section id="services" className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Practical security visibility without the drama"
          >
            Pryzon focuses on common exposure points small businesses can understand, approve
            and fix.
          </SectionHeader>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service}
                className="rounded border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/35 hover:bg-white/[0.055]"
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
                <h3 className="text-lg font-semibold text-white">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  A focused review designed to surface visible risk and turn it into clear,
                  prioritised action.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-black px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="How it works" title="A clear process from permission to report">
            Every check starts with consent and a defined scope, so your business knows exactly
            what is being reviewed.
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <article key={step} className="rounded border border-white/10 bg-slate-950 p-5">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded bg-cyan-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm font-medium leading-6 text-slate-100">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Paid options" title="Choose the right level of review">
            Start with a focused exposure check, or choose a deeper review when your business
            needs broader visibility and more guidance.
          </SectionHeader>
          <div className="grid gap-5 lg:grid-cols-2">
            {packages.map((option) => (
              <article
                key={option.name}
                className={`rounded border p-6 sm:p-8 ${
                  option.featured
                    ? "relative border-cyan-200/70 bg-cyan-300/[0.08] shadow-[0_0_54px_rgba(34,211,238,0.18)]"
                    : "border-white/10 bg-black/30"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                        option.featured
                          ? "bg-cyan-300 text-slate-950"
                          : "border border-white/10 text-slate-400"
                      }`}
                    >
                      {option.badge}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{option.name}</h3>
                  </div>
                  <p
                    className={`text-3xl font-bold ${
                      option.featured ? "text-cyan-200" : "text-slate-300"
                    }`}
                  >
                    {option.price}
                  </p>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-300">{option.description}</p>
                <ul className="mt-7 space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.45)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {option.note ? (
                  <p className="mt-6 rounded border border-white/10 bg-black/25 p-4 text-xs leading-6 text-slate-400">
                    {option.note}
                  </p>
                ) : null}
                <a
                  href="#contact"
                  className={`mt-8 inline-flex rounded px-5 py-3 text-sm font-bold transition ${
                    option.featured
                      ? "bg-emerald-300 text-slate-950 shadow-[0_0_28px_rgba(110,231,183,0.22)] hover:bg-emerald-200"
                      : "border border-white/15 text-slate-200 hover:border-cyan-300/45 hover:text-white"
                  }`}
                >
                  {option.button}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded border border-white/10 bg-black/35 p-6 sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase text-cyan-300">
              How Full Reviews Work
            </p>
            <p className="max-w-4xl text-sm leading-7 text-slate-300">
              Full reviews follow a controlled process: scoping, written permission, testing,
              reporting and optional follow-up. Testing is only performed against approved
              systems, and the final report includes severity-rated findings, business impact and
              practical fixes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why it matters" title="Small businesses need simple visibility">
            You do not need a heavy security programme to start reducing avoidable exposure.
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded border border-white/10 bg-slate-950 p-6">
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="recent-work" className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Recent work" title="Clear reviews for real small-business risks">
            Pryzon focuses on practical visibility work that helps owners understand what can be
            seen publicly and what should be fixed first.
          </SectionHeader>
          <div className="grid gap-4 md:grid-cols-3">
            {recentWork.map((item) => (
              <article key={item.title} className="rounded border border-white/10 bg-black/35 p-6">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-emerald-300">
              Enquire
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Request a paid cyber security check
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Share your details and Pryzon will confirm the right package, scope and permission
              before any review begins.
            </p>
            <div className="mt-8 rounded border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-6 text-cyan-50">
              Permission-based checks only. Pryzon uses non-invasive external review methods and
              explains findings in plain English.
            </div>
          </div>

          <form
            name="pryzon-security-check"
            method="POST"
            data-netlify="true"
            netlify-honeypot="company-url"
            className="rounded border border-white/10 bg-black/45 p-5 shadow-glow sm:p-7"
          >
            <input type="hidden" name="form-name" value="pryzon-security-check" />
            <p className="hidden">
              <label>
                Company URL
                <input name="company-url" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-200">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Business name
                <input
                  required
                  name="business-name"
                  type="text"
                  autoComplete="organization"
                  className="mt-2 w-full rounded border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Website URL
                <input
                  required
                  name="website-url"
                  type="url"
                  inputMode="url"
                  placeholder="https://example.com"
                  className="mt-2 w-full rounded border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Email address
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Package interest
                <select
                  name="package-interest"
                  className="mt-2 w-full rounded border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>{`Starter Cyber Exposure Check - \u00a3145 fixed price`}</option>
                  <option>{`Full Security Review - From \u00a3999+`}</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-200">
              Message
              <textarea
                name="message"
                rows="5"
                className="mt-2 w-full resize-y rounded border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-200 sm:w-auto"
            >
              Request a Security Check
            </button>
          </form>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {trustPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-4 rounded border border-white/10 bg-slate-950 p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-cyan-300 text-xs font-bold text-slate-950">
                {index + 1}
              </span>
              <p className="text-sm font-semibold text-slate-100">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 text-sm text-slate-400 md:grid-cols-[1.1fr_0.8fr_1.1fr]">
          <div>
            <p className="text-xl font-semibold text-white">Pryzon</p>
            <p className="mt-3 max-w-sm leading-6">
              Simple cyber security checks for small businesses.
            </p>
            <p className="mt-3 text-xs uppercase text-slate-500">Est. 2026</p>
          </div>
          <nav className="grid gap-3">
            <a href="#services" className="transition hover:text-cyan-200">Services</a>
            <a href="#pricing" className="transition hover:text-cyan-200">Pricing</a>
            <a href="#contact" className="transition hover:text-cyan-200">Contact</a>
            <a href="#contact" className="transition hover:text-cyan-200">Privacy Policy</a>
            <a href="#contact" className="transition hover:text-cyan-200">Terms</a>
          </nav>
          <div className="space-y-3">
            <p>
              Email:{" "}
              <a href="mailto:contact@pryzon.co.uk" className="text-cyan-200 hover:text-cyan-100">
                contact@pryzon.co.uk
              </a>
            </p>
            <p>Location: United Kingdom</p>
            <p>Permission-based security reviews only</p>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs leading-6 text-slate-500 md:flex-row md:items-start md:justify-between">
          <p>© 2026 Pryzon. All rights reserved.</p>
          <p className="max-w-2xl">
            Pryzon provides security reviews and recommendations. Testing is only performed with
            written permission and agreed scope.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
