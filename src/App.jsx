import { useState } from "react";
import ParticleHero from "./components/ParticleHero.jsx";
import clobberCornerLogo from "./assets/clobber-corner-logo.png";

const contactEmail = "contact@pryzon.co.uk";
const formspreeEndpoint = "https://formspree.io/f/xzdwqwwv";

const services = [
  "Website Security Review",
  "Email Spoofing / DMARC Check",
  "External Vulnerability Assessment",
  "Public Exposure / OSINT Check",
  "Microsoft 365 or Google Workspace Review",
  "Plain-English Security Report",
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
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

const aboutValues = [
  {
    title: "Permission-first testing",
    text: "We only review systems that have been clearly approved and scoped before work begins.",
  },
  {
    title: "Plain-English reporting",
    text: "Clients receive clear findings, business impact and ranked fixes without unnecessary jargon.",
  },
  {
    title: "Built for small businesses",
    text: "Our services are designed for small businesses that need practical security guidance without enterprise-level complexity.",
  },
];

const reviews = [
  {
    quote:
      "I recently had Pryzon conduct a cybersecurity review for my small online clothing shop, and I couldn’t be happier with the experience. From start to finish, their team was thorough, professional, and incredibly knowledgeable. They not only identified potential vulnerabilities but also provided clear, actionable recommendations that were easy to implement.",
    name: "Clobber Corner",
    label: "Shopify Ecommerce Security Review",
    logo: clobberCornerLogo,
    url: "https://clobbercorner.com/",
  },
  {
    quote: "The review was straightforward, professional and explained in plain English.",
    name: "Small Business Client",
    label: "Website Security Review",
  },
  {
    quote: "Helpful, clear and focused on fixes that actually mattered.",
    name: "Local Business Owner",
    label: "Cyber Exposure Check",
  },
  {
    quote:
      "Pryzon helped us understand our online risks without using confusing technical language.",
    name: "Ecommerce Client",
    label: "Starter Cyber Exposure Check",
  },
];

const trustPoints = [
  "Written scope first",
  "Non-destructive testing",
  "Plain-English reports",
];

const legalPages = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: 31 May 2026",
    intro:
      "This Privacy Policy explains how Pryzon handles personal information when you contact us, request a security review or use this website.",
    sections: [
      {
        title: "Who We Are",
        paragraphs: [
          "Pryzon is a UK-based cybersecurity business providing permission-based cyber exposure reviews and practical security guidance.",
          `For privacy questions, contact ${contactEmail}.`,
        ],
      },
      {
        title: "Information We Collect",
        paragraphs: [
          "When you submit an enquiry, we may collect your name, business name, email address, website address, package interest and any message you choose to send.",
          "If you become a client, we may also keep agreed scope details, written permission records, review notes, reports, invoices and related business communications.",
          "Please do not send passwords, payment card details or unnecessary sensitive information through the contact form.",
        ],
      },
      {
        title: "How We Use Information",
        paragraphs: [
          "We use enquiry details to respond to requests, discuss the right service, confirm written scope and permission, deliver reports and manage client communication.",
          "We may also use business records for administration, accounting, legal compliance, service improvement and basic security of our own systems.",
        ],
      },
      {
        title: "Form Submissions",
        paragraphs: [
          "Contact form submissions are processed through Formspree, a third-party form handling provider. Formspree receives the information you submit so the enquiry can be delivered to Pryzon.",
          "If you prefer not to use the form, you can contact Pryzon directly by email instead.",
        ],
      },
      {
        title: "Sharing Information",
        paragraphs: [
          "We do not sell personal information. Information is only shared where needed to run the business, provide the service, comply with the law or use trusted providers such as form handling, email, hosting and accounting tools.",
          "Where specialist testing support is agreed for a full review, only relevant scope and technical information is shared as needed to carry out the approved work.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "We keep enquiry and client information only for as long as needed for the purpose it was collected, including service delivery, follow-up, business records and legal or accounting requirements.",
          "You can ask us to delete enquiry information where there is no longer a valid reason to keep it.",
        ],
      },
      {
        title: "Your Rights",
        paragraphs: [
          "Under UK data protection law, you may have rights to access, correct, delete, restrict or object to the use of your personal information.",
          "To make a request, email Pryzon at the contact address above. You also have the right to raise concerns with the UK Information Commissioner's Office.",
        ],
      },
      {
        title: "Cookies And Analytics",
        paragraphs: [
          "The current website does not rely on marketing cookies. If analytics, advertising tools or additional tracking are added later, this policy should be reviewed and updated.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms",
    updated: "Last updated: 31 May 2026",
    intro:
      "These Terms set out the basic conditions for using the Pryzon website and requesting Pryzon services. Any paid review will also require agreed scope and written permission before work begins.",
    sections: [
      {
        title: "About Pryzon",
        paragraphs: [
          "Pryzon provides permission-based cyber exposure checks, security reviews and plain-English recommendations for UK businesses.",
          `You can contact Pryzon at ${contactEmail}.`,
        ],
      },
      {
        title: "Using This Website",
        paragraphs: [
          "You may use this website to learn about Pryzon services and submit a genuine enquiry. You must not misuse the website, attempt to disrupt it or submit false, harmful or unauthorised information.",
        ],
      },
      {
        title: "Enquiries And Scope",
        paragraphs: [
          "Submitting the contact form does not automatically create a client relationship or authorise any testing.",
          "Before any security review begins, Pryzon will confirm the systems in scope, the testing approach, the price and written permission from an authorised person.",
        ],
      },
      {
        title: "Permission-Based Testing",
        paragraphs: [
          "Pryzon only reviews systems that have been approved and scoped before work begins. Testing is intended to be safe, controlled and non-destructive unless a different approach is clearly agreed in writing.",
          "You must only request testing for websites, domains, accounts or systems you own or are authorised to approve.",
        ],
      },
      {
        title: "Service Output",
        paragraphs: [
          "Reports and findings are provided to help you understand and prioritise visible security risks. They are not a guarantee that a business, website or system is secure.",
          "Security changes, fixes and third-party platform settings remain the responsibility of the client unless separate support is agreed.",
        ],
      },
      {
        title: "Pricing And Payment",
        paragraphs: [
          "Published prices are shown in GBP and may change over time. The Starter Cyber Exposure Check is a fixed-price service when the request fits the published starter scope.",
          "Full Security Reviews are scoped before testing begins, and the final price depends on website type, number of systems, accounts and testing depth.",
        ],
      },
      {
        title: "Confidentiality",
        paragraphs: [
          "Pryzon treats client information, scope details and security findings as confidential unless disclosure is required by law or agreed with the client.",
          "Clients should also treat reports and findings responsibly, especially where they include technical details about live systems.",
        ],
      },
      {
        title: "Liability",
        paragraphs: [
          "Pryzon aims to provide careful, practical and professional guidance, but no security review can identify every possible issue or provide guaranteed protection.",
          "Nothing in these Terms limits liability where it would be unlawful to do so. For paid work, any additional limits or responsibilities should be confirmed in the written scope or service agreement.",
        ],
      },
      {
        title: "Changes To These Terms",
        paragraphs: [
          "Pryzon may update these Terms as the business, website or services change. The latest version will be available on this page.",
        ],
      },
    ],
  },
};

function getCurrentLegalPage() {
  if (typeof window === "undefined") {
    return null;
  }

  const route = window.location.pathname.replace(/^\/+|\/+$/g, "");
  return legalPages[route] || null;
}

async function handleSecurityCheckSubmit(event, setFormStatus) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  if (formData.get("_gotcha")) {
    return;
  }

  formData.set("_subject", "New Pryzon security check request");
  setFormStatus("sending");

  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    form.reset();
    setFormStatus("success");
  } catch {
    setFormStatus("error");
  }
}

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

function SiteHeader({ isLegalPage = false }) {
  const displayedNavLinks = navLinks.map((link) => ({
    ...link,
    href: isLegalPage ? `/${link.href}` : link.href,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-5 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <a href={isLegalPage ? "/#home" : "#home"} className="group inline-flex items-center gap-3">
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
            {displayedNavLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-cyan-200">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={isLegalPage ? "/#contact" : "#contact"}
            className="inline-flex w-fit rounded bg-emerald-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-200"
          >
            Book a Check
          </a>
        </div>
      </div>
    </header>
  );
}

function LegalPage({ page }) {
  return (
    <section className="bg-black px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <a
          href="/#home"
          className="mb-8 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
        >
          Back to Pryzon
        </a>
        <p className="mb-3 text-xs font-semibold uppercase text-cyan-300">{page.eyebrow}</p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">{page.title}</h1>
        <p className="mt-4 text-sm text-slate-500">{page.updated}</p>
        <p className="mt-8 text-lg leading-8 text-slate-300">{page.intro}</p>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {page.sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-6 text-cyan-50">
          For questions about this page, email{" "}
          <a href={`mailto:${contactEmail}`} className="font-semibold text-cyan-100">
            {contactEmail}
          </a>
          .
        </div>
      </div>
    </section>
  );
}

function ReviewsMarquee() {
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <div className="reviews-marquee">
      <div className="reviews-marquee-track" aria-label="Pryzon client reviews">
        {scrollingReviews.map((review, index) => (
          <ReviewCard review={review} index={index} key={`${review.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review, index }) {
  const cardContent = (
    <>
      <div>
        {review.logo ? (
          <div className="mb-5 flex items-center gap-3 rounded border border-white/10 bg-white/[0.035] p-3">
            <img
              src={review.logo}
              alt={`${review.name} logo`}
              className="h-14 w-14 shrink-0 rounded bg-white object-contain"
            />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
              {review.name}
            </span>
          </div>
        ) : (
          <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
        )}
        <p className="text-base font-medium leading-7 text-slate-100">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <div className="mt-7">
        <p className="text-sm font-semibold text-white">{review.name}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cyan-200">
          {review.label}
        </p>
        {review.url ? (
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Visit website
          </p>
        ) : null}
      </div>
    </>
  );

  const className =
    "reviews-card rounded border border-white/10 bg-black/45 p-6 shadow-[0_0_34px_rgba(34,211,238,0.08)]";

  if (review.url) {
    return (
      <a
        href={review.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${review.name} website`}
        className={`${className} cursor-pointer`}
      >
        {cardContent}
      </a>
    );
  }

  return <article className={className}>{cardContent}</article>;
}

function SiteFooter({ isLegalPage = false }) {
  const anchorPrefix = isLegalPage ? "/" : "";

  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 text-sm text-slate-400 md:grid-cols-[1.1fr_0.8fr_1.1fr]">
        <div>
          <p className="text-xl font-semibold text-white">Pryzon</p>
          <p className="mt-3 max-w-sm leading-6">
            Permission-based cyber exposure reviews for UK businesses.
          </p>
          <p className="mt-3 text-xs uppercase text-slate-500">Est. 2026</p>
        </div>
        <nav className="grid gap-3">
          <a href={`${anchorPrefix}#about`} className="transition hover:text-cyan-200">About</a>
          <a href={`${anchorPrefix}#services`} className="transition hover:text-cyan-200">Services</a>
          <a href={`${anchorPrefix}#pricing`} className="transition hover:text-cyan-200">Pricing</a>
          <a href={`${anchorPrefix}#reviews`} className="transition hover:text-cyan-200">Reviews</a>
          <a href={`${anchorPrefix}#contact`} className="transition hover:text-cyan-200">Contact</a>
          <a href="/privacy" className="transition hover:text-cyan-200">Privacy Policy</a>
          <a href="/terms" className="transition hover:text-cyan-200">Terms</a>
        </nav>
        <div className="space-y-3">
          <p>
            Email:{" "}
            <a href={`mailto:${contactEmail}`} className="text-cyan-200 hover:text-cyan-100">
              {contactEmail}
            </a>
          </p>
          <p>Location: United Kingdom</p>
          <p>Permission-based security reviews only</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs leading-6 text-slate-500 md:flex-row md:items-start md:justify-between">
        <p>&copy; 2026 Pryzon. All rights reserved.</p>
        <p className="max-w-2xl">
          Pryzon provides security reviews and recommendations. Testing is only performed with
          written permission and agreed scope.
        </p>
      </div>
    </footer>
  );
}

function App() {
  const [formStatus, setFormStatus] = useState("idle");
  const legalPage = getCurrentLegalPage();

  if (legalPage) {
    return (
      <main className="min-h-screen bg-black text-white">
        <SiteHeader isLegalPage />
        <LegalPage page={legalPage} />
        <SiteFooter isLegalPage />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <ParticleHero />

      <section id="about" className="scroll-mt-48 bg-black px-5 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-cyan-300">
              About
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              About Pryzon
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
              <p>
                Pryzon is a new UK-based cybersecurity business helping small businesses
                understand and reduce their online security risks.
              </p>
              <p>
                We specialise in clear, practical security reviews for small businesses that rely
                on websites, email, ecommerce platforms and online customer trust. Our work focuses
                on identifying real exposure, explaining the risk in plain English, and giving
                business owners a ranked list of fixes they can actually understand and act on.
              </p>
              <p>
                As a newer business, we are building our reputation through careful,
                permission-based reviews and strong client results. Our early reviews have helped
                clients identify practical improvements around website exposure, email spoofing
                protection, ecommerce fraud risks and admin security.
              </p>
              <p>
                We are local, approachable and straightforward. We do not use scare tactics or
                confusing technical language. Every review is carried out with agreed scope,
                written permission and a focus on safe, non-destructive testing.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {aboutValues.map((value) => (
              <article
                key={value.title}
                className="rounded border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-300/35 hover:bg-white/[0.04]"
              >
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-48 bg-slate-950 px-5 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8">
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

      <section id="process" className="scroll-mt-48 bg-black px-5 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8">
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

      <section id="pricing" className="scroll-mt-48 bg-slate-950 px-5 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8">
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
          <SectionHeader eyebrow="Why it matters" title="Small businesses need clear visibility">
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

      <section id="reviews" className="scroll-mt-48 overflow-hidden bg-slate-950 py-20 sm:scroll-mt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Reviews" title="Reviews">
            Early feedback from businesses we&rsquo;ve helped with practical, permission-based
            security reviews.
          </SectionHeader>
        </div>
        <ReviewsMarquee />
      </section>

      <section id="contact" className="scroll-mt-48 bg-slate-950 px-5 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8">
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
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Backup email:{" "}
              <a href={`mailto:${contactEmail}`} className="text-cyan-200 hover:text-cyan-100">
                {contactEmail}
              </a>
            </p>
          </div>

          <form
            name="pryzon-security-check"
            action={formspreeEndpoint}
            method="POST"
            onSubmit={(event) => handleSecurityCheckSubmit(event, setFormStatus)}
            className="rounded border border-white/10 bg-black/45 p-5 shadow-glow sm:p-7"
          >
            <p className="hidden" aria-hidden="true">
              <label>
                Leave this field empty
                <input name="_gotcha" tabIndex="-1" autoComplete="off" />
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
                  name="business_name"
                  type="text"
                  autoComplete="organization"
                  className="mt-2 w-full rounded border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Website URL
                <input
                  required
                  name="website"
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
                  required
                  name="package_interest"
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
              disabled={formStatus === "sending"}
              className="mt-6 w-full rounded bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:bg-slate-500 sm:w-auto"
            >
              {formStatus === "sending" ? "Sending..." : "Send Request"}
            </button>
            {formStatus === "success" ? (
              <p className="mt-4 rounded border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-100">
                Thanks — your request has been sent.
              </p>
            ) : null}
            {formStatus === "error" ? (
              <p className="mt-4 rounded border border-red-300/30 bg-red-300/10 p-4 text-sm leading-6 text-red-100">
                Sorry, the form could not be sent. Please try again or use the backup email link.
              </p>
            ) : null}
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

      <SiteFooter />
    </main>
  );
}

export default App;
