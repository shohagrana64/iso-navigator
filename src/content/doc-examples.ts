// Filled-in, audit-ready worked examples for each mandatory document.
export const docExamples: Record<string, string> = {
  "isms-scope": `# ISMS Scope Statement

**Document owner:** Priya Sharma (CISO / ISMS Manager)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.2
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, 4.3

## 1. Purpose
This document defines the boundaries and applicability of the Information Security Management System (ISMS) of Northwind Logistics Pty Ltd.

## 2. The Organisation
Northwind Logistics Pty Ltd is a 70-person Australian company headquartered in Melbourne, Victoria. We provide a cloud-based freight-tracking SaaS platform to logistics customers and operate a physical warehouse facility.

## 3. Scope Statement
The ISMS covers the design, development, hosting, support and operation of the Northwind freight-tracking SaaS platform, the associated customer and operational data, and the corporate IT services that support these activities, including warehouse operations at the Melbourne site.

## 4. Boundaries

### 4.1 Organisational
- All Northwind staff (~70), including the ~12-person Engineering team.
- Melbourne head office and warehouse facility.
- Remote and hybrid workers connecting to corporate systems.

### 4.2 Technological
- Production SaaS platform hosted on Amazon Web Services (AWS), Sydney region (ap-southeast-2).
- Corporate services: Google Workspace, GitHub, Jira, Xero.
- Corporate and warehouse network, endpoints and mobile devices.

### 4.3 Physical
- Melbourne head office and co-located warehouse.

## 5. Interfaces and Dependencies
- AWS (infrastructure provider).
- Google Workspace (email, identity, productivity).
- GitHub (source code), Jira (work management), Xero (finance/payroll).
- Customer organisations that consume the SaaS platform.

## 6. Exclusions
No clauses of ISO/IEC 27001:2022 are excluded. Physical warehouse machinery used purely for freight handling (forklifts, conveyors) is outside the ISMS except where it connects to in-scope IT systems.

## 7. Justification
The scope reflects the activities, locations and assets material to the confidentiality, integrity and availability of customer and company information.
`,

  "information-security-policy": `# Information Security Policy

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 2.0
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, 5.2

## 1. Purpose
Northwind Logistics Pty Ltd is committed to protecting the confidentiality, integrity and availability of the information it holds for its customers, staff and partners. This policy sets out top management's direction for information security.

## 2. Scope
This policy applies to all employees, contractors and third parties who access Northwind information or systems, and to all assets within the ISMS scope.

## 3. Policy Statements
Northwind commits to:
- Establishing, operating and continually improving an ISMS aligned to ISO/IEC 27001:2022.
- Protecting information against unauthorised access, disclosure, modification and loss.
- Meeting applicable legal, regulatory and contractual requirements, including the Australian Privacy Act 1988 and GDPR where relevant.
- Setting and reviewing measurable information security objectives.
- Assessing and treating information security risks using a defined methodology.
- Providing security awareness training to all staff.
- Reporting, investigating and learning from security incidents.
- Ensuring business continuity for critical services.

## 4. Roles and Responsibilities
- The CEO (Daniel Cooper) holds overall accountability for information security.
- The CISO / ISMS Manager (Priya Sharma) owns and maintains the ISMS.
- The IT Lead (Marcus Webb) implements technical controls.
- All staff are responsible for complying with this policy and supporting policies.

## 5. Compliance
Breaches of this policy may result in disciplinary action up to and including termination, and may be reported to authorities where required by law.

## 6. Review
This policy is reviewed at least annually and after significant change. It is communicated to all staff and made available to interested parties on request.

**Signed:** Daniel Cooper, CEO — 2025-03-14
`,

  "information-security-objectives": `# Information Security Objectives

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.1
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, 6.2

## 1. Purpose
This document sets out the measurable information security objectives of Northwind Logistics Pty Ltd for 2025, derived from the Information Security Policy and the results of risk assessment.

## 2. Objectives

| # | Objective | Measure / Target | Owner | Resources | Timeline | Status |
|---|-----------|------------------|-------|-----------|----------|--------|
| 1 | Maintain platform availability | >= 99.9% monthly uptime for SaaS platform | Marcus Webb | AWS monitoring, on-call rota | Ongoing, monthly | On track (99.95% avg) |
| 2 | Complete security awareness training | 100% of staff complete annual training | Priya Sharma | KnowBe4 licences | By 2025-06-30 | 88% complete |
| 3 | Reduce high/critical risks | No untreated high/critical risks in register | Priya Sharma | Risk budget | By 2025-09-30 | 2 of 3 treated |
| 4 | Patch critical vulnerabilities | Critical CVEs patched within 7 days | Marcus Webb | Vuln scanner, patch window | Ongoing | On track |
| 5 | Achieve ISO 27001 certification | Pass Stage 2 audit | Daniel Cooper | Auditor, consultant | By 2025-11-30 | In progress |
| 6 | Enforce MFA | MFA on 100% of admin and SaaS accounts | Marcus Webb | Google Workspace, AWS IAM | By 2025-05-31 | 100% complete |

## 3. Monitoring
Progress against objectives is reviewed quarterly by the ISMS Manager and reported at Management Review.

## 4. Communication
Objectives are communicated to relevant staff via the company wiki and team meetings.
`,

  "risk-methodology": `# Risk Assessment & Treatment Methodology

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.3
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, 6.1.2

## 1. Purpose
This methodology defines how Northwind Logistics Pty Ltd identifies, analyses, evaluates and treats information security risks consistently and repeatably.

## 2. Approach
Risk assessment is asset- and scenario-based. Risks are recorded in the Risk Register. Assessment is performed at least annually and on significant change.

## 3. Risk Identification
For each in-scope asset, we identify threats and vulnerabilities that could compromise confidentiality, integrity or availability. Risk owners are assigned for every risk.

## 4. Risk Analysis
Each risk is scored on a 1-5 scale for Likelihood and Impact.

**Likelihood:** 1 Rare, 2 Unlikely, 3 Possible, 4 Likely, 5 Almost certain.
**Impact:** 1 Negligible, 2 Minor, 3 Moderate, 4 Major, 5 Severe.

**Risk score = Likelihood x Impact (range 1-25).**

| Score | Level |
|-------|-------|
| 1-4 | Low |
| 5-9 | Medium |
| 10-15 | High |
| 16-25 | Critical |

## 5. Risk Evaluation
Risk acceptance criteria: risks scoring Low (1-4) may be accepted by the risk owner. Medium, High and Critical risks must be treated, with residual risk approved by the CISO; Critical residual risk requires CEO approval.

## 6. Risk Treatment
One of four options is selected: Modify (apply controls), Avoid, Share/Transfer, or Retain/Accept. Controls are selected with reference to Annex A of ISO/IEC 27001:2022 and recorded in the Statement of Applicability.

## 7. Residual Risk
After treatment, residual likelihood and impact are re-scored and recorded. Accepted residual risk is signed off by the relevant authority.

## 8. Roles
The CISO maintains the methodology and register; risk owners own treatment of their risks.
`,

  "statement-of-applicability": `# Statement of Applicability (SoA)

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.4
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, 6.1.3 d)

## 1. Purpose
This SoA lists the Annex A controls of ISO/IEC 27001:2022, states whether each is applicable, gives the justification for inclusion or exclusion, and records implementation status.

> **Note:** The full SoA contains all **93** Annex A controls (A.5 Organizational, A.6 People, A.7 Physical, A.8 Technological). The rows below are a **representative sample** across all four themes. The complete table is maintained in the controlled master copy.

## 2. Control Table (sample)

| Ref | Control | Applicable | Justification | Status |
|-----|---------|:---------:|---------------|--------|
| A.5.1 | Policies for information security | Yes | Required to set management direction | Implemented |
| A.5.7 | Threat intelligence | Yes | Used to inform patching and risk review | Implemented |
| A.5.15 | Access control | Yes | Customer and production data require restricted access | Implemented |
| A.5.19 | Information security in supplier relationships | Yes | Reliance on AWS, Google Workspace and payroll provider | Implemented |
| A.5.23 | Information security for use of cloud services | Yes | Platform runs entirely on AWS | Implemented |
| A.6.1 | Screening | Yes | Background checks required before hire | Implemented |
| A.6.3 | Information security awareness, education and training | Yes | All staff handle customer data | Implemented |
| A.6.7 | Remote working | Yes | Hybrid and remote workforce | Implemented |
| A.7.2 | Physical entry | Yes | Melbourne office and warehouse access controlled | Implemented |
| A.7.4 | Physical security monitoring | Yes | CCTV at warehouse and office | Implemented |
| A.7.10 | Storage media | Yes | Removable media policy in place | Implemented |
| A.8.1 | User endpoint devices | Yes | Managed laptops and MDM | Implemented |
| A.8.5 | Secure authentication | Yes | MFA enforced on all key systems | Implemented |
| A.8.8 | Management of technical vulnerabilities | Yes | Vulnerability scanning and patch SLAs | Implemented |
| A.8.12 | Data leakage prevention | Yes | DLP on Google Workspace | In progress |
| A.8.13 | Information backup | Yes | Automated AWS backups, tested restores | Implemented |
| A.8.16 | Monitoring activities | Yes | CloudWatch and centralised logging | Implemented |
| A.8.24 | Use of cryptography | Yes | TLS in transit, encryption at rest on AWS | Implemented |

## 3. Exclusions
No Annex A control has been excluded without justification. Any control marked "No" in the full SoA carries a documented reason (for example, controls relating to development of physical hardware products, which Northwind does not produce).
`,

  "risk-treatment-plan": `# Risk Treatment Plan

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.2
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, 6.1.3 e)

## 1. Purpose
This plan sets out how Northwind Logistics Pty Ltd treats the risks identified in the Risk Register, including selected controls, owners, resources, target dates and residual risk.

## 2. Treatment Table

| Risk ID | Risk summary | Inherent score | Treatment option | Controls (Annex A) | Owner | Target date | Residual score | Status |
|---------|--------------|:--------------:|------------------|--------------------|-------|-------------|:--------------:|--------|
| R-001 | Compromise of AWS admin credentials | 20 (Critical) | Modify | A.8.5 MFA, A.8.2 privileged access | Marcus Webb | 2025-05-31 | 6 (Medium) | Done |
| R-002 | Customer data breach via app vulnerability | 16 (Critical) | Modify | A.8.8, A.8.25 secure dev, A.8.28 secure coding | Marcus Webb | 2025-07-31 | 8 (Medium) | In progress |
| R-003 | Ransomware on corporate endpoints | 12 (High) | Modify | A.8.7 anti-malware, A.8.13 backup | Marcus Webb | 2025-06-30 | 4 (Low) | Done |
| R-004 | Loss of key supplier (AWS region outage) | 10 (High) | Modify | A.5.30 ICT readiness, A.8.14 redundancy | Priya Sharma | 2025-09-30 | 6 (Medium) | In progress |
| R-005 | Insider data exfiltration | 9 (Medium) | Modify | A.8.12 DLP, A.5.15 access control | Priya Sharma | 2025-08-31 | 4 (Low) | In progress |
| R-006 | Phishing leading to account takeover | 12 (High) | Modify | A.6.3 awareness, A.8.5 MFA | Priya Sharma | 2025-06-30 | 4 (Low) | Done |

## 3. Approval of Residual Risk
Residual Medium risks are accepted by the CISO. No Critical residual risks remain. Acceptance recorded in the Risk Register.

## 4. Monitoring
Treatment progress is reviewed monthly by the ISMS Manager and reported at Management Review.
`,

  "risk-assessment-report": `# Risk Assessment Report & Risk Register

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 2.1
**Assessment date:** 2025-02-28
**Approved:** 2025-03-14
**Next review:** 2026-02-28
**Clause:** ISO/IEC 27001:2022, 6.1.2 / 8.2

## 1. Summary
This report records the results of the 2025 information security risk assessment for Northwind Logistics Pty Ltd, performed using the approved Risk Assessment & Treatment Methodology (L x I, 1-25). 18 risks were identified; the most significant are recorded below. Two Critical risks were identified and have since been treated to acceptable residual levels.

## 2. Risk Register

| ID | Asset / area | Threat / vulnerability | L | I | Score | Level | Owner | Treatment | Residual |
|----|--------------|------------------------|:-:|:-:|:-----:|-------|-------|-----------|:--------:|
| R-001 | AWS production environment | Compromise of admin credentials (no MFA) | 4 | 5 | 20 | Critical | Marcus Webb | MFA + privileged access mgmt | 6 |
| R-002 | SaaS application | Web vulnerability leading to data breach | 4 | 4 | 16 | Critical | Marcus Webb | SAST/DAST, code review, patching | 8 |
| R-003 | Corporate endpoints | Ransomware via email/download | 3 | 4 | 12 | High | Marcus Webb | EDR, backups, awareness | 4 |
| R-004 | AWS Sydney region | Regional outage / service unavailability | 2 | 5 | 10 | High | Priya Sharma | Multi-AZ, DR plan, backups | 6 |
| R-005 | Customer/HR data | Insider exfiltration | 3 | 3 | 9 | Medium | Priya Sharma | DLP, least privilege, logging | 4 |
| R-006 | Staff accounts | Phishing / account takeover | 4 | 3 | 12 | High | Priya Sharma | MFA, awareness, conditional access | 4 |
| R-007 | Warehouse network | Unauthorised device on network | 2 | 3 | 6 | Medium | Marcus Webb | Network segmentation, NAC | 4 |
| R-008 | Payroll data (Xero) | Supplier breach exposing salary data | 2 | 4 | 8 | Medium | Priya Sharma | Supplier review, MFA, DPA | 4 |
| R-009 | Source code (GitHub) | Leak of secrets in repositories | 3 | 3 | 9 | Medium | Marcus Webb | Secret scanning, branch protection | 3 |

## 3. Conclusion
All High and Critical risks have an assigned owner and treatment in the Risk Treatment Plan. No risk is accepted above Medium residual level. The register will be reviewed at the next scheduled assessment or on significant change.
`,

  "roles-responsibilities": `# Roles, Responsibilities & Authorities

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.1
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, 5.3

## 1. Purpose
This document defines the information security roles, responsibilities and authorities within Northwind Logistics Pty Ltd to ensure the ISMS is established, operated and improved.

## 2. Roles

| Role | Person | Responsibilities | Authority |
|------|--------|------------------|-----------|
| CEO | Daniel Cooper | Overall accountability for information security; provides resources; approves policy and high-level risk acceptance | Approve ISMS policy, budget, Critical residual risk |
| CISO / ISMS Manager | Priya Sharma | Owns and operates the ISMS; maintains risk register, SoA and policies; reports to top management | Approve procedures, Medium/High residual risk, control changes |
| IT Lead | Marcus Webb | Implements and maintains technical controls; manages AWS, endpoints and networks; leads incident technical response | Make operational technical decisions, apply patches |
| Engineering Manager | Aisha Rahman | Secure development practices; code review; secure SDLC | Enforce branch protection and review gates |
| HR Manager | Tom Nguyen | Staff screening, onboarding/offboarding, training records, disciplinary process | Initiate access revocation, manage training |
| All staff | All employees / contractors | Comply with policies; report incidents and weaknesses; protect assets they use | Report incidents directly to the CISO |

## 3. Segregation of Duties
Production deployment approval is separated from code authorship. Privileged AWS access is granted only to the IT Lead and one nominated deputy.

## 4. Reporting Lines
The CISO reports directly to the CEO on ISMS performance. Information security is a standing item at Management Review.
`,

  "asset-inventory": `# Information Asset Inventory

**Document owner:** Marcus Webb (IT Lead)
**Approved by:** Priya Sharma (CISO)
**Version:** 3.0
**Last updated:** 2025-03-10
**Next review:** 2025-09-10
**Clause:** ISO/IEC 27001:2022, A.5.9

## 1. Purpose
This inventory records information and associated assets within the ISMS scope, their owners and classification.

## 2. Classification scheme
Public, Internal, Confidential, Restricted.

## 3. Asset Table

| ID | Asset | Type | Location | Owner | Classification |
|----|-------|------|----------|-------|----------------|
| A-001 | Customer freight-tracking database | Information / DB | AWS RDS (ap-southeast-2) | Marcus Webb | Restricted |
| A-002 | SaaS application source code | Software / code | GitHub | Aisha Rahman | Confidential |
| A-003 | Production application servers | Compute | AWS EC2/ECS (Sydney) | Marcus Webb | Confidential |
| A-004 | Customer PII (contacts, addresses) | Information | AWS RDS | Priya Sharma | Restricted |
| A-005 | Employee HR & payroll records | Information | Xero / Google Workspace | Tom Nguyen | Restricted |
| A-006 | Corporate email & documents | Information / SaaS | Google Workspace | Priya Sharma | Confidential |
| A-007 | Staff laptops (managed) | Endpoint | Melbourne / remote | Marcus Webb | Internal |
| A-008 | Warehouse handheld scanners | Endpoint | Melbourne warehouse | Marcus Webb | Internal |
| A-009 | Jira project data | Information / SaaS | Atlassian cloud | Aisha Rahman | Internal |
| A-010 | AWS account & IAM config | Configuration | AWS | Marcus Webb | Restricted |
| A-011 | Backups (database snapshots) | Information | AWS S3/Backup | Marcus Webb | Restricted |
| A-012 | Company website | Software | AWS / CDN | Priya Sharma | Public |

## 4. Maintenance
The inventory is reviewed every six months and updated when assets are added, retired or reclassified. Asset owners are responsible for keeping their entries accurate.
`,

  "acceptable-use-policy": `# Acceptable Use Policy

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.2
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, A.5.10

## 1. Purpose
This policy defines acceptable use of Northwind Logistics' information, systems and devices to protect them from misuse and compromise.

## 2. Scope
Applies to all employees, contractors and third parties using Northwind systems, including Google Workspace, AWS, GitHub, Jira, Xero and company devices.

## 3. Acceptable Use
- Use company systems primarily for business purposes; limited reasonable personal use is permitted.
- Keep credentials confidential; never share passwords.
- Use the company password manager and enable MFA on all accounts.
- Lock screens when away and store devices securely.
- Report lost or stolen devices and suspected incidents to the IT Lead or CISO immediately.

## 4. Prohibited Use
- Installing unapproved software or connecting unauthorised devices.
- Disabling security controls (antivirus, MDM, firewall).
- Accessing data you are not authorised to access.
- Sending customer or company Confidential/Restricted data to personal accounts or unapproved cloud services.
- Using company systems for illegal, harassing or offensive activity.

## 5. Email and Internet
Be alert to phishing. Do not click suspicious links or open unexpected attachments. Report suspected phishing using the report button in Google Workspace.

## 6. Monitoring
Northwind may monitor use of its systems for security and compliance, in line with applicable law and the Privacy Policy.

## 7. Compliance
Breaches may result in disciplinary action up to and including termination.

**Acknowledged by all staff at onboarding and annually.**
`,

  "access-control-policy": `# Access Control Policy

**Document owner:** Marcus Webb (IT Lead)
**Approved by:** Priya Sharma (CISO)
**Version:** 1.3
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, A.5.15 - A.5.18, A.8.2 - A.8.5

## 1. Purpose
This policy governs how access to Northwind Logistics' information and systems is granted, reviewed and revoked.

## 2. Principles
- **Least privilege:** users receive only the access required for their role.
- **Need to know:** access to Confidential/Restricted data is restricted to those who require it.
- **Role-based access:** access is assigned by role wherever possible.

## 3. User Access Management
- Access is requested by the line manager and approved by the system/asset owner.
- New accounts are provisioned through Google Workspace as the central identity provider.
- All access changes are logged in Jira.

## 4. Authentication
- Multi-factor authentication is mandatory for Google Workspace, AWS, GitHub and Xero.
- Passwords meet complexity requirements and are stored in the approved password manager.
- Shared accounts are prohibited except where technically unavoidable and individually approved.

## 5. Privileged Access
- AWS administrative and root access is limited to the IT Lead and one nominated deputy.
- Privileged actions are logged and reviewed. Root account use is alarmed.

## 6. Access Reviews
Access rights are reviewed quarterly by asset owners. Dormant accounts (90 days inactive) are disabled.

## 7. Joiners, Movers, Leavers
- Joiners: access granted on confirmed start date after screening.
- Movers: access adjusted within 5 business days of role change.
- Leavers: all access revoked on the last working day; HR notifies IT via the offboarding checklist.

## 8. Remote Access
Remote access requires a managed device with MFA. Public/shared computers must not be used for Restricted data.
`,

  "incident-management-procedure": `# Information Security Incident Management Procedure

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.2
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, A.5.24 - A.5.28

## 1. Purpose
This procedure defines how Northwind Logistics detects, reports, assesses, responds to and learns from information security incidents.

## 2. Definitions
An **event** is any observable occurrence; an **incident** is an event that compromises, or may compromise, confidentiality, integrity or availability.

## 3. Reporting
All staff must report suspected incidents immediately to the IT Lead or CISO via the #security Slack channel or security@northwind.example. Out of hours, use the on-call number.

## 4. Process
1. **Identify & log** the incident in the incident log.
2. **Assess severity** (Low/Medium/High/Critical) based on impact and data involved.
3. **Contain** to limit damage.
4. **Eradicate** the root cause.
5. **Recover** affected services and verify integrity.
6. **Notify** affected parties and the OAIC where the Notifiable Data Breaches scheme applies (eligible data breach within 30 days).
7. **Review** in a post-incident review and raise corrective actions.

## 5. Roles
The CISO is the incident coordinator; the IT Lead leads technical response; the CEO is informed of High/Critical incidents and approves external communications.

## 6. Incident Log (worked example)

| ID | Date | Description | Severity | Detected by | Response | Status | Lessons |
|----|------|-------------|----------|-------------|----------|--------|---------|
| INC-2025-004 | 2025-04-09 | Engineer received targeted phishing email; clicked link but entered no credentials (blocked by MFA prompt being unexpected). Reported within 10 min. | Medium | Staff report | Account password reset, sessions revoked, sender blocked, IOCs shared, reminder sent to all staff | Closed 2025-04-11 | Reinforced phishing training; added external-sender banner. Linked to CA-2025-002 |
| INC-2025-005 | 2025-05-02 | Brief AWS Sydney AZ degradation; one service slow for 18 min. No data loss. | Low | CloudWatch alarm | Traffic shifted to healthy AZ; monitored to recovery | Closed 2025-05-02 | Confirmed multi-AZ failover working |

## 7. Records
Incident records are retained for at least 3 years.
`,

  "business-continuity-plan": `# Business Continuity Plan (ICT Continuity)

**Document owner:** Marcus Webb (IT Lead)
**Approved by:** Priya Sharma (CISO)
**Version:** 1.1
**Approved:** 2025-03-14
**Next review:** 2026-03-14 (and after any invocation)
**Clause:** ISO/IEC 27001:2022, A.5.29, A.5.30, A.8.13, A.8.14

## 1. Purpose
This plan ensures Northwind Logistics can maintain or restore its critical service - the freight-tracking SaaS platform - during and after a disruption.

## 2. Scope
Covers the SaaS platform, customer data, and the corporate services required to support customers (Google Workspace, communications).

## 3. Critical Services and Targets

| Service | RTO | RPO |
|---------|-----|-----|
| Freight-tracking SaaS platform | 4 hours | 15 minutes |
| Customer database | 4 hours | 15 minutes |
| Corporate email / comms | 8 hours | 1 hour |

## 4. Scenarios and Response
- **AWS AZ failure:** automatic multi-AZ failover; verify health, monitor.
- **AWS region outage:** restore from cross-region backups to alternate region; estimated restore within RTO.
- **Ransomware / data corruption:** isolate, restore from immutable backups, validate integrity.
- **Office unavailable:** staff work remotely; warehouse follows manual fallback procedures.

## 5. Backups
Automated database snapshots every 15 minutes; daily full backups retained 35 days in AWS S3 with versioning and cross-region copy. Restores are tested quarterly (last test 2025-02-20, successful, restore time 1h 50m).

## 6. Roles and Contacts
- BCP coordinator: Marcus Webb (IT Lead).
- Decision to invoke: CISO or CEO.
- Communications: CISO updates customers via status page and email.

## 7. Communications
Internal via Slack and phone tree; external via the status page and account managers.

## 8. Testing and Maintenance
The plan is tested at least annually (tabletop + technical restore). Results feed corrective actions and Management Review.
`,

  "supplier-security-policy": `# Supplier Security Policy

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.2
**Approved:** 2025-03-14
**Next review:** 2026-03-14
**Clause:** ISO/IEC 27001:2022, A.5.19 - A.5.22, A.5.23

## 1. Purpose
This policy ensures information security risks arising from supplier relationships are identified and managed.

## 2. Requirements
- Suppliers handling Northwind or customer data must be risk-assessed before onboarding.
- A data processing agreement (DPA) and appropriate security terms must be in place.
- Suppliers must support MFA and encryption where they hold our data.
- Supplier security is reviewed at least annually and on contract change.

## 3. Supplier Register (key suppliers)

| Supplier | Service | Data handled | Classification | Assurance | Last review | Owner |
|----------|---------|--------------|----------------|-----------|-------------|-------|
| Amazon Web Services | Cloud hosting (Sydney) | Customer data, app, backups | Restricted | ISO 27001, SOC 2, signed AWS terms + DPA | 2025-02-15 | Marcus Webb |
| Google (Workspace) | Email, identity, docs | Corporate & some customer data | Confidential | ISO 27001, SOC 2, DPA | 2025-02-15 | Marcus Webb |
| Xero | Payroll & accounting | Employee PII, payroll | Restricted | ISO 27001, SOC 2, DPA | 2025-02-20 | Tom Nguyen |
| Atlassian (Jira) | Work management | Internal project data | Internal | SOC 2, DPA | 2025-02-20 | Aisha Rahman |
| GitHub | Source code | Source code, secrets (scanned) | Confidential | SOC 2, DPA | 2025-02-20 | Aisha Rahman |

## 4. Onboarding and Offboarding
New suppliers complete a security questionnaire and risk assessment approved by the CISO. On termination, access is revoked and data return/deletion is confirmed in writing.

## 5. Monitoring
Supplier performance and security posture are monitored; significant incidents at suppliers are treated as Northwind incidents.
`,

  "legal-requirements-register": `# Legal, Regulatory & Contractual Requirements Register

**Document owner:** Priya Sharma (CISO)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.2
**Last updated:** 2025-03-10
**Next review:** 2026-03-10
**Clause:** ISO/IEC 27001:2022, A.5.31, A.5.34

## 1. Purpose
This register records the legal, regulatory and contractual requirements relevant to information security at Northwind Logistics, and how each is met.

## 2. Register

| ID | Requirement | Source / type | Applies to | How we comply | Owner |
|----|-------------|---------------|------------|---------------|-------|
| L-01 | Privacy Act 1988 (Cth) & Australian Privacy Principles | Australian law | All personal information | Privacy Policy, data classification, access control, breach process | Priya Sharma |
| L-02 | Notifiable Data Breaches (NDB) scheme | Australian law | Eligible data breaches | Incident procedure with OAIC notification within required timeframe | Priya Sharma |
| L-03 | GDPR | EU regulation | EU customers' personal data | DPAs, lawful basis, data subject request process, EU data handling controls | Priya Sharma |
| L-04 | Spam Act 2003 (Cth) | Australian law | Marketing communications | Consent and unsubscribe in all marketing | Tom Nguyen |
| L-05 | Fair Work / employment records | Australian law | Employee records | Secure HR storage in Xero/Workspace, retention schedule | Tom Nguyen |
| L-06 | Customer contractual SLAs | Contractual | Enterprise customers | 99.9% uptime commitment, breach notification within 48h, monthly reporting | Daniel Cooper |
| L-07 | PCI considerations (no card storage) | Contractual / standard | Payments via third party | Payments outsourced; no cardholder data stored by Northwind | Marcus Webb |
| L-08 | Software licensing | Contractual | All software in use | Licence inventory, no unapproved software | Marcus Webb |

## 3. Maintenance
The register is reviewed annually and when laws, regulations or major contracts change. Legal updates are tracked via subscriptions and advisers.
`,

  "internal-audit-programme": `# Internal Audit Programme & Report

**Document owner:** Priya Sharma (ISMS Manager)
**Approved by:** Daniel Cooper (CEO)
**Version:** 1.1
**Approved:** 2025-03-14
**Audit period:** 2025
**Clause:** ISO/IEC 27001:2022, 9.2

## 1. Purpose
This programme defines the schedule and scope of internal ISMS audits and reports the results, ensuring auditor independence from the areas audited.

## 2. Programme

| Audit | Scope | Auditor | Planned date | Status |
|-------|-------|---------|--------------|--------|
| IA-2025-01 | Access control & user management (A.5.15-18, A.8.2-5) | External consultant (independent) | 2025-04-10 | Complete |
| IA-2025-02 | Supplier management & cloud (A.5.19-23) | External consultant | 2025-07-15 | Planned |
| IA-2025-03 | Clauses 4-10 ISMS core | External consultant | 2025-09-20 | Planned |

## 3. Audit Report - IA-2025-01 (Access Control)
**Date:** 2025-04-10  **Auditor:** J. Patel (independent)  **Auditee:** Marcus Webb

**Objective:** Verify access control processes meet policy and ISO/IEC 27001:2022 requirements.

**Method:** Document review, sampling of 12 user accounts, interview, configuration review.

### Findings

| Ref | Type | Description | Clause/Control | Action |
|-----|------|-------------|----------------|--------|
| F-01 | Minor nonconformity | Quarterly access review for Q4 2024 was completed 3 weeks late and not fully evidenced for 2 systems | A.5.18 / 9.2 | CA-2025-001 raised |
| F-02 | Observation | Two ex-contractor accounts disabled but not deleted after 90 days | A.5.16 | Recommend deletion schedule |
| F-03 | Conformity | MFA enforced across all sampled accounts | A.8.5 | None |

**Conclusion:** The access control process is largely effective. One minor nonconformity and one observation raised; no major nonconformities. Corrective action tracked in the Corrective Action Log.
`,

  "management-review-minutes": `# Management Review Minutes

**Meeting:** ISMS Management Review (Q1 2025)
**Date:** 2025-03-12
**Chair:** Daniel Cooper (CEO)
**Minutes by:** Priya Sharma (CISO)
**Version:** 1.0
**Clause:** ISO/IEC 27001:2022, 9.3

## 1. Attendees
- Daniel Cooper (CEO)
- Priya Sharma (CISO / ISMS Manager)
- Marcus Webb (IT Lead)
- Aisha Rahman (Engineering Manager)
- Tom Nguyen (HR Manager)

## 2. Inputs Reviewed (per 9.3.2)
- Status of actions from previous review (all 3 closed).
- Changes in internal/external issues: new EU customers (GDPR relevance).
- Feedback on ISMS performance: objectives, monitoring results, audit results.
- Risk assessment results and risk treatment status.
- Nonconformities and corrective actions.
- Interested party feedback (one customer security questionnaire passed).
- Opportunities for continual improvement.

## 3. Discussion & Findings
- Platform availability at 99.95%, exceeding the 99.9% target.
- Security awareness training at 88%; HR to drive to 100% by 2025-06-30.
- Two Critical risks (R-001, R-002) reduced to Medium residual; R-002 treatment ongoing.
- Internal audit IA-2025-01 raised one minor nonconformity (CA-2025-001), on track.
- Resourcing for ISO 27001 Stage 2 audit confirmed adequate.

## 4. Decisions
- ISMS remains suitable, adequate and effective.
- Approve continued investment in DLP rollout (objective #2 control).
- Confirm GDPR controls formally added to scope considerations.

## 5. Actions

| # | Action | Owner | Due |
|---|--------|-------|-----|
| MR-01 | Drive training completion to 100% | Tom Nguyen | 2025-06-30 |
| MR-02 | Complete R-002 secure-dev controls | Marcus Webb | 2025-07-31 |
| MR-03 | Close CA-2025-001 (access review evidence) | Marcus Webb | 2025-05-15 |
| MR-04 | Schedule Stage 2 certification audit | Daniel Cooper | 2025-08-31 |

## 6. Next Review
Q3 2025 (target 2025-09-15), or sooner on significant change.
`,

  "corrective-action-log": `# Corrective Action & Nonconformity Log

**Document owner:** Priya Sharma (ISMS Manager)
**Approved by:** Daniel Cooper (CEO)
**Version:** 2.0
**Last updated:** 2025-05-16
**Clause:** ISO/IEC 27001:2022, 10.2

## 1. Purpose
This log records nonconformities, their root causes, corrections, corrective actions and verification of effectiveness.

## 2. Log

| ID | Date raised | Source | Nonconformity | Root cause | Correction | Corrective action | Owner | Due | Status | Effectiveness verified |
|----|-------------|--------|---------------|------------|------------|-------------------|-------|-----|--------|------------------------|
| CA-2025-001 | 2025-04-10 | Internal audit IA-2025-01 | Q4 2024 access review late and not evidenced for 2 systems | No calendar reminder or owner for the review task; evidence not standardised | Completed and documented the outstanding reviews | Added recurring Jira ticket with owner; created access-review evidence template; review SLA defined | Marcus Webb | 2025-05-15 | Closed | Yes - Q1 2025 review completed on time with evidence (checked 2025-05-16) |
| CA-2025-002 | 2025-04-11 | Incident INC-2025-004 | Staff susceptible to targeted phishing | Awareness training not yet completed by all staff; no external-sender banner | Reset affected account; reminder to staff | Enabled external-sender banner in Workspace; scheduled simulated phishing campaign; pushed training to remaining staff | Priya Sharma | 2025-06-30 | In progress | Pending - to verify via phishing simulation results |

## 3. Review
Open corrective actions are reviewed monthly by the ISMS Manager and reported at Management Review. Effectiveness is verified before closure.
`,

  "competence-training-records": `# Competence & Training Records

**Document owner:** Tom Nguyen (HR Manager)
**Approved by:** Priya Sharma (CISO)
**Version:** 2.1
**Last updated:** 2025-05-30
**Next review:** 2025-11-30
**Clause:** ISO/IEC 27001:2022, 7.2

## 1. Purpose
This record demonstrates that persons doing work affecting information security are competent and have received appropriate training.

## 2. Training Records

| Name | Role | Security awareness (annual) | Role-specific training | Last completed | Next due |
|------|------|:---------------------------:|------------------------|----------------|----------|
| Priya Sharma | CISO / ISMS Manager | Complete | ISO 27001 Lead Implementer certified | 2025-01-20 | 2026-01-20 |
| Marcus Webb | IT Lead | Complete | AWS Security Specialty; incident response | 2025-02-10 | 2026-02-10 |
| Aisha Rahman | Engineering Manager | Complete | OWASP secure coding; secure SDLC | 2025-03-05 | 2026-03-05 |
| Tom Nguyen | HR Manager | Complete | Privacy Act / NDB awareness | 2025-02-18 | 2026-02-18 |
| Daniel Cooper | CEO | Complete | Executive security briefing | 2025-02-01 | 2026-02-01 |
| Engineering team (12) | Engineers | 11 of 12 complete | Secure coding module (10 of 12) | various 2025 | rolling |
| Warehouse staff (15) | Operations | 13 of 15 complete | Acceptable use & data handling | various 2025 | rolling |
| All other staff | Various | 88% complete overall | n/a | various 2025 | 2025-06-30 target |

## 3. Competence
Job descriptions for security-relevant roles define required competence. Gaps are addressed through training, mentoring or recruitment. Certificates and completion reports are retained by HR.

## 4. Awareness
All staff complete security awareness training at onboarding and annually, covering phishing, data classification, acceptable use and incident reporting.
`,
};
