import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search' },
    { src: '/assets/icons/black-heart.svg', alt: 'heart' },
    { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
    return (
        <header className="w-full">
            <nav className="nav">
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/assets/icons/logo.svg"
                        width={27}
                        height={27}
                        alt="logo"
                        className="logo-image"
                    />

                    <p className="nav-logo">
                        Price<span className='orange-gradient'>Tracker</span>
                    </p>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar