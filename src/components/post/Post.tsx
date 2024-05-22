import arrowRight from '../../assets/icons/arrow-right.svg'
import './post.scss'

interface PostProps {
    title: string
    imgPath: string
    style?: any
    order?: any
    info?: any
    id: string
}

function Post({ title, imgPath, style, order, info, id }: PostProps) {
    return (
        <div id={id} className='post' style={style}>

            <div className='image-container' style={order}>
                <img src={imgPath} alt="banner 2" />
            </div>

            <div className='info'>
                <div className="info-container" style={info}>
                    <h2>{title}</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>

                    <button>
                        View details
                        <img src={arrowRight} width="20px" alt="arrow right" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post