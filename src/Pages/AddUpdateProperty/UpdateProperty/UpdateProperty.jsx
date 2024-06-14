import { useForm } from "react-hook-form"
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const AddProperty = () => {
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/dashboard/my-added-property'

    const [item, setItem] = useState({})

    useEffect(() => {
        axiosSecure.get(`/property/update/${id}`)
            .then(res => {
                setItem(res.data)
            })
    }, [id, axiosSecure])

    const { agent_name, email, verification_status } = item


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
        const { property_image } = data;
        const { property_title } = data;
        const { property_location } = data;
        const { property_description } = data;
        const { min_price_range } = data;
        const { max_price_range } = data;
        const { nation } = data;
        const agent_name = user?.name
        const agent_image = user?.photoURL
        const email = user?.email


        const updatedProperty = {
            property_image,
            property_title,
            property_location,
            property_description,
            min_price_range,
            max_price_range,
            agent_name,
            agent_image,
            email,
            nation,
            verification_status,
        }
        console.log(errors);

        Swal.fire({
            title: 'Confirm Update',
            text: 'Are you sure you would like to Update this property?',
            icon: 'info',
            confirmButtonText: 'Yes, I am'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/property/${id}`, updatedProperty)
                        .then(data => {
                            if (data.data.modifiedCount>0) {
                                Swal.fire({
                                    title: 'Updated',
                                    text: 'You have Updated a Listing',
                                    icon: 'info',
                                    confirmButtonText: 'Ok'
                                })
                            }

                        })
                }
            })
        
        reset()
        navigate(from)
    }


    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/BnxdXf4/2151150977.jpg)' }} className="bg-no-repeat bg-cover bg-center w-full">
            <div className="bg-black bg-cover bg-opacity-30 py-20">

                <h1 className="text-4xl text-center text-amber-500 pt-5 font-serif italic">---- Add Property For Sale -----</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 mb-20">
                    <div className="grid gap-10 mt-10 w-1/2 mx-auto">


                        <div>
                            <label htmlFor="agent_name" className="text-xl font-semibold mr-5 text-white">Name</label>
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
                            <label htmlFor="email" className="text-xl font-semibold mr-5 text-white">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="text"
                                value={email}
                                {...register("email")}
                                readOnly
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="property_image" className="text-xl font-semibold mr-5 text-white">Property Image Url</label>
                            <input name="property_image"
                                id="property_image" type="text"
                                placeholder="Image Url"
                                {...register("property_image", { required: true })}
                                className="input input-bordered border-white w-full mt-3 input-ghost text-white focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>



                        <div>
                            <label htmlFor="property_title" className="text-xl font-semibold mr-5 text-white">Property Title</label>
                            <input
                                name="property_title"
                                id="property_title"
                                type="text"
                                placeholder="Title"
                                {...register("property_title", { required: true })}
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="property_location"
                                className="text-xl font-semibold mr-5 text-white">Property Location</label>
                            <input name="property_location"
                                id="property_location"
                                type="text"
                                placeholder="Property Location"
                                {...register("property_location", { required: true })}
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>

                        <div>
                            <label htmlFor="nation"
                                className="text-xl font-semibold mr-5 text-white">Property Nation</label>
                            <input name="nation"
                                id="nation"
                                type="text"
                                placeholder="Nation"
                                {...register("nation", { required: true })}
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>


                        <div>
                            <label htmlFor="property_description" className="text-xl font-semibold mr-5 text-white">Property Description</label>
                            <textarea
                                name="property_description"
                                id=""
                                cols="50"
                                rows="10"
                                type="text"
                                placeholder="Type a detailed description about the property"
                                {...register("property_description", { required: true })}
                                className="input input-ghost input-bordered text-white border-white mt-3 w-full  h-28 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" ></textarea>
                        </div>

                        <div>
                            <label htmlFor="Minimum Price" className="text-xl font-semibold mr-5 text-white">Minimum Price</label>
                            <input
                                id="min_price_range"
                                type="number"
                                placeholder="Minimum Price"
                                min={'100'}
                                {...register("min_price_range", { required: true })}
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="Maximum Price" className="text-xl font-semibold mr-5 text-white">Maximum Price</label>
                            <input
                                id="max_price_range"
                                type="number"
                                placeholder="Maximum Price"
                                min={'200'}
                                {...register("max_price_range", { required: true })}
                                className="input input-ghost input-bordered text-white border-white w-full mt-3 focus:bg-white focus:bg-opacity-60  dark:text-gray-50 dark:border-gray-300" />
                        </div>



                    </div>
                    <input type="submit" className="btn bg-amber-600 border-amber-600 text-white font-bold w-1/2 mx-auto" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProperty;