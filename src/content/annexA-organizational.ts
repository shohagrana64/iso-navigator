import type { AnnexControl } from "./types";

export const organizationalControls: AnnexControl[] = [
  {
    id: "A.5.1",
    sort: 5.01,
    theme: "Organizational",
    title: "Policies for information security",
    tags: ["Preventive", "Governance"],
    purpose:
      "Ensure the organisation has a clear, approved set of security rules that everyone follows, and that those rules are kept current.",
    whatItMeans:
      "Leadership writes down how the organisation protects information: a short top-level policy plus supporting topic policies (access, acceptable use, and so on). These are formally approved, shared with everyone, and reviewed on a regular schedule.",
    howToImplement: [
      "Draft a concise top-level Information Security Policy and have senior management sign it off.",
      "Add supporting topic-specific policies (e.g. access control, acceptable use, supplier security).",
      "Publish them somewhere staff can easily find, and require each person to acknowledge them.",
      "Set a review cycle — at least once a year, or after any major change.",
    ],
    evidence: [
      "Approved, version-controlled policy documents",
      "Record of management approval (date, signatory)",
      "Evidence staff have read and acknowledged the policies",
      "Review/change history showing the policies are kept up to date",
    ],
    template: `# Information Security Policy (Top-Level)

**Document owner:** [CISO / IT Manager]
**Approved by:** [CEO / Senior Management]  **Date:** [YYYY-MM-DD]
**Version:** [1.0]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
[Company] is committed to protecting the confidentiality, integrity and
availability of the information it holds. This policy sets the direction for
how we manage information security.

## 2. Scope
This policy applies to all employees, contractors and third parties who access
[Company] information or systems.

## 3. Policy statements
- We protect information based on its value and sensitivity.
- We comply with all relevant legal, regulatory and contractual requirements.
- Every person is responsible for reporting security incidents promptly.
- Access to information is granted on a least-privilege, need-to-know basis.

## 4. Responsibilities
[Senior management] owns this policy. [Role] maintains supporting policies.

## 5. Review
This policy is reviewed at least annually and after significant change.`,
  },
  {
    id: "A.5.2",
    sort: 5.02,
    theme: "Organizational",
    title: "Information security roles and responsibilities",
    tags: ["Preventive", "Governance"],
    purpose:
      "Make sure everyone knows who is responsible for which part of information security, so nothing falls through the cracks.",
    whatItMeans:
      "Security tasks (running the ISMS, granting access, handling incidents, managing risks) are assigned to named roles or people. When responsibilities are written down and understood, work gets done and nobody assumes someone else is handling it.",
    howToImplement: [
      "List the key security activities your organisation needs to perform.",
      "Assign each activity to a specific role or named person.",
      "Document the responsibilities in role descriptions or a RACI-style matrix.",
      "Communicate the assignments and update them when people or roles change.",
    ],
    evidence: [
      "A roles and responsibilities matrix or document",
      "Job descriptions that mention security duties",
      "Records showing the assignments are reviewed and kept current",
      "Staff who can describe their own security responsibilities",
    ],
    template: `# Information Security Roles & Responsibilities

**Owner:** [ISMS Manager]   **Version:** [1.0]   **Date:** [YYYY-MM-DD]

| Activity                         | Responsible role        | Backup        |
|----------------------------------|-------------------------|---------------|
| Overall ISMS oversight           | [CISO / IT Manager]     | [Deputy]      |
| Risk assessment & treatment      | [Risk Owner]            | [Role]        |
| Granting / revoking access       | [System Admin]          | [Role]        |
| Incident response coordination   | [Incident Manager]      | [Role]        |
| Security awareness training      | [HR / Security Lead]    | [Role]        |
| Supplier security management     | [Procurement Lead]      | [Role]        |

## Notes
- Each role above has the authority and resources needed to do the task.
- Responsibilities are reviewed at least annually and on any org change.
- Questions about ownership go to [ISMS Manager].`,
  },
  {
    id: "A.5.3",
    sort: 5.03,
    theme: "Organizational",
    title: "Segregation of duties",
    tags: ["Preventive", "Governance"],
    purpose:
      "Split sensitive tasks between different people so no single person can misuse or accidentally break things without being noticed.",
    whatItMeans:
      "Some actions are risky if one person controls the whole process — for example requesting, approving and granting their own access. Splitting these steps between people (or adding an approval) reduces the chance of fraud or serious mistakes.",
    howToImplement: [
      "Identify activities where one person doing everything would be risky.",
      "Separate the request, approval and execution steps between different people.",
      "Where the team is too small to split duties, add a compensating control such as management review or logging.",
      "Document the rules and check them periodically.",
    ],
    evidence: [
      "A list of conflicting duties that must be kept separate",
      "Approval workflows showing different people at each step",
      "Records of compensating controls where full separation isn't possible",
      "Periodic review of access to spot duty conflicts",
    ],
    template: `# Segregation of Duties Matrix

**Owner:** [ISMS Manager]   **Date:** [YYYY-MM-DD]

## Conflicting duties (must not be held by the same person)
| Duty A                   | Conflicts with Duty B          |
|--------------------------|--------------------------------|
| Request access           | Approve access                 |
| Approve a payment        | Make / release the payment     |
| Develop code             | Approve deployment to live     |
| Administer a system      | Review that system's audit logs|

## Where separation is not possible (small team)
| Conflict                 | Compensating control           |
|--------------------------|--------------------------------|
| [Conflict]               | [e.g. monthly manager review]  |

## Review
Access and duty conflicts are reviewed [quarterly] by [role].`,
  },
  {
    id: "A.5.4",
    sort: 5.04,
    theme: "Organizational",
    title: "Management responsibilities",
    tags: ["Preventive", "Governance"],
    purpose:
      "Ensure managers actively require and support their staff to apply security in line with the organisation's policies.",
    whatItMeans:
      "Security only works if managers back it up. This control asks leaders to set expectations, give staff what they need (time, tools, training), and lead by example so security becomes part of everyday work rather than an afterthought.",
    howToImplement: [
      "Make security expectations part of onboarding and ongoing line management.",
      "Brief managers on the policies their teams must follow.",
      "Ensure managers provide staff with the training and tools to comply.",
      "Have managers check that their teams actually follow the rules.",
    ],
    evidence: [
      "Onboarding material covering security expectations",
      "Manager briefings or talking points on security",
      "Records of training provided to staff",
      "Evidence managers follow up on non-compliance",
    ],
    template: `# Manager's Security Responsibilities Checklist

**For:** [Team / Department]   **Manager:** [Name]   **Date:** [YYYY-MM-DD]

When a new team member joins, I will:
- [ ] Ensure they read and acknowledge the Information Security Policy
- [ ] Confirm they have completed security awareness training
- [ ] Request only the access they need for their role

Ongoing, I will:
- [ ] Set clear security expectations and lead by example
- [ ] Make sure my team has the time and tools to follow the rules
- [ ] Remind the team how and when to report incidents
- [ ] Review my team's access at least [quarterly]
- [ ] Address any non-compliance promptly and fairly

When someone leaves or changes role:
- [ ] Notify [IT] so access is updated or removed
- [ ] Ensure assets are returned (see Return of Assets)

Signed: [Manager]   Reviewed by: [HR / ISMS Manager]`,
  },
  {
    id: "A.5.5",
    sort: 5.05,
    theme: "Organizational",
    title: "Contact with authorities",
    tags: ["Corrective", "Respond", "Governance"],
    purpose:
      "Know who to contact among relevant authorities, and how, before you actually need them in an emergency.",
    whatItMeans:
      "If you have a serious breach, legal demand or regulatory obligation, you may need to contact the police, a data protection regulator or other authorities. Having the right contacts ready in advance saves precious time during an incident.",
    howToImplement: [
      "Identify which authorities are relevant to you (regulators, law enforcement, CERTs).",
      "Record the correct contact points and how to reach them quickly.",
      "Define when and who decides to contact each authority.",
      "Keep the list current and store it where responders can reach it during an incident.",
    ],
    evidence: [
      "A maintained list of relevant authorities and contact details",
      "Procedure stating who contacts authorities and when",
      "Records of any past contact (e.g. breach notifications)",
      "Review history keeping the contacts up to date",
    ],
    template: `# Contact with Authorities Register

**Owner:** [Incident Manager]   **Last reviewed:** [YYYY-MM-DD]

| Authority                       | When to contact            | Contact method        | Who decides     |
|---------------------------------|----------------------------|-----------------------|-----------------|
| [Data protection regulator]     | Personal data breach       | [Hotline / portal]    | [DPO / Legal]   |
| [National CERT / cyber agency]  | Major cyber incident       | [Email / phone]       | [CISO]          |
| [Local police / cybercrime]     | Suspected crime            | [Phone]               | [CISO / Legal]  |
| [Industry regulator]            | [Sector-specific event]    | [Method]              | [Compliance]    |

## Notification deadlines to remember
- [Regulator]: notify within [72 hours] of becoming aware.

## Notes
- This register is reviewed at least [annually] and after any incident.
- Keep an offline copy in case systems are unavailable.`,
  },
  {
    id: "A.5.6",
    sort: 5.06,
    theme: "Organizational",
    title: "Contact with special interest groups",
    tags: ["Preventive", "Identify", "Governance"],
    purpose:
      "Stay connected with security communities and professional groups so you keep up with threats and good practice.",
    whatItMeans:
      "No organisation can know everything alone. Joining security forums, vendor advisory lists, or professional bodies helps you learn about new threats, fixes and techniques early — and gives you people to ask for advice.",
    howToImplement: [
      "Identify relevant groups: industry forums, security associations, vendor advisories, local CERTs.",
      "Subscribe or join, and assign someone to monitor the updates.",
      "Feed useful information into your risk and patching processes.",
      "Review your memberships periodically to keep them relevant.",
    ],
    evidence: [
      "A list of memberships and subscriptions",
      "Records showing advisories are received and acted on",
      "Named person responsible for monitoring each source",
      "Examples of information used to improve security",
    ],
    template: `# Special Interest Groups & Subscriptions Register

**Owner:** [Security Lead]   **Last reviewed:** [YYYY-MM-DD]

| Group / source                 | Type            | Who monitors    | How it's used               |
|--------------------------------|-----------------|-----------------|-----------------------------|
| [National CERT advisories]     | Threat alerts   | [Security Lead] | Feeds patching decisions    |
| [Vendor security bulletins]    | Patch notices   | [IT Admin]      | Triggers updates            |
| [Industry ISAC / forum]        | Peer sharing    | [CISO]          | Benchmarking & advice       |
| [Professional body, e.g. (ISC)2]| Best practice  | [Security Lead] | Training & guidance         |

## Notes
- New advisories rated [High] or above are reviewed within [1 business day].
- Memberships are reviewed [annually] for value and relevance.`,
  },
  {
    id: "A.5.7",
    sort: 5.07,
    theme: "Organizational",
    title: "Threat intelligence",
    tags: ["Preventive", "Detective", "Identify", "Detect"],
    purpose:
      "Collect and use information about current threats so you can defend against them before they hit you.",
    whatItMeans:
      "Threat intelligence is simply knowing what attackers are doing — which scams, malware or vulnerabilities are circulating. By gathering this from trusted sources and acting on it, you can fix weaknesses and warn staff ahead of time.",
    howToImplement: [
      "Choose reliable threat sources (CERTs, vendors, news, industry groups).",
      "Assign someone to review them regularly and judge what's relevant to you.",
      "Turn relevant findings into action: patch, block, alert staff, or update controls.",
      "Record decisions so you can show the intelligence is being used.",
    ],
    evidence: [
      "List of threat intelligence sources used",
      "A log of threats reviewed and actions taken",
      "Evidence of changes made in response (patches, rules, warnings)",
      "Defined frequency for reviewing threat information",
    ],
    template: `# Threat Intelligence Log

**Owner:** [Security Lead]   **Review frequency:** [Weekly]

| Date       | Source            | Threat summary                  | Relevant? | Action taken                  | By      |
|------------|-------------------|---------------------------------|-----------|-------------------------------|---------|
| [YYYY-MM-DD]| [CERT alert]     | [New phishing campaign]         | Yes       | [Staff warning + email filter]| [Name]  |
| [YYYY-MM-DD]| [Vendor bulletin]| [Critical CVE in [product]]     | Yes       | [Patched within 48h]          | [Name]  |
| [YYYY-MM-DD]| [News]           | [Ransomware trend]              | Maybe     | [Reviewed backups]            | [Name]  |

## Sources monitored
- [National CERT], [Vendor advisories], [Industry ISAC], [Trusted news]

## Escalation
Threats rated [Critical] are escalated to [CISO] immediately.`,
  },
  {
    id: "A.5.8",
    sort: 5.08,
    theme: "Organizational",
    title: "Information security in project management",
    tags: ["Preventive", "Identify", "Protect"],
    purpose:
      "Build security into projects from the start rather than bolting it on at the end.",
    whatItMeans:
      "Whenever you run a project — a new system, app, or business change — security should be considered alongside cost and time. Thinking about risks and requirements early is far cheaper and safer than fixing problems after launch.",
    howToImplement: [
      "Add a security checkpoint to your standard project process.",
      "Identify information security risks and requirements early in each project.",
      "Treat those risks as the project progresses, with sign-off before go-live.",
      "Review security again at project close to capture lessons learned.",
    ],
    evidence: [
      "Project methodology that includes security checkpoints",
      "Security risk assessments for projects",
      "Sign-off records showing security was reviewed before launch",
      "Lessons-learned notes from completed projects",
    ],
    template: `# Project Security Checklist

**Project:** [Name]   **Project lead:** [Name]   **Date:** [YYYY-MM-DD]

## Initiation
- [ ] Information handled by this project identified and classified
- [ ] Security and privacy requirements captured
- [ ] Initial risk assessment completed

## Design & build
- [ ] Risks treated; controls designed in
- [ ] Access and data flows reviewed
- [ ] Third parties / suppliers assessed (if any)

## Before go-live
- [ ] Security testing completed and issues resolved
- [ ] Residual risks accepted by [risk owner]
- [ ] Sign-off by [Security Lead]: __________  Date: [YYYY-MM-DD]

## Closure
- [ ] Lessons learned recorded
- [ ] Ownership of new assets assigned

Notes: [free text]`,
  },
  {
    id: "A.5.9",
    sort: 5.09,
    theme: "Organizational",
    title: "Inventory of information and other associated assets",
    tags: ["Preventive", "Identify"],
    purpose:
      "Keep an accurate list of the information and assets you hold, with an owner for each, so you can protect them properly.",
    whatItMeans:
      "You can't protect what you don't know you have. This control asks you to maintain an inventory of your important information, devices, software and services — and to give each one an owner who is accountable for it.",
    howToImplement: [
      "Identify your important information and the assets that store or process it.",
      "Record them in an inventory with key details (type, location, sensitivity).",
      "Assign an owner to each asset.",
      "Keep the inventory up to date as assets are added, changed or retired.",
    ],
    evidence: [
      "An asset inventory / register that is reasonably complete",
      "An owner assigned to each significant asset",
      "Classification or sensitivity recorded per asset",
      "Evidence the inventory is updated (date stamps, change records)",
    ],
    template: `# Asset Inventory

**Owner:** [ISMS Manager]   **Last updated:** [YYYY-MM-DD]

| Asset ID | Asset / information     | Type        | Owner     | Location / system | Classification |
|----------|-------------------------|-------------|-----------|-------------------|----------------|
| [A-001]  | [Customer database]     | Information | [Name]    | [CRM / cloud]     | Confidential   |
| [A-002]  | [Staff laptops]         | Hardware    | [IT]      | [Various]         | Internal       |
| [A-003]  | [Accounting software]   | Software    | [Finance] | [SaaS]            | Confidential   |
| [A-004]  | [Website]               | Service     | [Marketing]| [Hosting]        | Public         |

## Rules
- Every new significant asset is added here within [5 working days].
- Each asset has one accountable owner.
- The inventory is reviewed in full at least [annually].`,
  },
  {
    id: "A.5.10",
    sort: 5.10,
    theme: "Organizational",
    title: "Acceptable use of information and other associated assets",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Set clear rules for how people may use company information, devices and services responsibly.",
    whatItMeans:
      "An acceptable use policy tells staff what they can and can't do with company assets — like not sharing passwords, not installing random software, and using email and the internet sensibly. Clear rules prevent honest mistakes and misuse.",
    howToImplement: [
      "Write an acceptable use policy in plain language.",
      "Cover devices, email, internet, data handling, and personal use.",
      "Have everyone read and acknowledge it, ideally at onboarding.",
      "Remind staff periodically and update the rules as technology changes.",
    ],
    evidence: [
      "An approved acceptable use policy",
      "Records of staff acknowledgement",
      "Rules covering devices, data and online behaviour",
      "Evidence the policy is reviewed and reissued",
    ],
    template: `# Acceptable Use Policy

**Owner:** [IT Manager]   **Version:** [1.0]   **Date:** [YYYY-MM-DD]

## Purpose
These rules explain how to use [Company] information and equipment safely.

## You must
- Keep passwords secret and never share your account.
- Lock your screen when you step away.
- Use only approved software and storage for company data.
- Report lost devices or suspected incidents to [IT] immediately.

## You must not
- Install unapproved software or disable security tools.
- Send confidential data to personal accounts or unapproved services.
- Use company systems for illegal or offensive activity.

## Personal use
Limited reasonable personal use is allowed, provided it does not affect work,
security, or break these rules.

## Acknowledgement
I have read and agree to follow this policy.
Name: [____]   Signature: [____]   Date: [YYYY-MM-DD]`,
  },
  {
    id: "A.5.11",
    sort: 5.11,
    theme: "Organizational",
    title: "Return of assets",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure people return company assets when they leave or change role, so nothing walks out the door.",
    whatItMeans:
      "When someone leaves, finishes a contract or changes jobs, they may hold laptops, phones, access cards, keys or data. This control ensures all of it is returned and any remaining access is removed, protecting the organisation from loss.",
    howToImplement: [
      "Keep a record of what assets each person holds (link to the asset inventory).",
      "Add asset return to your leaver and role-change process.",
      "Check items off as they're returned, and remove related access.",
      "Follow up on anything not returned.",
    ],
    evidence: [
      "A leaver / offboarding checklist including asset return",
      "Records of assets returned per person",
      "Link between assets issued and assets recovered",
      "Evidence access was revoked at the same time",
    ],
    template: `# Asset Return Checklist (Leaver / Role Change)

**Person:** [Name]   **Last day / change date:** [YYYY-MM-DD]
**Manager:** [Name]   **Processed by:** [IT / HR]

| Item                       | Issued? | Returned? | Date       | Notes        |
|----------------------------|---------|-----------|------------|--------------|
| Laptop / desktop           | [Y/N]   | [ ]       | [YYYY-MM-DD]| [Asset ID]  |
| Mobile phone               | [Y/N]   | [ ]       |            |              |
| Access card / keys         | [Y/N]   | [ ]       |            |              |
| External drives / tokens   | [Y/N]   | [ ]       |            |              |
| Company documents / data   | [Y/N]   | [ ]       |            |              |

## Access removal
- [ ] System accounts disabled        Date: [YYYY-MM-DD]
- [ ] Email access removed / forwarded
- [ ] Remote / VPN access revoked
- [ ] Building access deactivated

Manager sign-off: [____]   Date: [YYYY-MM-DD]`,
  },
  {
    id: "A.5.12",
    sort: 5.12,
    theme: "Organizational",
    title: "Classification of information",
    tags: ["Preventive", "Identify", "Protect"],
    purpose:
      "Group information by how sensitive it is, so you can apply the right level of protection to each.",
    whatItMeans:
      "Not all information needs the same protection. Classification means deciding categories (for example Public, Internal, Confidential) and sorting your information into them, based on how damaging it would be if exposed, changed or lost.",
    howToImplement: [
      "Define a simple set of classification levels and what each means.",
      "Give guidance on how to handle information at each level.",
      "Classify your key information assets in the inventory.",
      "Review classifications periodically and when information changes.",
    ],
    evidence: [
      "A documented classification scheme with clear levels",
      "Handling rules for each level",
      "Information assets that have a classification recorded",
      "Evidence classifications are reviewed and updated",
    ],
    template: `# Information Classification Scheme

**Owner:** [ISMS Manager]   **Version:** [1.0]   **Date:** [YYYY-MM-DD]

## Levels
| Level         | Meaning                                  | Example                  |
|---------------|------------------------------------------|--------------------------|
| Public        | Safe to share with anyone                | Website content          |
| Internal      | For staff use; limited harm if leaked    | Internal memos           |
| Confidential  | Sensitive; serious harm if leaked        | Customer / staff data    |
| Restricted    | Highly sensitive; severe harm if leaked  | [Trade secrets]          |

## Handling rules (summary)
| Level         | Storage             | Sharing                 | Disposal           |
|---------------|---------------------|-------------------------|--------------------|
| Confidential  | Encrypted / access-controlled | Approved channels only | Secure deletion |
| Restricted    | Encrypted, strict access      | Named recipients only  | Witnessed destruction |

## Review
Classifications are reviewed at least [annually] and when value changes.`,
  },
  {
    id: "A.5.13",
    sort: 5.13,
    theme: "Organizational",
    title: "Labelling of information",
    tags: ["Preventive", "Protect"],
    purpose:
      "Mark information with its classification so people instantly know how to handle it.",
    whatItMeans:
      "Once you've classified information, labelling makes the classification visible — a header on a document, a tag on a file, or a banner in an email. Labels remind people to treat the information correctly and make mistakes less likely.",
    howToImplement: [
      "Decide how each classification level should be labelled (text, footer, tag).",
      "Apply labels to documents, emails and media as appropriate.",
      "Tell staff what the labels mean and how to apply them.",
      "Check periodically that sensitive information is actually labelled.",
    ],
    evidence: [
      "A labelling standard linked to the classification scheme",
      "Documents and emails showing labels in use",
      "Staff guidance on applying labels",
      "Spot checks confirming labelling is happening",
    ],
    template: `# Information Labelling Standard

**Owner:** [ISMS Manager]   **Date:** [YYYY-MM-DD]

## How to label by classification
| Level         | Document footer / header     | Email subject prefix | File tag         |
|---------------|------------------------------|----------------------|------------------|
| Public        | "Public"                     | (none)               | [public]         |
| Internal      | "Internal use only"          | (none)               | [internal]       |
| Confidential  | "Confidential"               | [CONFIDENTIAL]       | [confidential]   |
| Restricted    | "Restricted - [recipient]"   | [RESTRICTED]         | [restricted]     |

## Rules
- Place the label where it is clearly visible (e.g. document footer).
- Printed copies carry the same label as the digital file.
- If unsure, label as [Confidential] and check with [ISMS Manager].

## Checks
[Role] spot-checks labelling [quarterly] and reports gaps.`,
  },
  {
    id: "A.5.14",
    sort: 5.14,
    theme: "Organizational",
    title: "Information transfer",
    tags: ["Preventive", "Protect"],
    purpose:
      "Protect information when it is sent or shared, whether electronically, physically or verbally.",
    whatItMeans:
      "Information is most exposed while moving between people or systems. This control sets rules for transferring it safely — using secure channels, encryption, approved tools, and agreements with the people you share it with.",
    howToImplement: [
      "Define approved ways to share information at each classification level.",
      "Require encryption or secure channels for sensitive transfers.",
      "Put transfer agreements in place where you share data with others.",
      "Train staff and check that risky channels (e.g. personal email) aren't used.",
    ],
    evidence: [
      "A transfer policy covering electronic, physical and verbal sharing",
      "Evidence of secure channels / encryption in use",
      "Transfer or data-sharing agreements with third parties",
      "Staff guidance and awareness on safe transfer",
    ],
    template: `# Information Transfer Rules

**Owner:** [IT Manager]   **Date:** [YYYY-MM-DD]

## Approved channels by classification
| Classification | Electronic                    | Physical                  |
|----------------|-------------------------------|---------------------------|
| Internal       | Company email / [tool]        | Internal mail             |
| Confidential   | Encrypted email / [secure portal] | Sealed, tracked courier |
| Restricted     | [Secure portal], named recipients | Hand delivery, signed for |

## Rules
- Never send Confidential+ data via personal email or chat apps.
- Verify the recipient's address before sending sensitive information.
- Use a data-sharing agreement when transferring to third parties.
- Be careful discussing sensitive topics in public / on calls.

## Data-sharing agreement (where used)
Parties: [Company] and [Recipient]
Data shared: [Description]   Purpose: [Reason]
Protection required: [Encryption, access limits]
Owner / contact: [Name]   Date: [YYYY-MM-DD]`,
  },
  {
    id: "A.5.15",
    sort: 5.15,
    theme: "Organizational",
    title: "Access control",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure people can only reach the information and systems they are actually allowed to use.",
    whatItMeans:
      "Access control means deciding who gets to see or use what, and enforcing it. The guiding ideas are least privilege (only what you need) and need-to-know. A clear access control policy sets these rules consistently across the organisation.",
    howToImplement: [
      "Write an access control policy based on least privilege and need-to-know.",
      "Define how access is requested, approved and granted.",
      "Base access on roles where possible to keep it simple and consistent.",
      "Review access regularly and remove anything no longer needed.",
    ],
    evidence: [
      "An approved access control policy",
      "Records of access requests and approvals",
      "Role-based access definitions",
      "Periodic access reviews with actions taken",
    ],
    template: `# Access Control Policy

**Owner:** [IT Manager]   **Version:** [1.0]   **Date:** [YYYY-MM-DD]

## Principles
- Least privilege: people get only the access their role needs.
- Need-to-know: access to information is limited to those who require it.
- Accountability: each access is tied to a named individual.

## Granting access
1. Manager requests access for the staff member.
2. [System / data owner] approves.
3. [IT] grants access and records it.

## Reviewing access
- Access is reviewed at least [quarterly] by [owners].
- Access is removed promptly on leaving or role change.

## Special cases
- Privileged / admin access requires [extra approval] and is reviewed [monthly].
- Shared accounts are avoided; where unavoidable, use is logged.

## Review
This policy is reviewed at least annually.`,
  },
  {
    id: "A.5.16",
    sort: 5.16,
    theme: "Organizational",
    title: "Identity management",
    tags: ["Preventive", "Protect"],
    purpose:
      "Manage digital identities so every user and system has a unique, traceable account throughout its life.",
    whatItMeans:
      "Each person (and sometimes each service) should have their own identity — a unique account — that is created when needed, kept up to date, and disabled when no longer required. Unique identities mean actions can be traced to the right person.",
    howToImplement: [
      "Give each user a unique account; avoid shared logins.",
      "Define how identities are created, changed and disabled.",
      "Tie the identity lifecycle to your joiner/mover/leaver process.",
      "Periodically reconcile accounts against the list of active people.",
    ],
    evidence: [
      "Each user has a unique, attributable account",
      "A documented identity lifecycle (create/change/disable)",
      "Records linking accounts to real people / services",
      "Reviews that find and remove orphaned or dormant accounts",
    ],
    template: `# Identity Lifecycle Procedure

**Owner:** [IT Manager]   **Date:** [YYYY-MM-DD]

## Joiner
- [ ] HR notifies IT of start date and role
- [ ] Unique account created (no shared logins)
- [ ] Access granted per role (see Access Control)

## Mover (role change)
- [ ] Old access reviewed and removed
- [ ] New access granted per new role

## Leaver
- [ ] Account disabled on last day
- [ ] Access fully removed within [X days]
- [ ] Account archived / deleted per retention rules

## Non-human identities
- Service / system accounts are owned by [named person], documented,
  and reviewed [quarterly].

## Reconciliation
[Role] compares active accounts to the current staff list [quarterly]
and disables any that don't match.`,
  },
  {
    id: "A.5.17",
    sort: 5.17,
    theme: "Organizational",
    title: "Authentication information",
    tags: ["Preventive", "Protect"],
    purpose:
      "Protect passwords and other secrets used to log in, and make sure they are handled securely.",
    whatItMeans:
      "Authentication information includes passwords, PINs, security keys and one-time codes. This control covers how these are created, shared, stored and changed so attackers can't easily steal or guess them.",
    howToImplement: [
      "Set sensible password rules (length, uniqueness) and enable multi-factor authentication.",
      "Provide a password manager and forbid reusing or sharing passwords.",
      "Deliver and reset credentials securely (e.g. forced change on first login).",
      "Store secrets hashed/encrypted, never in plain text.",
    ],
    evidence: [
      "A password / authentication policy",
      "Multi-factor authentication enabled on key systems",
      "Secure handling of secrets (hashing, vault, password manager)",
      "Process for secure credential issue and reset",
    ],
    template: `# Authentication Information Policy

**Owner:** [IT Manager]   **Version:** [1.0]   **Date:** [YYYY-MM-DD]

## Passwords
- Minimum [12] characters; use a passphrase where possible.
- Never reuse work passwords elsewhere or share them.
- Use the approved password manager: [tool].

## Multi-factor authentication (MFA)
- MFA is required for [email, VPN, admin, cloud apps].

## Issuing & resetting
- Temporary credentials are sent securely and must be changed at first login.
- Identity is verified before any password reset.

## Storage
- Systems store credentials hashed / encrypted — never in plain text.
- Secrets and keys are kept in [a secrets vault], not in code or documents.

## If a credential is exposed
Report to [IT] immediately; the credential is reset and use is reviewed.

## Review
This policy is reviewed at least annually.`,
  },
  {
    id: "A.5.18",
    sort: 5.18,
    theme: "Organizational",
    title: "Access rights",
    tags: ["Preventive", "Protect"],
    purpose:
      "Grant, review and remove access rights so they always match what each person actually needs.",
    whatItMeans:
      "Over time people accumulate access they no longer need. This control ensures access rights are provisioned when needed, reviewed regularly, adjusted on role change, and removed promptly when someone leaves — keeping access tidy and safe.",
    howToImplement: [
      "Provision access only after proper approval, based on role.",
      "Review access rights regularly with the data/system owners.",
      "Adjust rights immediately when someone changes role.",
      "Remove all access promptly when someone leaves.",
    ],
    evidence: [
      "Records of access being granted with approvals",
      "Periodic access review records with sign-off",
      "Evidence access was changed on role change",
      "Timely removal of access for leavers",
    ],
    template: `# Access Rights Review Record

**System / data:** [Name]   **Reviewer (owner):** [Name]
**Review date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

| User        | Role        | Current access     | Still needed? | Action          |
|-------------|-------------|--------------------|---------------|-----------------|
| [Name]      | [Role]      | [Access level]     | Yes / No      | Keep / Remove   |
| [Name]      | [Role]      | [Access level]     | Yes / No      | Reduce to [X]   |
| [Name]      | [Left org]  | [Access level]     | No            | Remove now      |

## Privileged accounts checked
- [ ] Admin / privileged accounts reviewed and justified

## Summary
- Accounts reviewed: [n]   Removed: [n]   Reduced: [n]
- Issues found: [free text]

Owner sign-off: [____]   Date: [YYYY-MM-DD]`,
  },
  {
    id: "A.5.19",
    sort: 5.19,
    theme: "Organizational",
    title: "Information security in supplier relationships",
    tags: ["Preventive", "Identify", "Governance"],
    purpose:
      "Manage the security risks that come from using suppliers who handle your information or systems.",
    whatItMeans:
      "Suppliers — from cloud providers to IT contractors — can access or hold your data, so their security affects yours. This control asks you to understand those risks and set expectations before and during the relationship.",
    howToImplement: [
      "List suppliers and what information or access each one has.",
      "Assess the security risk each supplier poses.",
      "Set a policy for how suppliers must protect your information.",
      "Apply more scrutiny to higher-risk suppliers.",
    ],
    evidence: [
      "A supplier register noting access and risk level",
      "A supplier security policy or expectations",
      "Risk assessments for significant suppliers",
      "Evidence higher-risk suppliers get extra checks",
    ],
    template: `# Supplier Security Register

**Owner:** [Procurement / ISMS Manager]   **Last reviewed:** [YYYY-MM-DD]

| Supplier   | Service        | Data / access            | Risk level | Owner   | Last assessed |
|------------|----------------|--------------------------|------------|---------|---------------|
| [Name]     | [Cloud hosting]| [Customer data]          | High       | [Name]  | [YYYY-MM-DD]  |
| [Name]     | [IT support]   | [Admin access]           | High       | [Name]  | [YYYY-MM-DD]  |
| [Name]     | [Marketing]    | [Email list]             | Medium     | [Name]  | [YYYY-MM-DD]  |

## Supplier security expectations
- Suppliers protect our information to at least our own standard.
- They report incidents affecting our data without delay.
- They allow review / evidence of their controls where risk is High.

## Review
High-risk suppliers are reassessed at least [annually].`,
  },
  {
    id: "A.5.20",
    sort: 5.20,
    theme: "Organizational",
    title: "Addressing information security within supplier agreements",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Put security requirements in writing in your contracts with suppliers, so expectations are clear and enforceable.",
    whatItMeans:
      "Once you know a supplier's risks, the contract should spell out what they must do: protect your data, report incidents, allow audits, and handle data properly at the end. Written agreements turn expectations into obligations.",
    howToImplement: [
      "Define the security clauses relevant to each supplier's role.",
      "Include them in contracts before sharing data or access.",
      "Cover incident reporting, data return/deletion, confidentiality and audit rights.",
      "Keep agreements on file and check they stay current.",
    ],
    evidence: [
      "Contracts containing information security clauses",
      "Clauses on incident reporting and data handling",
      "Confidentiality / NDA terms where appropriate",
      "Records linking agreements to the supplier register",
    ],
    template: `# Supplier Agreement - Security Clauses (Sample)

**Supplier:** [Name]   **Agreement ref:** [###]   **Date:** [YYYY-MM-DD]

The Supplier agrees to:
1. **Protect information** — apply appropriate technical and organisational
   controls to protect [Company] information, at least equal to our standards.
2. **Confidentiality** — keep [Company] information confidential and use it
   only for the agreed purpose.
3. **Access** — limit access to staff who need it; manage their access securely.
4. **Sub-contracting** — not pass our data to others without written consent.
5. **Incident reporting** — notify [Company] of any security incident affecting
   our information within [24 hours].
6. **Audit / assurance** — provide evidence of controls (e.g. certifications)
   or permit reasonable review on request.
7. **Compliance** — meet relevant legal and regulatory requirements.
8. **End of contract** — return or securely delete all [Company] data and
   confirm in writing.

Signed (Supplier): [____]   Signed ([Company]): [____]`,
  },
  {
    id: "A.5.21",
    sort: 5.21,
    theme: "Organizational",
    title: "Managing information security in the ICT supply chain",
    tags: ["Preventive", "Identify", "Protect"],
    purpose:
      "Manage the risks that flow through the chain of technology products and services you rely on.",
    whatItMeans:
      "Your IT suppliers depend on their own suppliers, and so on. A weakness anywhere in that chain can reach you. This control focuses on understanding and managing the security of ICT products and services, including components and sub-suppliers.",
    howToImplement: [
      "Identify your critical ICT products, services and their providers.",
      "Ask suppliers about their own supply chain and security practices.",
      "Set requirements for components, updates and vulnerability handling.",
      "Monitor for supply-chain issues and respond when they arise.",
    ],
    evidence: [
      "A view of critical ICT suppliers and dependencies",
      "Supply-chain security requirements in agreements",
      "Evidence suppliers manage their own sub-suppliers",
      "Records of acting on supply-chain risks or advisories",
    ],
    template: `# ICT Supply Chain Assessment

**Owner:** [IT / ISMS Manager]   **Date:** [YYYY-MM-DD]

## Critical ICT products & services
| Product / service | Provider | Used for        | Sub-suppliers known? | Criticality |
|-------------------|----------|-----------------|----------------------|-------------|
| [Cloud platform]  | [Vendor] | [Hosting]       | [Yes/No]             | High        |
| [Software / lib]  | [Vendor] | [App component] | [Yes/No]             | Medium      |

## Questions for suppliers
- [ ] How do you secure your development and updates?
- [ ] How do you vet and manage your own suppliers?
- [ ] How do you handle vulnerabilities and notify customers?
- [ ] Do you provide a software bill of materials (SBOM) if asked?

## Monitoring
- Subscribe to provider security advisories.
- Review supply-chain risks at least [annually] and after major incidents.`,
  },
  {
    id: "A.5.22",
    sort: 5.22,
    theme: "Organizational",
    title: "Monitoring, review and change management of supplier services",
    tags: ["Detective", "Detect", "Governance"],
    purpose:
      "Keep an eye on suppliers over time to ensure they keep meeting their security commitments, especially when things change.",
    whatItMeans:
      "Signing a contract isn't the end. You should regularly check that suppliers are still delivering securely, review their reports or certifications, and manage changes (new services, sub-suppliers, incidents) so risks don't creep back in.",
    howToImplement: [
      "Schedule regular reviews of key suppliers' security performance.",
      "Collect and check evidence: reports, certifications, incident notices.",
      "Manage changes to supplier services through a controlled process.",
      "Act on shortfalls and record outcomes.",
    ],
    evidence: [
      "A schedule and records of supplier reviews",
      "Supplier reports / certifications on file and checked",
      "Change records for supplier service changes",
      "Actions taken where suppliers fell short",
    ],
    template: `# Supplier Service Review Record

**Supplier:** [Name]   **Service:** [Description]
**Reviewer:** [Name]   **Review date:** [YYYY-MM-DD]

## Performance & security check
- [ ] Service delivered as agreed (SLA met)
- [ ] Current certification / assurance reviewed: [e.g. ISO 27001, SOC 2]
- [ ] Any incidents reported since last review? [Y/N] - [details]
- [ ] Open issues / actions from last review closed? [Y/N]

## Changes since last review
| Change                       | Risk impact   | Approved by   | Date        |
|------------------------------|---------------|---------------|-------------|
| [New sub-supplier / feature] | [Low/Med/High]| [Name]        | [YYYY-MM-DD]|

## Outcome
Overall rating: [Satisfactory / Needs improvement]
Actions: [free text]   Owner: [Name]   Due: [YYYY-MM-DD]
Next review: [YYYY-MM-DD]`,
  },
  {
    id: "A.5.23",
    sort: 5.23,
    theme: "Organizational",
    title: "Information security for use of cloud services",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Use cloud services safely by understanding what you are responsible for and configuring them securely.",
    whatItMeans:
      "Cloud services are convenient but security is shared between you and the provider. This control asks you to choose cloud services carefully, understand the split of responsibilities, configure them securely, and know how to leave if needed.",
    howToImplement: [
      "Set a process for selecting and approving cloud services.",
      "Clarify the shared-responsibility split for each service.",
      "Configure security settings (access, encryption, logging) properly.",
      "Plan how you would exit or move data if you stopped using the service.",
    ],
    evidence: [
      "A policy / process for adopting cloud services",
      "Documented responsibility split per cloud service",
      "Evidence of secure configuration (MFA, encryption, logs)",
      "An exit / data-portability plan for key services",
    ],
    template: `# Cloud Service Security Record

**Service:** [Name]   **Provider:** [Vendor]   **Owner:** [Name]
**Approved on:** [YYYY-MM-DD]

## What it's used for
[Description]   Data involved: [classification]

## Shared responsibility
| Area              | Provider does | We do                |
|-------------------|---------------|----------------------|
| Infrastructure    | Yes           | -                    |
| Access management | -             | Yes (MFA, roles)     |
| Data & config     | -             | Yes                  |
| Backups           | [depends]     | [depends]            |

## Security configuration checklist
- [ ] MFA enforced for all users
- [ ] Least-privilege roles configured
- [ ] Encryption enabled (in transit & at rest)
- [ ] Logging / monitoring turned on
- [ ] Admin accounts limited and reviewed

## Exit plan
How we would retrieve data and stop using the service: [free text]`,
  },
  {
    id: "A.5.24",
    sort: 5.24,
    theme: "Organizational",
    title: "Information security incident management planning and preparation",
    tags: ["Corrective", "Respond", "Governance"],
    purpose:
      "Plan and prepare in advance so you can respond to security incidents quickly and effectively.",
    whatItMeans:
      "Incidents will happen, so it pays to be ready. This control asks you to define what counts as an incident, assign roles, set up reporting channels, and prepare a response plan — before anything goes wrong.",
    howToImplement: [
      "Define what an information security incident is for your organisation.",
      "Assign roles and responsibilities for handling incidents.",
      "Set up easy ways for anyone to report a suspected incident.",
      "Write a simple incident response plan and make sure people know it.",
    ],
    evidence: [
      "An incident management / response plan",
      "Defined incident roles and contacts",
      "A clear reporting channel communicated to staff",
      "Evidence of preparation (e.g. a test or walkthrough)",
    ],
    template: `# Incident Response Plan (Summary)

**Owner:** [Incident Manager]   **Version:** [1.0]   **Date:** [YYYY-MM-DD]

## What is an incident?
Any event that could harm the confidentiality, integrity or availability of
our information — e.g. malware, lost device, data leak, account compromise.

## How to report
Tell [IT / security] immediately via [email / hotline / tool].
When in doubt, report it.

## Roles
| Role               | Person        | Responsibility               |
|--------------------|---------------|------------------------------|
| Incident Manager   | [Name]        | Coordinates the response     |
| Technical lead     | [Name]        | Investigates & contains      |
| Communications     | [Name]        | Internal / external comms    |

## Response steps
1. Report  2. Assess  3. Contain  4. Eradicate  5. Recover  6. Learn

## Contacts
[IT], [Management], [Authorities - see register], [Key suppliers]

## Review
This plan is reviewed [annually] and after major incidents or tests.`,
  },
  {
    id: "A.5.25",
    sort: 5.25,
    theme: "Organizational",
    title: "Assessment and decision on information security events",
    tags: ["Detective", "Detect", "Respond"],
    purpose:
      "Decide which reported events are actually security incidents and how serious they are, so you respond appropriately.",
    whatItMeans:
      "Not every odd event is a real incident. This control is about triaging reports: assessing each one, categorising and prioritising it, and deciding whether to treat it as an incident. Consistent decisions help you focus on what matters.",
    howToImplement: [
      "Create simple criteria to judge severity and impact.",
      "Have a named person or team triage every reported event.",
      "Categorise and prioritise, then decide: incident or not.",
      "Record the assessment and the decision.",
    ],
    evidence: [
      "Severity / categorisation criteria",
      "Records of events being assessed and classified",
      "Decisions on whether events became incidents",
      "Consistent triage handled by a defined role",
    ],
    template: `# Event Assessment & Triage Log

**Owner:** [Incident Manager]   **Date range:** [YYYY-MM] to [YYYY-MM]

## Severity guide
| Level   | Meaning                                  |
|---------|------------------------------------------|
| Low     | Minimal impact; no sensitive data        |
| Medium  | Some impact; limited data or systems     |
| High    | Significant impact; sensitive data/systems|
| Critical| Major impact; widespread or regulated data|

## Log
| Date       | Event reported          | Category      | Severity | Incident? | Assigned to |
|------------|-------------------------|---------------|----------|-----------|-------------|
| [YYYY-MM-DD]| [Phishing email]       | [Email]       | Low      | No        | [Name]      |
| [YYYY-MM-DD]| [Laptop lost]          | [Device]      | High     | Yes       | [Name]      |
| [YYYY-MM-DD]| [Unusual login]        | [Account]     | Medium   | Yes       | [Name]      |

## Notes
Triage decisions are made by [role]; escalate [High]+ to [Incident Manager].`,
  },
  {
    id: "A.5.26",
    sort: 5.26,
    theme: "Organizational",
    title: "Response to information security incidents",
    tags: ["Corrective", "Respond", "Recover"],
    purpose:
      "Respond to confirmed incidents in a planned, consistent way to limit damage and restore normal operations.",
    whatItMeans:
      "Once something is confirmed as an incident, you follow your plan: contain it, fix the cause, recover affected systems, communicate as needed, and keep records throughout. A calm, structured response reduces harm and confusion.",
    howToImplement: [
      "Activate the incident response plan and assign a coordinator.",
      "Contain the incident, then eradicate the cause and recover systems.",
      "Communicate to the right people (and authorities) as required.",
      "Record actions, decisions and timings throughout.",
    ],
    evidence: [
      "Incident records with timeline of actions",
      "Evidence of containment and recovery steps",
      "Communications / notifications made",
      "Closure records confirming resolution",
    ],
    template: `# Incident Response Record

**Incident ID:** [INC-###]   **Reported:** [YYYY-MM-DD HH:MM]
**Coordinator:** [Name]   **Severity:** [Low/Med/High/Critical]

## Description
What happened: [free text]   Systems / data affected: [list]

## Timeline of actions
| Time         | Action taken                      | By      |
|--------------|-----------------------------------|---------|
| [HH:MM]      | [Detected / reported]             | [Name]  |
| [HH:MM]      | [Contained - e.g. account locked] | [Name]  |
| [HH:MM]      | [Cause removed]                   | [Name]  |
| [HH:MM]      | [Systems recovered & verified]    | [Name]  |

## Communications
- Internal: [who, when]
- External / authorities: [who, when - see Contact with Authorities]

## Closure
Resolved on: [YYYY-MM-DD]   Confirmed by: [Name]
Follow-up actions / lessons: see Learning from Incidents.`,
  },
  {
    id: "A.5.27",
    sort: 5.27,
    theme: "Organizational",
    title: "Learning from information security incidents",
    tags: ["Corrective", "Recover", "Governance"],
    purpose:
      "Use the lessons from incidents to strengthen your defences and reduce the chance of them happening again.",
    whatItMeans:
      "After an incident, take time to ask what went wrong, what worked, and what to improve. Capturing these lessons and acting on them turns a bad experience into stronger security over time.",
    howToImplement: [
      "Hold a short review after significant incidents.",
      "Identify root causes and what could be improved.",
      "Turn findings into concrete actions with owners and dates.",
      "Track the actions to completion and update controls or training.",
    ],
    evidence: [
      "Post-incident review notes",
      "Identified root causes and improvement actions",
      "Evidence actions were completed",
      "Updates to controls, policies or training as a result",
    ],
    template: `# Post-Incident Review (Lessons Learned)

**Incident ID:** [INC-###]   **Review date:** [YYYY-MM-DD]
**Facilitator:** [Name]   **Attendees:** [Names]

## What happened
Brief summary: [free text]

## Root cause
Why did it happen (look beyond the symptom)? [free text]

## What went well
- [e.g. fast reporting by staff]

## What could be better
- [e.g. detection was slow]

## Improvement actions
| Action                          | Owner   | Due date    | Status   |
|---------------------------------|---------|-------------|----------|
| [Update firewall rule]          | [Name]  | [YYYY-MM-DD]| Open     |
| [Add awareness reminder]        | [Name]  | [YYYY-MM-DD]| Open     |

## Wider impact
- Controls / policies to update: [list]
- Trends to watch (recurring incidents?): [free text]`,
  },
  {
    id: "A.5.28",
    sort: 5.28,
    theme: "Organizational",
    title: "Collection of evidence",
    tags: ["Corrective", "Detect", "Respond"],
    purpose:
      "Identify, collect and preserve evidence about incidents properly, in case it is needed for investigations or legal action.",
    whatItMeans:
      "Sometimes you need solid proof of what happened — for internal action, insurance, or court. This control is about handling evidence (logs, devices, files) carefully so it stays reliable and admissible, with a clear record of who touched it.",
    howToImplement: [
      "Decide in advance what evidence might matter (logs, images, devices).",
      "Define how to collect and store it without altering it.",
      "Keep a chain-of-custody record for important evidence.",
      "Get specialist or legal help for serious cases.",
    ],
    evidence: [
      "A procedure for collecting and preserving evidence",
      "Chain-of-custody records",
      "Securely stored evidence from past incidents (if any)",
      "Awareness of when to involve experts / legal",
    ],
    template: `# Evidence Collection & Chain of Custody

**Incident ID:** [INC-###]   **Collected by:** [Name]

## Evidence item
Description: [e.g. laptop, server log export]
Source / location: [where it came from]
Collected on: [YYYY-MM-DD HH:MM]
How collected (kept unaltered): [e.g. read-only copy, hash recorded]
Hash / reference (if digital): [value]

## Chain of custody
| Date / time   | Held by   | Action            | Storage location  |
|---------------|-----------|-------------------|-------------------|
| [YYYY-MM-DD]  | [Name]    | Collected         | [Secure locker]   |
| [YYYY-MM-DD]  | [Name]    | Handed to [team]  | [Location]        |

## Notes
- Originals are protected; analysis is done on copies where possible.
- For serious / criminal matters, contact [Legal] before proceeding.`,
  },
  {
    id: "A.5.29",
    sort: 5.29,
    theme: "Organizational",
    title: "Information security during disruption",
    tags: ["Preventive", "Corrective", "Protect", "Recover"],
    purpose:
      "Keep protecting information even during disruptions like outages, disasters or crises — when controls are easy to forget.",
    whatItMeans:
      "When things go wrong (a fire, a major outage, a crisis), people focus on getting back up and running and may cut corners on security. This control ensures you plan to maintain appropriate protection of information throughout a disruption, not just in normal times.",
    howToImplement: [
      "Identify how disruptions could weaken your security controls.",
      "Decide what level of protection must be kept during disruption.",
      "Build security into your continuity / recovery plans.",
      "Test that controls still hold up under disruption scenarios.",
    ],
    evidence: [
      "Continuity plans that address maintaining security",
      "Defined minimum protections to keep during disruption",
      "Test / exercise results covering security during disruption",
      "Roles assigned for security in crisis situations",
    ],
    template: `# Maintaining Security During Disruption

**Owner:** [BC / ISMS Manager]   **Date:** [YYYY-MM-DD]

## Scenarios considered
- [Major IT outage], [office unavailable], [supplier failure], [cyber attack]

## Protections to maintain during disruption
| Control area       | Normal                | During disruption (minimum) |
|--------------------|-----------------------|-----------------------------|
| Access control     | Full role-based       | Still authenticated; no open access |
| Data protection    | Encrypted             | Stay encrypted; no insecure shortcuts |
| Logging            | Full                  | Keep key logs where possible |
| Incident reporting | Normal channel        | Backup channel: [method]    |

## Crisis roles
- Security decisions during a crisis are made by [role].
- Temporary measures must be approved by [role] and reversed afterward.

## Testing
Security-during-disruption is tested as part of [BC exercise], at least [annually].`,
  },
  {
    id: "A.5.30",
    sort: 5.30,
    theme: "Organizational",
    title: "ICT readiness for business continuity",
    tags: ["Preventive", "Corrective", "Recover"],
    purpose:
      "Make sure your IT can recover quickly enough to keep the business running after a disruption.",
    whatItMeans:
      "This control focuses on the technology side of continuity. It asks you to work out how fast key systems must come back (recovery targets), make sure backups and recovery arrangements support that, and test them so you're confident they work.",
    howToImplement: [
      "Identify critical IT systems and how quickly they must recover.",
      "Set recovery time and recovery point objectives (RTO/RPO).",
      "Ensure backups, redundancy and recovery plans meet those targets.",
      "Test recovery regularly and fix any gaps.",
    ],
    evidence: [
      "Recovery objectives (RTO/RPO) for key systems",
      "Backup and recovery arrangements documented",
      "Test / restore records",
      "Actions taken to close gaps found in tests",
    ],
    template: `# ICT Continuity & Recovery Plan

**Owner:** [IT Manager]   **Date:** [YYYY-MM-DD]

## Recovery objectives for key systems
| System            | RTO (max downtime) | RPO (max data loss) | Backup method      |
|-------------------|--------------------|---------------------|--------------------|
| [Email]           | [4 hours]          | [1 hour]            | [Cloud, daily]     |
| [Customer DB]     | [2 hours]          | [15 min]            | [Continuous]       |
| [File storage]    | [1 day]            | [1 day]             | [Daily backup]     |

## Backups
- Frequency: [as above]   Stored: [off-site / separate cloud]
- Backups are encrypted and access-controlled.

## Recovery test record
| Date       | System tested | Restored OK? | Time taken | Issues / actions |
|------------|---------------|--------------|------------|------------------|
| [YYYY-MM-DD]| [System]     | [Y/N]        | [duration] | [free text]      |

## Review
Plan reviewed [annually]; recovery tested at least [annually].`,
  },
  {
    id: "A.5.31",
    sort: 5.31,
    theme: "Organizational",
    title: "Legal, statutory, regulatory and contractual requirements",
    tags: ["Preventive", "Identify", "Governance"],
    purpose:
      "Know and meet all the legal and contractual rules that apply to how you handle information.",
    whatItMeans:
      "Laws and contracts impose obligations — data protection, retention, industry rules, customer commitments. This control asks you to identify which apply to you, keep that list current, and make sure you actually comply.",
    howToImplement: [
      "Identify the laws, regulations and contract terms relevant to your information.",
      "Record them and the obligations they create in a register.",
      "Assign owners and check you meet each obligation.",
      "Review the register regularly, as laws and contracts change.",
    ],
    evidence: [
      "A legal & regulatory requirements register",
      "Obligations mapped to owners and controls",
      "Evidence of compliance with key requirements",
      "Review history keeping the register current",
    ],
    template: `# Legal & Regulatory Requirements Register

**Owner:** [Compliance / ISMS Manager]   **Last reviewed:** [YYYY-MM-DD]

| Requirement              | Applies because      | Key obligation               | Owner   | Met? |
|--------------------------|----------------------|------------------------------|---------|------|
| [Data protection law]    | [We hold PII]        | [Lawful processing, breach notice] | [DPO] | Yes |
| [Retention rules]        | [Tax / sector]       | [Keep records for X years]   | [Finance]| Yes |
| [Industry regulation]    | [Our sector]         | [Specific controls]          | [Name]  | Partial |
| [Customer contract X]    | [Client commitment]  | [Security & reporting terms] | [Acct mgr]| Yes |

## Notes
- New or changed requirements are added within [30 days] of becoming aware.
- Compliance is reviewed at least [annually].

## Cryptography note
Where encryption is used, check it complies with relevant [legal restrictions].`,
  },
  {
    id: "A.5.32",
    sort: 5.32,
    theme: "Organizational",
    title: "Intellectual property rights",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Respect intellectual property rights and protect your own, including using only properly licensed software.",
    whatItMeans:
      "This covers two sides: not breaking others' IP rights (for example using unlicensed software or copyrighted material), and protecting your own valuable IP. Good licence management and clear rules keep you on the right side of the law.",
    howToImplement: [
      "Keep an inventory of software and its licences.",
      "Allow only licensed, approved software; ban unauthorised copying.",
      "Make staff aware of IP rules for software, media and documents.",
      "Protect and mark your own intellectual property.",
    ],
    evidence: [
      "A software / licence inventory",
      "Rules forbidding unlicensed or pirated software",
      "Staff awareness of IP obligations",
      "Measures protecting the organisation's own IP",
    ],
    template: `# Intellectual Property & Software Licence Policy

**Owner:** [IT Manager]   **Version:** [1.0]   **Date:** [YYYY-MM-DD]

## Using others' IP
- Install only approved, properly licensed software.
- Do not copy, share or use software, media or text without the right licence.
- Open-source software is used only in line with its licence terms.

## Licence inventory
| Software       | Licence type      | Seats / limit | Owner   | Renewal      |
|----------------|-------------------|---------------|---------|--------------|
| [Product]      | [Subscription]    | [10 users]    | [IT]    | [YYYY-MM-DD] |
| [Product]      | [Perpetual]       | [5 devices]   | [IT]    | [n/a]        |

## Protecting our IP
- Mark confidential/proprietary materials accordingly.
- Staff and contractors assign relevant IP to [Company] per their contracts.

## Review
Licences and this policy are reviewed at least [annually].`,
  },
  {
    id: "A.5.33",
    sort: 5.33,
    theme: "Organizational",
    title: "Protection of records",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Protect important records from loss, damage, falsification and unauthorised access, and keep them as long as required.",
    whatItMeans:
      "Some records must be kept safe and intact — financial records, contracts, logs, legal documents. This control ensures they're stored securely, kept for the right length of time, and disposed of properly when no longer needed.",
    howToImplement: [
      "Identify records that need protection and how long to keep them.",
      "Store them securely with controlled access and backups.",
      "Protect against tampering and loss (e.g. integrity controls).",
      "Dispose of records securely once retention periods end.",
    ],
    evidence: [
      "A retention schedule for key record types",
      "Secure storage and access controls for records",
      "Backups / integrity protection for important records",
      "Secure disposal records when retention ends",
    ],
    template: `# Records Protection & Retention Schedule

**Owner:** [ISMS / Compliance Manager]   **Date:** [YYYY-MM-DD]

| Record type        | Why kept            | Retention period | Storage           | Disposal method   |
|--------------------|---------------------|------------------|-------------------|-------------------|
| [Financial records]| [Legal / tax]       | [7 years]        | [Accounting system]| [Secure deletion]|
| [Contracts]        | [Legal]             | [Term + 6 years] | [Document store]  | [Secure deletion] |
| [HR records]       | [Employment law]    | [As required]    | [HR system]       | [Secure deletion] |
| [Security logs]    | [Investigation]     | [12 months]      | [Log system]      | [Auto-purge]      |

## Protection rules
- Access to records is restricted to authorised roles.
- Records are backed up and protected from tampering.
- Where required, records are made tamper-evident (e.g. write-once logs).

## Review
Retention periods are reviewed [annually] against legal requirements.`,
  },
  {
    id: "A.5.34",
    sort: 5.34,
    theme: "Organizational",
    title: "Privacy and protection of PII",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Protect personal data and meet privacy obligations toward the people whose information you hold.",
    whatItMeans:
      "PII (personally identifiable information) is data about real people — names, contact details, health or financial data. This control asks you to handle it lawfully and carefully: collect only what you need, keep it secure, and respect individuals' rights.",
    howToImplement: [
      "Identify what personal data you hold and why.",
      "Apply privacy principles: collect minimal data, use it only as intended, keep it secure.",
      "Honour individuals' rights (access, correction, deletion).",
      "Assign privacy responsibility and meet legal notification duties.",
    ],
    evidence: [
      "A record of personal data processing (what, why, where)",
      "Privacy notices and a process for handling individuals' requests",
      "Security controls protecting PII",
      "Assigned privacy owner and breach-notification process",
    ],
    template: `# Privacy & PII Protection Record

**Privacy owner / DPO:** [Name]   **Date:** [YYYY-MM-DD]

## What personal data we hold
| Data category   | Subjects     | Purpose          | Lawful basis     | Where stored     | Retention |
|-----------------|--------------|------------------|------------------|------------------|-----------|
| [Contact info]  | [Customers]  | [Service]        | [Contract]       | [CRM]            | [X years] |
| [Payroll data]  | [Employees]  | [Pay]            | [Legal]          | [HR system]      | [X years] |

## Privacy principles we follow
- Collect only what we need; use it only for the stated purpose.
- Keep it accurate, secure and no longer than necessary.
- Be transparent via our privacy notice.

## Individuals' rights
Requests (access, correction, deletion) go to [contact] and are handled
within [legal timeframe].

## Breaches
A breach involving PII follows the incident process and is reported to
[regulator] within [72 hours] if required.`,
  },
  {
    id: "A.5.35",
    sort: 5.35,
    theme: "Organizational",
    title: "Independent review of information security",
    tags: ["Detective", "Detect", "Governance"],
    purpose:
      "Have your security approach checked independently to confirm it works and to spot blind spots.",
    whatItMeans:
      "It's hard to judge your own work objectively. This control asks for an independent review of your security — by someone not responsible for it (internal audit, a different team, or an external party) — done at planned intervals and after big changes.",
    howToImplement: [
      "Decide who can review independently (internal auditor or external party).",
      "Plan reviews at regular intervals and after significant change.",
      "Review the security approach, controls and how well they're followed.",
      "Record findings and act on the recommendations.",
    ],
    evidence: [
      "A schedule for independent reviews",
      "Reviews carried out by someone independent of the work",
      "Review reports with findings",
      "Actions taken in response to recommendations",
    ],
    template: `# Independent Security Review Record

**Review date:** [YYYY-MM-DD]   **Reviewer:** [Name / firm]
**Independence:** [Not responsible for day-to-day security - confirm]

## Scope
What was reviewed: [policies, controls, practices, area]

## Method
[Interviews, document review, sampling, testing]

## Findings
| # | Finding                          | Severity | Recommendation          |
|---|----------------------------------|----------|-------------------------|
| 1 | [e.g. access reviews overdue]    | Medium   | [Run quarterly reviews] |
| 2 | [Finding]                        | [Level]  | [Recommendation]        |

## Management response & actions
| Finding | Action            | Owner   | Due date     | Status |
|---------|-------------------|---------|--------------|--------|
| 1       | [Action]          | [Name]  | [YYYY-MM-DD] | Open   |

Next independent review: [YYYY-MM-DD]`,
  },
  {
    id: "A.5.36",
    sort: 5.36,
    theme: "Organizational",
    title: "Compliance with policies, rules and standards for information security",
    tags: ["Detective", "Detect", "Governance"],
    purpose:
      "Check regularly that people and systems actually follow your security policies and standards.",
    whatItMeans:
      "Having policies isn't enough — you need to verify they're being followed. This control is about managers and reviewers periodically checking compliance, identifying where rules are being missed, and correcting it.",
    howToImplement: [
      "Have managers check their teams comply with relevant policies.",
      "Run periodic technical checks against security standards (e.g. configurations).",
      "Record where compliance is met and where it isn't.",
      "Fix non-compliance and address the root cause.",
    ],
    evidence: [
      "Records of compliance checks by managers and reviewers",
      "Technical compliance checks against standards",
      "Non-compliances logged with corrective actions",
      "Evidence root causes are addressed, not just symptoms",
    ],
    template: `# Compliance Check Record

**Area / team:** [Name]   **Checked by:** [Name]   **Date:** [YYYY-MM-DD]

## Policies / standards checked
- [Access Control Policy], [Acceptable Use Policy], [secure config baseline]

## Results
| Requirement                      | Compliant? | Evidence / notes        |
|----------------------------------|------------|-------------------------|
| MFA enabled on key systems       | [Y/N]      | [free text]             |
| Access reviews up to date        | [Y/N]      | [free text]             |
| No unapproved software found     | [Y/N]      | [free text]             |
| Devices encrypted                | [Y/N]      | [free text]             |

## Non-compliance & actions
| Issue              | Root cause        | Action          | Owner  | Due         |
|--------------------|-------------------|-----------------|--------|-------------|
| [Issue]            | [Why]             | [Fix]           | [Name] | [YYYY-MM-DD]|

Next check due: [YYYY-MM-DD]`,
  },
  {
    id: "A.5.37",
    sort: 5.37,
    theme: "Organizational",
    title: "Documented operating procedures",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Write down how to carry out important IT and security tasks, so they're done correctly and consistently by anyone.",
    whatItMeans:
      "Key activities — backups, user setup, patching, incident steps — should have simple written procedures. This means tasks don't depend on one person's memory, get done the same way each time, and are easier to hand over or audit.",
    howToImplement: [
      "List the operational tasks that need documented procedures.",
      "Write clear, step-by-step procedures anyone competent can follow.",
      "Make them available to the people who need them.",
      "Review and update procedures when systems or processes change.",
    ],
    evidence: [
      "Documented procedures for key operational tasks",
      "Procedures that are clear, current and version-controlled",
      "Procedures accessible to the relevant staff",
      "Review history showing they are kept up to date",
    ],
    template: `# Operating Procedure: [Task Name]

**Procedure ID:** [SOP-###]   **Owner:** [Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## Purpose
What this procedure is for: [e.g. how to run and verify the nightly backup].

## When to use it
[Trigger - e.g. daily at [time], or when [event] happens].

## Who can perform it
[Role / required access].

## Steps
1. [Step one - be specific]
2. [Step two]
3. [Step three]
4. [Verify the result - e.g. confirm backup completed and is restorable]

## If something goes wrong
[What to check; who to escalate to].

## Records
Record completion in [log / system]. Keep records for [period].

## Related documents
[Linked policies / procedures]`,
  },
];
