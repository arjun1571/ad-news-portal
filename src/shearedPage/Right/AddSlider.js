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
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={foode}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default AddSlider;