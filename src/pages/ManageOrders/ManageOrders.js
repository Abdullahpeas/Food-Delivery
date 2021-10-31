import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);



    useEffect(() => {
        fetch("https://creepy-dracula-98003.herokuapp.com/allOrders")
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [manageOrders])

    const handleDeleteBtn = id => {
        fetch(`https://creepy-dracula-98003.herokuapp.com/ordersDelete/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure to delete this order!')
                    const remainingOrder = manageOrders.filter(manageOrder => manageOrder._id !== id);
                    setManageOrders(remainingOrder);

                }
            });

    };
    return (
        <div>
            <h2>All Orders: {manageOrders.length}</h2>
            <hr className="w-25 mx-auto text-success pt-1" />
            {
                manageOrders.map(Orders => <div>

                    <h3>{Orders?.Item}</h3>
                    <h3>{Orders?.price}</h3>
                    <h3>{Orders?.desc}</h3>
                    <h5>{Orders?.email}</h5>
                    <h5>{Orders?.username}</h5>

                    <button onClick={() => handleDeleteBtn(Orders?._id)} className="btn btn-danger">Delete</button>

                </div>
                )
            }
        </div>
    );
};

export default ManageOrders;