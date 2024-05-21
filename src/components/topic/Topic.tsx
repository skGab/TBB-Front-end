import './topic.scss'

interface TopicProps {
    name: string
}

function Topic({ name }: TopicProps) {
    return (
        <div className='container'>
            <h4>{name}</h4>

            <div className='line'></div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}

export default Topic