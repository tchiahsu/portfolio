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
    finish: "Present",
    description: [
      "Built a notification feature publishing file-upload events to an SQS queue, using a database-backed tracking record to guarantee at-least-once delivery across service crashes or restarts.",
      "Added chart support to the document generation API via server-side rendering with Chart.js and Puppeteer, enabling data visualizations in generated PDFs without impacting existing template performance.",
      "Made log verbosity runtime-configurable via a LOG_LEVEL environment variable, demoting high-volume performance logs to debug, reducing log volume by 40% and improving event visibility in Datadog.",
      "Built search and filtering for the internal control center using Radix UI, integrated into the existing design system, eliminating manual scrolling across 20+ applications.",
      "Rebuilt the local development stack with a single init script for Docker orchestration, environment config, and app seeding, plus local AWS emulation for SQS, SNS, and S3, cutting setup time to under 5 minutes.",
      "Upgraded control center and document management app to the latest custom utility package, resolving all breaking changes to bring both services onto current builds.",
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
      "Implemented a comprehensive financial dashboard to track and monitor financial health. It revealed that 11% of varieties were not generating profit, leading to strategic adjustments to improve profitability.",
      "Proposed the company's first seasonal product, increasing per-delivery revenue by 4.5% and leading to three clients adding it permanently as a standing order, converting a one-time seasonal item into recurring revenue."
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