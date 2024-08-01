import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Data from "../Components/CarouselData";
import './Slide.css'; // Import the CSS file for custom styles

const Slide = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Variety Of Books Are Available</h2>
            <div className='row d-flex justify-content-center align-items-center'>
                <Carousel className="custom-carousel">
                    {data.map((element) => (
                        <Carousel.Item key={element.id} interval={1000}>
                            <img
                                src={element.imgdata}
                                alt={element.title}
                                className="d-block w-100 carousel-image"
                            />
                            <Carousel.Caption>
                                <h3>{element.title}</h3>
                                <p>{element.author}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Slide;
