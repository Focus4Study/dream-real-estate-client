import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserReview from "./UserReview/UserReview";


const DetailsPage = () => {

    const { id } = useParams()
    const [property, setProperty] = useState([])
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

    console.log(reviews);


    const { property_image, property_title, property_location, agent_name, agent_image, price_range, property_description } = property

    return (
        <div className="relative space-y-10">
            <img className="w-full max-h-[700px]" src={property_image} alt="" />
            <div className="space-y-10">
                <h1 className="text-7xl font-bold mb-20">{property_title}</h1>
                <p>{property_description}</p>
                <button className="btn btn-ghost block">Add To Wish list</button>
            </div>
            <div className="absolute top-[500px] right-10 w-fit space-y-5 text-center border p-8 rounded-lg  bg-slate-50">
                <div className="flex items-center gap-3 justify-center">
                    <img src={agent_image} alt="" className="object-cover object-center w-20 rounded dark:bg-gray-500" />
                    <h3 className="text-2xl">{agent_name}</h3>
                </div>
                <div className="divider"></div>
                <h4 className="text-2xl font-semibold">{property_location}</h4>
                <h2 className="text-2xl font-bold">{price_range}</h2>
                <button className="btn btn-ghost text-2xl font-bold">Add a review</button>
            </div>
            <div className="divider"></div>
            <div>
               {
                reviews.map(review=>(<UserReview review={review} key={review._id}></UserReview>))
               }
            </div>
            
        </div>
    );
};

export default DetailsPage;