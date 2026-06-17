import type { AnnexControl } from "./types";

export const peopleControls: AnnexControl[] = [
  {
    id: "A.6.1",
    sort: 6.01,
    theme: "People",
    title: "Screening",
    tags: ["Preventive", "Identify"],
    purpose:
      "Check that people are who they say they are, and are suitable, before they get access to information.",
    whatItMeans:
      "Before someone joins (or moves into a sensitive role), you do reasonable background checks. The depth of checking should match the risk of the role — a finance or admin role gets more thorough checks than a low-risk one. Checks must follow local privacy laws and be fair to candidates.",
    howToImplement: [
      "Decide which checks apply to which roles, based on risk.",
      "Verify identity, references, qualifications, and (where lawful) criminal record.",
      "Get the candidate's consent in writing before checking.",
      "Repeat or refresh checks when someone moves into a higher-risk role.",
      "Keep records of what was checked and the outcome.",
    ],
    evidence: [
      "Screening policy describing checks by role",
      "Completed screening records with dates",
      "Signed candidate consent forms",
      "Reference and qualification verification notes",
    ],
    template: `# Pre-Employment Screening Record

**Candidate:** [Full name]   **Role applied for:** [Job title]
**Risk level of role:** [Low / Medium / High]
**Screening requested by:** [Hiring manager]   **Date:** [YYYY-MM-DD]

## Consent
- [ ] Candidate has given written consent to screening — date: [YYYY-MM-DD]

## Checks performed
| Check | Required? | Completed | Result | Notes |
|-------|-----------|-----------|--------|-------|
| Identity verification | [Yes] | [YYYY-MM-DD] | [Pass] | [ ] |
| Right to work | [Yes] | [YYYY-MM-DD] | [Pass] | [ ] |
| Reference 1 | [Yes] | [YYYY-MM-DD] | [Pass] | [ ] |
| Reference 2 | [Yes] | [YYYY-MM-DD] | [Pass] | [ ] |
| Qualifications | [If relevant] | [YYYY-MM-DD] | [Pass] | [ ] |
| Criminal record (where lawful) | [If high risk] | [YYYY-MM-DD] | [Pass] | [ ] |

**Overall outcome:** [Cleared to proceed / On hold]
**Decision made by:** [Name]   **Date:** [YYYY-MM-DD]`,
  },
  {
    id: "A.6.2",
    sort: 6.02,
    theme: "People",
    title: "Terms and conditions of employment",
    tags: ["Preventive"],
    purpose:
      "Make security responsibilities part of the deal when someone is hired.",
    whatItMeans:
      "Employment contracts (and contractor agreements) clearly state the person's responsibilities for protecting information. This sets expectations from day one and gives you something to point to if rules are broken.",
    howToImplement: [
      "Add an information-security clause to employment and contractor contracts.",
      "Reference your key policies (acceptable use, confidentiality) in the contract.",
      "State that responsibilities continue for a period after employment ends.",
      "Have the person sign to acknowledge the terms before they start.",
    ],
    evidence: [
      "Standard contract template with security clauses",
      "Signed contracts/agreements on file",
      "Acknowledgement of acceptable-use and confidentiality terms",
    ],
    template: `# Information Security Clause (for employment contracts)

The following clause is included in the employment agreement of [Employee name].

## Your information security responsibilities
You agree to:
1. Protect the confidentiality, integrity and availability of [Company]'s information.
2. Follow [Company]'s information security policies, including the Acceptable Use Policy.
3. Use company systems and data only for authorised purposes.
4. Report any suspected security event promptly (see Incident Reporting Policy).
5. Return all company assets and information on leaving.

## Continuing obligations
Your duty to keep confidential information secret continues for [12 months] after your
employment ends, or for as long as the information remains confidential.

**Employee signature:** ____________________   **Date:** [YYYY-MM-DD]
**On behalf of [Company]:** ________________   **Date:** [YYYY-MM-DD]`,
  },
  {
    id: "A.6.3",
    sort: 6.03,
    theme: "People",
    title: "Information security awareness, education and training",
    tags: ["Preventive"],
    purpose:
      "Make sure everyone understands their security responsibilities and knows how to handle information safely.",
    whatItMeans:
      "People are the first line of defence. Staff receive regular, role-appropriate training so they can spot phishing, handle data correctly, and report problems. New starters are trained as part of onboarding, and everyone gets refreshers.",
    howToImplement: [
      "Add security awareness to new-starter onboarding.",
      "Run refresher training at least annually, plus short updates when threats change.",
      "Tailor extra training to high-risk roles (developers, finance, admins).",
      "Track who completed training and follow up with those who haven't.",
    ],
    evidence: [
      "Training plan/curriculum",
      "Attendance or completion records with dates",
      "Sample training materials",
      "Phishing-simulation results (if used)",
    ],
    template: `# Security Awareness Training Record

**Training topic:** [Annual security awareness 2025]
**Delivered by:** [Name / platform]   **Date:** [YYYY-MM-DD]

| Employee | Department | Date completed | Score / Pass |
|----------|-----------|----------------|--------------|
| [Name]   | [Dept]    | [YYYY-MM-DD]   | [Pass]       |

## Topics covered
- Recognising phishing and social engineering
- Password and MFA good practice
- Handling and classifying information
- How and when to report an incident

**Next refresher due:** [YYYY-MM-DD]`,
  },
  {
    id: "A.6.4",
    sort: 6.04,
    theme: "People",
    title: "Disciplinary process",
    tags: ["Preventive", "Corrective"],
    purpose:
      "Have a fair, known process for dealing with people who break security rules.",
    whatItMeans:
      "When someone breaks a security policy, there is a consistent and fair way to respond. Knowing that consequences exist discourages bad behaviour, and a documented process protects both the organisation and the employee by ensuring decisions are proportionate.",
    howToImplement: [
      "Document a disciplinary process that covers security policy breaches.",
      "Make sure consequences are proportionate to the severity of the breach.",
      "Tell staff the process exists (e.g. in the handbook and training).",
      "Apply the process consistently and keep confidential records.",
    ],
    evidence: [
      "Documented disciplinary process/policy",
      "Evidence staff are made aware of it",
      "Records of any actions taken (kept confidential)",
    ],
    template: `# Information Security Disciplinary Process

**Owner:** [HR / People team]   **Last reviewed:** [YYYY-MM-DD]

## Purpose
To respond fairly and consistently when a security policy is breached.

## Steps
1. **Report & record** — the breach is reported and logged confidentially.
2. **Investigate** — gather facts; give the person a chance to respond.
3. **Assess severity** — classify as [Minor / Serious / Gross misconduct].
4. **Decide outcome** — proportionate action, for example:
   - Minor: informal guidance or coaching
   - Serious: formal warning
   - Gross misconduct: dismissal, referral to authorities
5. **Document** — record the decision and reasoning.

## Fairness principles
- Treat similar cases consistently.
- Keep details confidential.
- Allow the right to be accompanied / to appeal per local law.

**Record of action (per case):** Case ref [___], Date [YYYY-MM-DD], Outcome [___]`,
  },
  {
    id: "A.6.5",
    sort: 6.05,
    theme: "People",
    title: "Responsibilities after termination or change of employment",
    tags: ["Preventive"],
    purpose:
      "Make sure security duties that should continue after someone leaves or changes roles are clear and enforced.",
    whatItMeans:
      "When someone leaves or moves to a different role, some responsibilities (like keeping information confidential) carry on. You define those lasting duties, communicate them, and make sure access and assets are handled correctly during the change.",
    howToImplement: [
      "Define which responsibilities (e.g. confidentiality) survive after departure.",
      "Communicate these duties to the person as part of off-boarding.",
      "Run an off-boarding checklist: revoke access, recover assets, remind of duties.",
      "Update access promptly when someone changes role, not just when they leave.",
    ],
    evidence: [
      "Off-boarding / role-change checklist",
      "Completed leaver records",
      "Access-revocation logs",
      "Signed acknowledgement of continuing obligations",
    ],
    template: `# Leaver / Role-Change Off-boarding Checklist

**Person:** [Name]   **Current role:** [Title]
**Type:** [Leaving / Changing role]   **Effective date:** [YYYY-MM-DD]
**Manager:** [Name]   **Processed by:** [Name]

## Access & assets
- [ ] Disable accounts / adjust access for new role — date: [YYYY-MM-DD]
- [ ] Revoke remote access / VPN / MFA tokens
- [ ] Recover laptop, phone, access cards, keys
- [ ] Reclaim or transfer files, mailboxes, shared documents
- [ ] Change shared passwords the person knew

## Continuing obligations
- [ ] Remind person of confidentiality duties that continue after leaving
- [ ] Confirm signed acknowledgement on file

**Completed on:** [YYYY-MM-DD]   **Signature:** ____________________`,
  },
  {
    id: "A.6.6",
    sort: 6.06,
    theme: "People",
    title: "Confidentiality or non-disclosure agreements",
    tags: ["Preventive"],
    purpose:
      "Get a clear, written promise that people will keep your sensitive information secret.",
    whatItMeans:
      "Staff, contractors, and outside parties who handle your confidential information sign an agreement not to share it. The agreements are kept current and reviewed so they still cover the right information and obligations.",
    howToImplement: [
      "Use a confidentiality/NDA clause or document for staff and third parties.",
      "Clearly define what counts as confidential information.",
      "State how long the duty lasts and what happens if it is broken.",
      "Review NDAs periodically and when relationships change.",
    ],
    evidence: [
      "NDA / confidentiality agreement template",
      "Signed agreements register",
      "Review records showing agreements are kept current",
    ],
    template: `# Non-Disclosure Agreement (NDA)

**Between:** [Company] and [Recipient name / organisation]
**Date:** [YYYY-MM-DD]

## 1. Confidential information
"Confidential Information" means any non-public information shared by [Company],
including [customer data, source code, pricing, business plans, credentials].

## 2. Obligations
The Recipient agrees to:
- Keep the Confidential Information secret.
- Use it only for [the agreed purpose].
- Not disclose it to others without written permission.
- Protect it with reasonable safeguards.

## 3. Duration
These obligations apply during the relationship and for [3 years] after it ends.

## 4. Return / destruction
On request, the Recipient will return or securely destroy the information.

**Recipient signature:** ____________________   **Date:** [YYYY-MM-DD]
**For [Company]:** ________________________   **Date:** [YYYY-MM-DD]`,
  },
  {
    id: "A.6.7",
    sort: 6.07,
    theme: "People",
    title: "Remote working",
    tags: ["Preventive", "Protect"],
    purpose:
      "Protect information when people work away from the office.",
    whatItMeans:
      "Working from home, cafes, or while travelling brings extra risks: unsecured networks, shoulder-surfing, lost devices. You set sensible rules and provide tools (like VPNs and device encryption) so people can work remotely without putting data at risk.",
    howToImplement: [
      "Write a simple remote-working policy covering devices, networks, and physical care.",
      "Require encryption, screen locks, and up-to-date security software on devices.",
      "Provide secure remote access (e.g. VPN or zero-trust access) and MFA.",
      "Advise on safe use of public Wi-Fi and protecting screens in public.",
      "Tell people what to do if a device is lost or stolen.",
    ],
    evidence: [
      "Remote-working policy",
      "Device configuration standards (encryption, lock, antivirus)",
      "VPN / secure access logs",
      "Acknowledgement that staff have read the policy",
    ],
    template: `# Remote Working Policy (summary)

**Owner:** [IT / Security]   **Last reviewed:** [YYYY-MM-DD]

## Who this applies to
All staff and contractors working outside [Company] premises.

## Your device must
- [ ] Have full-disk encryption enabled
- [ ] Lock automatically after [5] minutes
- [ ] Run current antivirus and OS updates
- [ ] Only be used by you (no shared family logins for work)

## When working remotely
- Connect to company systems via [VPN / approved access] with MFA.
- Avoid public Wi-Fi for sensitive work; use a hotspot or VPN if needed.
- Keep screens private — no overlooking in public spaces.
- Store paperwork securely; do not leave devices unattended.

## If a device is lost or stolen
Report it immediately to [security@company.com] / [phone] so access can be cut.

**I have read and will follow this policy.** Signature: ____________   Date: [YYYY-MM-DD]`,
  },
  {
    id: "A.6.8",
    sort: 6.08,
    theme: "People",
    title: "Information security event reporting",
    tags: ["Detective", "Detect"],
    purpose:
      "Make it easy and quick for anyone to report security problems they notice.",
    whatItMeans:
      "An information security event is anything that might be a security problem — a suspicious email, a lost USB stick, an odd system message. People need a clear, blame-free way to report these fast, so the organisation can react before small issues become big ones.",
    howToImplement: [
      "Give people a simple, well-known way to report (email, form, hotline, chat).",
      "Explain what to report and reassure them reporting is encouraged, not punished.",
      "Make sure reports reach the right people quickly and get acknowledged.",
      "Tell staff what counts as an event with everyday examples.",
    ],
    evidence: [
      "Documented reporting channel and instructions",
      "Log/register of reported events",
      "Awareness material showing the channel is communicated",
      "Examples of acknowledged reports",
    ],
    template: `# How to Report a Security Event

**See something? Say something — you won't get in trouble for reporting.**

## What to report
- A suspicious or phishing email
- A lost or stolen laptop, phone, or USB stick
- A password you think someone else may know
- Software acting strangely, or unexpected pop-ups
- Anyone asking for information they shouldn't have

## How to report
- **Email:** [security@company.com]
- **Form:** [link to reporting form]
- **Urgent / out of hours:** [phone number]

## What happens next
1. You get an acknowledgement within [1 business day].
2. The security team assesses and logs the event.
3. You may be asked a few follow-up questions.

## Quick log (for the security team)
| Ref | Date/time | Reported by | Description | Status |
|-----|-----------|-------------|-------------|--------|
| [001] | [YYYY-MM-DD HH:MM] | [Name] | [What happened] | [Open] |`,
  },
];

export const physicalControls: AnnexControl[] = [
  {
    id: "A.7.1",
    sort: 7.01,
    theme: "Physical",
    title: "Physical security perimeters",
    tags: ["Preventive", "Protect"],
    purpose:
      "Mark out and protect the physical boundaries around areas that hold information or equipment.",
    whatItMeans:
      "You define clear physical boundaries — walls, fences, locked doors, reception areas — around places where sensitive information or IT equipment lives. The stronger the assets inside, the stronger the perimeter should be.",
    howToImplement: [
      "Identify which areas need protection (server rooms, offices, storage).",
      "Define a clear perimeter for each (solid walls, secure doors, no gaps).",
      "Control all entry points and remove unnecessary ones.",
      "Match the strength of the barrier to the sensitivity inside.",
    ],
    evidence: [
      "Site/floor plan showing secure perimeters",
      "List of secure areas and their boundaries",
      "Photos or descriptions of barriers and entry points",
    ],
    template: `# Physical Security Perimeter Register

**Site:** [Office / Building name]   **Reviewed by:** [Name]   **Date:** [YYYY-MM-DD]

| Secure area | What it protects | Boundary type | Entry points | Strength rating |
|-------------|------------------|---------------|--------------|-----------------|
| [Server room] | [Servers, network gear] | [Solid walls, locked door] | [1 door] | [High] |
| [Main office] | [Staff workstations] | [Walls, glass front] | [Reception, fire exit] | [Medium] |
| [Records store] | [Paper records] | [Lockable room] | [1 door] | [Medium] |

## Checks
- [ ] No unmonitored gaps or weak points in any perimeter
- [ ] All windows/doors on ground floor secured
- [ ] Perimeter strength matches sensitivity of contents

**Next review due:** [YYYY-MM-DD]`,
  },
  {
    id: "A.7.2",
    sort: 7.02,
    theme: "Physical",
    title: "Physical entry",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure only authorised people can get into secure areas.",
    whatItMeans:
      "Entry to protected areas is controlled — using locks, key cards, sign-in, or escorts. Visitors are managed and accompanied, and you keep a record of who went where, so access is limited to those who need it.",
    howToImplement: [
      "Control entry with access cards, codes, or keys, granted on a need basis.",
      "Require visitors to sign in, wear a badge, and be escorted.",
      "Keep a log of entries to sensitive areas.",
      "Review who has access regularly and remove it when no longer needed.",
    ],
    evidence: [
      "Access-control list (who can enter where)",
      "Visitor log/book",
      "Entry logs for secure areas",
      "Records of access reviews",
    ],
    template: `# Visitor & Entry Log

**Site:** [Office name]   **Area:** [Reception / Secure area]

## Visitor sign-in
| Visitor name | Company | Host | Time in | Time out | Badge # | Escorted |
|--------------|---------|------|---------|----------|---------|----------|
| [Name] | [Company] | [Host] | [HH:MM] | [HH:MM] | [V-01] | [Yes] |

## Access rules
- Visitors must sign in, wear a visitor badge, and be escorted at all times.
- Access cards are issued only to staff who need entry for their role.
- Lost cards must be reported immediately and deactivated.

## Access review
| Person | Areas allowed | Still required? | Reviewer | Date |
|--------|---------------|-----------------|----------|------|
| [Name] | [Server room] | [Yes / Remove] | [Name] | [YYYY-MM-DD] |`,
  },
  {
    id: "A.7.3",
    sort: 7.03,
    theme: "Physical",
    title: "Securing offices, rooms and facilities",
    tags: ["Preventive", "Protect"],
    purpose:
      "Design and secure rooms and offices so information inside stays protected.",
    whatItMeans:
      "Beyond the outer perimeter, individual offices and rooms are set up to protect what's inside. That means locking sensitive rooms, not advertising what they contain, and keeping confidential work out of sight from passers-by and visitors.",
    howToImplement: [
      "Lock rooms that hold sensitive information or equipment.",
      "Avoid signage that reveals what sensitive rooms contain.",
      "Position screens and desks so confidential work isn't visible to visitors.",
      "Keep directories and floor plans of secure areas out of public view.",
    ],
    evidence: [
      "Room security checklist",
      "Photos showing locks and screening measures",
      "Policy on signage and confidential room handling",
    ],
    template: `# Office & Room Security Checklist

**Room:** [Name / number]   **Checked by:** [Name]   **Date:** [YYYY-MM-DD]

## Securing the room
- [ ] Door is lockable and locked when unattended
- [ ] No signage revealing sensitive contents (e.g. "Server Room")
- [ ] Windows are secured / screened where overlooking is possible
- [ ] Screens and whiteboards not visible from outside or to visitors
- [ ] Sensitive equipment not visible through windows

## Access
- [ ] Only authorised staff have keys / codes
- [ ] Spare keys held securely by [facilities]

## Notes
[Any issues found and actions taken]

**Next check due:** [YYYY-MM-DD]`,
  },
  {
    id: "A.7.4",
    sort: 7.04,
    theme: "Physical",
    title: "Physical security monitoring",
    tags: ["Detective", "Detect"],
    purpose:
      "Watch your premises so unauthorised physical access is spotted quickly.",
    whatItMeans:
      "You use tools like alarms, CCTV, guards, or motion sensors to keep an eye on premises and secure areas. The aim is to detect and respond to break-ins or unauthorised entry, while respecting privacy and the law.",
    howToImplement: [
      "Install monitoring appropriate to the risk (alarms, CCTV, sensors, guards).",
      "Ensure monitoring covers entry points and sensitive areas.",
      "Set up alerts so someone is notified when something is detected.",
      "Protect and retain footage/logs securely, in line with privacy law.",
      "Test the systems periodically to confirm they work.",
    ],
    evidence: [
      "List of monitoring systems and coverage",
      "Alarm/CCTV maintenance and test records",
      "Incident/alert logs",
      "Privacy notice covering CCTV use",
    ],
    template: `# Physical Monitoring Register

**Site:** [Office name]   **Owner:** [Facilities / Security]   **Date:** [YYYY-MM-DD]

| System | Area covered | Provider | Last tested | Working? |
|--------|--------------|----------|-------------|----------|
| [Intruder alarm] | [Whole building] | [Vendor] | [YYYY-MM-DD] | [Yes] |
| [CCTV] | [Entrances, server room] | [Vendor] | [YYYY-MM-DD] | [Yes] |
| [Door sensors] | [Secure areas] | [Vendor] | [YYYY-MM-DD] | [Yes] |

## Alerting
- Alerts are sent to [name / monitoring company / phone].
- Out-of-hours response: [who responds and how].

## Footage handling
- CCTV footage retained for [30 days], stored securely, access limited to [roles].
- Use is covered by the [CCTV / privacy notice].

**Next test due:** [YYYY-MM-DD]`,
  },
  {
    id: "A.7.5",
    sort: 7.05,
    theme: "Physical",
    title: "Protecting against physical and environmental threats",
    tags: ["Preventive", "Protect"],
    purpose:
      "Guard against natural and accidental threats like fire, flood, and power loss.",
    whatItMeans:
      "Information and equipment can be damaged by fire, flooding, extreme heat, storms, or even nearby hazards. You assess these threats for your location and put in protections — smoke detectors, fire suppression, flood awareness, and so on.",
    howToImplement: [
      "Identify environmental threats relevant to your location.",
      "Install protections: smoke/fire detection, suppression, leak sensors.",
      "Keep equipment away from obvious hazards (windows, water pipes, basements).",
      "Maintain detection and suppression systems and test them.",
      "Plan how you'd recover if a threat materialised.",
    ],
    evidence: [
      "Environmental threat assessment",
      "Fire/flood protection inventory",
      "Test and maintenance records for detection systems",
      "Photos of protective measures",
    ],
    template: `# Environmental Threat Assessment

**Site:** [Office name]   **Assessed by:** [Name]   **Date:** [YYYY-MM-DD]

| Threat | Likelihood | Impact | Protection in place | Action needed |
|--------|-----------|--------|---------------------|---------------|
| [Fire] | [Medium] | [High] | [Smoke detectors, extinguishers] | [Test quarterly] |
| [Flood / leak] | [Low] | [High] | [Leak sensor, raised equipment] | [None] |
| [Power loss] | [Medium] | [Medium] | [UPS for servers] | [Add generator?] |
| [Extreme heat] | [Low] | [Medium] | [Server room A/C] | [Add temp alarm] |

## Maintenance
- Fire detection tested: [YYYY-MM-DD]   Next due: [YYYY-MM-DD]
- Suppression / extinguishers serviced: [YYYY-MM-DD]

**Next assessment due:** [YYYY-MM-DD]`,
  },
  {
    id: "A.7.6",
    sort: 7.06,
    theme: "Physical",
    title: "Working in secure areas",
    tags: ["Preventive", "Protect"],
    purpose:
      "Set rules for how people should behave inside highly sensitive areas.",
    whatItMeans:
      "Some areas (like a data centre or a room handling very sensitive data) need extra rules for what can happen inside — for example, no photography, no unsupervised visitors, and not leaving the area unattended when it's vacant.",
    howToImplement: [
      "Define which areas count as 'secure areas' needing special rules.",
      "Set behaviour rules: e.g. no cameras/phones, no lone working if required.",
      "Restrict who knows about and can enter these areas.",
      "Lock and check secure areas when empty.",
    ],
    evidence: [
      "Secure-area rules / signage",
      "List of secure areas and authorised people",
      "Records confirming rules are communicated",
    ],
    template: `# Secure Area Working Rules

**Secure area:** [Data centre / Sensitive lab]
**Owner:** [Name]   **Last reviewed:** [YYYY-MM-DD]

## Rules for anyone inside this area
- [ ] No photography or recording without written approval
- [ ] Personal phones/cameras [must be left outside / kept in pockets]
- [ ] No unescorted visitors
- [ ] Do not prop open or disable doors and locks
- [ ] The area must be locked and checked when empty
- [ ] Report anything unusual to [security contact]

## Who may enter
| Name | Role | Reason | Authorised by |
|------|------|--------|---------------|
| [Name] | [Role] | [Maintenance] | [Manager] |

## Acknowledgement
Everyone working here confirms they have read these rules.
Signature: ____________________   Date: [YYYY-MM-DD]`,
  },
  {
    id: "A.7.7",
    sort: 7.07,
    theme: "Physical",
    title: "Clear desk and clear screen",
    tags: ["Preventive", "Protect"],
    purpose:
      "Stop sensitive information being left on view on desks or screens.",
    whatItMeans:
      "When people step away, sensitive papers and unlocked screens are easy targets. A clear-desk and clear-screen rule means tidying away documents and locking screens, so passers-by, cleaners, or visitors can't read confidential information.",
    howToImplement: [
      "Ask staff to lock screens whenever they step away.",
      "Set devices to auto-lock after a short idle period.",
      "Store sensitive papers in locked drawers or cabinets when not in use.",
      "Clear printouts from shared printers promptly.",
      "Run occasional spot-checks and gentle reminders.",
    ],
    evidence: [
      "Clear-desk / clear-screen policy",
      "Auto-lock configuration on devices",
      "Spot-check / walkthrough records",
      "Awareness reminders to staff",
    ],
    template: `# Clear Desk & Clear Screen Policy

**Owner:** [Security]   **Last reviewed:** [YYYY-MM-DD]

## When you leave your desk
- [ ] Lock your screen (Windows: Win+L, Mac: Ctrl+Cmd+Q)
- [ ] Put away papers with sensitive information
- [ ] Don't leave passwords or notes on view

## At the end of the day
- [ ] Lock sensitive documents in a drawer or cabinet
- [ ] Log off or shut down your computer
- [ ] Clear whiteboards of sensitive notes
- [ ] Collect printouts and shred what isn't needed

## Settings
- Screens auto-lock after [5] minutes of inactivity.

## Spot-check log
| Date | Area | Issues found | Actioned |
|------|------|--------------|----------|
| [YYYY-MM-DD] | [Floor 2] | [2 unlocked screens] | [Reminded staff] |`,
  },
  {
    id: "A.7.8",
    sort: 7.08,
    theme: "Physical",
    title: "Equipment siting and protection",
    tags: ["Preventive", "Protect"],
    purpose:
      "Place and protect equipment so it's safe from damage, theft, and prying eyes.",
    whatItMeans:
      "Where you put equipment matters. Servers shouldn't sit where they can overheat, flood, or be easily stolen; screens shouldn't face windows. Thoughtful siting plus basic protections (locks, surge protection) keeps equipment safe.",
    howToImplement: [
      "Site servers and key equipment in secure, climate-controlled spaces.",
      "Keep equipment away from water, heat sources, and public view.",
      "Use cable locks or secure mounts for theft-prone devices.",
      "Protect against power problems with surge protectors / UPS.",
    ],
    evidence: [
      "Equipment siting guidelines",
      "Asset list with locations",
      "Photos showing protective measures",
      "UPS / surge protection records",
    ],
    template: `# Equipment Siting Checklist

**Equipment:** [Server / Workstation / NAS]
**Location:** [Room / area]   **Checked by:** [Name]   **Date:** [YYYY-MM-DD]

## Placement checks
- [ ] Away from windows, water pipes, and heat sources
- [ ] In a ventilated / climate-controlled space (for servers)
- [ ] Not in direct view of the public
- [ ] Stable surface or proper rack mounting

## Protection
- [ ] Physically secured (locked rack / cable lock) where theft-prone
- [ ] Connected via surge protector or UPS
- [ ] Restricted access to the area

## Notes
[Issues found and actions taken]

**Next check due:** [YYYY-MM-DD]`,
  },
  {
    id: "A.7.9",
    sort: 7.09,
    theme: "Physical",
    title: "Security of assets off-premises",
    tags: ["Preventive", "Protect"],
    purpose:
      "Protect company devices and information when they're used outside your premises.",
    whatItMeans:
      "Laptops, phones, and other assets taken off-site face extra risks of loss and theft. You set rules and protections — encryption, not leaving devices in cars, tracking what's taken out — to keep them and their data safe.",
    howToImplement: [
      "Keep a record of assets that go off-site and who has them.",
      "Require encryption and screen locks on portable devices.",
      "Give simple rules: never leave devices in cars or unattended in public.",
      "Enable remote-wipe / find-my-device where possible.",
      "Have a clear process to report lost or stolen assets.",
    ],
    evidence: [
      "Off-site asset register / sign-out log",
      "Device encryption configuration",
      "Policy for handling assets off-premises",
      "Records of remote-wipe capability",
    ],
    template: `# Off-Premises Asset Register

**Owner:** [IT]   **Last updated:** [YYYY-MM-DD]

| Asset | Asset tag | Assigned to | Date out | Expected return | Encrypted | Remote-wipe |
|-------|-----------|-------------|----------|-----------------|-----------|-------------|
| [Laptop] | [LT-014] | [Name] | [YYYY-MM-DD] | [Permanent] | [Yes] | [Yes] |
| [Phone]  | [PH-007] | [Name] | [YYYY-MM-DD] | [Permanent] | [Yes] | [Yes] |

## Rules for off-site use
- Never leave devices visible in a car or unattended in public.
- Keep devices encrypted and screen-locked.
- Report loss or theft immediately to [security contact].

## Lost / stolen process
1. Report to [security@company.com] / [phone] without delay.
2. IT triggers remote wipe and revokes access.
3. Incident is logged and, if needed, reported to authorities.`,
  },
  {
    id: "A.7.10",
    sort: 7.10,
    theme: "Physical",
    title: "Storage media",
    tags: ["Preventive", "Protect"],
    purpose:
      "Manage storage media (USB sticks, disks, tapes) safely throughout their life.",
    whatItMeans:
      "Removable and physical storage media can hold lots of data and are easily lost or copied. You control how media is acquired, used, transported, stored, and eventually disposed of, so the information on it stays protected.",
    howToImplement: [
      "Decide whether removable media is allowed, and for what.",
      "Encrypt data on portable media.",
      "Keep a record of media holding sensitive data and where it is.",
      "Transport media securely (sealed, tracked) when it must move.",
      "Securely erase or destroy media before disposal or reuse.",
    ],
    evidence: [
      "Removable media policy",
      "Media inventory / register",
      "Encryption records for media",
      "Secure disposal records for media",
    ],
    template: `# Storage Media Register

**Owner:** [IT / Security]   **Last updated:** [YYYY-MM-DD]

| Media | ID | Contents | Encrypted | Location / holder | Status |
|-------|----|----------|-----------|-------------------|--------|
| [USB drive] | [M-01] | [Backup of X] | [Yes] | [Safe, Room 2] | [In use] |
| [Backup tape] | [M-02] | [Monthly backup] | [Yes] | [Offsite store] | [Stored] |

## Rules
- Only [approved] removable media may be used; personal USB sticks are [not allowed].
- All sensitive data on media must be encrypted.
- Media in transit must be [sealed and tracked].

## Disposal
When no longer needed, media is securely [wiped / shredded] and logged below.
| Media ID | Method | Date | Performed by |
|----------|--------|------|--------------|
| [M-03] | [Physical shred] | [YYYY-MM-DD] | [Name] |`,
  },
  {
    id: "A.7.11",
    sort: 7.11,
    theme: "Physical",
    title: "Supporting utilities",
    tags: ["Preventive", "Protect"],
    purpose:
      "Keep the power, cooling, and other utilities your systems depend on reliable.",
    whatItMeans:
      "Equipment needs power, and often cooling, to keep running. If these utilities fail, systems go down and data can be lost. You protect against utility failures with things like UPS units, backup power, and temperature monitoring.",
    howToImplement: [
      "Identify utilities your key systems rely on (power, cooling, network).",
      "Use UPS and, if needed, a generator to ride out power cuts.",
      "Monitor temperature and humidity in equipment rooms.",
      "Inspect and test utility protections regularly.",
    ],
    evidence: [
      "List of supporting utilities and protections",
      "UPS / generator test records",
      "Temperature/humidity monitoring logs",
      "Maintenance contracts",
    ],
    template: `# Supporting Utilities Register

**Site:** [Office name]   **Owner:** [Facilities / IT]   **Date:** [YYYY-MM-DD]

| Utility | Supports | Protection | Last tested | Status |
|---------|----------|------------|-------------|--------|
| [Mains power] | [Servers] | [UPS + generator] | [YYYY-MM-DD] | [OK] |
| [Cooling / A/C] | [Server room] | [Redundant unit] | [YYYY-MM-DD] | [OK] |
| [Internet] | [All systems] | [Second provider] | [YYYY-MM-DD] | [OK] |

## Monitoring
- Server room temperature alarm set at [27 deg C].
- UPS battery health checked [quarterly].

## Maintenance
- Generator serviced: [YYYY-MM-DD]   Next due: [YYYY-MM-DD]
- UPS tested under load: [YYYY-MM-DD]   Next due: [YYYY-MM-DD]`,
  },
  {
    id: "A.7.12",
    sort: 7.12,
    theme: "Physical",
    title: "Cabling security",
    tags: ["Preventive", "Protect"],
    purpose:
      "Protect the power and data cables that connect and run your systems.",
    whatItMeans:
      "Cables carrying power and data can be damaged, tapped into, or accidentally unplugged. Routing and protecting them well — and labelling them clearly — keeps systems running and information safe from interception.",
    howToImplement: [
      "Route cables away from public areas and through protected conduits.",
      "Keep power and data cables separated to avoid interference.",
      "Label cables clearly so they're not unplugged by mistake.",
      "Secure patch panels and comms rooms against tampering.",
    ],
    evidence: [
      "Cabling layout / diagram",
      "Photos of protected and labelled cabling",
      "Comms room access controls",
      "Inspection records",
    ],
    template: `# Cabling Security Checklist

**Site / area:** [Office / Comms room]   **Checked by:** [Name]   **Date:** [YYYY-MM-DD]

## Protection
- [ ] Cables routed away from public access / walkways
- [ ] Cables in conduits or trunking where exposed
- [ ] Power and data cables separated to reduce interference
- [ ] No visible damage, fraying, or strain

## Management
- [ ] Cables and ports clearly labelled
- [ ] Patch panels tidy and documented
- [ ] Comms room / cabinet locked, access limited to [roles]

## Notes
[Issues found and actions taken]

**Next inspection due:** [YYYY-MM-DD]`,
  },
  {
    id: "A.7.13",
    sort: 7.13,
    theme: "Physical",
    title: "Equipment maintenance",
    tags: ["Preventive", "Protect"],
    purpose:
      "Keep equipment properly maintained so it stays reliable and secure.",
    whatItMeans:
      "Well-maintained equipment is less likely to fail and lose data. Maintenance must be done by trusted people, following the maker's guidance, and with care that sensitive data isn't exposed during repairs (especially off-site repairs).",
    howToImplement: [
      "Maintain equipment per the manufacturer's recommended schedule.",
      "Use only authorised, trusted maintenance staff or vendors.",
      "Remove or protect sensitive data before equipment goes off-site for repair.",
      "Keep records of maintenance and any faults found.",
      "Check equipment works correctly after maintenance.",
    ],
    evidence: [
      "Maintenance schedule",
      "Maintenance logs / records",
      "Approved maintenance vendor list",
      "Records of data handling before off-site repair",
    ],
    template: `# Equipment Maintenance Log

**Equipment:** [Server / Laptop / Printer]   **Asset tag:** [Tag]
**Maintained by:** [In-house / Vendor name]   **Date:** [YYYY-MM-DD]

| Date | Maintenance type | Performed by | Authorised? | Notes |
|------|------------------|--------------|-------------|-------|
| [YYYY-MM-DD] | [Scheduled service] | [Name / Vendor] | [Yes] | [ ] |

## Before off-site repair
- [ ] Sensitive data backed up
- [ ] Sensitive data removed or device encrypted
- [ ] Vendor under confidentiality agreement

## After maintenance
- [ ] Equipment tested and working
- [ ] Access controls / settings restored

**Next scheduled maintenance:** [YYYY-MM-DD]`,
  },
  {
    id: "A.7.14",
    sort: 7.14,
    theme: "Physical",
    title: "Secure disposal or re-use of equipment",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure no sensitive data is left behind when equipment is thrown away or reused.",
    whatItMeans:
      "Old laptops, phones, drives, and even printers can still hold data. Before disposing of or reusing any equipment, you must securely erase or destroy the data on it, so it can't be recovered by the next owner.",
    howToImplement: [
      "Identify any storage in equipment before disposal or reuse.",
      "Securely wipe data, or physically destroy media that can't be wiped.",
      "Use a trusted disposal vendor and get certificates of destruction.",
      "Record what was disposed of, how, and when.",
      "Remove asset tags and licences before equipment leaves.",
    ],
    evidence: [
      "Secure disposal / reuse policy",
      "Disposal log with method and date",
      "Certificates of destruction",
      "Records of data wiping (tool, confirmation)",
    ],
    template: `# Equipment Disposal & Re-use Record

**Owner:** [IT]   **Date:** [YYYY-MM-DD]

| Asset | Tag | Storage type | Action | Method | Performed by | Cert # |
|-------|-----|--------------|--------|--------|--------------|--------|
| [Laptop] | [LT-009] | [SSD] | [Disposed] | [Secure wipe + shred] | [Name] | [C-123] |
| [Phone]  | [PH-004] | [Internal] | [Reused] | [Factory reset + wipe] | [Name] | [N/A] |

## Steps before disposal or re-use
- [ ] Identify all storage in the device
- [ ] Back up anything still needed
- [ ] Securely wipe or destroy data (no recoverable data left)
- [ ] Remove asset tags and reclaim software licences
- [ ] Obtain certificate of destruction (for disposal via vendor)

**Disposal vendor:** [Name]   **Verified by:** [Name]   **Date:** [YYYY-MM-DD]`,
  },
];
