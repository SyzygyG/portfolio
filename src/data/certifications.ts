import type { Certification } from "@/types/certification";
import type { SectionIntro } from "@/types/content";
import { sortByNewestDate } from "@/lib/dates";

export const certificationsSection: SectionIntro = {
  id: "certs-heading",
  eyebrow: "Certifications",
  title: "Credentials.",
};

const certificationEntries: Certification[] = [
  // TODO: replace with the official verification URL when the credential link is available.
  {
    issuer: "ENCCULT 2025",
    title: "XV National Meeting of Culture, Science, and Technology",
    issuedOn: { year: 2025, month: 9, day: 26 },
    verifyHref: "#",
    ariaLabel: "Verify XV National Meeting of Culture, Science, and Technology credential",
  },
  {
    issuer: "Commission on Human Rights",
    title: "Technical Assistant on Philippine Working Group 15",
    issuedOn: { year: 2025, month: 8, day: 20 },
    context: "Human Rights and the Security Sector in the Dynamic 21st Century",
    verifyHref: "https://chr.gov.ph/",
    ariaLabel: "Verify Commission on Human Rights credential",
  },
  {
    issuer: "Alibaba Cloud",
    title: "Introduction to APIs",
    issuedOn: { year: 2025, month: 4, day: 25 },
    verifyHref: "https://www.alibabacloud.com/",
    ariaLabel: "Verify Alibaba Cloud Introduction to APIs credential",
  },
  {
    issuer: "Alibaba Cloud",
    title: "Networking on the Cloud, Relational vs NoSQL Databases, Security on the Cloud 1 & 2",
    issuedOn: { year: 2025, month: 4, day: 25 },
    verifyHref: "https://www.alibabacloud.com/",
    ariaLabel: "Verify Alibaba Cloud networking and cloud security credential",
  },
];

export const certifications = certificationEntries.toSorted((left, right) =>
  sortByNewestDate(left.issuedOn, right.issuedOn),
);
