import muteIcon from '../../assets/icons/sound-button.svg'
import muteIconBlue from '../../assets/icons/blue-sound.svg'
import downloadIcon from '../../assets/icons/download.svg'
import downloadIconBlue from '../../assets/icons/blue-download.svg'
import banner2 from '../../assets/banners/banner-2.png'
import banner3 from '../../assets/banners/banner-3.png'
import banner5 from '../../assets/banners/banner-5.png'
import banner4 from '../../assets/banners/banner-4.png'
import banner1 from '../../assets/banners/banner-1.png'
import scrollDown from '../../assets/icons/scroll-down.svg'
import Topic from '../topic/Topic'
import Post from '../post/Post'
import './index.scss'
import Line from '../topic/Line'

function Index() {

    const orange = {
        backgroundColor: '#EE7500',
    }
    const green = {
        backgroundColor: '#00963E',
    }
    const blue = {
        backgroundColor: '#006CB7',
        marginBottom: 0
    }

    const topicStyle = {
        backgroundColor: '#006CB7',
    }

    const margin = {
        marginBottom: "5rem"
    }

    const order = {
        order: 2
    }

    const direction = {
        textAlign: 'right',
        alignItems: 'flex-end'
    }

    return (
        <main id='main'>
            {/* VIDEO */}
            <div className='video'>
                <p>video autoplay with no sound</p>

                <picture>
                    <p className='desktop'>
                        Welcome to the <br />
                        Play Matters Interactive Lookbook
                    </p>

                    <div className="sound">
                        <img className='white' src={muteIcon} alt="mute icon" />
                        <img className='blue' src={muteIconBlue} alt="mute icon" />
                    </div>

                    <div className="download">
                        <img className='white' src={downloadIcon} alt="download icon" />
                        <img className='blue' src={downloadIconBlue} alt="download icon" />
                    </div>
                </picture>

                <div className='desktop scrollDown'>
                    Scroll down
                    <img src={scrollDown} alt="scroll down" />
                </div>

            </div>

            {/* MAIN TITLE */}
            <h1 className='mobile'>
                Welcome to the
                Play Matters Interactive Lookbook
            </h1>

            {/* GIFTING */}
            <Topic name={"GIFTING"} style={orange} />

            <Post id={"gifting"} order={order} style={margin} title={"Toys perfect for birthday gift-giving season in Spring"} imgPath={banner2} />

            <Post id={"gifts"} info={direction} title={"Gifts for Mom"} imgPath={banner3} />

            <Line style={orange} />

            {/* TRAVEL */}
            <Topic name={"TRAVEL"} style={green} />

            <Post id={"travel"} order={order} style={margin} title={"Travel the world no matter where you are. No Passport needed."} imgPath={banner5} />

            <Post id={"fun"} info={direction} title={"Fun accessories to take with you on your travels or keep kids entertained"} imgPath={banner4} />

            <Line style={green} />

            {/* ADULTS WELCOME */}
            <Topic name={"ADULTS WELCOME"} style={topicStyle} />

            <Post id={"kids"} order={order} title={"For the Kids at Heart who love to unplug, unbox and unwind"} imgPath={banner1} />

            <Line style={blue} />
        </main>
    )
}

export default Index