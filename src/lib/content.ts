/**
 * Site content.
 *
 * Copy rules (see CLAUDE.md): no organisation names, no logos, no claimed clients or
 * partnerships, no invented credentials or statistics, and never any wording that positions
 * Accendora as an accrediting body.
 */

export type Pillar = {
  id: string;
  word: string;
  summary: string;
  detail: string;
  covers: string[];
};

export const pillars: Pillar[] = [
  {
    id: "people",
    word: "People",
    summary: "Young people, employees, leaders, talent.",
    detail:
      "Organisations are built by the people inside them and the people who will join them next. Accendora works across both developing existing talent and opening credible routes in for the workforce still growing up around us.",
    covers: ["Young people", "Employees", "Leaders", "Future talent"],
  },
  {
    id: "capability",
    word: "Capability",
    summary: "Workforce development, quality, accreditation, organisational capability.",
    detail:
      "Capability is what allows an organisation to deliver consistently, meet external standards and keep improving. Accendora strengthens the structures, skills and quality practice that make that possible.",
    covers: [
      "Workforce development",
      "Quality assurance",
      "Accreditation readiness",
      "Organisational capability",
    ],
  },
  {
    id: "opportunity",
    word: "Opportunity",
    summary: "Employer engagement, partnerships, progression, access to experience.",
    detail:
      "Opportunity is created deliberately. Accendora designs the partnerships, programmes and pathways through which people gain access to experience and through which organisations gain access to talent.",
    covers: ["Employer engagement", "Partnerships", "Progression", "Access to experience"],
  },
];

export type Stage = {
  n: string;
  name: string;
  body: string;
  question: string;
};

export const methodology: Stage[] = [
  {
    n: "01",
    name: "Discover",
    body: "Understand the organisation, its people, ambitions, challenges and opportunities.",
    question: "What is actually going on, and what is the organisation trying to achieve?",
  },
  {
    n: "02",
    name: "Design",
    body: "Turn insight into a practical solution, programme, pathway, framework or partnership.",
    question: "What is the most workable shape for this, given real constraints?",
  },
  {
    n: "03",
    name: "Deliver",
    body: "Move from strategy to implementation, coordinating people, partners and activity to make the work happen.",
    question: "Who owns what, by when, and how does it get done?",
  },
  {
    n: "04",
    name: "Develop",
    body: "Review what is working, strengthen the approach, capture learning and build longer-term capability.",
    question: "What have we learned, and how does this become durable?",
  },
];

export type Service = {
  slug: string;
  title: string;
  lead: string;
  body: string;
  services: string[];
  href?: string;
  note?: string;
};

export const services: Service[] = [
  {
    slug: "people-future-talent",
    title: "People & future talent",
    lead: "Creating meaningful routes between young people and the world of work.",
    body: "Accendora helps organisations design career experiences, employer engagement and early talent activity that are structured, purposeful and connected to progression and helps employers think differently about how they engage the workforce still growing up around them.",
    services: [
      "Career insight experiences",
      "Employer engagement",
      "Work experience and early talent",
      "Skills and progression",
      "Strategic partnerships",
    ],
    href: "/young-people",
  },
  {
    slug: "workforce-capability",
    title: "Workforce & organisational capability",
    lead: "Strengthening the capability that allows an organisation to deliver.",
    body: "Capability work sits between people and operations. Accendora supports organisations to develop their workforce, sharpen how teams and functions work, and mobilise activity so that intent becomes delivery.",
    services: [
      "Workforce development",
      "Organisational development",
      "Capability building",
      "Stakeholder engagement",
      "Strategic partnerships",
      "Programme mobilisation and delivery",
    ],
  },
  {
    slug: "quality-accreditation",
    title: "Quality & accreditation support",
    lead: "Preparing organisations for external standards with evidence that holds up.",
    body: "Accendora supports organisations to strengthen quality practice and prepare for accreditation or external standards building the frameworks, evidence and review habits that stand up to scrutiny.",
    services: [
      "Quality assurance",
      "Quality frameworks",
      "Accreditation readiness and support",
      "Evidence and compliance readiness",
      "Programme review",
      "Standards development",
      "Continuous improvement",
    ],
    href: "/quality-accreditation",
    note: "Accendora is not an accrediting body. We support organisations through accreditation processes and prepare them for external review.",
  },
  {
    slug: "programmes-partnerships",
    title: "Programmes & partnerships",
    lead: "Turning ideas into structured programmes that can actually be delivered.",
    body: "Ambition becomes valuable when it is deliverable. Accendora designs and manages programmes, builds partnerships and coordinates the stakeholders around them then evaluates and improves what has been built.",
    services: [
      "Programme design",
      "Programme management",
      "Implementation",
      "Partnership development",
      "Stakeholder coordination",
      "Evaluation",
      "Improvement",
    ],
  },
];

export type YoungPeopleArea = {
  title: string;
  body: string;
  points: string[];
};

export const youngPeopleAreas: YoungPeopleArea[] = [
  {
    title: "School & FE bridge building",
    body: "Connecting schools, colleges and training providers directly with progressive employers to build long-term talent pathways rather than one-off contact.",
    points: [
      "Brokered, purposeful introductions between education and employers",
      "Shared expectations, roles and points of contact on both sides",
      "Pathways designed to last beyond a single cohort or academic year",
    ],
  },
  {
    title: "Safeguarded work exposure & mentorship design",
    body: "Structuring career experiences, workplace visits and mentorship models that are fully safeguarded, risk-managed and age-appropriate for school-aged young people.",
    points: [
      "Safeguarding and risk management designed in from the start",
      "Age-appropriate activity, supervision and boundaries",
      "Mentorship models with clear purpose, structure and duration",
    ],
  },
  {
    title: "Career insight experiences",
    body: "Giving young people structured exposure to real organisations, roles, sectors and working environments so that ideas about work are grounded in something they have actually seen.",
    points: [
      "Exposure to real roles, teams and working environments",
      "Sector and route awareness beyond the obvious job titles",
      "Experiences framed so young people can make sense of them",
    ],
  },
  {
    title: "Employer engagement",
    body: "Helping organisations translate their expertise, culture and workplace into meaningful experiences for young people without creating an unmanageable burden on teams.",
    points: [
      "Turning technical expertise into something a young person can engage with",
      "Practical models that fit around operational reality",
      "Internal ownership, so engagement does not rest on one enthusiast",
    ],
  },
  {
    title: "Work experience & early talent",
    body: "Designing structured opportunities that go beyond simply having a student in the workplace, with intent, ownership and outcome defined before anyone arrives.",
    points: [
      "Defined purpose, tasks and supervision for every placement",
      "Progression-aware design, from insight through to early talent routes",
      "A consistent experience that can be repeated and improved",
    ],
  },
  {
    title: "Skills & progression",
    body: "Connecting early experiences directly to the confidence, soft skills and practical next steps young people need in order to move forward.",
    points: [
      "Explicit links between activity and the skills being developed",
      "Reflection and articulation, so young people can evidence it",
      "Clear next steps rather than an experience that ends in a vacuum",
    ],
  },
  {
    title: "Strategic partnerships",
    body: "Connecting employers, schools, FE colleges and community stakeholders to build collaborative, sustainable talent ecosystems rather than isolated initiatives.",
    points: [
      "Multi-party arrangements with shared purpose and governance",
      "Coordination across organisations with different drivers",
      "Sustainability designed in, not dependent on goodwill alone",
    ],
  },
];

export const qualityPrinciples = [
  {
    title: "Quality assurance",
    body: "Practical assurance activity that tells an organisation what is genuinely working, not just what has been recorded.",
  },
  {
    title: "Quality frameworks",
    body: "Frameworks proportionate to the organisation clear enough to follow, robust enough to withstand external review.",
  },
  {
    title: "Accreditation readiness",
    body: "Preparation for accreditation or external standards: interpreting requirements, mapping current practice and closing the distance between the two.",
  },
  {
    title: "Evidence & compliance readiness",
    body: "Evidence organised so it can be found, understood and defended before a reviewer asks for it.",
  },
  {
    title: "Programme review",
    body: "Structured review of programmes and provision, with findings written to be acted on rather than filed.",
  },
  {
    title: "Standards development",
    body: "Developing internal standards and expectations that make consistent delivery possible across teams and sites.",
  },
  {
    title: "Continuous improvement",
    body: "Building the review habits that keep quality moving forward once the external deadline has passed.",
  },
];

/** Founder expertise areas — verified as areas of experience, with no claims attached. */
export const founderAreas = [
  "Education",
  "Workforce development",
  "Early talent",
  "Programme delivery",
  "Employer engagement",
  "Organisational development",
  "Quality",
  "Partnerships",
];

export const differentiator = {
  eyebrow: "The Accendora difference",
  title: "From intention to implementation",
  body: [
    "Good ideas need more than enthusiasm. They need structure, ownership and delivery.",
    "Accendora works at the point where strategy meets implementation, helping organisations turn an ambition into a practical programme, partnership or pathway that can be delivered, evaluated and improved.",
  ],
};
