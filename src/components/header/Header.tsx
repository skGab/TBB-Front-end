import mainLogo from '../../assets/logos-menu/main-logo-mobile.svg'
import menu from '../../assets/icons/categories.svg'
import request from '../../assets/icons/bag.svg'
import searchIcon from '../../assets/icons/search.svg'
import './header.scss'

function Header() {
    return (
        <header>
            <nav>
                {/* MAIN LOGO */}
                <img src={mainLogo} alt="main logo" />

                {/* CATEGORIES */}
                <div className='categories'>
                    <img src={menu} alt="categories" />
                    <p>Categories</p>
                </div>

                {/* SEARCH */}
                <div className='search'>
                    <img src={searchIcon} alt="search icon" />
                    <p>Search</p>
                </div>

                {/* REQUEST */}
                <div className='Request'>
                    <img src={request} alt=" request icon" />
                    <p>Request</p>
                </div>
            </nav>
        </header>
    )
}

export default Header