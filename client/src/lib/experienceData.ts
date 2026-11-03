// Newest first: the page reads as a timeline from today back to the earliest education.
// `start` drives the "years back" gauge. Education has only a completion year, which counts from January.
type TimelineEntry = {
  title: string;
  organization: string;
  location?: string;
  period?: string;
  start?: string;
  summary?: string;
};

export const experienceData: TimelineEntry[] = [
  {
    title: "Triage Security Engineer",
    organization: "Arctic Wolf",
    period: "July 2026 – Present",
    start: "2026-07",
    summary: "I run log searches, contain threats, and carry out deeper investigations and malware analysis."
  },
  {
    title: "Triage Security Analyst",
    organization: "Arctic Wolf",
    period: "January 2026 – June 2026",
    start: "2026-01",
    summary: "I focused on account management, deployments and sensor configuration."
  },
  {
    title: "Cybersecurity Analyst",
    organization: "Nova Mutual Insurance",
    location: "Jarvis, Ontario (Remote)",
    period: "April 2025 – December 2025",
    start: "2025-04",
    summary: "I maintained security protocols, firewalls and intrusion detection systems, ran vulnerability assessments, and worked on threat detection, incident response planning and regulatory compliance."
  },
  {
    title: "Postgraduate Diploma, Cybersecurity Response Planning",
    organization: "Conestoga College",
    location: "Waterloo, Ontario",
    period: "Completed 2025",
    start: "2025"
  },
  {
    title: "Postgraduate Diploma, Computer Application Security",
    organization: "Conestoga College",
    location: "Waterloo, Ontario",
    period: "Completed 2024",
    start: "2024"
  },
  {
    title: "Associate Engineer Intern",
    organization: "Virtusa",
    location: "Chennai, India",
    period: "January 2022 – April 2022",
    start: "2022-01",
    summary: "I worked on ServiceNow tickets, handling basic troubleshooting and Active Directory work."
  },
  {
    title: "Bachelor's in Computer Engineering",
    organization: "Anna University",
    location: "Chennai, India",
    period: "Completed 2022",
    start: "2022"
  }
];

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export function yearsBack(start: string) {
  return ((Date.now() - Date.parse(start)) / MS_PER_YEAR).toFixed(1);
}
