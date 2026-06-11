import type { ContentAudit, SectionIntro } from "@/types/content";
import type { SkillGroup } from "@/types/skill";

export const skillsSection: SectionIntro = {
  id: "skills-heading",
  eyebrow: "Technical skills",
  title: "Tools of the trade.",
  lead: "A current inventory of tools and platforms connected to my project, coursework, and internship experience.",
};

export const skillsAudit: ContentAudit = {
  status: "needs-review",
  note: "TODO: confirm the current skills inventory against the resume and project history before treating it as final.",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    ariaLabel: "Programming languages",
    items: ["TypeScript", "Go", "Python", "Rust", "Java", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    ariaLabel: "Frontend technologies",
    items: ["React", "Next.js", "Vue 3", "Tailwind CSS", "GraphQL", "Vite"],
  },
  {
    title: "Backend",
    ariaLabel: "Backend technologies",
    items: ["Node.js", "Go / Chi", "FastAPI", "gRPC", "REST APIs", "Kafka", "Redis"],
  },
  {
    title: "Databases",
    ariaLabel: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ClickHouse", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    ariaLabel: "Cloud and DevOps tools",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Helm"],
  },
  {
    title: "Security & Tools",
    ariaLabel: "Security and tooling",
    items: ["OWASP Top 10", "JWT / OAuth2", "Burp Suite", "Git", "Datadog", "Sentry", "Postman"],
  },
];
