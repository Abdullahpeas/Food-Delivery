import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <h2>My order : {orders.length}</h2>

            {
                orders.map(order => <div>
                    <h3>{order?.Item}</h3>
                    <h3>{order?.price}</h3>
                    <h3>{order?.desc}</h3>
                    <p>{order?.email}</p>
                    <p>{order?.username}</p>

                    <button onClick={() => handleDelete(order._id)} className="btn btn-danger m-2">Cancel Order</button>
                </div>)
            }
        </div>
    );
};

export default MyOrders;