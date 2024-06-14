import { useForm } from "react-hook-form"
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const OfferPage = () => {

    const axiosPublic = useAxiosPublic()
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const from = location?.state?.from?.pathname || '/dashboard'

    const [item, setItem] = useState({})

    useEffect(() => {
        axiosPublic.get(`/property/update/${id}`)
            .then(res => {
                setItem(res.data)
            })
    }, [id, axiosPublic])

    const { _id, agent_name, email, property_image, property_title, property_location, max_price_range, min_price_range } = item


    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched'
    });

    const onSubmit = data => {
        const { offer } = data;
        const { buyer_name } = data;
        const { buyer_email } = data;
        const status = 'pending'
        console.log(errors);

        const offered = {
            property_id: _id,
            property_title:property_title,
            property_location:property_location,
            offer:offer,
            buyer_name:buyer_name,
            buyer_email:buyer_email,
            email:email,
            agent_name:agent_name,
            property_image:property_image,
            status:status
        }

        Swal.fire({
            title: 'Confirm Your Offer',
            text: 'Are you sure you would like to offer the agent?',
            icon: 'info',
            confirmButtonText: 'Yes, I am'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/wishlist/${id}`)
                    axiosPublic.post(`/offers`, offered)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: 'Offerd',
                                    text: 'Offer Has been made. You can see this listing in Property Bought page',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                            }

                        }
                        )
                }
                else {
                    error => console.log(error);
                }
                navigate(from)
                reset()
            })

    }
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/BnxdXf4/2151150977.jpg)' }} className="bg-no-repeat bg-cover bg-center w-full">
            <div className="bg-black bg-cover bg-opacity-30 py-20">

                <h1 className="text-4xl text-center text-amber-500 pt-5 font-serif italic">---- Add Property For Sale -----</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 mb-20">
                    <div className="grid gap-10 mt-10 w-1/2 mx-auto">


                        <div>
                            <label htmlFor="agent_name" className="text-xl font-semibold mr-5 text-white">Agent Name</label>
                            <input
                                name="agent_name"
                                id="agent_name"
                                type="text"
                                value={agent_name}
                                {...register("agent_name")}
                                readOnly
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="agent_name" className="text-xl font-semibold mr-5 text-white">Property Title</label>
                            <input
                                name="agent_name"
                                id="agent_name"
                                type="text"
                                value={property_title}
                                {...register("property_title")}
                                readOnly
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>




                        <div>
                            <label htmlFor="email" className="text-xl font-semibold mr-5 text-white">Property Location</label>
                            <input
                                type="text"
                                value={property_location}
                                readOnly
                                {...register("property_location")}
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="buyer_email" className="text-xl font-semibold mr-5 text-white">Buyer Email</label>
                            <input name="buyer_email"
                                {...register("buyer_email")}
                                value={user?.email}
                                readOnly
                                className="input input-bordered border-white w-full mt-3 input-ghost text-white focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="buyer_name" className="text-xl font-semibold mr-5 text-white">Buyer Name</label>
                            <input
                                name="buyer_name"
                                id="buyer_name"
                                type="text"
                                {...register("buyer_name")}
                                value={user?.displayName}
                                readOnly
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="offer"
                                className="text-xl font-semibold mr-5 text-white">Offer</label>
                            <label htmlFor="offer"
                                className="text-xl font-semibold mr-5 text-white">Price:{min_price_range}-{max_price_range}</label>
                            <input name="offer"
                                id="offer"
                                type="number"
                                min={min_price_range}
                                max={max_price_range}
                                {...register("offer", { required: true })}
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                    </div>
                    <input type="submit" className="btn bg-amber-600 border-amber-600 text-white font-bold w-1/2 mx-auto" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default OfferPage;