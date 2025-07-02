import {
  Music,
  Youtube,
  Instagram,
  Twitter,
  Disc,
  Mic,
  ShoppingCart,
  LucideIcon,
} from 'lucide-react'

export type SocialLink = {
  icon: LucideIcon
  label: string
  href: string
  description?: string
}

export const socialLinks: SocialLink[] = [
  {
    icon: Music,
    label: 'Spotify',
    href: '#',
    description: 'Stream our latest tracks',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: '#',
    description: 'Watch our music videos',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: '#',
    description: 'Behind the scenes content',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    href: '#',
    description: 'Follow our updates',
  },
  {
    icon: Mic,
    label: 'TikTok',
    href: '#',
    description: 'Short form content',
  },
  {
    icon: ShoppingCart,
    label: 'Merch Store',
    href: '#',
    description: 'Official merchandise',
  },
]
