import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`https://creepy-dracula-98003.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);


    const handleDelete = (id) => {
        fetch(`https://creepy-dracula-98003.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure to delete this order!')
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);

                }

            })
    }

    return (
        <div className="section-orders">
            <h2>My order : {orders.length}</h2>

            {
                orders.map(order => <div className="card h-75 m-3">
                    <h3>Item:{order?.Item}</h3>
                    <h3>Price:{order?.price}</h3>
                    <p>Desc:{order?.desc}</p>
                    <p>Email:{order?.email}</p>
                    <p>Username:{order?.username}</p>
                    <p>Address:{order?.address}</p>
                    <p>Phone:{order?.phone}</p>


                    <button onClick={() => handleDelete(order._id)} className="btn btn-danger m-2 mx-auto w-10">Cancel Order</button>
                </div>)
            }
        </div>
    );
};

export default MyOrders;