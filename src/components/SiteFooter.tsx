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
  { label: "About Us", href: "https://be10x.in/about-us/" },
  { label: "Contact Us", href: "https://be10x.in/contact-us/" },
  { label: "Teach with Us", href: "https://forms.gle/hsuyDJ2FM3PT2mwi6" },
  { label: "Grow With Us", href: "https://be10x.com/grow-with-us/" },
  {
    label: "Cancellation/Refund Policy",
    href: "https://be10x.in/refund-policy/",
  },
  { label: "Privacy Policy", href: "https://be10x.in/privacy-policy/" },
  { label: "Terms of use", href: "https://be10x.in/terms-of-use/" },
  { label: "Guest Posting", href: "https://be10x.in/guest-posting/" },
  { label: "Reviews", href: "https://be10x.com/reviews/" },
  { label: "Trust and Safety", href: "https://be10x.com/trust-and-safety/" },
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
              target="_blank"
              rel="noopener noreferrer"
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
          Copyright © 2026 Be10x. All right reserved
        </p>
      </div>
    </footer>
  )
}
