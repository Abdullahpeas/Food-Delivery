import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Food from '../Food/Food';
import './FastestDelivery.css';
const FastestDelivery = () => {
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch('https://creepy-dracula-98003.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <h2 className="m-5 ">Fastest <span className="food-style">Food  Delivery</span></h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    foods.map(food => <Food food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default FastestDelivery;