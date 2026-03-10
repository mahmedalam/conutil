export const GITHUB_FEEDBACK_URL =
  "https://github.com/mahmedalam/conutil/issues";
export const GITHUB_REPO_URL = "https://github.com/mahmedalam/conutil";
export const X_URL = "https://x.com/mahmedalamdev";
export const AUTHOR_NAME = "Ahmed Alam";

export const navLinks = [
  {
    name: "Feedback",
    href: GITHUB_FEEDBACK_URL,
    newTab: true,
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
  {
    name: "GitHub",
    href: GITHUB_REPO_URL,
    newTab: true,
  },
];

export const footerLinks = [
  {
    name: "GitHub",
    href: GITHUB_REPO_URL,
  },
  {
    name: "Legal",
    href: "/legal",
  },
];

export const quickPresets = [
  {
    name: "Best",
    quality: 80,
    format: "jpeg",
    maxWidth: "",
    maxHeight: "",
  },
  {
    name: "HD Best",
    quality: 80,
    format: "jpeg",
    maxWidth: 1920,
    maxHeight: 1920,
  },
  {
    name: "2K Best",
    quality: 80,
    format: "jpeg",
    maxWidth: 2560,
    maxHeight: 2560,
  },
  {
    name: "4K Best",
    quality: 80,
    format: "jpeg",
    maxWidth: 3840,
    maxHeight: 3840,
  },
  {
    name: "Light",
    quality: 70,
    format: "jpeg",
    maxWidth: 1280,
    maxHeight: 1280,
  },
  {
    name: "Heavy",
    quality: 85,
    format: "jpeg",
    maxWidth: 3840,
    maxHeight: 3840,
  },
  {
    name: "Web Optimized",
    quality: 75,
    format: "webp",
    maxWidth: 1920,
    maxHeight: 1920,
  },
] as const;

export const outputFormats = ["jpeg", "webp"] as const;
