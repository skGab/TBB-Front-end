import arrowRight from '../../assets/icons/arrow-right.svg'
import './post.scss'

interface PostProps {
    title: string
    imgPath: string
    style?: any
}

function Post({ title, imgPath, style }: PostProps) {
    return (
        <div className='container post' style={style}>
            <img src={imgPath} alt="banner 2" />

            <h2>{title}</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>

            <button>
                View details
                <img src={arrowRight} width="20px" alt="arrow right" />
            </button>

        </div>
    )
}

export default Post