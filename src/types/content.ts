export interface HeroSlide {
  id: string;
  headline: string;
  highlightedPhrase: string;
  bullets: string[];
  joinHeading: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ChecklistItem {
  title: string;
  description: string;
}

export interface WorkshopCard {
  title: string;
  checklist: ChecklistItem[];
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ResourceCard {
  title: string;
  href: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface OrgLogo {
  name: string;
  image?: string;
}

export interface VideoTestimonial {
  id: string;
  beforeLabel: string;
  afterLabel: string;
  thumbnail: string;
  youtubeId?: string;
}

export interface YoutubeVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  youtubeId?: string;
}

export interface FooterLinkColumn {
  links: { label: string; href: string }[];
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "twitter" | "linkedin" | "youtube";
  href: string;
}
