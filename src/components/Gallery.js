import { useState, useEffect } from 'react'
import Card from './Card'

const Gallery = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const url = "https://www.madwell.com/interview/index.php?f=data";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setImages([...data])
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="Gallery">
            {images.map((image, index) => (
                <Card key={index} image={image} />
            ))}
        </div>
    )
}

export default Gallery
