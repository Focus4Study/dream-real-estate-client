import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UserReview from "./UserReview/UserReview";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const DetailsPage = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const [property, setProperty] = useState([])
    const { _id, property_image, property_title, property_location, agent_name, agent_image, max_price_range,min_price_range, property_description } = property
    useEffect(() => {
        fetch(`https://dream-real-estate-server.vercel.app/property/details/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setProperty(data)
            })
    }, [id])


    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://dream-real-estate-server.vercel.app/reviews/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [id])

    const [currentTime, setCurrentTime] = useState(new Date())

    const addToCart = property => {
        if (user && user?.email) {
            const wishedProperty = {
                propertyId: property._id,
                email: user.email,
                property_image: property?.property_image,
                property_title: property?.property_title,
                property_location: property?.property_location,
                agent_name: property?.agent_name,
                agent_image: property?.agent_image,
                max_price_range:property?.max_price_range,
                min_price_range:property?.min_price_range,
                verification_status: property?.verification_status
            }
            axiosSecure.post('/wishlist', wishedProperty)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Saved To Wishlist",
                            text: `${property?.property_title} has been saved to your wishlist`,
                            icon: "success"
                        });
                    }
                })
                .catch(
                    error => { console.log(error) },
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    })
                )
        }
        else {
            Swal.fire({
                title: "Please Login",
                text: "You cannot save add property to wishlist without logging in",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }


    const handleReviewPost = (e) => {
        setCurrentTime(new Date())
        e.preventDefault()
        const reviewDescription = e.target.review.value


        if (user && user?.email) {
            const review = {
                property_title,
                propertyId: _id,
                reviewerName: user?.displayName,
                userImg: user?.photoURL,
                userEmail: user?.email,
                reviewTime: currentTime,
                agentName: agent_name,
                reviewDescription,
            }
            axiosSecure.post('/reviews', review)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast("Your review has been posted");
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Login",
                text: "You cannot save add property to wishlist without logging in",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }

    return (

        <div className="relative space-y-10 bg-orange-50">
            <img className="w-full max-h-[700px]" src={property_image} alt="" />
            <ToastContainer />
            <div className="flex flex-col md:flex-row gap-5 p-5 container mx-auto">
                <div className="space-y-10 container">
                    <h1 className="text-5xl font-bold mb-20">{property_title}</h1>
                    <p>{property_description}</p>
                    <button onClick={() => addToCart(property)} className="btn bg-emerald-400 font-bold block">Add To Wish list</button>
                </div>
                <div className="w-fit space-y-5 text-center border p-8 rounded-lg  bg-slate-50">
                    <div className="flex items-center gap-3 justify-center">
                        <img src={agent_image} alt="" className="object-cover object-center w-20 rounded dark:bg-gray-500" />
                        <h3 className="text-2xl">{agent_name}</h3>
                    </div>
                    <div className="divider"></div>
                    <h4 className="text-xl font-semibold">Location: {property_location}</h4>
                    <h2 className="text-2xl font-bold">{min_price_range}-{max_price_range}</h2>



                    <label htmlFor="my_modal_7" className="btn bg-emerald-400 font-bold">Add Review</label>


                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <h2>ADD REVIEW</h2>
                            <form method="dialog" onSubmit={(e) => handleReviewPost(e)} className="flex flex-col justify-center w-full">
                                <textarea className="textarea textarea-info w-full" name="review" placeholder="Bio"></textarea>
                                <div className="flex justify-end p-2">
                                    <div>
                                        <input className="btn bg-emerald-400" type="submit" value="submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                </div >
                <div className="divider"></div>
            </div>
            <div className="bg-green-100 p-10  pb-20 mx-auto">
            <h2 className="container text-4xl font-semibold uppercase font-serif">Reviews</h2>
            <div className="divider"></div>
                {
                    reviews.map(review => (<UserReview review={review} key={review._id}></UserReview>))
                }
            </div>
        </div >
    );
};

export default DetailsPage;