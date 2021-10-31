import React from 'react';
import Banner from '../Banner/Banner';
import FastestDelivery from '../FastestDelivery/FastestDelivery';
import GoodDeals from '../GoodDeals/GoodDeals';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FastestDelivery></FastestDelivery>
            <WhyChoose></WhyChoose>
            <GoodDeals></GoodDeals>

        </div>
    );
};

export default Home;