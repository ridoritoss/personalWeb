import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-black bg-white'>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href='/'>
                    <h1 className='text-4xl font-semibold font-[family-name:var(--jetbrainsMono)]'><span className='text-accent'>.</span>ridoritoss</h1>
                </Link>

                {/* desktop Nav & hire me button */}
                <div className='hidden xl:flex items-center gap-8'>
                    <Nav />
                    <Link href="/contact">
                        <Button>Get In Touch</Button>
                    </Link>
                </div>

                {/* mobile Nav */}
                <div className='flex xl:hidden'>
                    <div className='xl:hidden'>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;