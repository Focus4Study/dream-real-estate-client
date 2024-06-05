
import { Helmet } from "react-helmet-async";
import ReviewCard from "../ReviewCard";


const Reviews = () => {
    return (
        <div className="pt-5">
            <Helmet>
                <title>DR-Estate | Reviews</title>
            </Helmet>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;