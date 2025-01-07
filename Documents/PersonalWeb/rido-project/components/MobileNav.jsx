"use client";

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/services',
        label: 'Services'
    },
    {
        href: '/resume',
        label: 'Resume'
    },
    {
        href: '/projects',
        label: 'Projects'
    },
    {
        href: '/contact',
        label: 'Contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className='text-white mt-32 mb-40 text-center text-2xl font-semibold'>
                    <Link href="/">
                        <h1><span className='text-accent'>.</span>ridoritoss</h1>
                    </Link>
                </div>
                {/* navbar */}
                <nav className='text-white flex flex-col justify-center items-center gap-8 font-primary'>
                    {links.map((link, index) => {
                        const isActive = link.href === pathname;
                        return (
                            <Link href={link.href} key={index}
                                className={`
                                    text-xl
                                capitalize 
                                font-medium 
                                transition-all
                                hover:text-accent
                                ${isActive ? 'text-accent border-b-2 border-accent' : ''}
                                `}>
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav