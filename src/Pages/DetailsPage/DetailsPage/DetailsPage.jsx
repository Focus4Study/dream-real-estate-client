import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UserReview from "./UserReview/UserReview";
import { ToastContainer, toast } from 'react-toastify'


const DetailsPage = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const { id } = useParams()
    const [property, setProperty] = useState([])
    const { _id, property_image, property_title, property_location, agent_name, agent_image, price_range, property_description } = property
    useEffect(() => {
        fetch(`http://localhost:5000/property/details/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setProperty(data);
            })
    }, [id])


    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`, {
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
                price_range: property?.price_range,
                verification_status: property?.verification_status
            }
            console.log(wishedProperty);
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
                reviewerName: user?.name,
                userImg: user?.userImg,
                userEmail: user?.email,
                reviewTime: currentTime,
                agentName: agent_name,
                reviewDescription,
            }
            console.log(review);
            axiosSecure.post('/reviews', review)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast("Your review has been posted");
                    }
                })
                .catch(
                    error => { console.log(error) },
                    toast("Oops..., Something went wrong!")
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

    return (

        <div className="relative space-y-10">
            <img className="w-full max-h-[700px]" src={property_image} alt="" />
            <ToastContainer />
            <div className="space-y-10">
                <h1 className="text-7xl font-bold mb-20">{property_title}</h1>
                <p>{property_description}</p>
                <button onClick={() => addToCart(property)} className="btn btn-ghost block">Add To Wish list</button>
            </div>
            <div className="absolute top-[500px] right-10 w-fit space-y-5 text-center border p-8 rounded-lg  bg-slate-50">
                <div className="flex items-center gap-3 justify-center">
                    <img src={agent_image} alt="" className="object-cover object-center w-20 rounded dark:bg-gray-500" />
                    <h3 className="text-2xl">{agent_name}</h3>
                </div>
                <div className="divider"></div>
                <h4 className="text-2xl font-semibold">{property_location}</h4>
                <h2 className="text-2xl font-bold">{price_range}</h2>
                {/* Open the modal using document.getElementById('ID').showModal() method */}


                <label htmlFor="my_modal_7" className="btn">Add Review</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h2>ADD REVIEW</h2>
                        <form method="dialog" onSubmit={(e) => handleReviewPost(e)} className="flex flex-col justify-center w-full">
                            <textarea className="textarea textarea-info w-full"  name="review" placeholder="Bio"></textarea>
                            <div className="flex justify-end p-2">
                                <div>
                                    <input className="btn btn-primary" type="submit" value="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                {
                    reviews.map(review => (<UserReview review={review} key={review._id}></UserReview>))
                }
            </div>

        </div>
    );
};

export default DetailsPage;