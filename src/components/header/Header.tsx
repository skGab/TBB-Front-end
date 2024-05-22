import mainLogo from '../../assets/logos-menu/main-logo-mobile.svg'
import menu from '../../assets/icons/categories.svg'
import request from '../../assets/icons/bag.svg'
import searchIcon from '../../assets/icons/search.svg'
import contactIcon from '../../assets/icons/message-circle.svg'
import Menu from './menu/Menu'
import './header.scss'
import { useEffect, useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const toggleMenu = () => {
        if (isMenuOpen) {
            setAnimationClass('close');
            setIsAnimating(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsAnimating(false);
            }, 500);
        } else {
            setIsMenuOpen(true);
            setAnimationClass('open');
        }
    };

    useEffect(() => {
        document.documentElement.style.overflowY = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <header id='header'>
            {/* MENU */}
            {isMenuOpen || isAnimating ? (
                <Menu toggle={toggleMenu} animationClass={animationClass} />
            ) : null}

            {/* NAV */}
            <nav>
                <div className='pairs'>
                    {/* MAIN LOGO */}
                    <a href="/">
                        <img src={mainLogo} alt="main logo" />
                    </a>

                    {/* CATEGORIES */}
                    <a className='categories item open' onClick={toggleMenu}>
                        <img className='icon' src={menu} alt="categories" />
                        <p>Categories</p>
                    </a>
                </div>

                <div className='pairs'>
                    <ul className='themes'>
                        <li>Gifting</li>
                        <li>Travel</li>
                        <li>Adults Welcome</li>
                        <li>Art & Home Décor</li>
                        <li>Space</li>
                        <li>Pop Culture</li>
                        <li>Toddlers</li>
                        <li>Real World Role Playing</li>
                    </ul>
                </div>

                <div className="pairs">
                    {/* CONTACT US */}
                    <a href="/" className='contact item'>
                        <img className='icon' src={contactIcon} alt="contact icon" />
                        <p>Contact Us</p>
                    </a>

                    {/* SEARCH */}
                    <a href="/" className='search item'>
                        <img className='icon' src={searchIcon} alt="search icon" />
                        <p>Search</p>
                    </a>

                    {/* REQUEST */}
                    <a href='/' className='Request item'>
                        <img className='icon' src={request} alt=" request icon" />
                        <p>Request</p>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header