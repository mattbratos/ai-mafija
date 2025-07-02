export type Rapper = {
    id: number
    nickname: string
    description: string
    image: string
    socialLinks?: {
        spotify?: string
        youtube?: string
        instagram?: string
        twitter?: string
        tiktok?: string
    }
}

export const rappers: Rapper[] = [
    {
        id: 1,
        nickname: 'young ati',
        description: 'ai trapping since 2023',
        image: '/ati2.png',
        socialLinks: {
            spotify: '#',
            youtube: '#',
            instagram: '#',
        },
    },
    {
        id: 2,
        nickname: 'mały fiat',
        description: 'krk represent',
        image: '/placeholder.svg?height=200&width=200',
        socialLinks: {
            spotify: '#',
            youtube: '#',
            instagram: '#',
        },
    },
    {
        id: 3,
        nickname: 'pacze$$wag',
        description: 'wwa represent',
        image: '/placeholder.svg?height=200&width=200',
        socialLinks: {
            spotify: '#',
            youtube: '#',
            instagram: '#',
        },
    },
]
