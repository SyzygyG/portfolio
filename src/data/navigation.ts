import type { NavigationLink } from "@/types/navigation";

export const navigationLinks: NavigationLink[] = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#certifications", label: "Certifications", id: "certifications" },
  { href: "#contact", label: "Get in touch", mobileLabel: "Contact", id: "contact", cta: true },
];
