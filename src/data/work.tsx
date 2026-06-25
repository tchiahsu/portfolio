import microgreens from "../assets/projects/microgreens_logo.png";
import roberthalf from "../assets/projects/rh_logo.png";
import sentinel from "../assets/projects/sg_logo.png"

export const workData = [
  {
    logo: sentinel,
    jobTitle: "Software Developer Intern",
    company: "Sentinel Group",
    summary: "Financial services firm that helps organizations manage employee benefits, retiremenet plans, and HR-related solutions.",
    location: "Wakefield, MA",
    start: "May 2026",
    finish: "Aug 2026",
    description: [
      "Added chart support to the document generation API, implementing server-side rendering via Chart.js and Puppeteer. Existing templates saw no added overhead while chart-enabled PDFs rendered within 2x the baseline, an expected tradeoff for headless browser rendering.",
      "Made log level runtime-configurable via a LOG_LEVEL env variable across the shared utility library and downstream services where verbosity was previously hard-coded, demoting high-volume performance logs from info to debug. Reducing log volume by 40% and making critical events easier to identify in Datadog.",
      "Added search and filtering to the internal control center where teams previously had to manually scroll through 20+ applications, building the feature using Radix UI components integrated into the existing design system.",
      "Rebuilt the local development stack where manual setup made onboarding inconsistent and error-prone, creating a single init script for Docker orchestration, environment config, and app seeding and configuring local AWS emulation for SQS, SNS, and S3, cutting environment setup time to under 5 minutes.",
      "Upgraded control center and document management app to the latest custom utility package, where both services were running stale builds and not reflecting merged upstream changes and resolving all breaking changes to bring both services into alignment.",
    ]
  },
  {
    logo: microgreens,
    jobTitle: "Operations Manager",
    company: "Boston Microgreens LLC",
    summary: "Vertical farm located in Boston that fuses modern technology and age old wisdom to grow top quality greens.",
    location: "Boston, MA",
    start: "Sep 2021",
    finish: "Jun 2024",
    description: [
      "Streamlined harvest operations using data-driven analysis, reducing harvest time by 22% through new procedural design and an efficiency model using R.",
      "Designed an automated germination tracking system that eliminated manual checks and decreased task time by 63%, leveraging rule-based logic and scheduling workflows.",
      "Mapped and optimized end-to-end operations, leading to the development of 46 detailed SOPs to improve process efficiency and scale operations.",
      "Developed an Excel-based scheduling and tracking system that automated seeding, germination, and harvest planning for 50+ weekly orders. The tool has been running smoothly for 2+ years without failure.",
      "Implemented a comprehensive financial dashboard to track and monitor financial health. It revealed that 11% of varieties were not generating profit, leading to strategic adjustments to improve profitability."
    ]
  },
  {
    logo: roberthalf,
    jobTitle: "Market Analyst",
    company: "JCSA Holdings via Robert Half",
    summary: "Provides analytical resources and operational insights to PiSA Manufacturing, a US-based contract manufacturing organization (CMO).",
    location: "Boston, MA",
    start: "Sep 2023",
    finish: "Jun 2024",
    description: [
      "Conducted market research on consumers, competitors, and the marketplace and consolidated the information into actionable reports and presentations.",
      "Designed and implemented intuitive dashboards for real-time tracking of contract progression, focusing on reducing the risk of internal delays.",
      "Transformed and elevated the visual quality of various presentations for business reviews and project kick-offs, resulting in more concise meetings to discuss important aspects of the project scope.",
      "Developed comprehensive resources to inform prospective and new clients on the business landscape, significantly improving client familiarity with our services and capabilities."
    ]   
  }
]