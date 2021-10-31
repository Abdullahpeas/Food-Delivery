import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Food.css';
const Food = (props) => {

    const { _id, name, img, price, desc } = props.food;
    const history = useHistory();

    const handleBuyNow = () => {

        history.push('/services')


    }
    return (
        <div>
            <div className="col container">
                <div className="card">
                    <img src={img} className="img-fluid img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5>${price}</h5>
                        <p className="card-text">{desc}</p>
                        <Link to={`/services/${_id}`}>
                            <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Food;