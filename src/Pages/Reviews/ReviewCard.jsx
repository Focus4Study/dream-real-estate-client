


const ReviewCard = () => {
    return (
        <div>
            <div className="flex items-center gap-10 max-h-80 px-5">
                <div>
                    <img className="h-56 rounded-lg" src="https://i.ibb.co/k13p24h/Luxury-Beachfront-Hotel.jpg" alt="" />
                </div>
                <div className="flex-1 space-y-5 p-10">
                    <h2 className="text-4xl font-semibold text-center mb-5">Property title</h2>
                    <h2 className="text-xl font-semibold text-center">Agent name</h2>
                    <p>Comented on: review time</p>
                    <p>review description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab dolorem itaque vitae minus ad deserunt voluptatum, delectus tenetur fugit illo sed aliquid expedita laboriosam inventore rerum id quos? Recusandae!</p>
                </div>
                <button className="btn btn-ghost">Delete</button>
            </div>
        </div>
    );
};

export default ReviewCard;