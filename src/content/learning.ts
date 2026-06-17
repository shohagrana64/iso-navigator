// Beginner-friendly learning material for the ISO 27001 Navigator.
// Key concepts, an implementation roadmap, a glossary, and FAQs — all
// authored as typed data so the UI stays a thin rendering layer.
// Accurate to ISO/IEC 27001:2022.

import type { RoadmapPhase, GlossaryTerm, FAQItem } from "./types";

/** A short, readable section of introductory learning material. */
export interface ConceptSection {
  title: string;
  body: string;
}

export const keyConcepts: ConceptSection[] = [
  {
    title: "What ISO 27001 is",
    body:
      "ISO/IEC 27001 is the world's best-known international standard for managing information security. " +
      "Instead of telling you which exact firewall or password rule to use, it describes how to build and run a system " +
      "for keeping information safe — one that fits your organisation, your risks, and your size. " +
      "Because it is recognised globally, achieving it is a clear, trusted way to show customers and partners that you take security seriously.",
  },
  {
    title: "What an ISMS actually is",
    body:
      "At the heart of the standard is the Information Security Management System, or ISMS. " +
      "An ISMS is not a piece of software and it is not just a folder of documents — it is the combination of people, processes, and technology " +
      "that you use to protect information day to day. " +
      "Think of it as the habits and routines of your organisation: who is responsible, how decisions get made, and how you keep improving over time.",
  },
  {
    title: "Confidentiality, Integrity, Availability (the CIA triad)",
    body:
      "Information security really comes down to protecting three things, often called the CIA triad. " +
      "Confidentiality means only the right people can see the information; Integrity means the information stays accurate and is not changed without permission; " +
      "and Availability means the information is there when you actually need it. " +
      "Almost every control and decision in ISO 27001 exists to protect one or more of these three qualities.",
  },
  {
    title: "The risk-based approach",
    body:
      "ISO 27001 is built on a simple, sensible idea: you protect what matters most, based on real risk, rather than following a fixed checklist. " +
      "You look at what could go wrong, how likely it is, and how badly it would hurt — then you spend your effort where it counts. " +
      "This means a small company and a large bank can both be certified, because each one tailors its protection to its own situation. " +
      "It keeps security practical and affordable instead of overwhelming.",
  },
  {
    title: "Clauses 4–10 vs Annex A",
    body:
      "The standard has two main parts, and understanding the difference removes a lot of confusion. " +
      "Clauses 4 to 10 are the management-system requirements — the things you MUST do to run an ISMS, such as setting scope, doing a risk assessment, training people, auditing, and improving. " +
      "Annex A is a separate menu of 93 security controls (grouped into Organizational, People, Physical, and Technological themes) that you can choose from to treat your risks. " +
      "In short: the clauses are the engine, and Annex A is the toolbox you draw from.",
  },
  {
    title: "The Statement of Applicability",
    body:
      "The Statement of Applicability (SoA) is one of the most important documents in the whole standard. " +
      "It lists every one of the 93 Annex A controls and records, for each, whether you apply it, why, and how (or, if you exclude it, your justification). " +
      "Auditors return to it again and again because it ties your risks, your decisions, and your controls together in one place. " +
      "Get the SoA right and the rest of your ISMS becomes far easier to explain.",
  },
  {
    title: "How certification works",
    body:
      "Certification is carried out by an independent, accredited certification body — not by ISO itself. " +
      "It happens in two stages: a Stage 1 audit checks that your documents and ISMS are ready, and a Stage 2 audit checks that everything is actually working in practice. " +
      "Once you pass, the certificate is valid for three years, with shorter surveillance audits each year to confirm you are keeping it up. " +
      "After three years a full recertification audit renews the cycle.",
  },
  {
    title: "What ISO 27001 is NOT",
    body:
      "A few myths trip up newcomers, so let's clear them up. ISO 27001 is not purely an IT project — it touches HR, legal, suppliers, facilities, and leadership too. " +
      "It is not a one-time effort you finish and forget; it is an ongoing cycle of running and improving your ISMS. " +
      "And it is not just paperwork — documents matter, but auditors want to see real behaviour, real evidence, and real protection of information.",
  },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "leadership-and-scope",
    number: "01",
    title: "Get leadership buy-in & define scope",
    duration: "2-4 weeks",
    summary:
      "Secure genuine commitment from senior management and agree exactly what part of the business the ISMS will cover. Everything that follows depends on getting these foundations right.",
    steps: [
      "Brief senior leadership on what ISO 27001 is, the benefits, and the commitment it needs.",
      "Appoint a project sponsor and an ISMS owner/lead to drive the work.",
      "Decide the boundaries of the ISMS: which sites, teams, services, and information are in scope.",
      "Document the scope, including any exclusions and the reasons for them.",
      "Agree a realistic budget, timeline, and resources for the project.",
    ],
    relatedDocs: ["isms-scope", "roles-responsibilities"],
  },
  {
    id: "isms-foundation",
    number: "02",
    title: "Build the ISMS foundation",
    duration: "3-5 weeks",
    summary:
      "Put the core policies, objectives, and roles in place so the ISMS has a clear structure and direction before you dive into the detail.",
    steps: [
      "Draft a top-level Information Security Policy approved by leadership.",
      "Set measurable information security objectives aligned with business goals.",
      "Define security roles and responsibilities across the organisation.",
      "Identify the legal, regulatory, and contractual requirements you must meet.",
      "Agree how you will create, approve, and control documented information.",
    ],
    relatedDocs: [
      "information-security-policy",
      "information-security-objectives",
      "roles-responsibilities",
      "legal-requirements-register",
    ],
  },
  {
    id: "assets-and-classification",
    number: "03",
    title: "Asset inventory & information classification",
    duration: "2-4 weeks",
    summary:
      "Work out what information and assets you actually have and how sensitive each one is. You cannot protect what you have not identified.",
    steps: [
      "Build an inventory of information assets, systems, devices, and key suppliers.",
      "Assign an owner to each important asset.",
      "Agree a simple classification scheme (for example Public, Internal, Confidential).",
      "Classify your information assets and label them where appropriate.",
      "Define acceptable-use rules so staff know how to handle each classification.",
    ],
    relatedDocs: ["asset-inventory", "acceptable-use-policy"],
  },
  {
    id: "risk-assessment",
    number: "04",
    title: "Risk assessment",
    duration: "3-5 weeks",
    summary:
      "Identify what could go wrong with your information, and judge how likely and how serious each risk is, using a consistent method.",
    steps: [
      "Define and document your risk assessment methodology and risk criteria.",
      "Identify risks by considering threats and vulnerabilities for each asset.",
      "Assign owners to each identified risk.",
      "Assess each risk for likelihood and impact, then rank them.",
      "Record everything in a risk register and confirm your risk acceptance criteria.",
    ],
    relatedDocs: ["risk-methodology", "risk-register"],
  },
  {
    id: "risk-treatment-and-soa",
    number: "05",
    title: "Risk treatment & Statement of Applicability",
    duration: "3-5 weeks",
    summary:
      "Decide how to deal with each significant risk and capture your control decisions in the Statement of Applicability — the document auditors care about most.",
    steps: [
      "For each risk, choose a treatment: reduce, accept, avoid, or share/transfer.",
      "Select the Annex A controls needed to reduce each risk you are treating.",
      "Produce the Statement of Applicability, justifying each included and excluded control.",
      "Create a risk treatment plan with actions, owners, and target dates.",
      "Get leadership to approve any residual risks that remain.",
    ],
    relatedDocs: [
      "statement-of-applicability",
      "risk-treatment-plan",
      "risk-register",
    ],
  },
  {
    id: "implement-controls",
    number: "06",
    title: "Implement the controls",
    duration: "8-16 weeks",
    summary:
      "Put the chosen controls into practice across people, processes, and technology. This is usually the longest phase, so tackle it in priority order.",
    steps: [
      "Roll out access control rules so people only reach what they need.",
      "Establish an incident management procedure for reporting and handling problems.",
      "Prepare a business continuity plan for serious disruptions.",
      "Set supplier security expectations and review key vendors.",
      "Implement technical safeguards such as backups, logging, and malware protection.",
      "Collect evidence as you go to show each control is operating.",
    ],
    relatedDocs: [
      "access-control-policy",
      "incident-management-procedure",
      "business-continuity-plan",
      "supplier-security-policy",
    ],
  },
  {
    id: "train-and-operate",
    number: "07",
    title: "Train people & operate the ISMS",
    duration: "4-8 weeks (then ongoing)",
    summary:
      "Make sure everyone understands their part in keeping information secure, then run the ISMS for long enough to generate real records before auditing it.",
    steps: [
      "Deliver security awareness training to all staff and keep training records.",
      "Communicate key policies and where people can find them.",
      "Run the ISMS in daily operation, logging incidents and actions as they occur.",
      "Monitor your security objectives and gather metrics.",
      "Build up a body of evidence over several weeks of normal operation.",
    ],
    relatedDocs: ["training-records", "incident-management-procedure"],
  },
  {
    id: "audit-and-review",
    number: "08",
    title: "Internal audit & management review",
    duration: "3-5 weeks",
    summary:
      "Check your own ISMS before the certification body does. Find the gaps, fix them, and have leadership formally review how the ISMS is performing.",
    steps: [
      "Plan and carry out an internal audit covering the clauses and selected controls.",
      "Record findings, including any nonconformities, in an internal audit report.",
      "Log corrective actions for each finding and track them to completion.",
      "Hold a management review meeting to assess ISMS performance and resources.",
      "Document decisions and improvement actions from the management review.",
    ],
    relatedDocs: [
      "internal-audit-report",
      "corrective-action-log",
      "management-review-minutes",
    ],
  },
  {
    id: "certification-and-improvement",
    number: "09",
    title: "Certification audit & continual improvement",
    duration: "6-12 weeks (then ongoing)",
    summary:
      "Engage an accredited certification body for the two-stage audit, achieve your certificate, and then keep the ISMS alive through ongoing improvement and surveillance audits.",
    steps: [
      "Choose an accredited certification body and book the Stage 1 and Stage 2 audits.",
      "Pass the Stage 1 audit (documentation and readiness review).",
      "Pass the Stage 2 audit (the ISMS working in practice) and earn your certificate.",
      "Close out any audit findings with corrective actions.",
      "Maintain the ISMS, prepare for annual surveillance audits, and keep improving.",
    ],
    relatedDocs: [
      "statement-of-applicability",
      "corrective-action-log",
      "management-review-minutes",
    ],
  },
];

export const glossary: GlossaryTerm[] = [
  {
    term: "Accreditation",
    definition:
      "Formal recognition by a national authority that a certification body is competent to issue ISO 27001 certificates. An accredited certificate carries more weight than an unaccredited one.",
  },
  {
    term: "Annex A",
    definition:
      "The list of 93 reference security controls in ISO/IEC 27001:2022, grouped into Organizational, People, Physical, and Technological themes. You select from these to treat your risks.",
  },
  {
    term: "Asset",
    definition:
      "Anything valuable to the organisation that needs protecting, such as information, systems, hardware, software, or even people and reputation.",
  },
  {
    term: "Availability",
    definition:
      "The assurance that information and systems are accessible to authorised people whenever they are needed. One of the three goals in the CIA triad.",
  },
  {
    term: "Certification body",
    definition:
      "The independent, accredited organisation that audits your ISMS and issues the ISO 27001 certificate. ISO itself does not certify anyone.",
  },
  {
    term: "CIA triad",
    definition:
      "A shorthand for the three core goals of information security: Confidentiality, Integrity, and Availability.",
  },
  {
    term: "Confidentiality",
    definition:
      "Making sure information is only seen or used by people who are authorised to access it. One of the three goals in the CIA triad.",
  },
  {
    term: "Control",
    definition:
      "A safeguard or measure that reduces a risk — for example a policy, a procedure, encryption, or a locked door. Annex A provides a reference set of controls.",
  },
  {
    term: "Corrective action",
    definition:
      "Action taken to fix a nonconformity and stop it happening again, by addressing the underlying cause rather than just the symptom.",
  },
  {
    term: "Data controller / processor",
    definition:
      "Privacy roles often used alongside ISO 27001: a controller decides why and how personal data is processed, while a processor handles that data on the controller's behalf.",
  },
  {
    term: "Documented information",
    definition:
      "The standard's term for the documents and records an ISMS must create and keep under control — covering both policies/procedures and the evidence that they work.",
  },
  {
    term: "Impact",
    definition:
      "How serious the consequences would be if a risk actually happened. Combined with likelihood, it determines how big a risk is.",
  },
  {
    term: "Information Security Management System",
    abbr: "ISMS",
    definition:
      "The framework of people, processes, and technology an organisation uses to manage and protect its information. The thing ISO 27001 actually certifies.",
  },
  {
    term: "Integrity",
    definition:
      "Keeping information accurate, complete, and unaltered except by authorised changes. One of the three goals in the CIA triad.",
  },
  {
    term: "Internal audit",
    definition:
      "A check you run on your own ISMS, before the certification body's audit, to confirm it meets the requirements and to find issues early.",
  },
  {
    term: "Likelihood",
    definition:
      "How probable it is that a particular risk will occur. Combined with impact, it determines how big a risk is.",
  },
  {
    term: "Management review",
    definition:
      "A regular meeting where senior leadership reviews how the ISMS is performing and decides on improvements, resources, and changes.",
  },
  {
    term: "Nonconformity",
    definition:
      "A failure to meet a requirement of the standard or of your own ISMS. Auditors raise nonconformities, which you then resolve with corrective action.",
  },
  {
    term: "Personally identifiable information",
    abbr: "PII",
    definition:
      "Any information that can identify a specific individual, such as a name, email address, or ID number. Often a key category of sensitive data to protect.",
  },
  {
    term: "Residual risk",
    definition:
      "The level of risk that remains after you have applied controls to treat it. Leadership must accept any residual risk that is left.",
  },
  {
    term: "Risk appetite",
    definition:
      "The amount and type of risk an organisation is willing to accept in pursuit of its objectives. It guides which risks you treat and which you accept.",
  },
  {
    term: "Risk assessment",
    definition:
      "The process of identifying risks to your information and judging how likely and how serious each one is, so you can prioritise them.",
  },
  {
    term: "Risk treatment",
    definition:
      "Deciding what to do about each risk — typically reduce it with controls, accept it, avoid the activity, or share/transfer it (for example via insurance).",
  },
  {
    term: "Scope",
    definition:
      "The defined boundaries of your ISMS: which parts of the business, sites, services, and information it covers. Set early, it shapes the whole project.",
  },
  {
    term: "Stage 1 audit",
    definition:
      "The first part of certification, where the certification body reviews your documentation and readiness to check the ISMS is properly designed.",
  },
  {
    term: "Stage 2 audit",
    definition:
      "The second part of certification, where the auditor examines evidence that your ISMS is actually working in practice. Passing it earns your certificate.",
  },
  {
    term: "Statement of Applicability",
    abbr: "SoA",
    definition:
      "A central document listing all 93 Annex A controls and stating, for each, whether it applies, why, and how — or the justification for excluding it.",
  },
  {
    term: "Surveillance audit",
    definition:
      "A shorter audit, usually each year during the three-year certificate cycle, that confirms you are continuing to operate and maintain your ISMS.",
  },
  {
    term: "Threat",
    definition:
      "Something that could cause harm to your information or systems, such as a hacker, malware, human error, fire, or hardware failure.",
  },
  {
    term: "Vulnerability",
    definition:
      "A weakness that a threat could exploit, such as unpatched software, a weak password, or a lack of staff training.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How long does it take to get certified?",
    answer:
      "For a small or medium organisation, expect roughly 6 to 12 months from start to certificate. The exact time depends on your size, how mature your security already is, and how much time you can dedicate. Larger or more complex organisations may take longer.",
  },
  {
    question: "How much does ISO 27001 cost?",
    answer:
      "Costs vary widely, but the main ones are your internal time, any consultant or tooling fees, and the certification body's audit fees. For a small company the audit fees are often the smaller part, while the biggest investment is the time your team spends building and running the ISMS. Doing more of the work in-house lowers the cost.",
  },
  {
    question: "Do we need to implement all 93 Annex A controls?",
    answer:
      "No. Annex A is a reference menu, not a mandatory checklist. You apply only the controls that are relevant to treating your risks, and you justify any you exclude in your Statement of Applicability. Many smaller organisations exclude several controls quite legitimately.",
  },
  {
    question: "What's the difference between ISO 27001 and ISO 27002?",
    answer:
      "ISO 27001 is the certifiable standard that sets the requirements for an ISMS. ISO 27002 is a companion guidance document that gives detailed advice on how to implement the Annex A controls. You can be certified against 27001; you cannot be certified against 27002 — it is there to help you.",
  },
  {
    question: "Can a very small company get certified?",
    answer:
      "Absolutely. ISO 27001 is risk-based, so it scales down to even one- or two-person businesses. A small company simply has a smaller scope, fewer assets, and fewer risks to manage, which often makes the journey quicker. The standard is designed to fit organisations of any size.",
  },
  {
    question: "Do we need to hire a consultant?",
    answer:
      "Not necessarily. A consultant can speed things up and help you avoid common mistakes, especially if no one on your team has done it before. But many organisations achieve certification on their own using good guidance and templates. It comes down to your budget, timeline, and in-house confidence.",
  },
  {
    question: "How long is the certificate valid?",
    answer:
      "An ISO 27001 certificate is valid for three years. During that time you have annual surveillance audits to confirm you are maintaining the ISMS, and at the end of the three years a full recertification audit renews it for another cycle.",
  },
  {
    question: "What happens in surveillance audits?",
    answer:
      "Surveillance audits are shorter, lighter check-ups carried out by your certification body, usually once a year. The auditor samples parts of your ISMS to confirm it is still operating and improving, rather than reviewing everything again. They help keep you on track between full audits.",
  },
  {
    question: "Is ISO 27001 mandatory?",
    answer:
      "ISO 27001 is voluntary — no law requires it directly. However, customers, partners, and tenders increasingly ask for it, so in practice it can become a requirement for winning business. Many organisations pursue it because it opens doors and builds trust.",
  },
  {
    question: "What's the difference between being 'compliant' and 'certified'?",
    answer:
      "Being compliant means you meet the requirements of the standard. Being certified means an independent, accredited certification body has audited you and confirmed it in an official certificate. You can be compliant without being certified, but only certification gives you the formally recognised badge.",
  },
  {
    question: "Who is responsible for ISO 27001 in our organisation?",
    answer:
      "Everyone plays a part, but leadership must own it — the standard explicitly requires top management commitment. Most organisations appoint an ISMS lead or manager to coordinate the work, supported by control owners across departments. It is a team effort, not a one-person job.",
  },
  {
    question: "What's the difference between the clauses and Annex A?",
    answer:
      "Clauses 4 to 10 are the mandatory requirements for running an ISMS — scope, risk, leadership, operation, audit, and improvement. Annex A is the separate toolbox of 93 controls you choose from to treat your risks. The clauses tell you how to manage security; Annex A gives you the safeguards to apply.",
  },
  {
    question: "What is the Statement of Applicability and why does it matter?",
    answer:
      "The Statement of Applicability lists every Annex A control and records whether you apply it, why, and how, plus a justification for anything you exclude. It connects your risks to your controls in a single document, which is why auditors rely on it so heavily. A clear, honest SoA makes the rest of certification much smoother.",
  },
  {
    question: "What happens if we fail the audit?",
    answer:
      "Failing outright is rare; far more often the auditor raises nonconformities you need to address. Minor ones can usually be fixed with a corrective action plan without losing the certificate path, while major ones must be resolved before certification is granted. Treat findings as useful feedback rather than a verdict.",
  },
];
