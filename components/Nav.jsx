"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
];

const Nav = () => {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <nav className="flex gap-8 font-primary">
            {links.map((link, index) => {
                const isActive = link.href === pathname;
                return (
                    <Link href={link.href} key={index}
                        className={`
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
    );
}

export default Nav;