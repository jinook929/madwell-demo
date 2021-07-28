const Card = ({image}) => {
    return (
        <div className="Card">
            <img className="image" src={image.path} alt={image.alt} />
            <div className="caption">{image.caption}</div>
        </div>
    )
}

export default Card
