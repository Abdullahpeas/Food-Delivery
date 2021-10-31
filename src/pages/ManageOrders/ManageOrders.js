import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ManageOrders.css';

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

    const handleApprovedBtn = id => {
        fetch(`https://creepy-dracula-98003.herokuapp.com/status/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(manageOrders)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Your Order approved')
                }
            })
    }


    return (
        <div className="section-manage">
            <h2>All Orders: {manageOrders.length}</h2>
            <hr className="w-25 mx-auto text-success pt-1" />
            {
                manageOrders.map(Orders => <div className="card h-75 m-3">

                    <h3>Item:{Orders?.Item}</h3>
                    <h3>Price:{Orders?.price}</h3>
                    <p>Desc:{Orders?.desc}</p>
                    <p>Email:{Orders?.email}</p>
                    <p>Username:{Orders?.username}</p>
                    <p>Address:{Orders?.address}</p>
                    <p>Phone:{Orders?.phone}</p>
                    <p>Status:{Orders?.status}</p>

                    <button onClick={() => handleDeleteBtn(Orders?._id)} className="btn btn-danger m-2 mx-auto w-10">Delete</button><br />

                    <button onClick={() => handleApprovedBtn(`${Orders?._id}`)} className="btn btn-danger m-2 mx-auto w-10">Approved</button>

                </div>
                )
            }
        </div>
    );
};

export default ManageOrders;