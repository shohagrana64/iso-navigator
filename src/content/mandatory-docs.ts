// Mandatory and strongly-expected documented information for an
// ISO/IEC 27001:2022 ISMS. Each entry includes a full, adaptable
// Markdown template that an organisation can copy and fill in.

import type { MandatoryDoc } from "./types";

export const mandatoryDocs: MandatoryDoc[] = [
  {
    id: "isms-scope",
    title: "ISMS Scope",
    clause: "4.3",
    category: "Policy",
    required: true,
    summary: "Defines exactly what your information security management system covers.",
    why: "The scope draws a clear boundary around what the ISMS protects — which parts of the business, which locations, systems and information. Auditors check that everything inside the boundary is actually managed, so a tight, honest scope keeps certification achievable.",
    whatToInclude: [
      "The organisational units, sites and locations covered",
      "The products, services and business processes in scope",
      "The information systems, networks and assets included",
      "Interfaces and dependencies with things outside the scope",
      "Any exclusions, with justification",
    ],
    template: `# Information Security Management System — Scope

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This document defines the scope of [Company]'s ISMS in accordance with
clause 4.3 of ISO/IEC 27001:2022.

## 2. Organisation and locations in scope
[e.g. All staff at the Head Office, 123 Example St, and remote workers.]

## 3. Products / services / processes in scope
[e.g. Development and operation of the [Product] SaaS platform.]

## 4. Information systems and assets in scope
[e.g. Production cloud environment, source code repositories, customer data.]

## 5. Out of scope (with justification)
[e.g. The marketing website, hosted separately, holds no customer data.]

## 6. Interfaces and dependencies
[Describe links to third parties, cloud providers, other business units.]

## 7. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Start narrow — a tight scope is faster and cheaper to certify, and you can expand later.",
      "Make sure everything you list as 'in scope' is genuinely covered by your controls.",
      "If you exclude something, give an honest reason an auditor will accept.",
    ],
  },
  {
    id: "information-security-policy",
    title: "Information Security Policy",
    clause: "5.2",
    category: "Policy",
    required: true,
    summary: "The top-level statement of management's commitment to protecting information.",
    why: "Clause 5.2 requires top management to set a policy that gives direction and shows leadership. It is the umbrella document every other control points back to, signalling to staff, customers and auditors that security is taken seriously from the top.",
    whatToInclude: [
      "A statement of management commitment and intent",
      "How the policy fits the organisation's purpose and context",
      "A framework for setting information security objectives",
      "A commitment to meet applicable requirements (legal, contractual)",
      "A commitment to continual improvement of the ISMS",
      "How the policy is communicated and to whom",
    ],
    template: `# Information Security Policy

**Document owner:** [CISO / Management Representative]
**Approved by:** [CEO / Top Management]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose and commitment
[Company]'s management is committed to protecting the confidentiality,
integrity and availability of the information it holds and processes.
This policy sets the direction for our Information Security Management
System (ISMS), aligned with clause 5.2 of ISO/IEC 27001:2022.

## 2. Scope
This policy applies to all employees, contractors and third parties who
access [Company]'s information or systems, within the boundary defined in
the ISMS Scope document.

## 3. Objectives framework
We will set, measure and review information security objectives (see the
Information Security Objectives document) to drive improvement.

## 4. Principles
- We protect information from unauthorised access, change and loss.
- We comply with applicable legal, regulatory and contractual requirements.
- We manage risk using a documented risk assessment process.
- Every person is responsible for security in their daily work.

## 5. Responsibilities
Top management owns this policy. [Role] is responsible for the ISMS day to
day. All staff must follow related policies and report incidents.

## 6. Continual improvement
We are committed to continually improving the effectiveness of the ISMS.

## 7. Communication
This policy is communicated to all staff at induction and on update, and is
available at [location]. It is made available to interested parties as needed.

## 8. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Keep it short and readable — one or two pages. Detail belongs in lower-level policies.",
      "Top management must visibly approve it; an auditor will look for that sign-off.",
      "Review it at least annually and after any major change to the business.",
    ],
  },
  {
    id: "information-security-objectives",
    title: "Information Security Objectives",
    clause: "6.2",
    category: "Record",
    required: true,
    summary: "Measurable goals that show the ISMS is improving security over time.",
    why: "Clause 6.2 asks you to set objectives that are consistent with the policy, measurable, monitored and updated. They turn good intentions into trackable targets, giving management and auditors evidence that the ISMS delivers real results.",
    whatToInclude: [
      "Specific objectives consistent with the security policy",
      "How each objective will be measured (the metric)",
      "The target value and the deadline",
      "Who is responsible for achieving each objective",
      "What resources are needed",
      "How and when progress is reviewed",
    ],
    template: `# Information Security Objectives

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
These objectives implement clause 6.2 of ISO/IEC 27001:2022 and support the
Information Security Policy.

## 2. Objectives

| # | Objective | Metric | Target | Owner | Due | Status |
|---|-----------|--------|--------|-------|-----|--------|
| 1 | Reduce phishing click rate | % staff clicking test phish | < 5% | [HR] | [Q4] | [On track] |
| 2 | Patch critical vulns quickly | Days to patch critical | < 7 days | [IT] | [Ongoing] | [On track] |
| 3 | Complete security training | % staff trained | 100% | [HR] | [Q2] | [In progress] |
| 4 | Close audit findings | % findings closed on time | 100% | [ISMS Mgr] | [Ongoing] | [On track] |

## 3. Resources and monitoring
[Describe budget, tools and people. State how often progress is reviewed,
e.g. monthly by the security team and quarterly at management review.]

## 4. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Make each objective measurable — 'improve security' is not auditable, 'patch criticals within 7 days' is.",
      "Pick a handful of meaningful objectives rather than a long list you cannot track.",
      "Review progress at every management review and record the results.",
    ],
  },
  {
    id: "risk-methodology",
    title: "Risk Assessment & Risk Treatment Methodology",
    clause: "6.1.2",
    category: "Methodology",
    required: true,
    summary: "The repeatable method you use to find, rate and treat information security risks.",
    why: "Clause 6.1.2 requires a defined, consistent process so risk assessments produce comparable, repeatable results. Documenting the method up front means two people assessing the same risk reach the same rating, which auditors rely on to trust your risk register.",
    whatToInclude: [
      "How risks are identified (assets, threats, vulnerabilities or scenarios)",
      "The likelihood and impact scales used",
      "How risk levels are calculated and the risk acceptance criteria",
      "Who owns and approves risks",
      "The four treatment options (modify, retain, avoid, share)",
      "How treatment links to Annex A controls and the SoA",
      "How often assessments are repeated",
    ],
    template: `# Risk Assessment and Risk Treatment Methodology

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This methodology defines how [Company] identifies, analyses, evaluates and
treats information security risks, per clause 6.1.2 of ISO/IEC 27001:2022.

## 2. Risk identification
We identify risks by [asset-based / scenario-based] analysis, considering
threats and vulnerabilities to the confidentiality, integrity and
availability of in-scope information.

## 3. Likelihood scale

| Level | Meaning |
|-------|---------|
| 1 | Rare — unlikely in 3+ years |
| 2 | Unlikely — could happen in 1-3 years |
| 3 | Possible — could happen this year |
| 4 | Likely — expected within months |

## 4. Impact scale

| Level | Meaning |
|-------|---------|
| 1 | Minor — negligible effect |
| 2 | Moderate — limited disruption |
| 3 | Major — significant loss or breach |
| 4 | Severe — critical business or legal harm |

## 5. Risk rating
Risk score = Likelihood x Impact (1-16).
- 1-3 Low, 4-7 Medium, 8-11 High, 12-16 Critical.

## 6. Risk acceptance criteria
Risks scoring [Low] may be accepted by the risk owner. Risks [Medium and
above] require a treatment plan and approval by [Role].

## 7. Treatment options
For each unacceptable risk choose: **Modify** (apply controls), **Retain**
(accept), **Avoid** (stop the activity) or **Share** (insure/outsource).
Selected controls are recorded in the Statement of Applicability.

## 8. Review frequency
Risk assessments are reviewed at least [annually] and after significant change.

## 9. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Keep your scales simple — a 4x4 matrix is plenty for most organisations.",
      "Write the method so anyone can apply it and get the same answer.",
      "Define your acceptance criteria clearly so you know when a risk can be signed off.",
    ],
  },
  {
    id: "statement-of-applicability",
    title: "Statement of Applicability (SoA)",
    clause: "6.1.3 d",
    category: "Register",
    required: true,
    summary: "The master list of all 93 Annex A controls showing which apply and why.",
    why: "The SoA is the single most important document for certification. Clause 6.1.3 d requires it to list every one of the 93 Annex A:2022 controls, state whether each is applicable, justify inclusion or exclusion, and record implementation status. Auditors use it as the index to your entire control set.",
    whatToInclude: [
      "All 93 Annex A:2022 controls (37 Organizational, 8 People, 14 Physical, 34 Technological)",
      "Whether each control is applicable (yes/no)",
      "Justification for including each applicable control",
      "Justification for excluding any control",
      "The implementation status of each control",
      "A reference to where the control is implemented (policy/evidence)",
    ],
    template: `# Statement of Applicability (SoA)

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This Statement of Applicability lists all 93 controls of Annex A of
ISO/IEC 27001:2022, states whether each is applicable to [Company], gives
the justification, and records implementation status (clause 6.1.3 d).

## 2. How to read this document
- **Applicable:** Yes / No.
- **Justification:** why the control is included (e.g. risk treatment, legal,
  contractual, best practice) or excluded (e.g. no on-prem servers).
- **Status:** Implemented / In progress / Planned / Not applicable.
- **Reference:** the policy, procedure or record that evidences it.

## 3. Control register (extract — complete all 93 rows)

| Ref | Control | Applicable | Justification | Status | Reference |
|-----|---------|-----------|---------------|--------|-----------|
| A.5.1 | Policies for information security | Yes | Required for direction | Implemented | InfoSec Policy |
| A.5.7 | Threat intelligence | Yes | Risk treatment | In progress | [doc] |
| A.5.9 | Inventory of assets | Yes | Risk + legal | Implemented | Asset Inventory |
| A.5.23 | Cloud services security | Yes | We use SaaS/IaaS | Implemented | Supplier Policy |
| A.7.1 | Physical security perimeters | No | Fully remote, no offices | N/A | — |
| A.8.1 | User endpoint devices | Yes | Staff use laptops | Implemented | Acceptable Use |
| A.8.24 | Use of cryptography | Yes | Protect data in transit/rest | Implemented | Crypto standard |
| ... | (continue for every control A.5.1–A.5.37, A.6.1–A.6.8, A.7.1–A.7.14, A.8.1–A.8.34) | | | | |

## 4. Summary
Total controls: 93. Applicable: [n]. Excluded: [n] (justified above).

## 5. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Every one of the 93 controls must have a row — never leave any blank, even excluded ones.",
      "Justify exclusions with a real reason; 'we don't think we need it' will fail an audit.",
      "Keep the SoA in sync with your risk register and policies whenever anything changes.",
    ],
  },
  {
    id: "risk-treatment-plan",
    title: "Risk Treatment Plan",
    clause: "6.1.3 e / 6.2",
    category: "Plan",
    required: true,
    summary: "The action plan for reducing each unacceptable risk to an acceptable level.",
    why: "Once risks are assessed, clause 6.1.3 e requires a plan that says what you will do about them. It assigns owners, controls, deadlines and resources, turning the risk register into concrete action and giving auditors evidence that risks are actively managed.",
    whatToInclude: [
      "Each risk to be treated and its current rating",
      "The chosen treatment option and the controls to apply",
      "The Annex A control reference for each action",
      "The owner responsible for each action",
      "The target date and resources required",
      "The expected residual risk after treatment",
      "Risk owner approval of the residual risk",
    ],
    template: `# Risk Treatment Plan

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This plan defines how [Company] treats the risks identified in the risk
assessment, per clauses 6.1.3 e and 6.2 of ISO/IEC 27001:2022.

## 2. Treatment actions

| Risk ID | Risk | Current rating | Option | Control(s) / Annex A ref | Owner | Due | Residual rating | Approved |
|---------|------|----------------|--------|--------------------------|-------|-----|-----------------|----------|
| R-001 | Phishing leads to account takeover | High | Modify | MFA + training (A.5.17, A.6.3) | [IT] | [date] | Low | [Owner] |
| R-002 | Laptop theft exposes data | Medium | Modify | Disk encryption (A.8.24) | [IT] | [date] | Low | [Owner] |
| R-003 | Supplier breach | Medium | Share | Contract clauses + DPA (A.5.20) | [Procurement] | [date] | Low | [Owner] |
| R-004 | Legacy system end of life | High | Avoid | Decommission system | [IT] | [date] | N/A | [Owner] |

## 3. Resources
[Summarise budget, tools and people allocated to deliver the actions above.]

## 4. Monitoring
Progress is tracked [monthly] and reported at management review. Completed
actions are verified and the residual risk recorded in the risk register.

## 5. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Link every action to a control reference so it traces back to your SoA.",
      "Give each action a single owner and a realistic deadline.",
      "Record the residual risk and get the risk owner to sign it off.",
    ],
  },
  {
    id: "risk-assessment-report",
    title: "Risk Assessment Report / Risk Register",
    clause: "8.2",
    category: "Register",
    required: true,
    summary: "The living record of every identified risk, its rating and its owner.",
    why: "Clause 8.2 requires you to perform risk assessments at planned intervals and keep the results. The risk register is that result — a documented snapshot proving you understand your risks. It is the evidence behind the SoA and the Risk Treatment Plan.",
    whatToInclude: [
      "A unique ID and description for each risk",
      "The asset or area affected",
      "The threat and vulnerability (or scenario)",
      "Likelihood, impact and resulting risk score",
      "The risk owner",
      "The treatment decision and link to the treatment plan",
      "The date assessed and date of next review",
    ],
    template: `# Risk Assessment Report / Risk Register

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose and method
This register records the results of [Company]'s risk assessment carried out
using the Risk Assessment Methodology (clause 8.2 of ISO/IEC 27001:2022).

## 2. Summary
Assessment date: [date]. Risks identified: [n]. Critical/High: [n].
Assessor(s): [names].

## 3. Risk register

| ID | Risk description | Asset/area | Threat / vulnerability | Likelihood (1-4) | Impact (1-4) | Score | Level | Owner | Treatment | Plan ref | Next review |
|----|------------------|-----------|------------------------|------------------|--------------|-------|-------|-------|-----------|----------|-------------|
| R-001 | Phishing account takeover | Email/M365 | Social engineering / no MFA | 3 | 3 | 9 | High | [IT] | Modify | RTP R-001 | [date] |
| R-002 | Laptop theft | Endpoints | Theft / no encryption | 2 | 3 | 6 | Medium | [IT] | Modify | RTP R-002 | [date] |
| R-003 | Supplier data breach | Customer data | 3rd party / weak controls | 2 | 4 | 8 | High | [Proc] | Share | RTP R-003 | [date] |
| R-004 | Ransomware | Servers/backups | Malware / poor backups | 2 | 4 | 8 | High | [IT] | Modify | RTP R-004 | [date] |

## 4. Conclusions
[Note overall risk posture, any risks accepted as-is, and recommendations.]

## 5. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Treat the register as a living document — update it whenever something changes, not just once a year.",
      "Use the same scoring scales as your methodology so ratings stay consistent.",
      "Assign every risk to a real, named owner who can make decisions about it.",
    ],
  },
  {
    id: "roles-responsibilities",
    title: "Roles, Responsibilities and Authorities",
    clause: "5.3 / A.5.2",
    category: "Record",
    required: true,
    summary: "A clear map of who is responsible for what in information security.",
    why: "Clause 5.3 requires top management to assign and communicate security responsibilities, and A.5.2 backs this up. Without it, tasks fall through the cracks. Documenting roles proves accountability and shows an auditor that the ISMS has owners.",
    whatToInclude: [
      "The role responsible for the ISMS overall",
      "Who approves policies and accepts risk",
      "Security duties of managers and all staff",
      "Specialist roles (IT, HR, legal, DPO) and their security tasks",
      "How responsibilities are communicated",
      "Segregation of conflicting duties where relevant",
    ],
    template: `# Information Security Roles, Responsibilities and Authorities

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This document assigns information security responsibilities per clause 5.3
and control A.5.2 of ISO/IEC 27001:2022.

## 2. Roles and responsibilities

| Role | Responsibilities | Authority |
|------|------------------|-----------|
| Top management | Provide leadership, approve policy, allocate resources | Accept top risks |
| ISMS Manager / CISO | Run the ISMS day to day, report to management | Approve procedures |
| Risk owners | Own assigned risks and treatment actions | Accept assigned risk |
| IT / Operations | Implement technical controls, patching, backups | — |
| HR | Onboarding/offboarding, training, screening | — |
| Line managers | Ensure their teams follow policy | — |
| All staff | Follow policies, protect information, report incidents | — |
| Internal auditor | Audit the ISMS independently | — |

## 3. Segregation of duties
[Describe any duties kept separate to prevent conflict, e.g. the person who
requests access is not the person who grants it.]

## 4. Communication
These responsibilities are communicated at induction, in job descriptions and
on update, and are available at [location].

## 5. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Make sure every role here maps to a real person — list names or job titles in a side register.",
      "Keep the internal auditor independent of the work they audit.",
      "Put key security duties into job descriptions so they are not forgotten.",
    ],
  },
  {
    id: "asset-inventory",
    title: "Asset Inventory",
    clause: "A.5.9",
    category: "Register",
    required: true,
    summary: "A complete list of the information and assets the ISMS must protect.",
    why: "Control A.5.9 requires an inventory of information and other associated assets, with owners. You cannot protect what you do not know you have, so this register is the foundation of risk assessment and many other controls.",
    whatToInclude: [
      "A unique ID and description for each asset",
      "The asset type (data, hardware, software, service, people)",
      "The asset owner",
      "Classification / sensitivity level",
      "Location (physical or cloud)",
      "Criticality to the business",
      "Status (active, retired) and review date",
    ],
    template: `# Information Asset Inventory

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This inventory records the information and associated assets in scope of the
ISMS and their owners, per control A.5.9 of ISO/IEC 27001:2022.

## 2. Asset register

| ID | Asset | Type | Owner | Classification | Location | Criticality | Status |
|----|-------|------|-------|----------------|----------|-------------|--------|
| A-001 | Customer database | Data | [Eng lead] | Confidential | [Cloud/AWS] | High | Active |
| A-002 | Source code repo | Data/Software | [CTO] | Confidential | [GitHub] | High | Active |
| A-003 | Staff laptops | Hardware | [IT] | Internal | [Distributed] | Medium | Active |
| A-004 | Email / M365 | Service | [IT] | Confidential | [Cloud] | High | Active |
| A-005 | HR records | Data | [HR] | Confidential | [SaaS HRIS] | Medium | Active |
| A-006 | Website | Software | [Marketing] | Public | [Cloud] | Low | Active |

## 3. Classification scheme
[Public / Internal / Confidential / Restricted — define each level.]

## 4. Maintenance
The inventory is reviewed [quarterly] and updated when assets are added,
changed or retired.

## 5. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Include information assets (data), not just hardware — data is what you are really protecting.",
      "Give every asset an owner who is accountable for protecting it.",
      "Keep it current; an outdated inventory undermines your whole risk assessment.",
    ],
  },
  {
    id: "acceptable-use-policy",
    title: "Acceptable Use Policy",
    clause: "A.5.10",
    category: "Policy",
    required: false,
    summary: "The rules for how staff may use company information and devices.",
    why: "Control A.5.10 expects rules for the acceptable use of information and assets. A clear policy tells everyone what is and is not allowed, reducing accidental misuse and giving you grounds to act if rules are broken.",
    whatToInclude: [
      "What counts as acceptable and unacceptable use",
      "Rules for email, internet and messaging",
      "Use of personal devices (BYOD) and removable media",
      "Password and authentication expectations",
      "Handling of confidential information",
      "Consequences of breaching the policy",
    ],
    template: `# Acceptable Use Policy

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This policy sets the rules for acceptable use of [Company]'s information and
assets, per control A.5.10 of ISO/IEC 27001:2022. It applies to all staff,
contractors and anyone using company systems.

## 2. General principles
Company assets are provided for business use. Limited reasonable personal use
is permitted provided it does not affect security, performance or your work.

## 3. You must
- Keep passwords secret and use multi-factor authentication where available.
- Lock your screen when away and protect devices from theft.
- Only access information you are authorised to use.
- Report lost devices and suspected incidents immediately to [contact].

## 4. You must not
- Share credentials or let others use your account.
- Install unauthorised software or disable security controls.
- Send confidential information to personal accounts or unapproved services.
- Use company systems for illegal, offensive or harmful activity.

## 5. Email, internet and messaging
[State rules for attachments, links, and approved communication tools.]

## 6. Personal devices and removable media
[State whether BYOD and USB drives are allowed, and any conditions.]

## 7. Consequences
Breaches may lead to disciplinary action up to and including termination, and
may be reported to authorities where laws are broken.

## 8. Acknowledgement
I have read and agree to follow this policy.
Name: __________  Signature: __________  Date: __________`,
    tips: [
      "Write it in plain language — staff actually need to read and follow this one.",
      "Get everyone to sign or acknowledge it, and keep the records.",
      "Re-issue it at induction and whenever it changes.",
    ],
  },
  {
    id: "access-control-policy",
    title: "Access Control Policy",
    clause: "A.5.15",
    category: "Policy",
    required: false,
    summary: "How access to information and systems is granted, reviewed and removed.",
    why: "Control A.5.15 requires rules for controlling access based on business and security needs. A documented policy ensures people get only the access they need (least privilege) and that access is removed when no longer required — a frequent audit focus.",
    whatToInclude: [
      "The principle of least privilege and need-to-know",
      "How access is requested and approved",
      "Role-based access where used",
      "Authentication requirements (passwords, MFA)",
      "How privileged/admin access is controlled",
      "Joiner, mover and leaver process",
      "How and how often access is reviewed",
    ],
    template: `# Access Control Policy

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This policy governs access to [Company]'s information and systems, per control
A.5.15 of ISO/IEC 27001:2022.

## 2. Principles
- **Least privilege:** users get only the access needed for their role.
- **Need to know:** access to information is limited to those who require it.

## 3. Requesting and approving access
Access is requested via [process/tool] and approved by [the system owner /
line manager] before being granted by [IT].

## 4. Roles and provisioning
Where possible, access is granted by role (RBAC). New starters receive a
standard profile; changes follow the joiner/mover/leaver process below.

## 5. Authentication
All accounts require [strong passwords] and multi-factor authentication for
[email, admin and remote access].

## 6. Privileged access
Admin accounts are issued only when required, are separate from normal
accounts, and their use is logged and reviewed.

## 7. Joiner / mover / leaver
- **Joiner:** access provisioned on confirmed start date.
- **Mover:** access adjusted when role changes; old access removed.
- **Leaver:** all access revoked on or before the last working day.

## 8. Access reviews
Access rights are reviewed [every 6 months] and after role changes; findings
are recorded and acted on.

## 9. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Removing leavers' access promptly is one of the most-checked items in an audit — get it tight.",
      "Keep evidence of access reviews; a signed report or ticket is enough.",
      "Separate admin accounts from everyday accounts wherever you can.",
    ],
  },
  {
    id: "incident-management-procedure",
    title: "Incident Management Procedure",
    clause: "A.5.24–5.28",
    category: "Procedure",
    required: false,
    summary: "Step-by-step process for reporting and handling security incidents.",
    why: "Controls A.5.24–A.5.28 cover planning, reporting, assessing, responding to and learning from incidents. A documented procedure means people know exactly what to do under pressure, limiting damage and capturing evidence and lessons.",
    whatToInclude: [
      "What counts as a security incident and examples",
      "How and to whom incidents are reported",
      "Roles in the response team",
      "Steps to assess, contain, eradicate and recover",
      "Evidence collection and preservation",
      "Breach notification obligations and timelines",
      "Post-incident review and lessons learned",
    ],
    template: `# Information Security Incident Management Procedure

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This procedure defines how [Company] reports, assesses and responds to
information security incidents, per controls A.5.24–A.5.28 of
ISO/IEC 27001:2022.

## 2. What is an incident?
Any event that may compromise the confidentiality, integrity or availability
of information — e.g. malware, data loss, lost device, phishing, unauthorised
access, outage.

## 3. Reporting
Report immediately to [contact / channel], available [24/7 / business hours].
Anyone may report; do not investigate alone.

## 4. Response team and roles
| Role | Responsibility |
|------|----------------|
| Incident Manager | Coordinates the response, decides severity |
| IT / Security | Technical containment and recovery |
| Comms / Legal | Notifications and external communication |

## 5. Response steps
1. **Log** the incident (time, reporter, description).
2. **Assess** severity and impact.
3. **Contain** to stop the spread.
4. **Eradicate** the cause and **recover** affected systems.
5. **Preserve evidence** (logs, screenshots) for investigation.
6. **Notify** affected parties and regulators within required timelines.
7. **Review** what happened and record lessons learned.

## 6. Breach notification
Where personal data is affected, notify [the regulator] within [72 hours] and
affected individuals where required by law.

## 7. Incident record
| Field | Value |
|-------|-------|
| Incident ID | [ ] |
| Date/time detected | [ ] |
| Severity | [ ] |
| Description | [ ] |
| Actions taken | [ ] |
| Root cause | [ ] |
| Lessons learned | [ ] |

## 8. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Make reporting easy and blame-free so people actually raise incidents early.",
      "Run a tabletop exercise once a year to test the procedure before a real event.",
      "Always do a lessons-learned review — auditors look for evidence you improve.",
    ],
  },
  {
    id: "business-continuity-plan",
    title: "Business Continuity Plan",
    clause: "A.5.29–5.30",
    category: "Plan",
    required: false,
    summary: "How the organisation keeps critical operations running during disruption.",
    why: "Controls A.5.29 and A.5.30 require information security to be maintained during disruption and ICT readiness for continuity. The plan ensures you can keep going, or recover quickly, after events like outages, cyber attacks or loss of premises.",
    whatToInclude: [
      "Critical business processes and their priorities",
      "Recovery time and recovery point objectives (RTO/RPO)",
      "Roles and the activation/escalation process",
      "Backup, failover and recovery procedures",
      "Alternative working arrangements and locations",
      "Communication plan for staff and customers",
      "Testing schedule and results",
    ],
    template: `# Business Continuity Plan

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This plan ensures [Company] can maintain or restore critical operations and
protect information during disruption, per controls A.5.29–A.5.30 of
ISO/IEC 27001:2022.

## 2. Critical processes and objectives

| Process | Priority | RTO (max downtime) | RPO (max data loss) |
|---------|----------|--------------------|--------------------|
| [Customer platform] | 1 | [4 hours] | [1 hour] |
| [Email] | 2 | [8 hours] | [4 hours] |
| [Finance/payroll] | 3 | [2 days] | [1 day] |

## 3. Activation
The plan is activated by [Role] when [criteria, e.g. an outage exceeds 1
hour]. Escalation contacts are listed in Appendix A.

## 4. Roles
| Role | Responsibility |
|------|----------------|
| BC Coordinator | Activates and leads the response |
| IT | Restores systems and data |
| Comms | Updates staff, customers and partners |

## 5. Recovery procedures
[Describe backups (frequency, location, encryption), failover, and step-by-step
restore actions for each critical system.]

## 6. Alternative arrangements
[e.g. Staff work remotely; secondary cloud region; manual fallback process.]

## 7. Communication plan
[How and when you contact staff, customers, suppliers and regulators.]

## 8. Testing
The plan is tested [annually] via [tabletop / failover test]. Results and
improvements are recorded.

## Appendix A — Key contacts
[Names, roles, phone, email, supplier emergency lines.]

## 9. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Set realistic RTO/RPO targets and make sure your backups actually meet them.",
      "Test your restores — a backup you have never restored is just hope.",
      "Keep emergency contacts off the systems that might be down (e.g. a printed copy).",
    ],
  },
  {
    id: "supplier-security-policy",
    title: "Supplier Security Policy",
    clause: "A.5.19–5.22",
    category: "Policy",
    required: false,
    summary: "How you manage information security risks from suppliers and vendors.",
    why: "Controls A.5.19–A.5.22 cover security in supplier relationships, in agreements, across the ICT supply chain, and in monitoring service changes. Since suppliers often handle your data, this policy ensures they protect it to your standard.",
    whatToInclude: [
      "How suppliers are assessed before onboarding",
      "Security requirements to include in contracts",
      "Handling of cloud and ICT supply chain risk",
      "Data protection / processing agreements where personal data is involved",
      "Ongoing monitoring and review of supplier security",
      "Offboarding and return/deletion of data",
    ],
    template: `# Supplier Information Security Policy

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This policy manages information security risks arising from suppliers and the
ICT supply chain, per controls A.5.19–A.5.22 of ISO/IEC 27001:2022.

## 2. Supplier assessment
Before engaging a supplier that handles [Company] information, we assess their
security via [questionnaire / certifications such as ISO 27001 or SOC 2 /
review]. Risk is rated and recorded.

## 3. Contractual requirements
Supplier contracts include, as relevant:
- Confidentiality and data protection obligations.
- Required security controls and certifications.
- Incident notification timelines.
- Right to audit or request evidence.
- Return or secure deletion of data at the end of the contract.

## 4. Cloud and ICT supply chain
We confirm cloud and ICT suppliers meet our requirements (A.5.23) and consider
risks from their own sub-suppliers.

## 5. Supplier register

| Supplier | Service | Data handled | Risk | Assurance held | Review date |
|----------|---------|--------------|------|----------------|-------------|
| [Vendor] | [Hosting] | [Customer data] | High | [ISO 27001] | [date] |
| [Vendor] | [Email] | [Internal] | Medium | [SOC 2] | [date] |

## 6. Monitoring and review
Supplier security is reviewed [annually] and when their service changes
materially (A.5.22).

## 7. Offboarding
On termination, access is revoked and data is returned or securely deleted with
confirmation obtained.

## 8. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Focus your effort on suppliers that touch sensitive data — not every vendor needs a deep review.",
      "Ask for existing certifications (ISO 27001, SOC 2) to save reinventing assessments.",
      "Keep a supplier register and set review dates so monitoring actually happens.",
    ],
  },
  {
    id: "legal-requirements-register",
    title: "Statutory, Regulatory & Contractual Requirements Register",
    clause: "A.5.31",
    category: "Register",
    required: false,
    summary: "A list of the laws, regulations and contract terms you must comply with.",
    why: "Control A.5.31 requires you to identify and document the legal, statutory, regulatory and contractual requirements relevant to information security. The register proves you know your obligations and have a way to keep meeting them.",
    whatToInclude: [
      "Relevant laws and regulations (e.g. privacy, sector-specific)",
      "Contractual security commitments to customers",
      "The obligation each requirement places on you",
      "The owner responsible for compliance",
      "How compliance is met and evidenced",
      "Review date to catch changes in the law",
    ],
    template: `# Statutory, Regulatory and Contractual Requirements Register

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This register identifies the legal, statutory, regulatory and contractual
requirements relevant to [Company]'s information security, per control A.5.31
of ISO/IEC 27001:2022.

## 2. Register

| ID | Requirement | Source | Obligation on us | Owner | How we comply | Review date |
|----|-------------|--------|------------------|-------|---------------|-------------|
| L-001 | Privacy / data protection law | [GDPR / local Act] | Protect personal data, breach notice | [DPO] | Privacy programme, DPA | [date] |
| L-002 | Customer contract security terms | [Customer MSA] | Encrypt data, notify in 24h | [Account] | Crypto + incident proc | [date] |
| L-003 | Industry regulation | [e.g. PCI DSS] | Protect cardholder data | [IT] | PCI controls | [date] |
| L-004 | Records retention law | [local law] | Retain/destroy records | [Ops] | Retention schedule | [date] |

## 3. Maintenance
The register is reviewed [at least annually] and whenever laws, regulations or
key contracts change. Legal updates are tracked via [source/service].

## 4. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Include contractual commitments, not just laws — customer contracts often impose strict security terms.",
      "Assign an owner to each requirement so someone is accountable for staying compliant.",
      "Set review dates; laws change, and an auditor will ask how you keep current.",
    ],
  },
  {
    id: "internal-audit-programme",
    title: "Internal Audit Programme & Report",
    clause: "9.2",
    category: "Record",
    required: true,
    summary: "The plan and results of independent checks that the ISMS works.",
    why: "Clause 9.2 requires internal audits at planned intervals to confirm the ISMS conforms to the standard and is effective. Audits catch problems before the certification body does, and the programme plus reports are mandatory evidence.",
    whatToInclude: [
      "The audit schedule covering all ISMS areas over time",
      "Audit scope, criteria and objectives",
      "Auditor selection ensuring independence",
      "Findings: conformities and nonconformities",
      "Evidence reviewed",
      "Conclusions and recommendations",
      "How findings feed corrective action",
    ],
    template: `# Internal Audit Programme and Report

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## Part A — Audit Programme

## 1. Purpose
This programme plans internal ISMS audits per clause 9.2 of
ISO/IEC 27001:2022, ensuring all areas are audited over a [12-month] cycle.

## 2. Schedule

| Audit | Scope / clauses & controls | Auditor | Planned date | Status |
|-------|----------------------------|---------|--------------|--------|
| 1 | Clauses 4-7 + leadership | [Auditor] | [date] | Planned |
| 2 | Risk, SoA, Annex A controls | [Auditor] | [date] | Planned |
| 3 | Operations, incidents, suppliers | [Auditor] | [date] | Planned |

Auditors are independent of the areas they audit.

## Part B — Audit Report

## 3. Audit details
Audit: [#]   Date: [date]   Auditor: [name]   Scope: [areas/clauses]
Criteria: ISO/IEC 27001:2022, [Company] policies.

## 4. Findings

| Ref | Area | Finding type | Description | Evidence |
|-----|------|--------------|-------------|----------|
| F-01 | Access control | Conformity | Access reviews done on time | Review log |
| F-02 | Asset inventory | Minor NC | 3 assets missing owners | Inventory |
| F-03 | Training | Observation | Refresher overdue for 2 staff | LMS report |

## 5. Conclusion
[Overall the ISMS is effective / needs improvement in ...]. Nonconformities are
logged in the Corrective Action Log for resolution.

## 6. Sign-off
Auditor: [Name]   Date: [date]   Auditee acknowledgement: [Name]`,
    tips: [
      "The auditor must be independent of the work being audited — never audit your own area.",
      "You do not need to audit everything at once; cover all areas across the cycle.",
      "Log every nonconformity and track it to closure in your corrective action log.",
    ],
  },
  {
    id: "management-review-minutes",
    title: "Management Review Minutes",
    clause: "9.3",
    category: "Record",
    required: true,
    summary: "The record of top management reviewing the ISMS and making decisions.",
    why: "Clause 9.3 requires top management to review the ISMS at planned intervals using defined inputs and to record decisions. The minutes prove leadership engagement and that the ISMS is steered, resourced and improved from the top.",
    whatToInclude: [
      "Date, attendees and apologies",
      "Status of actions from previous reviews",
      "Changes in internal/external issues relevant to the ISMS",
      "Performance: incidents, audit results, objectives, metrics",
      "Feedback from interested parties",
      "Risk assessment results and treatment status",
      "Opportunities for improvement and decisions made",
      "New actions with owners and dates",
    ],
    template: `# ISMS Management Review — Minutes

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Attendees
Present: [names/roles, including top management].   Apologies: [names].

## 2. Purpose
Management review of the ISMS per clause 9.3 of ISO/IEC 27001:2022.

## 3. Review inputs

| Topic | Summary / discussion |
|-------|----------------------|
| Actions from last review | [open/closed status] |
| Changes in issues / context | [internal & external changes] |
| Interested party feedback | [customer, regulator, staff] |
| Nonconformities & corrective actions | [count, status] |
| Monitoring & measurement results | [metrics vs targets] |
| Audit results | [internal/external findings] |
| Objectives | [progress against objectives] |
| Risk assessment & treatment | [changes, residual risk] |
| Improvement opportunities | [suggestions raised] |

## 4. Decisions and outcomes
[Record decisions on improvements, changes to the ISMS, and resources needed.]

## 5. Actions

| # | Action | Owner | Due date |
|---|--------|-------|----------|
| 1 | [action] | [owner] | [date] |
| 2 | [action] | [owner] | [date] |

## 6. Sign-off
Chaired by [Name], [Role], on [Date].`,
    tips: [
      "Top management must attend — that is the whole point of the review.",
      "Cover every required input listed in clause 9.3; auditors check them off.",
      "Capture clear actions with owners and dates, then follow them up next time.",
    ],
  },
  {
    id: "corrective-action-log",
    title: "Corrective Action & Nonconformity Log",
    clause: "10.2",
    category: "Record",
    required: true,
    summary: "The record of problems found and the actions taken to fix them for good.",
    why: "Clause 10.2 requires you to react to nonconformities, correct them, deal with the cause, and check the fix worked. The log is the documented evidence that issues are not just patched but properly resolved and prevented from recurring.",
    whatToInclude: [
      "A unique ID and description of the nonconformity",
      "The source (audit, incident, complaint, review)",
      "Immediate correction taken",
      "Root cause analysis",
      "The corrective action to prevent recurrence",
      "Owner and due date",
      "Verification that the action was effective, and closure date",
    ],
    template: `# Corrective Action and Nonconformity Log

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This log records nonconformities and corrective actions per clause 10.2 of
ISO/IEC 27001:2022.

## 2. Log

| ID | Nonconformity | Source | Date raised | Correction (immediate) | Root cause | Corrective action | Owner | Due | Verified effective | Closed |
|----|---------------|--------|-------------|------------------------|-----------|-------------------|-------|-----|--------------------|--------|
| NC-001 | 3 assets missing owners | Internal audit | [date] | Owners assigned | Inventory not reviewed | Add quarterly review step | [IT] | [date] | Yes — checked next quarter | [date] |
| NC-002 | Leaver access not revoked | Incident | [date] | Access removed | No leaver checklist | Add HJM checklist + alert | [HR] | [date] | [pending] | [open] |

## 3. How to use this log
1. Record the nonconformity and its source.
2. Take immediate correction.
3. Analyse the root cause (ask "why" until you reach it).
4. Define a corrective action that stops it recurring.
5. Verify the action actually worked before closing.

## 4. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Always dig for the root cause — fixing the symptom alone means the problem comes back.",
      "Do not close an action until you have verified it actually worked.",
      "Use this log for audit findings, incidents and improvement ideas alike.",
    ],
  },
  {
    id: "competence-training-records",
    title: "Competence & Training Records",
    clause: "7.2",
    category: "Record",
    required: true,
    summary: "Evidence that the people running the ISMS are competent and trained.",
    why: "Clause 7.2 requires that people doing security-relevant work are competent and that you keep evidence of it. Training records prove staff understand their responsibilities and that you have addressed any gaps — a common audit request.",
    whatToInclude: [
      "Required competencies per role",
      "Training and awareness delivered, with dates",
      "Who attended / completed each session",
      "Qualifications, certifications and experience held",
      "Identified competence gaps and actions to close them",
      "Evidence of effectiveness (e.g. quiz, sign-off)",
    ],
    template: `# Competence and Training Records

**Document owner:** [Role]   **Approved by:** [Name/Role]
**Version:** [1.0]   **Date:** [YYYY-MM-DD]   **Next review:** [YYYY-MM-DD]

## 1. Purpose
This document records the competence and training of people doing
security-relevant work, per clause 7.2 of ISO/IEC 27001:2022.

## 2. Required competencies by role

| Role | Required competence | Evidence type |
|------|---------------------|---------------|
| ISMS Manager | ISO 27001 knowledge | Course / cert |
| IT / Ops | Secure config, patching | Experience / training |
| All staff | Security awareness | Annual training |

## 3. Training and awareness log

| Date | Topic | Delivered by | Attendees / completers | Evidence | Effectiveness check |
|------|-------|--------------|------------------------|----------|---------------------|
| [date] | Security induction | [HR] | [list / 100%] | Sign-in | Quiz passed |
| [date] | Phishing awareness | [IT] | [list] | LMS report | Sim click-rate |
| [date] | ISO 27001 Lead Implementer | [provider] | [name] | Certificate | Pass |

## 4. Competence gaps and actions

| Person / role | Gap | Action | Owner | Due |
|---------------|-----|--------|-------|-----|
| [name] | [gap] | [training/hire] | [mgr] | [date] |

## 5. Approval
Approved by [Name], [Role], on [Date].`,
    tips: [
      "Keep simple evidence — attendance lists, certificates and quiz results are enough.",
      "Refresh security awareness training at least once a year for all staff.",
      "When you find a competence gap, record the action you took to close it.",
    ],
  },
];
