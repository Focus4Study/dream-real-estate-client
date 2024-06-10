

const ReviewCard = ({review, handleDeleteReview}) => {

    const {_id} = review

    return (
        <div>
            <div className="flex items-center gap-10 max-h-80 px-5">
                <div>
                    <img className="h-56 rounded-lg" src={review?.userImg} alt="" />
                </div>
                <div className="flex-1 space-y-3 p-10">
                    <h2 className="text-4xl font-semibold text-center mb-2">{review?.propertyTitle}</h2>
                    <h2 className="text-xl font-semibold">{review?.agentName}</h2>
                    <p>Comented on: {review?.reviewTime}</p>
                    <p>{review?.reviewDescription}</p>
                </div>
                <button onClick={()=>handleDeleteReview(_id)} className="btn btn-ghost">Delete</button>
            </div>
        </div>
    );
};

export default ReviewCard;