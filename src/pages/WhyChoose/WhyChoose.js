import React from 'react';
import image from '../../choose/delivery.jpg';
import './WhyChoose.css';
const WhyChoose = () => {
    return (
        <div className="mx-5">
            <h2 className="fw-bold p-3 mt-5 mb-5">Why Choose Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid choose-img" src={image} alt="" />
                </div>
                <div className="col-md-6">
                    <p className="text-center">We rightly set the bar high with a superior quality of products and services.Quality is not an act, it is a habit.We have a very highly skilled team of Food technologists who have gained
                        many years’ experience working with the UK Food manufacturing sector.We work with some of the most advanced processing facilities in the world
                        which allow high quality product at very competitive prices.We provide exceptional delivery service 24/7 from our Polish centre of excellence, with a targeted service level of 99.8%.All our factories we work with operate to BRC standard and are a minimum of grade A. We supply Global GAP, Red Tractor, Halal products as well as other accreditations into the UK market place.Exclusive Foods has a strong commitment to health and nutrition, therefore it only distributes foodstuff manufactured with very few or none additives. This approach helps to preserve traditional recipes and to safeguard customer’s health.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;