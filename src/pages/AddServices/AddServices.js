import React from 'react';
import { useForm } from 'react-hook-form';



const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch("https://creepy-dracula-98003.herokuapp.com/addFoods", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Foods Added Successfully")
                    reset();
                }
            })

    };

    return (
        <div className="section-food">
            <h2>Add Foods</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="m-2 text-center d-flex mx-auto" defaultValue="" {...register("name")} placeholder="Food Name" />


                <input className="m-2 text-center d-flex mx-auto" defaultValue="" {...register("price")} placeholder="Food price" />

                <input className="m-2 text-center d-flex mx-auto p-3" defaultValue="" {...register("desc")} placeholder="Food Description" />


                <input className="m-2 text-center d-flex mx-auto" placeholder="image url" defaultValue="" {...register("img")} />


                <input className="m-2 text-center d-flex mx-auto btn btn-success" type="submit" />

            </form>
        </div>
    );
};

export default AddServices;