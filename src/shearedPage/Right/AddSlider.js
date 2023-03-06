import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import food from '../../asset/image/food1.png'
import foode from '../../asset/image/food2png.png'
const AddSlider = () => {
    return (
        <div className='mt-2'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={food}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={foode}
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default AddSlider;