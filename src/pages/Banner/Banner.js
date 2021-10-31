import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../src/banner/b2ag.jpg';
import banner2 from '../../../src/banner/mobile2.jpg';
import banner3 from '../../../src/banner/piz2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            {/* <img height="540px" width="100%" src={banner} alt="" /> */}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Order <span className="food-color">Food Online</span></h3>
                        <p>Choose,Order and TakeOut</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Order <span className="food-color">Food Online</span></h3>
                        <p>Choose,Order and TakeOut</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Order <span className="food-color">Food Online</span></h3>
                        <p>Choose,Order and TakeOut</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;