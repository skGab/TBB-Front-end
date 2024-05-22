import close from '../../../assets/icons/x.svg'
import logo from '../../../assets/logos-menu/brang-logo.svg'
import message from '../../../assets/icons/message-circle.svg'
import home from '../../../assets/icons/home.svg'
import bag from '../../../assets/icons/bag.svg'
import logo1 from '../../../assets/logos-menu/logo-1.png'
import logo2 from '../../../assets/logos-menu/logo-2.png'
import logo3 from '../../../assets/logos-menu/logo-3.png'
import logo4 from '../../../assets/logos-menu/logo-4.png'
import logo5 from '../../../assets/logos-menu/logo-5.png'
import logo6 from '../../../assets/logos-menu/logo-6.png'
import logo7 from '../../../assets/logos-menu/logo-7.png'
import logo8 from '../../../assets/logos-menu/logo-8.png'
import logo9 from '../../../assets/logos-menu/logo-9.png'
import './menu.scss'

function Menu({ toggle, animationClass }: any) {
    return (
        <div id='menu' className={`${animationClass}`}>
            <div className='navegacao'>
                {/* LOGO & CLOSE */}
                <picture className="logo mobile">
                    <img src={logo} alt="logo" />
                    <img className='close' src={close} alt="close" onClick={toggle} />
                </picture>

                {/* LINKS  */}
                <div className='container links'>
                    <picture className="logo desktop">
                        <img src={logo} alt="logo" />
                        <img className='close' src={close} alt="close" onClick={toggle} />
                    </picture>

                    <a className='item' href="/" rel="noopener noreferrer"><img src={home} alt="home link" />Home</a>
                    <a className='item' target="_blank" rel="noopener noreferrer"><img src={bag} alt="request link" />Requests</a>
                    <a className='item' target="_blank" rel="noopener noreferrer"><img src={message} alt="contact us link" />Contact us</a>
                </div>

                {/* THEMES */}
                <div className='container'>
                    <div className='detail'>
                        <div className="line"></div>
                        <h4>Themes</h4>
                    </div>

                    <ul >
                        <li className='item'>Gifting</li>
                        <li className='item'>Travel</li>
                        <li className='item'>Adults Welcome</li>
                        <li className='item'>Art & Home Décor</li>
                        <li className='item'>Space</li>
                        <li className='item'>Pop Culture</li>
                        <li className='item'>Toddlers</li>
                        <li className='item'>Real World Role Playing</li>
                    </ul>
                </div>
            </div>

            {/* PARTNERS */}
            <picture id='partners'>
                <div className="row">
                    <div className="bg">
                        <img src={logo1} alt="architecture logo" />
                    </div>
                    <div className="bg">
                        <img src={logo4} alt="city" />
                    </div>
                    <div className="bg">
                        <img src={logo7} alt="creatir" />
                    </div>
                </div>

                <div className="row">
                    <div className="bg">
                        <img src={logo2} alt="dots" />
                    </div>
                    <div className="bg">
                        <img src={logo5} alt="duplo" />
                    </div>
                    <div className="bg">
                        <img src={logo6} alt="friends" />
                    </div>
                </div>

                <div className="row">
                    <div className="bg">
                        <img src={logo8} alt="ideas" />
                    </div>
                    <div className="bg">
                        <img src={logo3} alt="minifigures" />
                    </div>
                    <div className="bg">
                        <img src={logo9} alt="technic" />
                    </div>
                </div>
            </picture>
        </div>
    )
}

export default Menu