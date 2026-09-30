/**
 * Privacy Policy and Terms of Business content.
 *
 * Copy rules (see CLAUDE.md) apply here too: no organisation names, no claimed clients,
 * no invented figures. Every date, address, period and monetary reference comes from
 * `legal` in `@/lib/site` so it is editable in one place.
 *
 * These documents are written to reflect how the site and the business actually operate
 * today: no cookies beyond what is strictly necessary, no analytics, and an enquiry form
 * that composes an email in the sender's own mail client rather than posting to a server.
 * If analytics, a form backend or a scheduling embed is added, both documents must be
 * revisited before that change ships.
 */

import { legal, site } from "@/lib/site";

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "note"; text: string }
  | { kind: "definitions"; items: { term: string; text: string }[] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
  closing: { heading: string; text: string };
};

/* --------------------------------------------------------------- privacy policy */

export const privacyPolicy: LegalDocument = {
  eyebrow: "Legal",
  title: "Privacy policy",
  lead: "How Accendora collects, uses and protects personal information — written plainly, and limited to what actually happens.",
  updated: legal.privacyUpdated,
  intro: [
    `${site.name} ("Accendora", "we", "us") is the data controller for the personal information described in this policy. We are a company registered in England and Wales, company number ${site.companyNumber}, with a registered office at ${legal.registeredAddress}.`,
    `This policy explains what personal information we collect, why we collect it, how long we keep it and what rights you have. It covers this website and the professional relationships we hold with enquirers, clients, contacts and suppliers. It is written to meet our obligations under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`,
  ],
  sections: [
    {
      id: "information-we-collect",
      heading: "1. Information we collect",
      blocks: [
        {
          kind: "p",
          text: "We collect only the information we need in order to respond to you and to run the engagements we are asked to run. That falls into four groups.",
        },
        {
          kind: "definitions",
          items: [
            {
              term: "Enquiry information",
              text: "Your name, your role, your email address, your telephone number if you choose to give it, the area of work you are enquiring about, and whatever you tell us about what you are trying to achieve.",
            },
            {
              term: "Engagement information",
              text: "Contact details, correspondence, meeting notes, documents you share with us and any information we need to scope, deliver, evaluate and invoice a piece of work.",
            },
            {
              term: "Professional contact information",
              text: "Names, roles and business contact details of people we meet or are introduced to through professional activity, including LinkedIn.",
            },
            {
              term: "Technical information",
              text: "Standard server request data generated when any website is visited — for example IP address, browser type and the page requested — processed by our hosting provider for security and reliability.",
            },
          ],
        },
        {
          kind: "note",
          text: "We do not ask for special category data, and we ask you not to send it to us unprompted. Where a programme genuinely requires it — for example safeguarding information connected to work with young people — it is handled under a separate written agreement covering that specific engagement, not under this policy alone.",
        },
      ],
    },
    {
      id: "the-enquiry-form",
      heading: "2. How the enquiry form works",
      blocks: [
        {
          kind: "p",
          text: "The enquiry form on our contact page does not send your details to a database or a third-party form service. When you submit it, the form composes a message in your own email application, addressed to us, containing what you have entered. Nothing leaves your device until you send that email yourself, and we receive it in the same way as any other email.",
        },
        {
          kind: "p",
          text: "This means your enquiry is held in our business email system and in your own sent items, and nowhere else. If we later introduce a hosted form service, this policy will be updated before that change goes live.",
        },
      ],
    },
    {
      id: "why-we-use-it",
      heading: "3. Why we use your information, and our lawful basis",
      blocks: [
        {
          kind: "p",
          text: "We rely on the following lawful bases under Article 6 of the UK GDPR.",
        },
        {
          kind: "definitions",
          items: [
            {
              term: "Legitimate interests",
              text: "To respond to enquiries, to maintain professional relationships, to keep records of our business activity, and to protect the security of our systems. We have considered your interests and rights and are satisfied that this processing is what you would reasonably expect from a professional consultancy you have contacted.",
            },
            {
              term: "Performance of a contract",
              text: "To scope, deliver, manage, evaluate and invoice work we have been engaged to carry out, and to take steps at your request before entering into a contract.",
            },
            {
              term: "Legal obligation",
              text: "To meet accounting, tax, statutory record-keeping and other legal requirements.",
            },
            {
              term: "Consent",
              text: "Where we ask for it explicitly — for example if we ever send an update you have opted into. Consent can be withdrawn at any time, and withdrawing it does not affect processing carried out beforehand.",
            },
          ],
        },
        {
          kind: "p",
          text: "We do not use personal information for automated decision-making or profiling, and we do not sell, rent or trade it.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "4. Cookies and analytics",
      blocks: [
        {
          kind: "p",
          text: "This website does not use analytics, advertising or tracking cookies, and it does not run third-party tracking scripts. No cookie banner is shown because there is nothing to consent to.",
        },
        {
          kind: "p",
          text: "Our hosting provider may set strictly necessary cookies required to serve and secure the site. Fonts are served as part of the site itself rather than requested from a third party. If we introduce analytics in future, we will update this policy and provide a means of consent before any such cookie is set.",
        },
        {
          kind: "p",
          text: "Links to external services — for example LinkedIn or a scheduling tool used to book a conversation — take you to sites operated by other organisations. Once you follow such a link, that organisation's own privacy policy and cookie practices apply, not ours.",
        },
      ],
    },
    {
      id: "sharing",
      heading: "5. Who we share information with",
      blocks: [
        {
          kind: "p",
          text: "Accendora is a small, founder-led consultancy, and personal information is handled by very few people. We share it only where there is a clear reason to.",
        },
        {
          kind: "list",
          items: [
            "Service providers who process information on our behalf under written terms — for example email and file storage, website hosting, scheduling and accounting software.",
            "Associates or subcontractors engaged on a specific piece of work, and only to the extent that work requires, under equivalent confidentiality and data protection obligations.",
            "Professional advisers, such as accountants or legal advisers, where necessary.",
            "Regulators, law enforcement or other authorities where we are legally required to do so.",
          ],
        },
        {
          kind: "p",
          text: "Where a provider stores information outside the UK, we rely on an adequacy decision or on International Data Transfer Agreements and the UK Addendum to the EU Standard Contractual Clauses, together with appropriate safeguards.",
        },
      ],
    },
    {
      id: "retention",
      heading: "6. How long we keep it",
      blocks: [
        {
          kind: "p",
          text: `We keep personal information only as long as we need it. Enquiries that do not lead to work are held for up to ${legal.enquiryRetentionPeriod} and then deleted. Records connected to an engagement, including contracts and financial records, are kept for ${legal.recordRetentionPeriod} after the end of the relationship, to meet statutory and professional obligations. Professional contact details are kept while the relationship remains active and reviewed periodically.`,
        },
      ],
    },
    {
      id: "security",
      heading: "7. Security",
      blocks: [
        {
          kind: "p",
          text: "We use reputable business software with access controls, multi-factor authentication and encryption in transit and at rest. Access is limited to those who need it to do the work. No system can be guaranteed entirely secure, but we take the protection of information shared with us seriously, and we will notify you and the Information Commissioner's Office where a breach requires it.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "8. Your rights",
      blocks: [
        {
          kind: "p",
          text: "Under UK data protection law you have the right to:",
        },
        {
          kind: "list",
          items: [
            "Be told what personal information we hold about you, and to request a copy of it.",
            "Have inaccurate information corrected, or incomplete information completed.",
            "Ask us to erase information where there is no continuing reason for us to hold it.",
            "Ask us to restrict how we use it while a concern is being resolved.",
            "Object to processing carried out on the basis of legitimate interests.",
            "Request portability of information you provided to us, where that right applies.",
            "Withdraw consent at any time, where consent is the basis we rely on.",
          ],
        },
        {
          kind: "p",
          text: `To exercise any of these rights, email ${site.email}. We will respond within one month. There is no charge, unless a request is manifestly unfounded or excessive.`,
        },
      ],
    },
    {
      id: "complaints",
      heading: "9. Complaints",
      blocks: [
        {
          kind: "p",
          text: "If you are unhappy with how we have handled your personal information, please tell us first so we have the chance to put it right. You also have the right to complain to the Information Commissioner's Office, the UK supervisory authority for data protection, at ico.org.uk or on 0303 123 1113.",
        },
        {
          kind: "p",
          text: `Our ICO data protection register entry: ${legal.icoRegistration}.`,
        },
      ],
    },
    {
      id: "changes",
      heading: "10. Changes to this policy",
      blocks: [
        {
          kind: "p",
          text: "We review this policy whenever the way we work changes, and at least annually. The date at the top of the page shows when it was last updated. Material changes will be made clear on this page.",
        },
      ],
    },
  ],
  closing: {
    heading: "Questions about this policy",
    text: `Write to ${site.email} and mark your message for the attention of the data controller. We would rather answer a question early than have you wonder what happens to your information.`,
  },
};

/* ------------------------------------------------------------ terms of business */

export const termsOfBusiness: LegalDocument = {
  eyebrow: "Legal",
  title: "Terms of business",
  lead: "The standard basis on which Accendora is engaged — scope, ownership, payment and responsibility, set out before any work begins.",
  updated: legal.termsUpdated,
  intro: [
    `These terms set out the basis on which ${site.name} ("Accendora", "we", "us") provides consultancy services to a client ("you"). They apply to every engagement unless we have agreed something different in writing.`,
    `They are deliberately plain. The intention is that the shape of the work, who owns what, and what each party is responsible for are all visible before anything starts, rather than discovered afterwards.`,
  ],
  sections: [
    {
      id: "definitions",
      heading: "1. Definitions",
      blocks: [
        {
          kind: "definitions",
          items: [
            {
              term: "Proposal",
              text: "The written document describing the services, deliverables, timescales, fees and assumptions for a particular piece of work.",
            },
            {
              term: "Engagement",
              text: "The contract formed when you accept a Proposal, comprising that Proposal and these terms.",
            },
            {
              term: "Services",
              text: "The consultancy work described in the Proposal, across people and future talent, workforce and organisational capability, quality and accreditation support, and programmes and partnerships.",
            },
            {
              term: "Deliverables",
              text: "The materials, documents, frameworks, designs or reports identified in the Proposal as outputs of the Services.",
            },
          ],
        },
      ],
    },
    {
      id: "engagement",
      heading: "2. How an engagement begins",
      blocks: [
        {
          kind: "p",
          text: "Every engagement starts with a conversation and is followed by a written Proposal setting out scope, approach, deliverables, sequence, assumptions, fees and what we each need from the other. Work begins once you accept that Proposal in writing, which may be by email.",
        },
        {
          kind: "p",
          text: "Where these terms and a Proposal conflict, the Proposal takes precedence for that engagement. Your own purchase order or standard purchasing conditions do not apply unless we have expressly agreed to them in writing.",
        },
      ],
    },
    {
      id: "scope",
      heading: "3. Scope and changes",
      blocks: [
        {
          kind: "p",
          text: "We deliver what the Proposal describes. Consultancy work legitimately evolves, and if what you need changes — in scope, scale, sequence or timing — we will agree the change and any effect on fees and timescales in writing before carrying it out.",
        },
        {
          kind: "p",
          text: "Anything not set out in the Proposal is out of scope. We will say so plainly rather than absorb it silently or assume it was implied.",
        },
      ],
    },
    {
      id: "our-responsibilities",
      heading: "4. Our responsibilities",
      blocks: [
        { kind: "p", text: "We will:" },
        {
          kind: "list",
          items: [
            "Provide the Services with the reasonable skill and care expected of a professional consultancy.",
            "Use suitably experienced people, and tell you who is doing the work.",
            "Keep you informed of progress, risks and anything that changes our view of what is achievable.",
            "Comply with applicable law, including data protection, equality and safeguarding legislation relevant to the work.",
            "Raise concerns early rather than late.",
          ],
        },
        {
          kind: "note",
          text: "Accendora provides accreditation support and readiness work. We are not an awarding organisation, accrediting body or regulator, we do not award or confer accreditation, and we cannot guarantee that any external body will reach a particular decision. Our role is to help you prepare, evidence and strengthen your position.",
        },
      ],
    },
    {
      id: "your-responsibilities",
      heading: "5. Your responsibilities",
      blocks: [
        {
          kind: "p",
          text: "Consultancy depends on the client as much as the consultant. You agree to:",
        },
        {
          kind: "list",
          items: [
            "Provide accurate, complete and timely information, access to people, and any materials the work depends on.",
            "Name someone with authority to make decisions and give approvals.",
            "Make decisions and give feedback within the timescales set out in the Proposal.",
            "Hold responsibility for your own operational decisions, and for acting on our recommendations or not.",
            "Meet your own legal obligations, including those relating to employment, safeguarding, health and safety and data protection.",
          ],
        },
        {
          kind: "p",
          text: "Where delay or missing information on your side affects timescales or cost, we will tell you, and we may adjust the programme or fees accordingly.",
        },
      ],
    },
    {
      id: "safeguarding",
      heading: "6. Work involving young people",
      blocks: [
        {
          kind: "p",
          text: "Where an engagement involves young people, safeguarding is a condition of the work, not an add-on. Responsibility for the safeguarding policy, duty of care and supervision of young people remains with the organisation that holds it — normally the school, college, employer or commissioning body.",
        },
        {
          kind: "p",
          text: "Our role is to design activity that is structured, purposeful, age-appropriate and risk-assessed, and to make the safeguarding requirements explicit within programme design. Specific safeguarding arrangements, checks and responsibilities for each engagement are agreed in writing before delivery begins.",
        },
      ],
    },
    {
      id: "fees",
      heading: "7. Fees, expenses and payment",
      blocks: [
        {
          kind: "p",
          text: "Fees are set out in the Proposal and may be fixed, phased against milestones, or charged at a day rate. All fees are exclusive of VAT, which is charged where applicable.",
        },
        {
          kind: "p",
          text: "Agreed expenses — travel, accommodation, and any third-party costs — are charged at cost and only where the Proposal provides for them or you have approved them in advance.",
        },
        {
          kind: "p",
          text: `Invoices are payable within ${legal.paymentTermsDays} days of the invoice date, by bank transfer to the account shown on the invoice. We may charge interest and reasonable recovery costs on overdue sums under the ${legal.latePaymentReference}, and may suspend work on written notice where an invoice remains unpaid.`,
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "8. Intellectual property",
      blocks: [
        {
          kind: "p",
          text: "On payment in full, you own the Deliverables produced specifically for you, and may use, copy and adapt them within your organisation for the purpose they were created for.",
        },
        {
          kind: "p",
          text: "Accendora retains ownership of its own pre-existing and underlying materials — methodologies, frameworks, tools, templates and know-how, including the Discover, Design, Deliver and Develop methodology — together with anything we develop generally in the course of our practice. Where a Deliverable includes such material, you receive a non-exclusive, perpetual licence to use it as part of that Deliverable.",
        },
        {
          kind: "p",
          text: "You retain ownership of your own materials and data. Neither party may use the other's name, brand or marks publicly without written consent.",
        },
      ],
    },
    {
      id: "confidentiality",
      heading: "9. Confidentiality",
      blocks: [
        {
          kind: "p",
          text: "Each party will keep the other's confidential information confidential, use it only for the engagement, and protect it with at least reasonable care. This obligation continues after the engagement ends.",
        },
        {
          kind: "p",
          text: "It does not apply to information that is already public through no breach, was already lawfully held, is independently developed, or must be disclosed by law or by a regulator — in which case we will tell you where we are permitted to.",
        },
      ],
    },
    {
      id: "data-protection",
      heading: "10. Data protection",
      blocks: [
        {
          kind: "p",
          text: "Both parties will comply with the UK GDPR and the Data Protection Act 2018. Where we process personal data on your behalf, we do so on your documented instructions under a separate data processing agreement setting out the subject matter, duration, nature and purpose of the processing, the types of data and categories of data subject, and the security measures applied.",
        },
        {
          kind: "p",
          text: "Our handling of personal information generally is described in our privacy policy.",
        },
      ],
    },
    {
      id: "subcontracting",
      heading: "11. Associates and subcontracting",
      blocks: [
        {
          kind: "p",
          text: "We may engage associates or subcontractors to deliver part of the Services. We remain responsible to you for the work, and anyone we engage is bound by equivalent confidentiality, data protection and safeguarding obligations.",
        },
      ],
    },
    {
      id: "no-guarantee",
      heading: "12. Outcomes",
      blocks: [
        {
          kind: "p",
          text: "We will apply our judgement and experience to give you the best advice we can. We cannot guarantee particular commercial, funding, inspection, accreditation, recruitment or performance outcomes, because those depend on decisions and conditions outside our control, including your own implementation. Where a Proposal describes expected benefits, they are estimates made in good faith, not warranties.",
        },
      ],
    },
    {
      id: "liability",
      heading: "13. Liability",
      blocks: [
        {
          kind: "p",
          text: "Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any liability that cannot lawfully be limited.",
        },
        {
          kind: "p",
          text: "Subject to that, our total liability in connection with an engagement, whether in contract, tort (including negligence), breach of statutory duty or otherwise, is limited to the total fees paid and payable by you for that engagement. We are not liable for loss of profit, loss of revenue, loss of anticipated savings, loss of business or opportunity, loss or corruption of data, or any indirect or consequential loss.",
        },
        {
          kind: "p",
          text: `Accendora maintains professional indemnity insurance. Cover: ${legal.professionalIndemnity}. Details are available on request.`,
        },
      ],
    },
    {
      id: "termination",
      heading: "14. Ending an engagement",
      blocks: [
        {
          kind: "p",
          text: "Either party may end an engagement on 30 days' written notice, or immediately where the other commits a material breach that is not remedied within 14 days of written notice, or becomes insolvent.",
        },
        {
          kind: "p",
          text: "On termination you will pay for work carried out and committed costs incurred up to the termination date. Clauses concerning intellectual property, confidentiality, data protection, liability and governing law survive.",
        },
      ],
    },
    {
      id: "general",
      heading: "15. General",
      blocks: [
        {
          kind: "list",
          items: [
            "Neither party is liable for failure to perform caused by events beyond its reasonable control, provided it tells the other promptly and works to limit the effect.",
            "Neither party may assign an engagement without the other's written consent, which will not be unreasonably withheld.",
            "Nothing in these terms creates a partnership, joint venture or employment relationship between the parties.",
            "A person who is not a party to an engagement has no rights under the Contracts (Rights of Third Parties) Act 1999.",
            "If any provision is found unenforceable, the rest continues in force.",
            "The Proposal and these terms are the entire agreement between us on their subject matter.",
          ],
        },
        {
          kind: "p",
          text: `These terms and any engagement are governed by the law of ${legal.governingLaw}, and the courts of ${legal.governingLaw} have exclusive jurisdiction.`,
        },
      ],
    },
  ],
  closing: {
    heading: "Before anything begins",
    text: `Every engagement is set out in writing first — scope, ownership and sequence — so the shape of the work is visible before you commit to it. If something in these terms does not fit how your organisation contracts, say so early and we will talk it through. Write to ${site.email}.`,
  },
};
