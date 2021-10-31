import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [services, setServices] = useState({});
    const { register, handleSubmit, reset } = useForm();



    useEffect(() => {
        const url = `https://creepy-dracula-98003.herokuapp.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)

            })
    }, [])




    const onSubmit = data => {
        const url = `https://creepy-dracula-98003.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {

                    alert('Successfully Order Processed ')

                }

            })
        console.log(data)
    }

    return (
        <div>
            <h2>Place Order</h2>

            <form onSubmit={handleSubmit(onSubmit)}>



                {user?.email && <input className="d-flex m-3 mx-auto" defaultValue={user?.email} {...register("email", { required: true })} />}


                {services?.name && <input className="d-flex m-3 mx-auto" defaultValue={services?.name} {...register("Item")} />}

                {services?.desc && <input className="d-flex m-3 mx-auto p-3 " defaultValue={services?.desc} {...register("desc")} />}

                {services?.price && <input className="d-flex m-3 mx-auto" placeholder="price" defaultValue={services?.price} {...register("price")} />}

                {user?.displayName && <input className="d-flex m-3 mx-auto" placeholder="username" defaultValue={user?.displayName}{...register("username")} />}

                <input className="d-flex m-3 mx-auto" placeholder="addrress" {...register("address")} />

                <input className="btn btn-success" type="submit" />

            </form>

        </div>
    );
};

export default ServiceDetail;