import { Helmet } from "react-helmet-async";
import ReviewCard from "../ReviewCard";
import useMyReviews from "../../../Hooks/useMyReviews";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Reviews = () => {
    const axiosSecure = useAxiosSecure()
    const [refetch, myReviews] = useMyReviews()
    console.log(myReviews);

    const handleDeleteReview = id => {
        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you would like to delete this item?',
            icon: 'error',
            confirmButtonText: 'Yes, I am'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`reviews/${id}`)
                        // .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'Deleted',
                                    text: 'You have deleted a blog',
                                    icon: 'info',
                                    confirmButtonText: 'Ok'
                                })
                            }
                            refetch()
                        })
                }
                else {
                    error => console.log(error);
                }
            })
    }

    return (
        <div className="pt-5">
            <Helmet>
                <title>DR-Estate | Reviews</title>
            </Helmet>
            {
                myReviews?.map(review => <ReviewCard key={review._id} review={review} handleDeleteReview={handleDeleteReview}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;