import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useReviews from "../../../Hooks/useReviews";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ReviewCard from "../../Reviews/ReviewCard";


const ManageReviews = () => {

    const [refetch, reviews] = useReviews()
    const axiosSecure = useAxiosSecure()

    const handleDeleteReview = id => {
        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you would like to delete this review?',
            icon: 'error',
            confirmButtonText: 'Yes, I am'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`reviews/${id}`)
                        .then(data => {
                            if (data.data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'Deleted',
                                    text: 'You have deleted a review',
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
                    <title>DR-Estate | Manage-Reviews</title>
                </Helmet>
                {
                    reviews?.map(review => <ReviewCard key={review._id} review={review} handleDeleteReview={handleDeleteReview}></ReviewCard>)
                }
            </div>
    );
};

export default ManageReviews;