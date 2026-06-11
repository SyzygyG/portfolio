import type { SectionIntro } from "@/types/content";
import type { SocialLink } from "@/types/social";

import { contactEntries } from "@/data/contact";

export const contactSection: SectionIntro = {
  id: "contact-heading",
  eyebrow: "Contact",
  title: "Let's talk.",
  lead: "Open to full-time roles, contract work, and interesting conversations.",
};

export const contactListAriaLabel = "Contact channels";

export const footerContent = {
  copyrightSuffix: "All rights reserved.",
  linksAriaLabel: "Footer links",
};

const footerLinkOrder = ["Phone", "LinkedIn", "Email"] as const;

export const contactLinks = contactEntries;

export const footerLinks = footerLinkOrder
  .map((label) => contactEntries.find((entry) => entry.label === label))
  .filter((entry): entry is SocialLink => Boolean(entry));
