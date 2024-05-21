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

function Main() {
    return (
        <main>
            {/* VIDEO */}
            <div className='container video'>
                <p>video autoplay with no sound</p>

                <picture>
                    <img src={muteIcon} alt="mute icon" />
                    <img src={downloadIcon} alt="download icon" />
                </picture>
            </div>

            {/* MAIN TITLE */}
            <h1>
                Welcome to the
                Play Matters Interactive Lookbook
            </h1>

            {/* GIFTING */}
            <Topic name={"GIFTING"} />

            <Post title={"Toys perfect for birthday gift-giving season in Spring"} imgPath={banner2} />

            <Post title={"Gifts for Mom"} imgPath={banner3} />

            {/* TRAVEL */}
            <Topic name={"TRAVEL"} />

            <Post title={"Travel the world no matter where you are. No Passport needed."} imgPath={banner5} />

            <Post title={"Fun accessories to take with you on your travels or keep kids entertained"} imgPath={banner4} />

            {/* ADULTS WELCOME */}
            <Topic name={"ADULTS WELCOME"} />

            <Post title={"For the Kids at Heart who love to unplug, unbox and unwind"} imgPath={banner1} />
        </main>
    )
}

export default Main