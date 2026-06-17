import type { AnnexControl } from "./types";

export const technologicalControls: AnnexControl[] = [
  {
    id: "A.8.1",
    sort: 8.01,
    theme: "Technological",
    title: "User endpoint devices",
    tags: ["Preventive", "Protect"],
    purpose:
      "Keep information safe on the devices people use every day, such as laptops, desktops and phones.",
    whatItMeans:
      "An \"endpoint\" is any device a person uses to do their work. Because these devices travel, get lost and connect to many networks, they need clear rules and built-in protections so the data on them stays secure.",
    howToImplement: [
      "Write a simple policy covering how company devices (and personal devices, if allowed) may be used.",
      "Turn on full-disk encryption and screen locks on every device.",
      "Require devices to be kept up to date and to run endpoint protection.",
      "Use a way to remotely wipe or lock a lost or stolen device, for example Mobile Device Management (MDM, software that manages devices centrally).",
      "Tell people what to do if a device is lost or stolen.",
    ],
    evidence: [
      "Endpoint / acceptable use policy",
      "Device inventory showing encryption status",
      "MDM configuration or enrolment report",
      "Records of lost-device reports and actions taken",
    ],
    template: `# User Endpoint Device Policy

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Scope
All [Company]-managed laptops, desktops, tablets and phones, plus any approved personal devices.

## Rules
- Full-disk encryption must be enabled on every device.
- Screen auto-locks after [5] minutes; a password/PIN/biometric is required.
- Operating system and apps must update within [14] days of a release.
- Approved endpoint protection must be installed and running.
- Lost or stolen devices must be reported to [contact] within [1 hour].

## Personal devices (BYOD)
- Allowed only for [email / approved apps] and must be enrolled in [MDM].

## Device register
| Device ID | User | Encrypted | Managed by MDM | Last checked |
|-----------|------|-----------|----------------|--------------|
| [..]      | [..] | [Y/N]     | [Y/N]          | [YYYY-MM-DD] |`,
  },
  {
    id: "A.8.2",
    sort: 8.02,
    theme: "Technological",
    title: "Privileged access rights",
    tags: ["Preventive", "Protect"],
    purpose:
      "Tightly control the powerful \"admin\" accounts that can change systems, so they are not misused or stolen.",
    whatItMeans:
      "Some accounts can do far more than a normal user, like installing software, changing settings or reading everyone's data. These \"privileged\" accounts are a top target for attackers, so they need extra care: fewer of them, watched closely, and only used when truly needed.",
    howToImplement: [
      "List every privileged account and who owns it.",
      "Grant admin rights only to people who need them, and only for as long as they need them.",
      "Use separate admin accounts (never the everyday account) for privileged tasks.",
      "Require strong multi-factor authentication on all privileged accounts.",
      "Review the list of privileged users regularly and remove access that is no longer needed.",
    ],
    evidence: [
      "Register of privileged accounts and owners",
      "Approval records for granting admin rights",
      "MFA configuration for privileged accounts",
      "Periodic access review records",
    ],
    template: `# Privileged Access Management Standard

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Principles
- Privileged access is granted on a least-privilege, need-to-use basis.
- Admin tasks use a separate admin account, not a daily-use account.
- All privileged accounts require multi-factor authentication.
- Privileged access is reviewed at least every [3 months].

## Approval flow
1. Requester raises a request stating the system and reason.
2. [System owner] approves or rejects.
3. [IT] grants access and records it in the register.

## Privileged account register
| Account | System | Owner | Granted on | Review date | Still needed |
|---------|--------|-------|-----------|-------------|--------------|
| [..]    | [..]   | [..]  | [..]      | [..]        | [Y/N]        |`,
  },
  {
    id: "A.8.3",
    sort: 8.03,
    theme: "Technological",
    title: "Information access restriction",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure people can only see and use the information they are allowed to.",
    whatItMeans:
      "Not everyone needs access to everything. This control is about setting up systems so each person reaches only the data and functions their role requires, which limits damage if an account is misused.",
    howToImplement: [
      "Decide access rules based on roles and the sensitivity of the information.",
      "Apply the rules in each system using groups or roles rather than one-by-one settings.",
      "Default to \"no access\" and add permissions only when justified.",
      "Restrict access at the menu, file and record level where the system allows it.",
      "Review access regularly and when people change roles or leave.",
    ],
    evidence: [
      "Access control policy with role-based rules",
      "Sample of system permission settings",
      "Access review records",
      "Records of access changes for joiners/movers/leavers",
    ],
    template: `# Information Access Restriction Policy

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Rule
Access is granted by role and only to what the role needs (least privilege).
The default for any new data is "no access".

## Role-to-access mapping
| Role | Systems / data | Permission level (read / write / admin) |
|------|----------------|-----------------------------------------|
| [..] | [..]           | [..]                                    |
| [..] | [..]           | [..]                                    |

## Reviews
- Access is reviewed every [6 months] by [data owner].
- Access is updated within [2 working days] of a role change or departure.

## Exceptions
| Person | Extra access | Reason | Approved by | Expires |
|--------|--------------|--------|-------------|---------|
| [..]   | [..]         | [..]   | [..]        | [..]    |`,
  },
  {
    id: "A.8.4",
    sort: 8.04,
    theme: "Technological",
    title: "Access to source code",
    tags: ["Preventive", "Protect"],
    purpose:
      "Protect the program code (and related build tools) that runs the organisation's software.",
    whatItMeans:
      "Source code is the human-written instructions behind an application. If the wrong people can read or change it, they could steal secrets or introduce hidden flaws. This control keeps code in controlled storage with managed access.",
    howToImplement: [
      "Store code in a managed repository (for example Git) rather than scattered on laptops.",
      "Give read and write access only to the developers who need it.",
      "Require review and approval before changes are merged into important branches.",
      "Keep secrets (passwords, keys) out of the code using a secrets manager.",
      "Log who accessed or changed the code.",
    ],
    evidence: [
      "Repository access list and permission settings",
      "Branch protection / merge approval rules",
      "Secrets-scanning configuration or report",
      "Code access and change logs",
    ],
    template: `# Source Code Access Standard

**Owner:** [Engineering]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Where code lives
All source code is stored in [repository platform]. No production code is kept on personal devices.

## Access
- Read/write access granted by [team lead] on a need basis.
- Access is removed within [2 working days] of someone leaving the team.

## Change protection
- The [main] branch is protected: no direct pushes.
- Every change needs at least [1] reviewer approval before merge.
- Automated secret scanning runs on every change.

## Repository access register
| Repository | User | Access level | Granted on | Reviewed |
|------------|------|--------------|-----------|----------|
| [..]       | [..] | [read/write] | [..]      | [..]     |`,
  },
  {
    id: "A.8.5",
    sort: 8.05,
    theme: "Technological",
    title: "Secure authentication",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure people (and systems) are who they claim to be before they get in.",
    whatItMeans:
      "Authentication is the step that proves identity, usually with a password plus something extra. Strong authentication, especially multi-factor authentication (MFA, using two or more proofs), is one of the most effective ways to stop account takeover.",
    howToImplement: [
      "Turn on multi-factor authentication everywhere it is available, starting with email and admin accounts.",
      "Set sensible password rules (long passphrases, no reuse, screen for known-breached passwords).",
      "Avoid showing whether it was the username or password that was wrong.",
      "Lock or slow down accounts after repeated failed attempts.",
      "Use single sign-on (SSO) where possible to reduce the number of passwords.",
    ],
    evidence: [
      "Authentication / password policy",
      "MFA coverage report",
      "Account lockout configuration",
      "SSO configuration evidence",
    ],
    template: `# Secure Authentication Policy

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Multi-factor authentication (MFA)
- MFA is required for email, [VPN], admin accounts and [key systems].
- Accepted second factors: authenticator app, security key. SMS only if no alternative.

## Passwords / passphrases
- Minimum length [14] characters; passphrases encouraged.
- Checked against known-breached password lists.
- No forced periodic change unless a compromise is suspected.

## Account protection
- After [10] failed attempts the account is temporarily locked.
- Login errors do not reveal which field was wrong.

## Coverage tracker
| System | MFA enabled | SSO | Notes |
|--------|-------------|-----|-------|
| [..]   | [Y/N]       | [Y/N] | [..] |`,
  },
  {
    id: "A.8.6",
    sort: 8.06,
    theme: "Technological",
    title: "Capacity management",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure systems always have enough resources to keep working reliably.",
    whatItMeans:
      "\"Capacity\" means having enough computing power, storage, memory and network bandwidth. If a system runs out, it can slow down or crash, which harms availability. This control is about watching usage and planning ahead before that happens.",
    howToImplement: [
      "Identify the resources that matter most (storage, CPU, memory, bandwidth, licences).",
      "Monitor current usage and set alert thresholds (for example warn at 80% full).",
      "Forecast future needs based on growth and upcoming projects.",
      "Plan upgrades or clean-ups before limits are reached.",
      "Review capacity regularly and after major changes.",
    ],
    evidence: [
      "Capacity monitoring dashboards or reports",
      "Alert threshold configuration",
      "Capacity forecast / planning notes",
      "Records of upgrades made in response to trends",
    ],
    template: `# Capacity Management Plan

**Owner:** [IT/Operations]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## What we watch
| Resource | System | Warn at | Critical at | Current |
|----------|--------|---------|-------------|---------|
| Disk     | [..]   | 80%     | 90%         | [..]%   |
| CPU      | [..]   | 75%     | 90%         | [..]%   |
| Memory   | [..]   | 80%     | 90%         | [..]%   |
| Bandwidth| [..]   | 70%     | 85%         | [..]%   |

## Monitoring
- Usage is collected by [tool] and reviewed [weekly].
- Alerts go to [team/inbox].

## Forecast
- Expected growth over next [12 months]: [estimate].
- Planned actions: [upgrade / archive / scale].

## Review log
| Date | Finding | Action taken |
|------|---------|--------------|
| [..] | [..]    | [..]         |`,
  },
  {
    id: "A.8.7",
    sort: 8.07,
    theme: "Technological",
    title: "Protection against malware",
    tags: ["Preventive", "Detective"],
    purpose:
      "Stop malicious software (viruses, ransomware, spyware) from harming the organisation's systems and information.",
    whatItMeans:
      "Every device that handles company information runs up-to-date anti-malware protection, and people are taught not to run untrusted files. Detections are monitored so the team can react quickly.",
    howToImplement: [
      "Deploy reputable endpoint protection on all servers, laptops and where feasible mobile devices.",
      "Configure automatic signature/definition updates and regular scans.",
      "Combine with user awareness training and email/web filtering.",
      "Centrally monitor alerts and define who responds to a detection.",
    ],
    evidence: [
      "Anti-malware deployment coverage report",
      "Configuration showing auto-update and scheduled scans",
      "Sample detection/alert logs and how they were handled",
    ],
    template: `# Anti-Malware Standard

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Scope
All [Company]-managed endpoints and servers.

## Requirements
- Approved endpoint protection installed and running on every device.
- Definitions update automatically at least daily.
- Full scan scheduled weekly; real-time protection always on.
- Users cannot disable protection (enforced by policy/MDM).
- Alerts forwarded to [monitoring tool / inbox] and triaged within [X hours].

## Detection log
| Date | Device | Threat | Action taken | Resolved |
|------|--------|--------|--------------|----------|
| [..] | [..]   | [..]   | [..]         | [Y/N]    |`,
  },
  {
    id: "A.8.8",
    sort: 8.08,
    theme: "Technological",
    title: "Management of technical vulnerabilities",
    tags: ["Preventive", "Detective", "Protect"],
    purpose:
      "Find and fix known weaknesses in software and systems before attackers use them.",
    whatItMeans:
      "A vulnerability is a flaw in software that could be exploited. Vendors regularly publish fixes (patches). This control is about knowing what you run, learning about new vulnerabilities quickly, and fixing the important ones in good time.",
    howToImplement: [
      "Keep an up-to-date inventory of your hardware, software and versions.",
      "Subscribe to vendor and security advisories so you hear about new issues.",
      "Scan systems regularly for known vulnerabilities.",
      "Rate findings by risk and set deadlines to fix them (for example critical within 14 days).",
      "Track fixes through to completion and review the process.",
    ],
    evidence: [
      "Asset / software inventory",
      "Vulnerability scan reports",
      "Patching schedule and remediation deadlines",
      "Records showing vulnerabilities fixed within target times",
    ],
    template: `# Technical Vulnerability Management Procedure

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## How we learn about vulnerabilities
- Vendor advisories, [scanner] reports, and [threat feed].

## Fix deadlines (from confirmation)
| Severity | Fix within |
|----------|-----------|
| Critical | 14 days   |
| High     | 30 days   |
| Medium   | 90 days   |
| Low      | Best effort |

## Process
1. Scan / receive advisory.
2. Confirm if we are affected.
3. Record in the tracker and assign an owner.
4. Patch or apply a workaround within the deadline.
5. Verify the fix.

## Vulnerability tracker
| ID | Asset | Severity | Found | Due | Status |
|----|-------|----------|-------|-----|--------|
| [..] | [..] | [..]   | [..]  | [..] | [Open/Closed] |`,
  },
  {
    id: "A.8.9",
    sort: 8.09,
    theme: "Technological",
    title: "Configuration management",
    tags: ["Preventive", "Protect"],
    purpose:
      "Set systems up securely and keep them that way over time.",
    whatItMeans:
      "Configuration is how a system is set up, its settings and options. Insecure defaults are a common cause of breaches. This control means defining secure settings (a \"baseline\"), applying them consistently, and checking they do not drift over time.",
    howToImplement: [
      "Define secure baseline configurations for your common system types (laptops, servers, cloud services).",
      "Turn off features and accounts you do not need.",
      "Apply baselines automatically where possible, for example with scripts or MDM.",
      "Record approved configurations and any deviations.",
      "Periodically check that systems still match the baseline.",
    ],
    evidence: [
      "Documented secure baselines / hardening standards",
      "Tooling or scripts that enforce configuration",
      "Configuration review or drift reports",
      "Register of approved exceptions",
    ],
    template: `# Secure Configuration Baseline

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Scope
Applies to [laptops / servers / cloud service]: [system type].

## Baseline settings
- Default/guest accounts disabled.
- Unused services and ports turned off.
- Encryption enabled at rest and in transit.
- Logging enabled and sent to [central log].
- Automatic updates configured.

## Enforcement
- Applied via [MDM / script / cloud policy].
- Drift checked [monthly] using [tool].

## Approved exceptions
| System | Deviation | Reason | Approved by | Expires |
|--------|-----------|--------|-------------|---------|
| [..]   | [..]      | [..]   | [..]        | [..]    |`,
  },
  {
    id: "A.8.10",
    sort: 8.1,
    theme: "Technological",
    title: "Information deletion",
    tags: ["Preventive", "Protect"],
    purpose:
      "Delete information securely when it is no longer needed.",
    whatItMeans:
      "Keeping data forever is a risk and may break privacy laws. This control is about deleting information properly when it is no longer required, so it cannot be recovered, including on devices being disposed of or returned.",
    howToImplement: [
      "Decide how long each type of information should be kept (a retention schedule).",
      "Delete or securely erase data once its retention period ends.",
      "Use secure-wipe methods for devices and storage before reuse or disposal.",
      "Make sure deletion also covers backups and cloud copies where appropriate.",
      "Get certificates of destruction when a third party disposes of media.",
    ],
    evidence: [
      "Retention and deletion schedule",
      "Secure wipe / sanitisation procedure",
      "Deletion records or destruction certificates",
      "Evidence that retention rules are applied in systems",
    ],
    template: `# Information Deletion Procedure

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Retention schedule
| Information type | Keep for | Then |
|------------------|----------|------|
| [..]             | [..]     | [Delete / archive] |
| [..]             | [..]     | [..] |

## How we delete
- Files/databases: [secure delete method].
- Whole devices: [wipe standard, e.g. crypto-erase] before reuse or disposal.
- Cloud data: removed from [service] and confirmed.
- Backups: data ages out after [retention period].

## Deletion record
| Date | What | Method | Done by | Verified |
|------|------|--------|---------|----------|
| [..] | [..] | [..]   | [..]    | [Y/N]    |`,
  },
  {
    id: "A.8.11",
    sort: 8.11,
    theme: "Technological",
    title: "Data masking",
    tags: ["Preventive", "Protect"],
    purpose:
      "Hide or disguise sensitive data so people see only what they need to.",
    whatItMeans:
      "Data masking means replacing or hiding real sensitive values, for example showing only the last four digits of a card number. It lets staff and test systems work without exposing the full sensitive data, reducing the harm if it leaks.",
    howToImplement: [
      "Identify which data fields are sensitive (personal data, card numbers, health data).",
      "Decide where masking is needed: on screens, in reports, in test environments.",
      "Choose techniques such as masking, pseudonymisation or anonymisation.",
      "Apply masking when copying production data into test or analytics systems.",
      "Restrict who can view the unmasked values.",
    ],
    evidence: [
      "List of sensitive fields and masking rules",
      "Configuration showing masking in applications or test data",
      "Access rules for viewing unmasked data",
      "Sample masked output",
    ],
    template: `# Data Masking Standard

**Owner:** [Data/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Why
Reduce exposure of sensitive data by showing only what each role needs.

## Masking rules
| Field | Sensitivity | Default view | Who sees full value |
|-------|-------------|--------------|---------------------|
| Card number | High | Last 4 digits | [role] |
| Email | Medium | [user]@*** | [role] |
| Health note | High | Hidden | [role] |

## Test / analytics data
- Production data copied to test must be [masked / pseudonymised] first.
- Method: [technique].

## Controls
- Unmasking actions are logged.
- Access to full values requires [approval].`,
  },
  {
    id: "A.8.12",
    sort: 8.12,
    theme: "Technological",
    title: "Data leakage prevention",
    tags: ["Preventive", "Detective", "Protect"],
    purpose:
      "Stop sensitive information from leaving the organisation when it should not.",
    whatItMeans:
      "Data leakage is when confidential information escapes, by email, USB stick, cloud upload or copy-paste, whether by mistake or on purpose. Data Leakage Prevention (DLP) tools and rules watch for this and block or alert on it.",
    howToImplement: [
      "Identify the sensitive data you most need to protect and where it lives.",
      "Set rules for how it may move (for example no personal data to personal email).",
      "Use DLP features in email, cloud and endpoint tools to detect and block risky transfers.",
      "Control or disable removable media such as USB drives where appropriate.",
      "Monitor alerts and follow up on incidents.",
    ],
    evidence: [
      "Data classification and DLP policy",
      "DLP rule configuration in email/cloud/endpoint tools",
      "Removable media controls",
      "DLP alert logs and incident follow-ups",
    ],
    template: `# Data Leakage Prevention Policy

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Protected data
[Personal data, financial data, intellectual property, ...].

## Movement rules
- No [confidential] data to personal email or personal cloud accounts.
- Removable media (USB) is [blocked / allowed only if encrypted].
- Large/sensitive uploads to external sites are [blocked / alerted].

## Detection
- DLP enabled in [email], [cloud suite], [endpoints].
- Alerts go to [team] and are reviewed within [X hours].

## Alert log
| Date | User | What was blocked/flagged | Action | False positive |
|------|------|--------------------------|--------|----------------|
| [..] | [..] | [..]                     | [..]   | [Y/N]          |`,
  },
  {
    id: "A.8.13",
    sort: 8.13,
    theme: "Technological",
    title: "Information backup",
    tags: ["Corrective", "Recover"],
    purpose:
      "Keep reliable copies of important information so it can be restored after loss or damage.",
    whatItMeans:
      "A backup is a spare copy of your data and systems. If files are deleted, corrupted or hit by ransomware, good backups let you recover. The key is that backups are taken regularly, kept safely (including off-site or offline), and actually tested.",
    howToImplement: [
      "Identify what needs backing up and how often.",
      "Follow a strong pattern such as 3-2-1 (three copies, two media types, one off-site/offline).",
      "Encrypt backups and protect them from being changed or deleted by attackers.",
      "Automate backups and check they complete successfully.",
      "Regularly test restoring data to prove the backups work.",
    ],
    evidence: [
      "Backup policy and schedule",
      "Backup success/failure logs",
      "Evidence of off-site or immutable backup copies",
      "Restore test records",
    ],
    template: `# Backup Policy

**Owner:** [IT/Operations]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## What we back up
| System / data | Frequency | Retention | Location |
|---------------|-----------|-----------|----------|
| [..]          | [Daily]   | [30 days] | [off-site/cloud] |

## Principles
- Follow 3-2-1: 3 copies, 2 media types, 1 off-site or offline.
- Backups are encrypted and protected from deletion (immutable where possible).
- Backup jobs are monitored; failures alert [team].

## Restore testing
- A test restore is performed [quarterly].

## Restore test log
| Date | What restored | Time taken | Successful |
|------|---------------|-----------|------------|
| [..] | [..]          | [..]      | [Y/N]      |`,
  },
  {
    id: "A.8.14",
    sort: 8.14,
    theme: "Technological",
    title: "Redundancy of information processing facilities",
    tags: ["Preventive", "Protect", "Recover"],
    purpose:
      "Build in spare capacity so key systems keep running if one part fails.",
    whatItMeans:
      "Redundancy means having backups of the systems themselves, not just the data, for example a second server, internet line or data centre. If one fails, another takes over, so the service stays available.",
    howToImplement: [
      "Identify the systems that must stay available and their availability targets.",
      "Add redundancy where justified: duplicate servers, power, network links or sites.",
      "Use automatic failover so a backup takes over without manual steps where possible.",
      "Avoid single points of failure (one component everything depends on).",
      "Test failover regularly to confirm it works.",
    ],
    evidence: [
      "List of critical systems and availability requirements",
      "Architecture showing redundant components",
      "Failover / high-availability configuration",
      "Failover test records",
    ],
    template: `# Redundancy & High Availability Plan

**Owner:** [IT/Operations]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Critical systems and targets
| System | Availability target | Max acceptable downtime |
|--------|---------------------|-------------------------|
| [..]   | [99.9%]             | [..]                    |

## Redundancy in place
| Layer | Single point of failure? | Redundancy |
|-------|--------------------------|-----------|
| Servers | [Y/N] | [..] |
| Network | [Y/N] | [..] |
| Power   | [Y/N] | [..] |
| Site    | [Y/N] | [..] |

## Failover
- Type: [automatic / manual].
- Tested [every 6 months].

## Failover test log
| Date | Scenario | Result |
|------|----------|--------|
| [..] | [..]     | [..]   |`,
  },
  {
    id: "A.8.15",
    sort: 8.15,
    theme: "Technological",
    title: "Logging",
    tags: ["Detective", "Detect"],
    purpose:
      "Record what happens in systems so problems and incidents can be investigated.",
    whatItMeans:
      "Logs are automatic records of events, like logins, errors and changes. Good logs let you spot suspicious activity and understand what happened during an incident. They must capture useful detail and be protected from tampering.",
    howToImplement: [
      "Decide what events to log (logins, failures, admin actions, access to sensitive data).",
      "Enable logging on systems, applications and network devices.",
      "Send logs to a central, protected store so they cannot be quietly altered.",
      "Set how long logs are kept based on need and law.",
      "Protect logs and limit who can read or change them.",
    ],
    evidence: [
      "Logging policy listing required events",
      "Central log storage configuration",
      "Log retention settings",
      "Evidence that logs are protected from tampering",
    ],
    template: `# Logging Standard

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## What we log
- Successful and failed logins.
- Privileged / admin actions.
- Access to sensitive data.
- System errors and security events.

## How
- Logs sent to [central log system].
- Retained for [12 months] (or as required by law).
- Logs are read-only to most staff; changes are themselves logged.

## Per-system logging
| System | Logging enabled | Sent to central | Retention |
|--------|-----------------|-----------------|-----------|
| [..]   | [Y/N]           | [Y/N]           | [..]      |`,
  },
  {
    id: "A.8.16",
    sort: 8.16,
    theme: "Technological",
    title: "Monitoring activities",
    tags: ["Detective", "Detect"],
    purpose:
      "Watch systems and networks for unusual or malicious behaviour and react to it.",
    whatItMeans:
      "Logging records events; monitoring is actively looking at them (often automatically) to spot signs of an attack or fault. The goal is to notice problems early and alert the right people so they can respond.",
    howToImplement: [
      "Decide what \"normal\" looks like and what should trigger an alert.",
      "Use tools to analyse logs and network traffic, such as a SIEM (a system that collects and analyses security events).",
      "Set up alerts for high-risk events like repeated failed logins or unusual data transfers.",
      "Define who watches alerts and how they respond.",
      "Tune the alerts over time to reduce noise and false alarms.",
    ],
    evidence: [
      "Monitoring approach / use cases",
      "Alerting configuration",
      "On-call or response responsibilities",
      "Sample alerts and how they were handled",
    ],
    template: `# Security Monitoring Procedure

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## What we monitor for
- Repeated failed or unusual logins.
- Privileged account use outside normal hours.
- Large or unusual data transfers.
- Malware detections and security tool alerts.

## Tools & responsibilities
- Collected and analysed in [SIEM / tool].
- Alerts reviewed by [team] during [hours]; on-call covers the rest.

## Alert handling
1. Triage severity.
2. Investigate.
3. Escalate to incident response if confirmed.

## Alert log
| Date | Alert | Severity | Outcome |
|------|-------|----------|---------|
| [..] | [..]  | [..]     | [..]    |`,
  },
  {
    id: "A.8.17",
    sort: 8.17,
    theme: "Technological",
    title: "Clock synchronization",
    tags: ["Detective", "Protect"],
    purpose:
      "Keep all system clocks set to the same accurate time.",
    whatItMeans:
      "When you investigate an incident, you compare logs from many systems. If their clocks disagree, the timeline is wrong and hard to follow. This control makes every system sync to a single trusted time source.",
    howToImplement: [
      "Choose a reliable time source (for example a trusted NTP server; NTP is the standard internet time protocol).",
      "Configure all servers, devices and network gear to sync to it.",
      "Use a consistent time zone or UTC for logs.",
      "Monitor for systems whose time drifts.",
      "Check sync after major changes or new deployments.",
    ],
    evidence: [
      "Time source / NTP configuration standard",
      "Evidence that systems point to the agreed source",
      "Logs showing consistent timestamps",
      "Drift monitoring or check records",
    ],
    template: `# Clock Synchronization Standard

**Owner:** [IT/Operations]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Time source
- Primary source: [trusted NTP server].
- Backup source: [secondary NTP server].
- Logs recorded in [UTC].

## Requirements
- All servers, endpoints and network devices sync to the source.
- Maximum allowed drift: [1 second].
- Drift is monitored by [tool/method].

## Sync status check
| System | Source set | In sync | Last checked |
|--------|-----------|---------|--------------|
| [..]   | [Y/N]     | [Y/N]   | [..]         |`,
  },
  {
    id: "A.8.18",
    sort: 8.18,
    theme: "Technological",
    title: "Use of privileged utility programs",
    tags: ["Preventive", "Protect"],
    purpose:
      "Control powerful tools that can bypass normal security controls.",
    whatItMeans:
      "Some utility programs can override system or application protections, for example tools that edit the registry, manage disks or change permissions. In the wrong hands they are dangerous, so their use must be limited, justified and recorded.",
    howToImplement: [
      "Identify the powerful utilities present on your systems.",
      "Remove or disable any that are not needed.",
      "Limit access to the few people who genuinely require them.",
      "Require approval before such tools are used and log their use.",
      "Separate these tools from normal applications where possible.",
    ],
    evidence: [
      "Inventory of privileged utilities",
      "Access restrictions for these tools",
      "Approval and usage logs",
      "Evidence that unneeded utilities were removed",
    ],
    template: `# Privileged Utility Programs Standard

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Principle
Tools that can bypass system or application controls are tightly restricted.

## Inventory & access
| Utility | Purpose | Allowed users | Approval needed | Logged |
|---------|---------|---------------|-----------------|--------|
| [..]    | [..]    | [..]          | [Y/N]           | [Y/N]  |

## Rules
- Unused privileged utilities are removed or disabled.
- Use requires prior approval from [owner].
- All use is logged and reviewed [monthly].

## Usage log
| Date | Utility | User | Reason | Approved by |
|------|---------|------|--------|-------------|
| [..] | [..]    | [..] | [..]   | [..]        |`,
  },
  {
    id: "A.8.19",
    sort: 8.19,
    theme: "Technological",
    title: "Installation of software on operational systems",
    tags: ["Preventive", "Protect"],
    purpose:
      "Control what software gets installed on live, working systems.",
    whatItMeans:
      "\"Operational\" systems are the ones doing real work. Unapproved or careless software installs can break them or introduce security holes. This control ensures only approved, tested software is installed, by the right people, in a controlled way.",
    howToImplement: [
      "Allow software installs only by authorised people or processes.",
      "Keep a list of approved software (an allow-list) for important systems.",
      "Test and approve updates before installing them on operational systems.",
      "Keep older versions available so you can roll back if needed.",
      "Record what is installed and when.",
    ],
    evidence: [
      "Software installation policy / allow-list",
      "Change records for installations and updates",
      "Evidence of testing before deployment",
      "Software inventory per system",
    ],
    template: `# Software Installation Standard

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Rules
- Only [IT / authorised admins] may install software on operational systems.
- Only software on the approved list may be installed.
- Updates are tested in [test environment] before going live.
- A rollback plan / previous version is kept.

## Approved software list
| Software | Version | Approved for | Approved by |
|----------|---------|--------------|-------------|
| [..]     | [..]    | [..]         | [..]        |

## Installation log
| Date | System | Software/version | Tested | Installed by |
|------|--------|------------------|--------|--------------|
| [..] | [..]   | [..]             | [Y/N]  | [..]         |`,
  },
  {
    id: "A.8.20",
    sort: 8.2,
    theme: "Technological",
    title: "Networks security",
    tags: ["Preventive", "Detective", "Protect"],
    purpose:
      "Protect the networks that carry the organisation's information.",
    whatItMeans:
      "Networks connect devices and systems together. If a network is poorly protected, attackers can move around freely. This control covers managing and securing networks, for example firewalls, secure settings and monitoring, to keep the data flowing through them safe.",
    howToImplement: [
      "Map your networks and the devices on them.",
      "Use firewalls and secure configurations to control traffic.",
      "Encrypt traffic that crosses untrusted networks (for example use a VPN).",
      "Secure wireless networks with strong authentication and encryption.",
      "Monitor network traffic for unusual activity.",
    ],
    evidence: [
      "Network diagram and inventory",
      "Firewall rules and configuration",
      "Wireless / VPN security settings",
      "Network monitoring evidence",
    ],
    template: `# Network Security Standard

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Network overview
- Diagram maintained at [location], reviewed [annually].

## Controls
- Firewalls control traffic between zones; default deny.
- Traffic over untrusted networks is encrypted (VPN / TLS).
- Wi-Fi uses [WPA3] with strong credentials; guest Wi-Fi is separated.
- Network activity is monitored by [tool].

## Firewall rule summary
| Source | Destination | Port/Service | Allow/Deny | Reason |
|--------|-------------|--------------|------------|--------|
| [..]   | [..]        | [..]         | [..]       | [..]   |`,
  },
  {
    id: "A.8.21",
    sort: 8.21,
    theme: "Technological",
    title: "Security of network services",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make sure the network services you use or provide are secure and well understood.",
    whatItMeans:
      "Network services include things like internet connections, VPNs and hosting, often provided by suppliers. This control means knowing each service's security features and rules, and making sure they meet your needs, ideally written into agreements.",
    howToImplement: [
      "List the network services you use and who provides them.",
      "Identify the security features each should have (encryption, authentication, monitoring).",
      "Agree security requirements and service levels with providers in writing.",
      "Apply secure settings to services you run yourself.",
      "Review the services and provider performance regularly.",
    ],
    evidence: [
      "Inventory of network services and providers",
      "Security requirements / SLAs in contracts",
      "Configuration of self-managed services",
      "Service review records",
    ],
    template: `# Network Services Security Register

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Services
| Service | Provider | Security features | Requirements agreed | Reviewed |
|---------|----------|-------------------|---------------------|----------|
| Internet | [..]    | [..]              | [Y/N]               | [..]     |
| VPN      | [..]    | [..]              | [Y/N]               | [..]     |
| Hosting  | [..]    | [..]              | [Y/N]               | [..]     |

## Requirements we expect
- Encryption in transit.
- Authentication and access control.
- Monitoring and incident notification.
- Agreed service levels and support contacts.

## Review notes
| Date | Service | Finding | Action |
|------|---------|---------|--------|
| [..] | [..]    | [..]    | [..]   |`,
  },
  {
    id: "A.8.22",
    sort: 8.22,
    theme: "Technological",
    title: "Segregation of networks",
    tags: ["Preventive", "Protect"],
    purpose:
      "Split networks into separate zones so a problem in one cannot easily spread.",
    whatItMeans:
      "Segregation means dividing the network into sections (for example guests, staff, servers) that are kept apart. If one section is compromised, the separation slows or stops an attacker reaching the others, limiting the damage.",
    howToImplement: [
      "Group systems by sensitivity and function (for example servers, user devices, guests).",
      "Place each group in its own network zone or segment.",
      "Use firewalls or access rules to control traffic between zones, default deny.",
      "Keep especially sensitive systems in tightly restricted zones.",
      "Review the segmentation as the network changes.",
    ],
    evidence: [
      "Network segmentation diagram",
      "Firewall / access rules between zones",
      "Evidence of separated guest and sensitive networks",
      "Review records of segmentation",
    ],
    template: `# Network Segregation Standard

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Zones
| Zone | Contains | Trust level |
|------|----------|-------------|
| Guest | Visitor Wi-Fi | Untrusted |
| User  | Staff devices | Standard  |
| Server | Internal servers | High    |
| Restricted | [sensitive systems] | Highest |

## Rules between zones
- Default deny; only required traffic is allowed.
- Guest zone has no access to internal zones.
- Restricted zone reachable only from [specified sources].

## Inter-zone rules
| From | To | Allowed traffic | Reason |
|------|----|-----------------|--------|
| [..] | [..] | [..]          | [..]   |`,
  },
  {
    id: "A.8.23",
    sort: 8.23,
    theme: "Technological",
    title: "Web filtering",
    tags: ["Preventive", "Protect"],
    purpose:
      "Limit access to risky or inappropriate websites to reduce malware and data loss.",
    whatItMeans:
      "Web filtering blocks or warns about dangerous websites, such as those known to spread malware or steal credentials. It protects users who might click a bad link and reduces exposure to harmful content.",
    howToImplement: [
      "Decide which categories of sites to block (malware, phishing, etc.) and any business restrictions.",
      "Use a web filtering tool or secure DNS service to enforce this.",
      "Apply filtering to devices both in the office and when remote.",
      "Allow exceptions through a simple, approved process.",
      "Monitor blocked attempts and adjust rules as needed.",
    ],
    evidence: [
      "Web filtering policy and blocked categories",
      "Filtering tool configuration",
      "Coverage for remote / off-network devices",
      "Logs of blocked access and exceptions",
    ],
    template: `# Web Filtering Policy

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Blocked categories
- Known malware and phishing sites.
- [Anonymising proxies], [adult content], [other].

## How it works
- Enforced by [web filter / secure DNS].
- Applies on-network and to remote devices via [agent].

## Exceptions
- Requested via [process], approved by [owner], time-limited.

## Exception register
| Site | Requested by | Reason | Approved by | Expires |
|------|--------------|--------|-------------|---------|
| [..] | [..]         | [..]   | [..]        | [..]    |

## Review
- Block logs reviewed [monthly]; categories adjusted as needed.`,
  },
  {
    id: "A.8.24",
    sort: 8.24,
    theme: "Technological",
    title: "Use of cryptography",
    tags: ["Preventive", "Protect"],
    purpose:
      "Use encryption properly to protect the confidentiality and integrity of information.",
    whatItMeans:
      "Cryptography (encryption) scrambles data so only authorised people can read it, and helps prove data has not been altered. This control is about using it where it matters, with strong methods, and managing the keys safely, since a lost or stolen key undoes the protection.",
    howToImplement: [
      "Decide where encryption is needed (data at rest, data in transit, backups).",
      "Choose strong, current algorithms and avoid outdated ones.",
      "Manage keys carefully: secure storage, controlled access, and rotation.",
      "Have a plan for what to do if a key is lost or compromised.",
      "Record your cryptography rules in a policy.",
    ],
    evidence: [
      "Cryptography policy with approved algorithms",
      "Evidence of encryption at rest and in transit",
      "Key management procedure",
      "Key inventory and rotation records",
    ],
    template: `# Cryptography Policy

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Where we use encryption
| Data | State | Method | Notes |
|------|-------|--------|-------|
| Laptops | At rest | Full-disk encryption | [..] |
| Web traffic | In transit | TLS [1.2+] | [..] |
| Backups | At rest | [algorithm] | [..] |

## Approved algorithms
- Use [AES-256], [TLS 1.2/1.3]; deprecated algorithms are not allowed.

## Key management
- Keys stored in [key manager / HSM].
- Access restricted to [roles]; rotated every [period].
- Lost/compromised keys trigger [response].

## Key inventory
| Key | Used for | Created | Rotation due | Owner |
|-----|----------|---------|--------------|-------|
| [..] | [..]    | [..]    | [..]         | [..]  |`,
  },
  {
    id: "A.8.25",
    sort: 8.25,
    theme: "Technological",
    title: "Secure development life cycle",
    tags: ["Preventive", "Protect"],
    purpose:
      "Build security into software from the very start of development, not as an afterthought.",
    whatItMeans:
      "The development life cycle is the whole journey of building software, from idea to release and maintenance. This control means weaving security into every stage, so problems are prevented early rather than fixed expensively later.",
    howToImplement: [
      "Define security steps for each development stage (design, build, test, release).",
      "Set rules for secure coding, code review and testing.",
      "Separate development, test and production environments.",
      "Track and fix security issues before release.",
      "Keep the process documented and improve it over time.",
    ],
    evidence: [
      "Secure development life cycle policy",
      "Security checkpoints / gates in the process",
      "Code review and security testing records",
      "Evidence of separate environments",
    ],
    template: `# Secure Development Life Cycle Policy

**Owner:** [Engineering/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Security in each stage
| Stage | Security activity |
|-------|-------------------|
| Plan/Design | Threat assessment, security requirements |
| Build | Secure coding standards, secrets kept out of code |
| Test | Security testing, code review |
| Release | Approval gate, no known critical issues |
| Maintain | Patching, vulnerability management |

## Environments
- Development, test and production are kept separate.

## Gate before release
- [ ] Code reviewed
- [ ] Security tests passed
- [ ] No open critical/high vulnerabilities
- [ ] Change approved by [owner]`,
  },
  {
    id: "A.8.26",
    sort: 8.26,
    theme: "Technological",
    title: "Application security requirements",
    tags: ["Preventive", "Protect", "Identify"],
    purpose:
      "Decide what security an application needs before and during its development.",
    whatItMeans:
      "Every application that handles information has security needs, such as login, access control and data protection. This control means identifying and writing down those requirements up front, so they are actually built in, whether you develop the app or buy it.",
    howToImplement: [
      "For each application, identify the information it handles and the risks.",
      "Define security requirements: authentication, authorisation, input validation, encryption, logging.",
      "Include requirements for data the app sends or receives over networks.",
      "Make these requirements part of the build or purchase decision.",
      "Verify the finished application meets them before go-live.",
    ],
    evidence: [
      "Documented application security requirements",
      "Requirements included in specifications or contracts",
      "Verification / sign-off against requirements",
      "Risk assessment per application",
    ],
    template: `# Application Security Requirements

**Application:** [name]   **Owner:** [..]   **Version:** [1.0]

## Information handled
- Data types: [personal data / financial / ...]; sensitivity: [..].

## Security requirements
| Area | Requirement | Met? |
|------|-------------|------|
| Authentication | MFA supported for [users] | [Y/N] |
| Authorisation | Role-based access control | [Y/N] |
| Input handling | Validates and sanitises input | [Y/N] |
| Data protection | Encrypts sensitive data at rest/in transit | [Y/N] |
| Logging | Records key security events | [Y/N] |
| Transactions | Protects data sent over networks | [Y/N] |

## Verification
- Requirements verified by [who] on [date] before go-live.`,
  },
  {
    id: "A.8.27",
    sort: 8.27,
    theme: "Technological",
    title: "Secure system architecture and engineering principles",
    tags: ["Preventive", "Protect"],
    purpose:
      "Design and build systems following solid, repeatable security principles.",
    whatItMeans:
      "Architecture is the overall design of a system. Following recognised security principles, like least privilege, defence in depth (several layers of protection) and secure defaults, leads to systems that are safer by design and consistent across projects.",
    howToImplement: [
      "Adopt a set of security design principles your teams must follow.",
      "Apply layered defences so one failure does not expose everything.",
      "Use least privilege and secure defaults throughout the design.",
      "Review designs for security before building (design review).",
      "Update the principles as technology and threats change.",
    ],
    evidence: [
      "Documented secure architecture / engineering principles",
      "Design review records",
      "Evidence principles are applied in real designs",
      "Updates reflecting new threats",
    ],
    template: `# Secure Architecture & Engineering Principles

**Owner:** [Engineering/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Principles we follow
- Least privilege: components and users get only what they need.
- Defence in depth: multiple independent layers of protection.
- Secure defaults: safest settings are on by default.
- Fail securely: errors do not expose data or open access.
- Minimise attack surface: disable what is not needed.

## Design review
- New or significantly changed systems get a security design review.

## Design review checklist
- [ ] Trust boundaries identified
- [ ] Data flows and sensitive data mapped
- [ ] Authentication & authorisation defined
- [ ] Logging and monitoring included
- [ ] Reviewed by [security] on [date]`,
  },
  {
    id: "A.8.28",
    sort: 8.28,
    theme: "Technological",
    title: "Secure coding",
    tags: ["Preventive", "Protect"],
    purpose:
      "Write code in ways that avoid common security mistakes.",
    whatItMeans:
      "Many breaches come from coding errors, like not checking user input. Secure coding means following good practices and standards so developers avoid these well-known mistakes, both in code they write and in code libraries they reuse.",
    howToImplement: [
      "Adopt a secure coding standard (for example based on OWASP guidance).",
      "Train developers on common vulnerabilities and how to avoid them.",
      "Use automated tools to scan code for security issues.",
      "Check third-party libraries for known vulnerabilities and keep them updated.",
      "Include security in code reviews before merging.",
    ],
    evidence: [
      "Secure coding standard / guidelines",
      "Code scanning tool configuration and reports",
      "Dependency / library vulnerability checks",
      "Code review records covering security",
    ],
    template: `# Secure Coding Standard

**Owner:** [Engineering]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Core practices
- Validate and sanitise all input.
- Use parameterised queries (no string-built SQL).
- Never hard-code secrets; use [secrets manager].
- Encode output to prevent cross-site scripting (XSS).
- Handle errors without leaking sensitive detail.

## Tooling
- Static analysis runs on every change in [tool].
- Dependency scanning checks libraries for known issues.

## Before merge
- [ ] Automated scans passed
- [ ] No new high/critical findings
- [ ] Reviewed by a second developer

## Library register
| Library | Version | Last checked | Known issues |
|---------|---------|--------------|--------------|
| [..]    | [..]    | [..]         | [..]         |`,
  },
  {
    id: "A.8.29",
    sort: 8.29,
    theme: "Technological",
    title: "Security testing in development and acceptance",
    tags: ["Preventive", "Detective", "Detect"],
    purpose:
      "Test software for security problems before it goes live.",
    whatItMeans:
      "Before releasing software, you should actively test whether it is secure, not just whether it works. This includes automated scans and, for important systems, deeper testing like penetration tests, so flaws are caught before attackers find them.",
    howToImplement: [
      "Define what security testing is required for each type of release.",
      "Use automated security scans during development.",
      "Carry out acceptance testing against the security requirements before go-live.",
      "Arrange penetration testing for high-risk or major systems.",
      "Fix significant findings before release and re-test.",
    ],
    evidence: [
      "Security testing plan / criteria",
      "Automated scan results",
      "Acceptance test sign-off",
      "Penetration test reports and remediation",
    ],
    template: `# Security Testing Plan

**Owner:** [Engineering/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Testing by release type
| Release type | Required testing |
|--------------|------------------|
| Minor change | Automated scans |
| Major feature | Scans + acceptance test |
| New system | Scans + acceptance + penetration test |

## Acceptance criteria
- No open critical or high-severity findings.
- Security requirements verified as met.

## Test record
| Date | System/release | Tests run | Findings | Resolved | Approved by |
|------|----------------|-----------|----------|----------|-------------|
| [..] | [..]           | [..]      | [..]     | [Y/N]    | [..]        |`,
  },
  {
    id: "A.8.30",
    sort: 8.3,
    theme: "Technological",
    title: "Outsourced development",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Keep software secure even when an outside company builds it for you.",
    whatItMeans:
      "If you hire another company to develop software, your security still depends on how they work. This control means setting clear security expectations, putting them in the contract, and checking the supplier actually follows them.",
    howToImplement: [
      "Set security requirements for the supplier (secure coding, testing, environments).",
      "Put these requirements and your right to verify them in the contract.",
      "Require evidence such as test results and code review records.",
      "Test or review the delivered software before accepting it.",
      "Monitor the supplier throughout the engagement.",
    ],
    evidence: [
      "Security requirements given to the developer",
      "Contract clauses covering security and audit rights",
      "Supplier evidence (test reports, reviews)",
      "Acceptance testing of delivered software",
    ],
    template: `# Outsourced Development Requirements

**Supplier:** [name]   **Owner:** [..]   **Version:** [1.0]

## Security requirements for the supplier
- Follow a secure development life cycle and secure coding standards.
- Keep development/test/production separate; protect our data.
- Perform security testing and share results.
- Notify us of incidents affecting our software or data.

## Our rights
- Right to review evidence and audit / test the deliverables.
- Acceptance only after our security checks pass.

## Verification log
| Date | Item checked | Evidence | Pass | Notes |
|------|--------------|----------|------|-------|
| [..] | [..]         | [..]     | [Y/N] | [..] |`,
  },
  {
    id: "A.8.31",
    sort: 8.31,
    theme: "Technological",
    title: "Separation of development, test and production environments",
    tags: ["Preventive", "Protect"],
    purpose:
      "Keep the places where you build, test and run software separate from each other.",
    whatItMeans:
      "Development is where code is written, test is where it is checked, and production is the live system real users rely on. Mixing them risks untested changes breaking live services or test data leaking. This control keeps them apart with controlled movement between them.",
    howToImplement: [
      "Set up distinct development, test and production environments.",
      "Restrict who can access each, especially production.",
      "Control how code and changes move from one environment to the next (promotion).",
      "Avoid using real sensitive data in development and test (mask or use synthetic data).",
      "Make sure environments do not share credentials or components in risky ways.",
    ],
    evidence: [
      "Description / diagram of separate environments",
      "Access controls per environment",
      "Promotion / release process between environments",
      "Evidence that production data is not used unprotected in test",
    ],
    template: `# Environment Separation Standard

**Owner:** [Engineering/IT]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Environments
| Environment | Purpose | Who has access | Real data allowed |
|-------------|---------|----------------|-------------------|
| Development | Build code | [developers] | No |
| Test/Staging | Verify changes | [QA/devs] | Masked only |
| Production | Live service | [limited admins] | Yes |

## Rules
- Each environment is logically/physically separated.
- Changes move Dev -> Test -> Production via [release process].
- Credentials and keys are not shared between environments.
- Production data is masked before use in lower environments.

## Promotion approval
| Change | From -> To | Approved by | Date |
|--------|------------|-------------|------|
| [..]   | [..]       | [..]        | [..] |`,
  },
  {
    id: "A.8.32",
    sort: 8.32,
    theme: "Technological",
    title: "Change management",
    tags: ["Preventive", "Protect"],
    purpose:
      "Make changes to systems in a controlled way so they do not cause harm.",
    whatItMeans:
      "Changes, like updates, new features or configuration tweaks, can accidentally break things or open security gaps. Change management means changes are requested, assessed, tested and approved before they happen, with a way to undo them if needed.",
    howToImplement: [
      "Require changes to important systems to be requested and recorded.",
      "Assess each change for its impact and risk, including security.",
      "Test changes before applying them to live systems.",
      "Get approval from the right person before going ahead.",
      "Have a rollback plan and review the change afterwards.",
    ],
    evidence: [
      "Change management procedure",
      "Change request records with approvals",
      "Evidence of testing before deployment",
      "Rollback plans and post-change reviews",
    ],
    template: `# Change Management Procedure

**Owner:** [IT/Operations]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## When this applies
Any change to [production systems / network / key applications].

## Steps
1. Raise a change request describing the change and reason.
2. Assess impact, risk and security effects.
3. Test the change in [test environment].
4. Get approval from [approver].
5. Implement during [agreed window]; keep a rollback plan.
6. Review the outcome.

## Change record
| ID | Description | Risk | Tested | Approved by | Date | Rollback ready |
|----|-------------|------|--------|-------------|------|----------------|
| [..] | [..]      | [..] | [Y/N]  | [..]        | [..] | [Y/N]          |`,
  },
  {
    id: "A.8.33",
    sort: 8.33,
    theme: "Technological",
    title: "Test information",
    tags: ["Preventive", "Protect"],
    purpose:
      "Protect the data used for testing so it does not become a security risk.",
    whatItMeans:
      "Testing often needs realistic data, but using real customer data in test systems is risky because those systems are usually less protected. This control means choosing test data carefully, protecting it, and ideally using fake or masked data instead of the real thing.",
    howToImplement: [
      "Prefer synthetic (made-up) or anonymised data for testing.",
      "If real data must be used, get approval and mask sensitive fields.",
      "Apply the same access controls to test data as to the original data.",
      "Track where test data comes from and delete it when no longer needed.",
      "Log access to sensitive test data.",
    ],
    evidence: [
      "Test data management procedure",
      "Evidence of masking / synthetic data use",
      "Approvals for using real data in test",
      "Records of test data deletion",
    ],
    template: `# Test Information Management Procedure

**Owner:** [Engineering/Data]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Preferred approach
- Use synthetic or anonymised data for testing wherever possible.

## If real data is needed
- Requires approval from [data owner].
- Sensitive fields must be masked first.
- Same access controls as production apply.
- Data is deleted from the test environment after [period].

## Test data register
| Dataset | Source | Real/Synthetic | Masked | Approved by | Delete by |
|---------|--------|----------------|--------|-------------|-----------|
| [..]    | [..]   | [..]           | [Y/N]  | [..]        | [..]      |`,
  },
  {
    id: "A.8.34",
    sort: 8.34,
    theme: "Technological",
    title: "Protection of information systems during audit testing",
    tags: ["Preventive", "Protect", "Governance"],
    purpose:
      "Carry out audits and tests on live systems without disrupting them.",
    whatItMeans:
      "Audits and technical tests sometimes need to examine working systems. If done carelessly, they could slow systems down, change data or cause outages. This control means planning and agreeing such testing in advance so it stays safe and controlled.",
    howToImplement: [
      "Agree the scope and timing of audit or test activities in advance.",
      "Prefer read-only access; avoid changes to live data.",
      "Run intensive tests outside busy hours or on copies where possible.",
      "Have someone from the system team available during the activity.",
      "Log the activities and review afterwards for any impact.",
    ],
    evidence: [
      "Agreed audit / test plan and scope",
      "Access approvals (read-only where possible)",
      "Schedule showing low-impact timing",
      "Logs of audit activities and post-activity review",
    ],
    template: `# Audit Testing Protection Plan

**Owner:** [IT/Security]   **Version:** [1.0]   **Review:** [YYYY-MM-DD]

## Before the audit/test
- Scope agreed in writing with [auditor] and [system owner].
- Access is read-only where possible; any write access is pre-approved.
- Timing chosen to avoid [peak hours]; intensive tests use [copies].
- A system contact is on standby during the activity.

## During
- Activities are logged.
- Stop conditions: [if performance drops below X / data integrity at risk].

## Audit activity log
| Date | Activity | System | Access type | Impact observed |
|------|----------|--------|-------------|-----------------|
| [..] | [..]     | [..]   | [read/write] | [..]           |`,
  },
];
