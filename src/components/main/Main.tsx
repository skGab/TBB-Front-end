import muteIcon from '../../assets/icons/sound-button.svg'
import downloadIcon from '../../assets/icons/download.svg'
import banner2 from '../../assets/banners/banner-2.png'
import banner3 from '../../assets/banners/banner-3.png'
import banner5 from '../../assets/banners/banner-5.png'
import banner4 from '../../assets/banners/banner-4.png'
import banner1 from '../../assets/banners/banner-1.png'
import Topic from '../topic/Topic'
import Post from '../post/Post'
import './main.scss'
import Line from '../topic/Line'

function Main() {

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
        marginBottom: 50
    }

    return (
        <main id='main'>
            {/* VIDEO */}
            <div className='container video'>
                <p>video autoplay with no sound</p>

                <picture>
                    <p className='desktop'>
                        Welcome to the <br />
                        Play Matters Interactive Lookbook
                    </p>

                    <img src={muteIcon} alt="mute icon" />
                    <img src={downloadIcon} alt="download icon" />
                </picture>
            </div>

            {/* MAIN TITLE */}
            <h1 className='mobile'>
                Welcome to the
                Play Matters Interactive Lookbook
            </h1>

            {/* GIFTING */}
            <Topic name={"GIFTING"} style={orange} />

            <Post style={margin} title={"Toys perfect for birthday gift-giving season in Spring"} imgPath={banner2} />

            <Post title={"Gifts for Mom"} imgPath={banner3} />

            <Line style={orange} />

            {/* TRAVEL */}
            <Topic name={"TRAVEL"} style={green} />

            <Post style={margin} title={"Travel the world no matter where you are. No Passport needed."} imgPath={banner5} />

            <Post title={"Fun accessories to take with you on your travels or keep kids entertained"} imgPath={banner4} />

            <Line style={green} />

            {/* ADULTS WELCOME */}
            <Topic name={"ADULTS WELCOME"} style={topicStyle} />

            <Post title={"For the Kids at Heart who love to unplug, unbox and unwind"} imgPath={banner1} />

            <Line style={blue} />
        </main>
    )
}

export default Main