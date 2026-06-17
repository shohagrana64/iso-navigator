// Filled-in worked examples for Annex A controls A.5, A.6, A.7.
export const controlExamplesA: Record<string, string> = {
  "A.5.1": `**Northwind Logistics Pty Ltd — Information Security Policy (excerpt)**

- Document ID: NWL-POL-001 | Version: 3.2 | Classification: Internal
- Owner: Priya Sharma (CISO) | Approved by: Board, 14 Feb 2025
- Next review: 14 Feb 2026 (annual, or on major change)

**1. Purpose** — Protect the confidentiality, integrity and availability
of Northwind's freight-tracking platform and customer data.

**2. Scope** — All staff, contractors, the AWS Sydney production
environment, and the Melbourne head office (Level 4, 120 Collins St).

**3. Commitment** — Management commits to meeting ISO/IEC 27001:2022
requirements and to continual improvement of the ISMS.

**4. Supporting policies** — Access Control, Acceptable Use, Cryptography,
Supplier Security, Incident Response, Backup & BC (all on Confluence).

Acknowledged by all staff at induction and annually via the LMS.`,

  "A.5.2": `**Northwind Logistics — Information Security Roles & Responsibilities (RACI)**

| Activity | CISO (Priya Sharma) | IT Lead (Marcus Webb) | Dept Mgr | CEO |
|---|---|---|---|---|
| ISMS governance | A | C | I | I |
| Risk assessment | R | C | C | A |
| Access provisioning | A | R | C | I |
| Incident response | A | R | C | I |
| Awareness training | A | C | R | I |
| Supplier security review | R | C | A | I |

A = Accountable, R = Responsible, C = Consulted, I = Informed.

- Security Champions appointed per team: Eng (J. Tan), Ops (L. Nguyen),
  People & Culture (S. Adebayo).
- Reviewed at the quarterly Security Steering Committee, 02 Apr 2025.`,

  "A.5.3": `**Northwind Logistics — Segregation of Duties Matrix (extract)**

Reviewed by Marcus Webb (IT Lead), 18 Mar 2025.

| Conflicting duties | Controlled how |
|---|---|
| Develop code + deploy to prod | Separate: devs raise PR; only Ops merges to main; CI/CD (GitHub Actions) deploys. No dev has AWS prod console write. |
| Create supplier + approve payment | Finance clerk creates; CFO approves in Xero (dual control). |
| Request access + grant access | Manager requests via Jira; IT grants; CISO reviews quarterly. |
| Admin AWS IAM + review IAM logs | Webb administers; Sharma reviews CloudTrail monthly. |

Where SoD is impractical (small team), compensating control = monthly
CloudTrail log review by CISO. No exceptions open as of this review.`,

  "A.5.4": `**Northwind Logistics — Management Direction Record**

Security Steering Committee minutes (extract), 02 Apr 2025.
Chair: Priya Sharma (CISO). Present: M. Webb, CEO D. Olsen, CFO, HR Lead.

Decisions:
1. CEO reaffirmed all staff must complete annual security training by
   30 Jun 2025; managers accountable for their team's completion.
2. Approved AUD 45,000 for SIEM (AWS Security Hub + GuardDuty) rollout.
3. Managers directed to enforce clear-desk policy and report any
   suspected incident within 1 hour to security@northwindlogistics.com.au.
4. Q1 KPI review: 96% training completion; 2 minor incidents, both closed.

Actions assigned with owners and due dates; tracked in Jira ISMS board.
Next meeting: 02 Jul 2025.`,

  "A.5.5": `**Northwind Logistics — Authority Contact Register**

Maintained by Priya Sharma (CISO). Last verified: 10 Mar 2025.

| Authority | Purpose | Contact | When to engage |
|---|---|---|---|
| OAIC (Office of the Australian Information Commissioner) | Notifiable Data Breach reporting | oaic.gov.au / 1300 363 992 | Eligible data breach |
| ACSC / ReportCyber | Report cyber incidents | cyber.gov.au/report | Major cyber incident |
| Victoria Police | Crime/theft of assets | 000 / local LEA | Physical theft, fraud |
| AWS Trust & Safety | Cloud abuse/incident | AWS Support (Business plan) | Infra-level incident |

NDB clock: assess within 30 days; notify OAIC + affected individuals
if serious harm likely. Process linked from incident runbook NWL-IR-01.`,

  "A.5.6": `**Northwind Logistics — Special Interest Group Memberships**

Maintained by Marcus Webb (IT Lead). Reviewed 10 Mar 2025.

| Group | Type | Member | Benefit |
|---|---|---|---|
| AISA (Australian Information Security Association) | Professional body | P. Sharma | Threat briefings, networking |
| AWS Sydney User Group | Vendor community | M. Webb | Cloud security practices |
| ACSC Partnership Program | Govt advisory | P. Sharma | Alerts & advisories |
| OWASP Melbourne Chapter | Technical | J. Tan (Eng) | Secure-coding guidance |

Advisories received via these groups are triaged into the threat-intel
process (A.5.7). AISA monthly meetup attended; notes shared on Confluence.`,

  "A.5.7": `**Northwind Logistics — Threat Intelligence Log (extract)**

Owner: Priya Sharma. Source feeds: ACSC alerts, AWS Security Bulletins,
CISA KEV, OWASP, vendor advisories. Reviewed weekly (Mondays).

| Date | Source | Threat | Relevance | Action |
|---|---|---|---|---|
| 03 Mar 2025 | ACSC Alert | Critical RCE in nginx | Used on edge proxy | Patched 04 Mar (CHG-228) |
| 17 Mar 2025 | AWS Bulletin | New GuardDuty finding type | Prod AWS Sydney | Enabled, tuned alerts |
| 24 Mar 2025 | CISA KEV | Exploited Fortinet CVE | Not in use | No action, noted |
| 31 Mar 2025 | Vendor (Auth0) | Token rotation advisory | IdP in use | Rotated keys, CHG-241 |

Strategic intel summarised monthly to Steering Committee.`,

  "A.5.8": `**Northwind Logistics — Project Security Checklist: "Realtime ETA" feature**

Project: REALTIME-ETA | PM: L. Nguyen | Security reviewer: J. Tan
Date: 22 Apr 2025

- [x] Security requirements captured in project brief (data: GPS pings, customer IDs)
- [x] Data classification done — pings = Confidential (location PII)
- [x] Threat model / abuse-case workshop held 18 Apr 2025
- [x] Privacy impact assessment completed (location = PII, A.5.34)
- [x] Secrets stored in AWS Secrets Manager, not code
- [x] SAST (CodeQL) + dependency scan pass in CI before merge
- [x] Pen-test scheduled pre-launch (booked with Cyber CX, May 2025)
- [ ] Production access review (pending go-live)

CISO sign-off required before production release. Status: On track.`,

  "A.5.9": `**Northwind Logistics — Asset Inventory (extract)**

Maintained in Snipe-IT. Owner: Marcus Webb. Reviewed quarterly (last 01 Apr 2025).

| Asset ID | Asset | Type | Owner | Classification | Location |
|---|---|---|---|---|---|
| NWL-INF-001 | Prod RDS (PostgreSQL) | Information system | M. Webb | Confidential | AWS Sydney |
| NWL-INF-002 | Customer database (PII) | Information | P. Sharma | Confidential | AWS Sydney |
| NWL-HW-114 | MacBook Pro (P. Sharma) | Endpoint | P. Sharma | Internal | Melbourne |
| NWL-SAAS-09 | Auth0 (IdP) | SaaS service | M. Webb | Confidential | Vendor cloud |
| NWL-HW-203 | Office NAS backup | Hardware | M. Webb | Internal | Level 4 server room |

Total tracked: 312 assets. Onboarding/offboarding auto-updates Snipe-IT
via the HR-to-IT Jira workflow.`,

  "A.5.10": `**Northwind Logistics — Acceptable Use Policy (excerpt) + acknowledgement**

NWL-POL-004 v2.1 | Owner: Marcus Webb | Effective: 01 Jan 2025

Permitted:
- Company devices for business and reasonable personal use.
- Approved SaaS only (list on Confluence); shadow IT prohibited.

Prohibited:
- Storing customer data on personal devices or personal cloud (Dropbox etc.).
- Sharing credentials; disabling endpoint protection (CrowdStrike).
- Installing unlicensed or pirated software.
- Using USB drives unless encrypted and approved by IT.

Acknowledgement:
"I, Sarah Adebayo, have read and agree to the Acceptable Use Policy."
Signed via LMS — 09 Jan 2025, 10:42 AEDT. 70/70 staff acknowledged.`,

  "A.5.11": `**Northwind Logistics — Return of Assets Checklist (offboarding)**

Leaver: T. Brooks (Account Manager) | Last day: 28 Mar 2025
Processed by: Marcus Webb | HR ref: HR-OFF-0312

| Asset | Returned | Notes |
|---|---|---|
| MacBook Air (NWL-HW-176) | [x] | Wiped & re-imaged 31 Mar |
| Building access card #4421 | [x] | Deactivated 28 Mar 16:30 |
| YubiKey (MFA) | [x] | Returned, re-stocked |
| Mobile phone (NWL-HW-188) | [x] | Returned, factory reset |
| VPN / SSO accounts | [x] | Disabled 28 Mar 17:00 |
| Saved company files (personal cloud) | [x] | Attestation signed |

All items reconciled in Snipe-IT. Offboarding closed 31 Mar 2025.`,

  "A.5.12": `**Northwind Logistics — Information Classification Scheme**

NWL-POL-005 v1.4 | Owner: Priya Sharma | Reviewed 14 Feb 2025

| Level | Definition | Examples | Handling |
|---|---|---|---|
| Public | Approved for release | Marketing site, blog | No restriction |
| Internal | Default for staff | Org charts, runbooks | Staff only |
| Confidential | Sensitive business/PII | Customer DB, contracts, source code | Encrypt at rest/in transit; need-to-know |
| Restricted | Highest impact | Encryption keys, financials pre-release | MFA, named access, logged |

Default classification if unlabelled = Internal. Owners must classify
new assets at creation (see A.5.9 inventory). Reviewed in onboarding training.`,

  "A.5.13": `**Northwind Logistics — Information Labelling Standard (examples in use)**

NWL-STD-002 | Owner: Marcus Webb | Updated 14 Feb 2025

- Confluence/Jira: classification label applied to every space/page,
  e.g. page footer reads "Classification: Confidential".
- Documents: header/footer macro auto-stamps level, e.g.
  "Northwind Logistics — CONFIDENTIAL — Do not distribute".
- Email: subject prefix for sensitive mail, e.g. "[CONFIDENTIAL] Q1 contract".
- AWS S3 buckets: tagged data-classification=confidential.
- Physical files: red cover sheet = Confidential, in locked cabinet.

Sample applied label (customer export file):
  filename: customers_2025Q1_CONFIDENTIAL.csv
  S3 tag: data-classification=confidential, owner=psharma`,

  "A.5.14": `**Northwind Logistics — Information Transfer Procedure & record**

NWL-PRO-007 | Owner: Marcus Webb | v1.2

Rules:
- External sharing of Confidential data only via approved channels:
  Google Workspace (TLS), or SFTP with per-partner keys.
- Bulk customer data: encrypted (AES-256) + password via separate channel.
- No customer PII over personal email or consumer messaging apps.
- Transfer agreements (NDAs) in place before sharing — see A.6.6.

Transfer log (extract):
| Date | Data | To | Method | Approved by |
|---|---|---|---|---|
| 11 Apr 2025 | Q1 shipment report (Confidential) | Acme Freight | SFTP (key #7) | M. Webb |
| 15 Apr 2025 | Aggregated stats (Internal) | Marketing agency | Google Drive link | L. Nguyen |`,

  "A.5.15": `**Northwind Logistics — Access Control Policy (excerpt)**

NWL-POL-006 v2.0 | Owner: Priya Sharma | Reviewed 14 Feb 2025

Principles:
- Least privilege and need-to-know enforced for all systems.
- Role-based access control (RBAC) via Okta groups mapped to roles.
- All access requested via Jira workflow; approved by line manager + system owner.
- Production AWS access: just-in-time via AWS IAM Identity Center, MFA mandatory.
- Default deny; no shared or generic accounts (break-glass exception below).

Break-glass: one sealed root account, MFA held by CISO, use logged & reviewed.

Sample grant: "REQ-AC-0891 — read access to customer DB for analyst
R. Lee, approved by L. Nguyen 09 Apr 2025, expires on role change."`,

  "A.5.16": `**Northwind Logistics — Identity Management Record**

Identity store: Okta (SSO). Owner: Marcus Webb.

- Each user = one unique ID (firstname.lastname@northwindlogistics.com.au).
- Lifecycle automated: HRIS (Employment Hero) -> Okta provision on hire,
  deprovision on termination (same-day).
- Service accounts: named, owned, documented in register; no human login.
- Shared accounts prohibited; 0 active shared accounts (verified 01 Apr 2025).

Identity register (extract):
| Identity | Type | Owner | Status |
|---|---|---|---|
| priya.sharma | Human | Self | Active |
| svc-backup-prod | Service | M. Webb | Active, key rotated 90d |
| guest-wifi | Network | IT | Active (isolated VLAN) |

Quarterly dormant-account review: 3 disabled in Q1 2025.`,

  "A.5.17": `**Northwind Logistics — Authentication Information Standard**

NWL-STD-003 | Owner: Marcus Webb | v1.3

- Passwords: min 14 chars; checked against breached-password list (Okta);
  no forced periodic rotation unless compromise suspected.
- MFA mandatory for all users (Okta Verify / YubiKey); phishing-resistant
  MFA (FIDO2) required for admins and prod access.
- Secrets/API keys: stored in AWS Secrets Manager; rotated every 90 days;
  never committed to Git (gitleaks scan in CI blocks commits).
- Initial passwords issued one-time, forced change at first login.
- Password vault for shared service creds: 1Password Business, audited.

Verification: 70/70 users MFA-enrolled (Okta report, 01 Apr 2025).`,

  "A.5.18": `**Northwind Logistics — Access Rights Review (quarterly)**

Q1 2025 review | Conducted by: Priya Sharma | Date: 03 Apr 2025

| System | Accounts reviewed | Removed | Reduced | Notes |
|---|---|---|---|---|
| AWS prod (IAM) | 12 | 1 | 2 | Ex-contractor still active — revoked |
| Customer DB | 18 | 0 | 1 | Analyst downgraded to read-only |
| Okta admin | 4 | 0 | 0 | Confirmed correct |
| GitHub org | 41 | 2 | 0 | 2 leavers removed |

- Joiners/movers/leavers handled via Jira HR workflow (same-day for leavers).
- Privileged access re-attested by system owners each quarter.
- Findings: 3 removals tracked to closure; next review 03 Jul 2025.

Signed: P. Sharma, CISO.`,

  "A.5.19": `**Northwind Logistics — Supplier Information Security Register (extract)**

Owner: Priya Sharma. Reviewed quarterly. Last: 02 Apr 2025.

| Supplier | Service | Data accessed | Risk | Assurance | Review due |
|---|---|---|---|---|---|
| AWS | Cloud hosting (prod) | All prod data | High | SOC 2 + ISO 27001 | Annual |
| Auth0/Okta | Identity (SSO/MFA) | Credentials | High | SOC 2 Type II | Annual |
| Cyber CX | Pen testing | Test data | Medium | NDA + ISO 27001 | Per engagement |
| Employment Hero | HRIS | Staff PII | Medium | ISO 27001, AU hosted | Annual |
| Mailchimp | Marketing email | Email addresses | Low | SOC 2 | Annual |

Security requirements set before onboarding; due-diligence questionnaire
on file for each. New suppliers risk-assessed by CISO pre-contract.`,

  "A.5.20": `**Northwind Logistics — Supplier Agreement Security Clauses (template extract)**

Used in all supplier contracts. Owner: Priya Sharma / Legal.

Each agreement with a supplier handling Northwind data includes:
1. Confidentiality / NDA obligations (survives termination).
2. Compliance with Northwind's Information Security Policy.
3. Breach notification to security@northwindlogistics.com.au within 24 hours.
4. Right to audit / request evidence (e.g. annual SOC 2 report).
5. Subcontractor (fourth-party) approval and flow-down of obligations.
6. Data location: customer PII to remain in Australia where required.
7. Secure return/deletion of data on termination, with certificate.
8. Compliance with Australian Privacy Act 1988 / APPs.

Example: signed AWS Enterprise Agreement + DPA on file (executed 12 Jan 2024).`,

  "A.5.21": `**Northwind Logistics — ICT Supply Chain Security Record**

Owner: Marcus Webb. Reviewed 02 Apr 2025.

- Software bill of materials (SBOM) generated per release (Syft) and stored
  with build artefacts; dependency CVEs scanned daily (Dependabot + Trivy).
- Only vetted base images used (official, pinned digests) from ECR.
- Third-party libraries reviewed for licence + maintenance status before adoption.
- Critical suppliers required to evidence their own supply-chain controls.

Sample finding & action:
| Date | Component | Issue | Action |
|---|---|---|---|
| 20 Mar 2025 | log4j (transitive) | Critical CVE | Upgraded, CHG-235 |
| 28 Mar 2025 | npm pkg "left-pad" | Unmaintained | Replaced with native fn |

Build pipeline blocks deploy on Critical/High vulnerabilities.`,

  "A.5.22": `**Northwind Logistics — Supplier Service Review Record**

Supplier: Auth0/Okta (Identity) | Reviewer: Marcus Webb | Date: 02 Apr 2025

- SLA review: 99.99% uptime target; actual Q1 = 99.997%. Met.
- Security: 2025 SOC 2 Type II report obtained and reviewed; no exceptions
  affecting Northwind. Sub-processor list checked — no new additions.
- Incidents: one vendor advisory (token rotation) actioned via CHG-241.
- Changes: vendor announced new admin console; change assessed, low risk.
- Open actions: none.

Change management: any vendor-side change affecting our integration is
raised in our change board (Jira CHG) before adoption. Next review: 02 Jul 2025.

Outcome: Supplier retained; performance and security satisfactory.`,

  "A.5.23": `**Northwind Logistics — Cloud Services Security Record (AWS)**

Owner: Marcus Webb | Reviewed 02 Apr 2025

- Provider: AWS (region: ap-southeast-2, Sydney). Shared responsibility
  model documented; Northwind owns config, IAM, data, encryption.
- Controls in place:
  - All S3 buckets private + encrypted (SSE-KMS); Block Public Access on.
  - RDS encrypted at rest; TLS in transit; automated backups, 30-day retention.
  - GuardDuty, Security Hub, Config, CloudTrail enabled org-wide.
  - IAM Identity Center + MFA; least privilege; no long-lived keys.
- Exit plan: data exportable via standard formats; documented in BC plan.
- Approved cloud services list maintained; new cloud use requires CISO approval.

CIS AWS Foundations Benchmark score: 92% (Security Hub, 01 Apr 2025).`,

  "A.5.24": `**Northwind Logistics — Incident Response Plan (summary)**

NWL-IR-01 v2.1 | Owner: Priya Sharma | Reviewed 14 Feb 2025

- Roles: Incident Manager (CISO), Tech Lead (M. Webb), Comms (CEO office).
- Severity scale: SEV1 (data breach/outage) -> SEV4 (minor).
- Reporting: security@northwindlogistics.com.au or #security-incidents Slack.
- On-call: PagerDuty rota for Ops; 24/7 SEV1 escalation.
- Phases: Detect -> Triage -> Contain -> Eradicate -> Recover -> Review.
- Comms templates pre-drafted (customer, OAIC, internal).
- Tooling: Security Hub/GuardDuty alerts, Jira incident board.

Tested via tabletop exercise 12 Mar 2025 (ransomware scenario);
actions logged. Plan and contact list reviewed annually.`,

  "A.5.25": `**Northwind Logistics — Security Event Assessment Log (extract)**

Triage owner: M. Webb / on-call. Criteria per NWL-IR-01.

| Event ID | Date | Source | Description | Assessment | Outcome |
|---|---|---|---|---|---|
| EVT-0421 | 09 Apr 2025 | GuardDuty | SSH brute-force on bastion | True positive, blocked by SG | Event, not incident |
| EVT-0422 | 10 Apr 2025 | User report | Phishing email received | Confirmed phish, not clicked | Incident (SEV3) raised INC-77 |
| EVT-0423 | 12 Apr 2025 | CloudTrail | Root login attempt | Failed, alert worked | Event, monitored |
| EVT-0424 | 14 Apr 2025 | CrowdStrike | Malware quarantined on laptop | Contained automatically | Incident (SEV3) INC-78 |

Each event classified within SLA (1 hour for high). Decision to escalate
to incident recorded with rationale and triager name.`,

  "A.5.26": `**Northwind Logistics — Incident Response Record**

Incident: INC-78 | Severity: SEV3 | Date: 14 Apr 2025
Incident Manager: P. Sharma | Tech: M. Webb

Timeline:
- 09:14 CrowdStrike alert: trojan quarantined on NWL-HW-152 (sales laptop).
- 09:20 Device isolated from network via CrowdStrike containment.
- 09:35 User interviewed — opened email attachment; reported via Slack.
- 10:05 Confirmed no lateral movement (EDR + CloudTrail clean).
- 11:30 Laptop wiped & re-imaged; credentials rotated for user.
- 13:00 Phishing sender blocked; org-wide warning sent.
- 14:00 Incident contained and resolved; closed pending review.

No customer data affected; no breach notification required.
Evidence preserved (A.5.28). Post-incident review scheduled (A.5.27).`,

  "A.5.27": `**Northwind Logistics — Post-Incident Review (lessons learned)**

Incident: INC-78 (malware via phishing) | Review date: 17 Apr 2025
Facilitator: P. Sharma | Attendees: M. Webb, Sales Mgr, Security Champion

What went well:
- EDR auto-quarantine + containment worked; <60 min to contain.
- User reported promptly via #security-incidents.

What to improve / actions:
| Action | Owner | Due |
|---|---|---|
| Add this lure to phishing-sim training | S. Adebayo | 30 Apr 2025 |
| Tighten email attachment filtering (block .iso/.img) | M. Webb | 25 Apr 2025 |
| Add EDR containment to IR runbook step list | M. Webb | 22 Apr 2025 |

Trends: 3rd phishing-related event this quarter -> raise awareness focus.
Lessons folded into metrics reported to Steering Committee.`,

  "A.5.28": `**Northwind Logistics — Evidence Collection Record**

Incident: INC-78 | Custodian: M. Webb | Per NWL-IR-01 evidence procedure

Chain of custody:
| Item | Collected | By | Hash (SHA-256) | Storage |
|---|---|---|---|---|
| Laptop disk image (NWL-HW-152) | 14 Apr 09:40 | M. Webb | 4f2a...e91c | Encrypted S3 (legal-hold bucket) |
| CrowdStrike detection export | 14 Apr 09:25 | M. Webb | a17b...7d33 | Same |
| Phishing email (.eml + headers) | 14 Apr 09:30 | P. Sharma | c902...11ab | Same |
| CloudTrail logs (relevant window) | 14 Apr 10:10 | M. Webb | 8e44...20ff | Immutable (Object Lock) |

- Originals write-once (S3 Object Lock); access logged.
- Collection method documented to preserve admissibility.
- Retained per legal hold; release requires CISO + Legal approval.`,

  "A.5.29": `**Northwind Logistics — Information Security During Disruption (plan extract)**

NWL-BC-02 | Owner: Priya Sharma | Reviewed 14 Feb 2025

During a disruption (e.g. AWS region issue, office loss), security controls
are maintained, not bypassed:
- Failover to AWS multi-AZ remains within ap-southeast-2; same IAM/MFA/encryption.
- Break-glass access logged and reviewed post-event; no relaxing of MFA.
- Incident comms continue via Slack + out-of-band (mobile bridge) if SSO down.
- Manual processes (if needed) still require dual control for payments.

Sample scenario test (tabletop, 12 Mar 2025): "primary AZ outage" —
confirmed monitoring/alerting stayed active during simulated failover;
no control gaps identified. Roles and minimum security levels documented.`,

  "A.5.30": `**Northwind Logistics — ICT Readiness for Business Continuity**

NWL-BC-01 | Owner: Marcus Webb | Last DR test: 22 Mar 2025

| Metric | Target (RTO/RPO) | Actual (last test) |
|---|---|---|
| Freight-tracking API | RTO 1h / RPO 15min | RTO 38min / RPO 5min |
| Customer database | RTO 2h / RPO 15min | RTO 51min / RPO 5min |

- Architecture: multi-AZ in AWS Sydney; RDS automated backups + PITR;
  S3 cross-region replication to Singapore for backups (encrypted).
- DR runbook in Confluence; restore tested by Ops quarterly.
- 22 Mar 2025 test: restored RDS from snapshot to standby, validated app,
  met RTO/RPO. Two doc fixes logged (CHG-233).

Next DR test: 22 Jun 2025. Results reported to Steering Committee.`,

  "A.5.31": `**Northwind Logistics — Legal & Regulatory Requirements Register (extract)**

Owner: Priya Sharma / Legal. Reviewed 14 Feb 2025.

| Requirement | Source | Applies to | How met |
|---|---|---|---|
| Privacy Act 1988 / APPs | Cth law | Customer & staff PII | Privacy policy, NDB process (A.5.5/A.5.34) |
| Notifiable Data Breaches scheme | Cth law | PII breaches | IR plan + OAIC contact |
| Spam Act 2003 | Cth law | Marketing email | Consent + unsubscribe in Mailchimp |
| Fair Work / records | Cth law | Staff records | HRIS retention schedule |
| Customer contracts (security clauses) | Contractual | Enterprise clients | ISMS controls evidence |

Register reviewed annually and on legislative change. Legal counsel
(Maddocks) consulted on Privacy Act updates. No open compliance gaps.`,

  "A.5.32": `**Northwind Logistics — Intellectual Property Rights Compliance**

NWL-POL-008 | Owner: Marcus Webb | Reviewed 14 Feb 2025

- Software asset register maintained in Snipe-IT; licence counts reconciled
  quarterly (last 01 Apr 2025) — no over-deployment found.
- Only approved, licensed software installed; CrowdStrike + MDM block
  unauthorised installs.
- Open-source licences reviewed (FOSSA scan) before adoption; copyleft
  (GPL) flagged for legal review to protect proprietary code.
- Staff trained not to use pirated software or unlicensed media (AUP, A.5.10).
- Northwind's own IP (source code) protected: private repos, NDAs, copyright
  notices in code headers.

Licence audit summary Q1 2025: 100% compliant across 14 paid products.`,

  "A.5.33": `**Northwind Logistics — Records Protection & Retention Schedule (extract)**

NWL-POL-009 | Owner: Priya Sharma | Reviewed 14 Feb 2025

| Record type | Retention | Protection |
|---|---|---|
| Customer contracts | 7 years post-termination | Encrypted store, access-controlled |
| Financial records | 7 years (ATO) | Xero + encrypted backup |
| Employee records | 7 years post-exit | HRIS, restricted |
| Security/audit logs | 12 months hot, 12m archive | S3 Object Lock (immutable) |
| ISMS records (audits, reviews) | 3 years | Confluence, versioned |

- Records protected against loss (backups, A.5.30), tampering (Object Lock),
  and unauthorised access (RBAC + encryption).
- Disposal at end of retention is secure (A.7.14) and logged.

Retention reviewed annually against legal requirements (A.5.31).`,

  "A.5.34": `**Northwind Logistics — Privacy & PII Protection Record**

Owner: Priya Sharma (also Privacy Officer) | Reviewed 14 Feb 2025

- Privacy Policy published (northwindlogistics.com.au/privacy); aligned to
  Australian Privacy Principles (APPs).
- PII inventory maintained: customer contacts, driver GPS/location, staff HR.
- Controls: data minimisation, encryption at rest/in transit, access on
  need-to-know, retention limits, consent for marketing.
- Privacy Impact Assessments for new features handling PII (e.g. Realtime ETA, A.5.8).
- Data subject requests (access/deletion) handled within 30 days; log kept.
- Cross-border: customer PII hosted in AWS Sydney (Australia).

DSR log (extract): REQ-PRIV-014 (deletion) completed 08 Apr 2025, 6 days.
NDB process linked to incident plan (A.5.24/A.5.5).`,

  "A.5.35": `**Northwind Logistics — Independent ISMS Review Record**

Owner: Priya Sharma | Type: Internal audit + external

| Review | Date | Reviewer | Outcome |
|---|---|---|---|
| Internal ISMS audit (full scope) | 24 Feb 2025 | Independent consultant (CertAssure) | 2 minor NCs, 3 OFIs |
| External Stage 1 (cert) | 10 Mar 2025 | BSI auditor | Ready for Stage 2 |
| Penetration test | Feb 2025 | Cyber CX | 1 medium, 4 low — all remediated |

- Reviews independent of those who operate the controls (consultant, not IT team).
- Minor NCs: (1) access-review evidence gaps, (2) one supplier review overdue —
  both closed with CAPA by 31 Mar 2025 (tracked in Jira).
- Results reported to management at Steering Committee 02 Apr 2025.

Next internal audit: Aug 2025. External surveillance: annual.`,

  "A.5.36": `**Northwind Logistics — Compliance Monitoring Record**

Owner: Priya Sharma | Conducted: quarterly (last 02 Apr 2025)

Checks that staff and systems comply with the security policies:
| Check | Method | Result Q1 2025 |
|---|---|---|
| MFA enrolment | Okta report | 70/70 (100%) |
| Endpoint protection installed | CrowdStrike console | 70/70 |
| Patch SLA (critical <7d) | Vuln scanner | 98% within SLA |
| Clear-desk spot check | Office walk-through | 2 desks flagged, addressed |
| Training completion | LMS | 96% (4 pending, due 30 Jun) |
| AWS config drift | Security Hub | 92% benchmark compliant |

Non-compliance escalated to line managers; repeat issues -> A.6.4.
Results reported to Steering Committee. Trend: improving QoQ.`,

  "A.5.37": `**Northwind Logistics — Documented Operating Procedure: Production Deployment**

NWL-PRO-012 v1.5 | Owner: Marcus Webb | Reviewed 01 Apr 2025

Purpose: Deploy application changes to AWS Sydney production safely.

Steps:
1. Change raised in Jira (CHG) with description, risk, rollback plan.
2. Peer-reviewed PR merged to main (min 1 approver, not the author).
3. CI runs tests + SAST + dependency scan; deploy blocked on failure.
4. CAB (async) approval for production deploys (Marcus or delegate).
5. GitHub Actions deploys via blue/green; health checks must pass.
6. Verify dashboards (CloudWatch) for 30 min; on error, auto-rollback.
7. Update change record to "Done"; note any issues.

Procedure stored in Confluence, version-controlled, linked from runbooks.
Last executed: CHG-244, 16 Apr 2025, success.`,

  "A.6.1": `**Northwind Logistics — Pre-Employment Screening Record**

Owner: Sarah Adebayo (People & Culture) | Per NWL-HR-POL-002

Candidate: J. Patel | Role: Backend Engineer | Start: 05 May 2025

| Check | Done | Result | Date |
|---|---|---|---|
| Identity (100-point ID) | [x] | Verified | 18 Apr 2025 |
| Right to work in Australia | [x] | VEVO confirmed | 18 Apr 2025 |
| Reference checks (2) | [x] | Satisfactory | 22 Apr 2025 |
| Employment history | [x] | Confirmed | 22 Apr 2025 |
| National Police Check | [x] | No disclosable outcomes | 28 Apr 2025 |
| Qualifications | [x] | Degree verified | 22 Apr 2025 |

Screening scaled to role risk (engineer = prod access -> police check).
Records stored in HRIS, access-restricted. Offer confirmed post-clearance.`,

  "A.6.2": `**Northwind Logistics — Employment Terms (security clauses excerpt)**

From standard contract of employment. Owner: People & Culture / Legal.

Clause 12 — Information Security & Confidentiality:
- The employee must comply with Northwind's Information Security Policy and
  related policies (Acceptable Use, Access Control) as updated from time to time.
- The employee must maintain confidentiality of company and customer
  information during and after employment (see NDA, A.6.6).
- Security responsibilities continue to apply where the employee changes
  role; equipment and access must be handled per company procedures.
- Breach of security obligations may lead to disciplinary action (A.6.4).

Acknowledgement: signed by J. Patel on commencement, 05 May 2025.
Copy retained in HRIS. All 70 staff have signed current terms.`,

  "A.6.3": `**Northwind Logistics — Security Awareness & Training Record**

Owner: Priya Sharma + People & Culture | Platform: KnowBe4 LMS

| Activity | Audience | Frequency | Status |
|---|---|---|---|
| Induction security module | New starters | On hire | 100% |
| Annual security awareness | All staff | Yearly | 96% (due 30 Jun) |
| Phishing simulation | All staff | Quarterly | Q1 fail rate 4% (down from 9%) |
| Secure coding (OWASP) | Engineers | Yearly | 100% |
| Privacy/APP refresher | PII handlers | Yearly | 100% |

- Topics: phishing, passwords/MFA, data classification, clear desk, incident
  reporting, social engineering.
- Completion tracked per user; managers chase non-completion.

Reported to Steering Committee; metrics trending up. Last update 01 Apr 2025.`,

  "A.6.4": `**Northwind Logistics — Disciplinary Process (security) — record**

NWL-HR-POL-005 | Owner: People & Culture | Reviewed 14 Feb 2025

Process for confirmed security policy violations:
1. Report received and verified (HR + CISO).
2. Fair investigation; employee given opportunity to respond.
3. Outcome proportionate: coaching -> warning -> termination, per severity
   and intent (accidental vs deliberate, prior record).
4. Documented; consistent across staff.

Sample (anonymised) case log:
| Case | Issue | Outcome | Date |
|---|---|---|---|
| DISC-03 | Shared password with colleague | Verbal warning + retraining | 11 Mar 2025 |
| DISC-04 | Repeated clear-desk breaches | Written warning | 02 Apr 2025 |

Process applied fairly and lawfully (Fair Work). Deters non-compliance.`,

  "A.6.5": `**Northwind Logistics — Post-Employment / Role Change Record**

Owner: People & Culture + IT | Per offboarding procedure

Leaver: T. Brooks (Account Manager) | Last day: 28 Mar 2025

| Responsibility | Action | Done |
|---|---|---|
| Confidentiality obligations continue | Reminder letter issued, signed | [x] |
| Return of assets | Per A.5.11 checklist | [x] |
| Revoke all access (SSO, AWS, building) | Same-day, 28 Mar 17:00 | [x] |
| Knowledge handover | Documented to L. Nguyen | [x] |
| Remove from distribution lists / groups | Done | [x] |

Role-change example: R. Lee moved Support -> Analytics 09 Apr; old access
removed, new access granted per least privilege (no access accumulation).
Ongoing obligations (NDA) confirmed in exit interview.`,

  "A.6.6": `**Northwind Logistics — Confidentiality / NDA Register (extract)**

Owner: Legal / People & Culture | Reviewed 14 Feb 2025

| Party | Type | Signed | Survives termination |
|---|---|---|---|
| All employees | Employee NDA (in contract) | On hire | Yes |
| Contractors (Cyber CX) | Mutual NDA | 02 Feb 2025 | 5 years |
| Prospect (Acme Freight) | Mutual NDA | 14 Mar 2025 | 3 years |
| Job candidates (final stage) | Candidate NDA | As needed | Yes |

NDA terms: definition of confidential info, permitted use, return/destroy
obligations, duration, and carve-outs (public info, legal disclosure).
- Template reviewed by Legal annually; current version v2.0.
- 70/70 staff covered; contractor NDAs on file before access granted.`,

  "A.6.7": `**Northwind Logistics — Remote Working Security Standard**

NWL-STD-005 | Owner: Marcus Webb | Reviewed 14 Feb 2025

Requirements for staff working from home / remotely:
- Company-managed device only (MDM-enrolled, disk-encrypted FileVault/BitLocker).
- CrowdStrike EDR active; auto-updates enforced.
- Access to internal systems via Okta SSO + MFA; no split-tunnel for prod.
- Home Wi-Fi must use WPA2/3; no public Wi-Fi without VPN.
- No printing of Confidential data at home; clear-screen lock (5 min).
- No customer data on personal devices or personal cloud.
- Physical care: laptop not left visible in cars/public.

Acknowledged in AUP. Compliance checked via MDM posture reports
(last 01 Apr 2025: 70/70 devices compliant, encryption + EDR on).`,

  "A.6.8": `**Northwind Logistics — Security Event Reporting (record)**

Owner: Priya Sharma | Channels: #security-incidents (Slack),
security@northwindlogistics.com.au, or any manager.

How staff report: "If you see something, say something — within 1 hour."
Posters in office; covered in induction and annual training.

Reporting log (extract):
| Ref | Date | Reporter | Event | Outcome |
|---|---|---|---|---|
| RPT-051 | 10 Apr 2025 | A. Kelly (Sales) | Suspicious phishing email | Raised INC-77, sender blocked |
| RPT-052 | 12 Apr 2025 | Reception | Tailgater at office door | Logged, badge policy reinforced |
| RPT-053 | 14 Apr 2025 | M. Cole | Lost YubiKey | Token revoked, new issued |

Q1 2025: 14 reports, all triaged within SLA. Reporting encouraged,
no blame for good-faith reports.`,

  "A.7.1": `**Northwind Logistics — Physical Security Perimeter Description**

Site: Level 4, 120 Collins St, Melbourne | Owner: Marcus Webb

Defined perimeters (layered):
1. Building lobby — staffed reception (business hours), turnstiles to lifts,
   24/7 building security (landlord-provided).
2. Level 4 office entry — secured glass doors, badge-access (HID), CCTV.
3. Internal secure areas — server/comms room (separate badge group + log).

- Walls are full-height slab-to-slab around the office tenancy.
- No unsecured external windows at ground level (Level 4).
- Visitor access via reception only; deliveries to building dock, not office.

Perimeter reviewed annually with building management; last review
04 Feb 2025. No gaps identified. CCTV coverage confirmed (A.7.4).`,

  "A.7.2": `**Northwind Logistics — Physical Entry Controls & Access Log (extract)**

System: HID badge access | Owner: Marcus Webb | Office: Level 4

- Staff badges (role-based zones); server room is a separate badge group
  (4 authorised: Webb, Sharma + 2 Ops). Lost cards revoked immediately.
- Visitors sign in at reception, issued temporary badge, escorted at all
  times, sign out on exit. Visitor log retained 12 months.

Access log sample (server room):
| Time | Badge | Person | Door |
|---|---|---|---|
| 09 Apr 08:32 | 0042 | M. Webb | Server room |
| 09 Apr 14:10 | 0117 | L. Nguyen (Ops) | Server room |
| 10 Apr 11:05 | TEMP-09 | Cyber CX (escorted by Webb) | Server room |

Logs reviewed monthly by CISO; anomalies investigated. Tailgating
addressed via single-person turnstiles + staff awareness.`,

  "A.7.3": `**Northwind Logistics — Securing Offices, Rooms & Facilities**

Owner: Marcus Webb | Reviewed 04 Feb 2025

- Office doors auto-lock; badge required to enter outside reception.
- Server/comms room: no external signage, solid lockable door, badge +
  log, not visible from public areas.
- Meeting rooms with glass have blinds for confidential discussions.
- No directory or floor plan publicly displayed identifying secure areas.
- Confidential print: secure pull-printing (badge release) to avoid
  documents left on trays.
- Fire/HVAC for server room appropriate (A.7.5); UPS installed (A.7.11).

Checklist verified quarterly. Last walk-through 01 Apr 2025:
all doors functioning, server room secure, no signage exposing assets.`,

  "A.7.4": `**Northwind Logistics — Physical Security Monitoring (CCTV) Record**

Owner: Marcus Webb (office cameras) + building security | Reviewed 04 Feb 2025

- CCTV covers: office entry, reception, server room door, lift lobby.
- Recording retained 30 days, encrypted NVR in locked comms room,
  access restricted to Webb + Sharma; access logged.
- Building landlord provides 24/7 lobby and perimeter monitoring + guards.
- Intruder alarm armed after-hours; alerts go to monitoring company +
  Webb's mobile.

Monitoring log (extract):
| Date | Event | Action |
|---|---|---|
| 28 Mar 03:14 | After-hours door alarm | False (cleaner), verified on CCTV |
| 12 Apr 18:40 | Tailgater flagged (RPT-052) | Reviewed footage, identified, addressed |

CCTV/alarm tested quarterly; privacy signage displayed (Privacy Act).`,

  "A.7.5": `**Northwind Logistics — Physical & Environmental Threat Protection**

Owner: Marcus Webb | Site: Level 4, Melbourne | Reviewed 04 Feb 2025

| Threat | Control | Status |
|---|---|---|
| Fire | Building sprinklers + VESDA in comms room; extinguishers; annual inspection | OK (insp. 10 Jan 2025) |
| Power loss | UPS for comms room + generator (building); cloud on AWS | OK |
| Flood/water | Level 4 (low risk); no plumbing over server room | OK |
| Heat | Dedicated A/C in comms room; temp monitored, alerts >27C | OK |
| Theft/vandalism | Badge access, CCTV, alarm (A.7.2/A.7.4) | OK |

- Production data primarily in AWS Sydney (multi-AZ), reducing on-site risk.
- Environmental sensors (temp/humidity) in comms room alert to Slack.

No incidents Q1 2025. Building emergency procedures posted; drills annual.`,

  "A.7.6": `**Northwind Logistics — Working in Secure Areas (rules) + log**

Secure area: Comms/server room, Level 4 | Owner: Marcus Webb

Rules (posted at door):
- Authorised personnel only (4 named); visitors escorted and logged.
- No unauthorised photography or recording inside.
- No personal mobile use for capturing equipment/config.
- Doors closed and locked when unattended; last out confirms lock.
- Work performed there logged (who, when, what).

Work log (extract):
| Date | Person | Activity |
|---|---|---|
| 03 Apr | M. Webb | NAS firmware update |
| 10 Apr | Cyber CX (escorted) | Network rack inspection |

Empty secure areas locked and alarmed. Reviewed quarterly; last 01 Apr 2025.`,

  "A.7.7": `**Northwind Logistics — Clear Desk & Clear Screen Policy + check**

NWL-POL-010 | Owner: Marcus Webb | Reviewed 14 Feb 2025

Rules:
- Confidential papers locked away when desk unattended; nothing sensitive
  left out overnight.
- Screens auto-lock after 5 min; lock manually (Win+L / Ctrl-Cmd-Q) when away.
- Whiteboards wiped after meetings with sensitive content.
- Secure pull-printing; collect printouts immediately.
- Removable media locked away; no sticky-note passwords.

Spot-check (01 Apr 2025, after-hours walk-through, 35 desks):
| Result | Count |
|---|---|
| Compliant | 33 |
| Papers left out | 1 (followed up with owner) |
| Screen unlocked | 1 (reminder issued) |

Re-check next quarter. Findings feed A.5.36 compliance monitoring.`,

  "A.7.8": `**Northwind Logistics — Equipment Siting & Protection Record**

Owner: Marcus Webb | Reviewed 04 Feb 2025

- Server/network equipment housed in locked comms room, in a closed rack,
  not in walkways or public areas.
- Screens positioned away from windows/reception to prevent shoulder-surfing;
  privacy filters on reception and finance laptops.
- No eating/drinking at the equipment rack; no equipment near water sources.
- Cabling tidy and protected (A.7.12); UPS protects against power spikes (A.7.11).
- Office printers placed in low-traffic area with secure release.

Sample placement check (comms room): rack locked, temp 21C, no liquids,
clearance for airflow OK. Verified 01 Apr 2025 by M. Webb.
No equipment sited where it could be tampered with by visitors.`,

  "A.7.9": `**Northwind Logistics — Off-Premises Asset Security Record**

Owner: Marcus Webb | Applies to laptops, phones taken off-site

Controls for assets used outside the office:
- All laptops/phones MDM-enrolled, disk-encrypted, EDR-protected.
- Remote wipe enabled (Jamf/Intune); lost device -> wipe + access revoke.
- Devices not left unattended in public or visible in vehicles (AUP/remote work).
- Approval + register entry required to take equipment (e.g. NAS, AV gear) off-site.

Off-site asset log (extract):
| Asset | Holder | Off-site reason | Returned |
|---|---|---|---|
| NWL-HW-114 (laptop) | P. Sharma | Conference (AISA) | n/a (assigned) |
| NWL-HW-201 (projector) | L. Nguyen | Client demo | 16 Apr 2025 |

Lost-device example: RPT-053 YubiKey lost -> revoked same day, replaced.`,

  "A.7.10": `**Northwind Logistics — Storage Media Register & Handling**

Owner: Marcus Webb | Reviewed 01 Apr 2025

- Removable media discouraged; USB ports policy-restricted via MDM
  (read-only / blocked except approved encrypted drives).
- Approved media: 2 hardware-encrypted USB drives (IronKey) for offline
  backup transport; registered and tracked.
- Backups primarily cloud (AWS); on-site NAS is encrypted.
- Media reuse: securely wiped before reuse; disposal per A.7.14 with cert.

Media register (extract):
| Media ID | Type | Encrypted | Holder | Status |
|---|---|---|---|---|
| USB-01 | IronKey 64GB | Yes | M. Webb | In use (locked safe) |
| USB-02 | IronKey 64GB | Yes | Comms room safe | Spare |

Media stored in locked cabinet; movements logged. No unencrypted media permitted.`,

  "A.7.11": `**Northwind Logistics — Supporting Utilities Record**

Owner: Marcus Webb | Site: Level 4 comms room | Reviewed 04 Feb 2025

| Utility | Provision | Test/maintenance |
|---|---|---|
| Power | Mains + UPS (APP Smart-UPS, 30 min) for rack; building backup generator | UPS battery test 15 Jan 2025, OK |
| Cooling | Dedicated A/C unit, temp-monitored, alerts >27C | Serviced 20 Jan 2025 |
| Internet | Primary fibre (NBN) + 4G failover router | Failover tested 22 Mar 2025 |
| Fire suppression | Building system + comms-room detection | Inspected 10 Jan 2025 |

- Production workloads on AWS Sydney reduce dependence on office utilities.
- UPS provides graceful shutdown of on-site gear during outage.
- Emergency power-off and utility shutoff locations documented.

No utility outages Q1 2025. Next UPS test: Jul 2025.`,

  "A.7.12": `**Northwind Logistics — Cabling Security Record**

Owner: Marcus Webb | Comms room, Level 4 | Reviewed 01 Apr 2025

- Network and power cabling in the comms room is run in labelled, contained
  trays; patch panels documented (rack diagram in Confluence).
- Cabling not exposed in public/walkway areas; floor cables under covers.
- Power and data cables separated to reduce interference.
- Comms room locked (A.7.6); no public access to patch panels.
- Cable labelling standard applied (port, VLAN, destination) to prevent
  accidental disconnection and aid maintenance.
- Fibre uplink entry point secured within tenancy.

Inspection 01 Apr 2025: cabling tidy, labelled, trays intact, no exposed
runs outside secure area. No unauthorised taps found. Diagram up to date.`,

  "A.7.13": `**Northwind Logistics — Equipment Maintenance Record**

Owner: Marcus Webb | Reviewed 01 Apr 2025

- On-site equipment (UPS, A/C, NAS, network gear) maintained on schedule;
  maintenance only by authorised/approved personnel; escorted if external (A.7.2).
- Data-bearing equipment not removed off-site for repair without secure
  wipe or supervision.
- Warranty/support contracts in place for critical gear.

Maintenance log (extract):
| Date | Equipment | Work | By |
|---|---|---|---|
| 15 Jan 2025 | UPS | Battery test/replace | APC technician (escorted) |
| 20 Jan 2025 | Comms room A/C | Annual service | Cool-Air Pty Ltd (escorted) |
| 03 Apr 2025 | NAS | Firmware update | M. Webb |

Cloud (AWS) infrastructure maintained by provider under shared responsibility.
Next scheduled: A/C service Jul 2025.`,

  "A.7.14": `**Northwind Logistics — Secure Disposal / Re-use of Equipment**

Owner: Marcus Webb | Per NWL-PRO-014

Rules:
- All storage media securely erased (NIST 800-88) before reuse, or physically
  destroyed if faulty/end-of-life.
- Certified e-waste vendor used for destruction; Certificate of Destruction retained.
- Asset marked "disposed" in Snipe-IT with method and date.

Disposal log (extract):
| Asset | Method | Date | Evidence |
|---|---|---|---|
| NWL-HW-098 (old laptop SSD) | Crypto-erase + reuse | 18 Mar 2025 | Wipe log |
| NWL-HW-072 (failed HDD) | Physical shred (vendor) | 02 Apr 2025 | Cert #SD-4471 |
| NWL-HW-176 (leaver laptop) | Wipe + re-image | 31 Mar 2025 | Re-image log |

Cloud data deletion handled via AWS (crypto-shredding of KMS keys).
No equipment leaves Northwind with recoverable data.`,
};
