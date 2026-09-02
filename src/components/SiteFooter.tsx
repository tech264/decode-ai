import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons"

import { cn } from "@/lib/utils"

interface FooterLink {
  label: string
  href: string
}

const FOOTER_LINKS: FooterLink[] = [
  { label: "Syllabus", href: "#syllabus" },
  { label: "Instructor", href: "#instructor" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Cancellation/Refund Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of use", href: "#" },
]

const SOCIAL_ICONS = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Twitter", Icon: TwitterIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "YouTube", Icon: YoutubeIcon },
] as const

export function SiteFooter() {
  return (
    <footer className={cn("w-full bg-white py-8 md:py-12")}>
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2"
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-black md:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 flex items-center justify-center gap-4">
          {SOCIAL_ICONS.map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="text-black"
            >
              <Icon width={20} height={20} />
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Copyright © 2026 Dr. Expert Academy. All rights reserved
        </p>
      </div>
    </footer>
  )
}
