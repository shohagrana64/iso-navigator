// Filled-in worked examples for Annex A controls A.8 (Technological).
export const controlExamplesB: Record<string, string> = {
  "A.8.1": `### Endpoint Device Standard — Northwind Logistics Pty Ltd
**Owner:** Marcus Webb (IT Lead) · **Approved:** 2025-02-10

| Setting | Required value |
|---|---|
| Managed by | Kandji MDM (macOS) / Intune (Windows) |
| Disk encryption | FileVault / BitLocker enforced, keys escrowed |
| Screen lock | Auto-lock 5 min, password required on wake |
| EDR agent | CrowdStrike Falcon installed + reporting |
| OS patching | Auto-update, max 14 days behind |
| Local admin | Removed; elevation via temporary grant ticket |

Enrolment check (2025-06-12): 68/70 devices compliant. 2 contractor laptops
quarantined from VPN until CrowdStrike confirmed (JIRA SEC-412).`,

  "A.8.2": `### Privileged Access Register (extract) — 2025-06-15
Owner: Priya Sharma (CISO). Reviewed quarterly.

| User | Privilege | System | Justification | Granted | Review |
|---|---|---|---|---|---|
| Marcus Webb | AWS AdministratorAccess | AWS Sydney | Infra lead | 2024-08-01 | 2025-07 |
| J. Tan | rds_superuser | Prod Postgres | DBA on-call | 2025-03-04 | 2025-07 |
| break-glass | root (sealed) | AWS root | Emergency only | n/a | n/a |

- Admin access requires MFA + named account (no shared logins).
- Break-glass root credential sealed in 1Password vault, use raises PagerDuty alert.
- Q2 review removed 1 ex-contractor's IAM role (SEC-389).`,

  "A.8.3": `### Information Access Control Procedure (excerpt)
Access to the Customer Shipment DB and S3 buckets is role-based.

- Roles defined in Okta groups: app-readonly, app-support, app-admin.
- Support staff see customer shipments but NOT payment tokens (column-masked).
- Access granted only via Jira request approved by data owner (Priya Sharma).
- Default deny: new Google Workspace accounts have no app access until provisioned.

Access matrix (sample):
| Group | Shipment data | Billing | Audit logs |
|---|---|---|---|
| Support | Read | none | none |
| Finance | none | Read/Write | none |
| Security | Read | Read | Read |

Last entitlement review: 2025-05-30, no orphaned grants found.`,

  "A.8.4": `### Source Code Access Standard
Repos hosted in GitHub org \`northwind-logistics\` (private).

- Access via GitHub teams synced from Okta; SSO + MFA enforced.
- Branch protection on \`main\`: 2 approvals, status checks, no force-push.
- Only @backend-team can merge to prod-deploy repos.
- External contractors added to single repo with read + PR only.
- Secrets never committed; GitHub secret scanning + push protection on.

Audit 2025-06-01: 41 members across 6 teams. Removed 3 dormant collaborators
(no commits in 180 days) per SEC-401. No public repos.`,

  "A.8.5": `### Secure Authentication Standard
**Owner:** Marcus Webb · **Effective:** 2025-01-15

- Single sign-on via Okta for all SaaS (GitHub, Jira, Datadog, AWS).
- MFA mandatory: Okta Verify push or FIDO2 key; SMS disabled.
- Password policy: 14+ chars, checked against breached-password list, no forced rotation.
- 10 failed attempts -> 15 min lockout; alert to Datadog.
- Production SSH: certificate-based via AWS SSM Session Manager, no static keys.

Coverage report 2025-06-10: 70/70 staff MFA-enrolled. 0 accounts on legacy password-only login.`,

  "A.8.6": `### Capacity Management — Monthly Review 2025-05
Monitored in Datadog; thresholds alert PagerDuty.

| Resource | Current | Threshold | Status |
|---|---|---|---|
| Prod RDS CPU | 54% avg | 80% | OK |
| RDS storage | 61% (610/1000 GB) | 85% | OK |
| EKS node pool | 12/20 nodes | autoscale 20 | OK |
| S3 shipment bucket | 4.2 TB | n/a | growth +8%/mo |

Actions: storage growth trending to threshold by Q4 -> ticket SEC-420 to raise
RDS allocated storage to 1.5 TB before Sep 2025. Reviewed by Marcus Webb 2025-06-02.`,

  "A.8.7": `### Anti-Malware Standard
Endpoint and server protection via CrowdStrike Falcon.

- Falcon agent on all laptops + EC2 prod hosts; tamper protection on.
- Real-time prevention + ML detection enabled; signatures auto-updated.
- Quarantined detections route to #sec-alerts Slack + Jira auto-ticket.
- Inbound email scanned by Google Workspace; attachments sandboxed.
- Container images scanned by Trivy in CI before deploy.

Detection log (last 30 days): 3 PUP detections on laptops, auto-quarantined,
0 reached execution. Last full coverage check 2025-06-12: 100% of in-scope hosts reporting.`,

  "A.8.8": `### Technical Vulnerability Management Procedure
Sources: AWS Inspector, Dependabot, Trivy, Qualys external scan.

SLA by severity:
| Severity | Remediate within |
|---|---|
| Critical | 7 days |
| High | 30 days |
| Medium | 90 days |

Open register (2025-06-15):
- CVE-2025-31125 (High, openssl in base image) — patched, deploy in progress, SEC-418.
- CVE-2025-29481 (Medium, npm lib) — Dependabot PR #1342 open.
- 0 Critical open.

Owner Priya Sharma. Patch Tuesday review weekly; overdue items escalated to ELT.`,

  "A.8.9": `### Configuration Management Standard
Infrastructure as code in Terraform; app config in Helm values, all in Git.

- No manual console changes to prod; drift detected by \`terraform plan\` nightly.
- Baselines: CIS AWS Foundations Benchmark Level 1 enforced via AWS Config rules.
- Hardened AMIs built monthly from CIS-hardened Ubuntu 22.04.
- All changes peer-reviewed PRs; \`terraform apply\` only from CI pipeline.

AWS Config compliance 2025-06-14: 96% rules passing. 3 non-conforming
security groups remediated same day (SEC-415).`,

  "A.8.10": `### Information Deletion Record (extract)
Deletion per Data Retention Policy (shipment data kept 7 years, then purged).

| Date | Data | Method | Verified by |
|---|---|---|---|
| 2025-04-30 | 12 churned-customer accounts | Soft-delete then crypto-erase S3 objects | J. Tan |
| 2025-05-15 | Decommissioned EC2 EBS volumes (x4) | AWS volume deletion, no snapshots | Marcus Webb |
| 2025-06-01 | Ex-employee Google Workspace data | Account wiped after 30-day hold | IT |

- S3 buckets have lifecycle rules: logs expire after 365 days.
- Laptop disposal: CrowdStrike removed, FileVault key destroyed, device wiped via Kandji.`,

  "A.8.11": `### Data Masking Standard
Applied to customer PII in non-production and in support tooling.

- Production-to-staging refresh runs masking job: names -> faker values,
  emails -> user{id}@example.invalid, phone -> redacted, payment tokens dropped.
- Support console masks card tokens to last 4 digits.
- Analytics warehouse stores hashed customer_id only (SHA-256 + salt).

Example masked record in staging:
| field | prod | staging |
|---|---|---|
| name | Acme Freight | Vivian Holt |
| email | ops@acme.com | user8842@example.invalid |
| card | tok_live_9f2a | (dropped) |

Masking job verified after each refresh; last run 2025-06-08.`,

  "A.8.12": `### Data Leakage Prevention Controls
Layered DLP across email, endpoints, and cloud.

- Google Workspace DLP rule: blocks outbound email containing >10 records
  matching credit-card or AU TFN patterns; quarantines for review.
- CrowdStrike device control: USB mass-storage blocked on all laptops.
- GitHub push protection blocks committed secrets.
- AWS S3 Block Public Access enabled account-wide; Macie scans for PII exposure.

DLP events 2025-05: 4 outbound emails quarantined (3 false positive released,
1 genuine — coached employee, SEC-409). 0 USB exfiltration. 0 public S3 buckets.`,

  "A.8.13": `### Backup Standard & Verification Log
RPO 1 hour, RTO 4 hours for Customer Shipment DB.

- RDS automated backups: PITR enabled, 35-day retention, cross-region copy to ap-southeast-4.
- S3 shipment bucket: versioning + replication to second region.
- Backups encrypted with KMS; access restricted to backup IAM role.

Restore test log:
| Date | What | Result |
|---|---|---|
| 2025-03-20 | RDS PITR to staging | Success, 38 min |
| 2025-06-10 | S3 object-version restore | Success |

Next restore drill: 2025-09. Owner: J. Tan.`,

  "A.8.14": `### Redundancy of Processing Facilities
Production runs across 3 AWS Availability Zones in ap-southeast-2 (Sydney).

- EKS worker nodes spread across az 2a/2b/2c; pods anti-affinity per AZ.
- RDS Multi-AZ deployment with automatic failover (tested failover < 90s).
- Application Load Balancer health-checks; unhealthy targets drained.
- Cross-region warm standby (RDS read replica) in ap-southeast-4 for DR.

DR test 2025-04-18: simulated AZ 2a outage, traffic served from 2b/2c with no
customer-visible downtime. Availability SLO 99.9%; YTD actual 99.96%.`,

  "A.8.15": `### Logging Standard
Centralised logging to Datadog (90-day hot, S3 archive 1 year).

Logged events: authentication (Okta), AWS API calls (CloudTrail),
app access to shipment records, admin/privileged actions, config changes.

- CloudTrail enabled all regions, log-file validation on, logs immutable in
  dedicated S3 bucket with Object Lock.
- Logs include timestamp (UTC), actor, source IP, action, outcome.
- Log buckets write-restricted; only security team can read.

Sample:
\`2025-06-15T03:14:22Z user=marcus.webb action=AssumeRole role=admin srcip=203.0.113.7 result=Allow\`

Daily ingestion ~6 GB. Gaps alert via Datadog monitor.`,

  "A.8.16": `### Monitoring Activities
Detection via Datadog Security + AWS GuardDuty.

Active monitors:
| Alert | Trigger | Route |
|---|---|---|
| Impossible travel | Okta login from 2 countries < 1h | #sec-alerts + PagerDuty |
| Root account use | Any AWS root login | PagerDuty P1 |
| GuardDuty finding | Med/High | Jira auto-ticket |
| Failed logins | >20/account/5min | Slack |

On-call security engineer triages P1 within 15 min (runbook in Confluence).
May 2025: 11 alerts, 1 true positive (GuardDuty crypto-mining attempt on test
account, contained, SEC-410). MTTR 22 min.`,

  "A.8.17": `### Clock Synchronization Standard
All systems sync to Amazon Time Sync Service (link-local 169.254.169.123).

- EC2/EKS nodes use chrony pointed at Amazon NTP; drift alert if > 1s.
- Laptops sync via OS NTP to time.apple.com / time.windows.com.
- All log timestamps recorded in UTC.
- SaaS platforms (Okta, GitHub, Datadog) are vendor-managed NTP-synced.

Verification 2025-06-12: sampled 5 prod nodes, max offset 4 ms. Datadog
\`ntp.offset\` monitor green for all hosts over trailing 30 days.`,

  "A.8.18": `### Privileged Utility Programs Standard
Use of admin/system utilities restricted and logged.

- Direct SSH disabled; admin shell only via AWS SSM Session Manager (session
  logged to S3 + CloudWatch).
- \`kubectl\` to prod restricted to app-admin Okta group; commands audited.
- Database admin tools (psql) reachable only through bastion via SSM.
- Local admin removed from laptops; PowerShell/Terminal elevation needs ticket.

SSM session log sample (2025-06-14): user=jane.tan, target=prod-db-bastion,
duration=12m, recorded. Quarterly review of session logs by CISO; last 2025-06.`,

  "A.8.19": `### Software Installation Control
Only approved software on operational systems.

- Laptops: Kandji/Intune managed app catalog; users cannot install unmanaged
  apps (admin removed). Requests via Jira, vetted by IT.
- Servers: immutable container images only; no in-place package installs in prod.
- Image provenance: signed images from internal ECR, deployed via CI only.
- Approved software list maintained in Confluence (reviewed quarterly).

June 2025: 6 software requests, 5 approved, 1 denied (unvetted PDF tool).
No unauthorised binaries found in CrowdStrike application inventory scan.`,

  "A.8.20": `### Network Security Standard
AWS VPC (10.20.0.0/16) in ap-southeast-2.

- Public subnets: only ALB + NAT gateway. App + DB in private subnets.
- Security groups default-deny; least-port (443 in to ALB, 5432 DB from app SG only).
- AWS WAF on ALB: managed rules + rate limiting (2000 req/5min/IP).
- VPC Flow Logs to S3; GuardDuty analysing.
- Site-to-office access via WireGuard VPN with Okta auth + MFA.

Security-group audit 2025-06-05: 0 rules open 0.0.0.0/0 on non-ALB ports.
Any wide-open rule blocked by AWS Config rule + auto-ticket.`,

  "A.8.21": `### Security of Network Services
Network services (managed + provided) governed by security requirements.

- Managed services (AWS RDS, ELB, Route 53) enforce TLS 1.2+; security
  features (encryption, logging) required in Terraform modules.
- DNS: Route 53 with DNSSEC on northwindlogistics.com.au; registrar lock on.
- Inbound API: HTTPS only, HSTS, mTLS for partner freight integrations.
- Service levels with AWS per Enterprise Support; uptime tracked in Datadog.

Partner connection register lists 3 freight carriers, each with mTLS cert,
IP allowlist, and signed integration security schedule. Reviewed 2025-05-28.`,

  "A.8.22": `### Network Segregation
Environments and tiers isolated.

| Segment | CIDR / scope | Access |
|---|---|---|
| Prod VPC | 10.20.0.0/16 | CI + on-call only |
| Staging VPC | 10.30.0.0/16 | engineering |
| Corp/office | WireGuard 10.40.0.0/24 | staff w/ MFA |

- No VPC peering between prod and staging; separate AWS accounts (Control Tower).
- DB tier in isolated private subnets, no internet route.
- Office network cannot reach prod data plane except via SSM.

Verified 2025-06-05 via Terraform review + reachability test (staging->prod blocked).`,

  "A.8.23": `### Web Filtering Standard
Outbound web filtering on managed laptops.

- Cloudflare Gateway (Zero Trust) enforced via WARP client on all laptops.
- Blocked categories: malware, phishing, command-and-control, newly-registered
  domains, anonymisers, adult content.
- DNS queries logged; security reviews blocked-category hits weekly.
- Bypass requires IT approval (Jira) with business justification.

May 2025 stats: 1.2M queries, 380 blocked (mostly malware/phishing),
0 successful malware-domain connections. Owner: Marcus Webb.`,

  "A.8.24": `### Cryptography Standard
**Owner:** Priya Sharma · aligned to NIST-approved algorithms.

| Use | Control |
|---|---|
| Data in transit | TLS 1.2+ (1.3 preferred), strong ciphers only |
| Data at rest | AES-256 via AWS KMS (RDS, S3, EBS) |
| Secrets | AWS Secrets Manager + 1Password, KMS-encrypted |
| Key management | KMS CMKs, annual rotation, IAM-scoped |
| Password storage | bcrypt (cost 12) in app |

- No self-signed certs in prod; ACM-issued certs auto-renewed.
- Deprecated TLS 1.0/1.1 and SSLv3 disabled. Verified via SSL Labs A+ 2025-06.`,

  "A.8.25": `### Secure Development Life Cycle (excerpt)
SDLC stages with security gates, documented in Confluence.

1. **Design** — threat model for features touching PII/auth (Marcus + security review).
2. **Code** — secure coding guidelines; PR review mandatory (2 approvers).
3. **Build** — SAST (CodeQL), dependency scan (Dependabot), secret scan in CI.
4. **Test** — security test cases; DAST on staging before release.
5. **Release** — change ticket + sign-off; deploy via CI only.
6. **Operate** — monitoring, vuln management, patching.

Security gates block merge on Critical/High findings. SDLC reviewed annually;
last update 2025-02. All engineers completed secure-dev training 2025 Q1.`,

  "A.8.26": `### Application Security Requirements (sample, feature: Carrier API v2)
Captured as security acceptance criteria in Jira epic NWL-880.

- [x] All endpoints require OAuth2 bearer token; no anonymous access.
- [x] Input validation on all request fields; reject unknown params.
- [x] Authorisation checks enforce tenant isolation (customer can't read others' shipments).
- [x] Rate limited at 600 req/min per client.
- [x] PII fields encrypted at rest; payment tokens never logged.
- [x] All requests audit-logged with actor + outcome.
- [x] Errors return generic messages (no stack traces to client).

Verified by security review + automated tests before release 2025-05-22.`,

  "A.8.27": `### Secure Architecture & Engineering Principles
Applied to all new services; reviewed in design phase.

- **Least privilege**: each service has scoped IAM role; no shared creds.
- **Defence in depth**: WAF -> ALB -> private app -> isolated DB.
- **Secure defaults**: deny-by-default security groups; encryption on by default.
- **Fail securely**: on auth-service outage, requests denied not allowed.
- **Tenant isolation**: customer_id enforced at query layer.
- **Minimise attack surface**: no public DB, no SSH, immutable infra.

Design reviews recorded in Confluence; new "Real-time ETA" service reviewed
2025-06-03, 2 findings addressed before build.`,

  "A.8.28": `### Secure Coding Standard (excerpt)
Language: TypeScript/Node + Go. Enforced via CI.

- Use parameterised queries / ORM only — no string-concatenated SQL.
- Output-encode all user data rendered in UI (XSS).
- No secrets in code; load from Secrets Manager.
- Validate and allowlist all external input.
- Dependencies pinned; Dependabot updates reviewed weekly.
- CodeQL SAST runs on every PR; High/Critical block merge.

Linting (eslint-plugin-security, gosec) required to pass. June 2025 CodeQL:
0 open High alerts. Annual secure-coding refresher completed by all 22 engineers.`,

  "A.8.29": `### Security Testing in Development & Acceptance
Testing gates before production release.

| Test | Tool | When |
|---|---|---|
| SAST | CodeQL | every PR |
| Dependency scan | Dependabot/Trivy | every build |
| DAST | OWASP ZAP | nightly on staging |
| Pen test | External (CyberCX) | annual + major release |

- Release blocked if any Critical/High open.
- Pen test 2025-03 by CyberCX: 2 medium findings (CSRF on legacy form, verbose
  error) — both remediated and retested by 2025-04-11.
Acceptance sign-off by Priya Sharma recorded per release in Jira.`,

  "A.8.30": `### Outsourced Development Oversight
One outsourced module: mobile driver app via vendor "AppForge Pty Ltd".

- Contract includes security schedule: secure coding, our SDLC gates apply,
  IP + source ownership to Northwind, right-to-audit, breach notification 24h.
- AppForge devs use our GitHub org (scoped repo, MFA, no prod access).
- All vendor code passes our CI security gates (CodeQL, Dependabot) before merge.
- Independent code review by Marcus Webb before each release.

Vendor security questionnaire on file (2025-01); pen test of delivered app
2025-05 found 1 medium issue, fixed before launch. Reviewed quarterly.`,

  "A.8.31": `### Separation of Dev / Test / Prod
Three isolated environments, separate AWS accounts.

| Env | AWS account | Data |
|---|---|---|
| Dev | 1111-... | synthetic only |
| Staging | 2222-... | masked prod copy |
| Prod | 3333-... | live customer data |

- No network path between prod and lower environments.
- Prod credentials/secrets not present in dev or staging.
- Developers have no standing prod access; changes flow via CI promotion.
- Prod data never copied to dev; staging refresh always masked (see A.8.11).

Verified by account-boundary review 2025-06-05; 0 cross-env IAM trust to prod.`,

  "A.8.32": `### Change Management Record (sample) — CHG-2025-114
Title: Upgrade Postgres 14 -> 16 on prod RDS.

- **Requested by:** J. Tan · **Approved by:** Marcus Webb (CAB) 2025-06-09
- **Risk:** Medium · **Rollback:** restore from pre-change snapshot
- **Security review:** Yes — no new exposure, encryption retained
- **Testing:** Applied to staging 2025-06-05, regression suite passed
- **Window:** 2025-06-14 02:00 AEST (low traffic), Multi-AZ minimised downtime

Steps: snapshot taken; blue/green deployment; validated; old instance retained 7 days.
**Result:** Success, 6 min failover. Post-change review closed 2025-06-15.`,

  "A.8.33": `### Test Information Management
Controls protecting data used for testing.

- Non-prod environments use synthetic or masked data only (see A.8.11);
  raw production PII is never used in test.
- Test datasets generated by faker scripts; payment data uses Stripe test tokens.
- If a masked prod copy is used in staging, access is restricted to engineering
  via Okta group and deleted after the test cycle.
- Test data excluded from long-term backups; staging refreshed/wiped monthly.

Audit 2025-06-08: scanned staging DB with Macie — 0 real customer PII detected.
Approval to use masked copy logged per refresh.`,

  "A.8.34": `### Protection During Audit Testing
Procedure for audits/assessments touching live systems.

- Audit scope, timing, and access agreed in advance with Priya Sharma.
- Auditors receive read-only, time-boxed accounts (Okta), revoked after engagement.
- Testing on production scheduled in low-traffic windows; no destructive tests on prod.
- Pen tests run against staging mirror where possible; prod tests require sign-off
  and a rollback/monitoring plan.
- All auditor activity logged (CloudTrail) and reviewed afterwards.

Example: CyberCX pen test 2025-03 — read-only accounts issued 2025-03-03,
revoked 2025-03-10; activity log reviewed, no unintended impact (SEC-395).`,
};
