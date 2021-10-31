import React from 'react';
import image1 from '../../../src/Deals/e1.jpg';
import image2 from '../../../src/Deals/e2.jpg';
import image3 from '../../../src/Deals/e3.jpg';
import image4 from '../../../src/Deals/e4.jpg';
import './GoodDeals.css';
const GoodDeals = () => {
    return (
        <div className="container">
            <h2 className="pt-5 fw-bold">Good Deals</h2>
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <img className="img-fluid deals-img" src={image1} alt="" />
                        <h5>Name:Crispy Bun</h5>
                    </div>

                </div>
                <div className="col-md-3">
                    <div>
                        <img className="img-fluid deals-img" src={image2} alt="" />
                        <h5>Name:Buns Burgers</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img className="img-fluid deals-img" src={image3} alt="" />
                        <h5>Name:Beefcakes Burgers	</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img className="img-fluid deals-img" src={image4} alt="" />
                        <h5>Name:Pit Master Burgers	</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GoodDeals;