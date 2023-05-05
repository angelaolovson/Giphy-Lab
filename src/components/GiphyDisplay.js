import Title from "./Title"

const GiphyDisplay = ({giphy}) => {
    const loaded = () => {
        return (
            <div>
                <Title title={giphy.title}/>
                <img src={giphy.images.downsized_medium.url} alt={giphy.title} />
            </div>
        )
    }

    const loading = () => {
        return <h1>No giphy to display</h1>
    }
    
    return giphy ? loaded() : loading()
}

export default GiphyDisplay;