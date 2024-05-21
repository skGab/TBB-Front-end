import './post.scss'

interface PostProps {
    title: string
    imgPath: string
}

function Post({ title, imgPath }: PostProps) {
    return (
        <div className='container post'>
            <img src={imgPath} alt="banner 2" />

            <h3>{title}</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>

            <button>View details</button>
        </div>
    )
}

export default Post