import './topic.scss'

interface TopicProps {
    name: string
    style: any
}

function Topic({ name, style }: TopicProps) {
    return (
        <div className='container topic' >
            <h3>{name}</h3>

            <div className='line mobile' style={style}></div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='line desktop' style={style}></div>
        </div>
    )
}

export default Topic