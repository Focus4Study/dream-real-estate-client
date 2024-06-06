
const PropertyCard = ({property}) => {
    const {property_image,property_title,property_location,agent_name,agent_image,price_range, verification_status} = property
    return (
        <div>
            <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div>
                    <div className="flex space-x-4 mb-5">
                        {/* Agent image */}
                        <img alt="" src={agent_image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-xl font-semibold">{agent_name}</a>
                            <span className="text-xs dark:text-gray-600">{verification_status}</span>
                        </div>
                    </div>
                    {/* Property image */}
                    <img src={property_image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="my-5 text-3xl leading-relaxed font-bold">{property_title}</h2>
                    <p className="text-xl font-semibold dark:text-gray-600">{property_location}</p>
                </div>
                <div className="flex justify-between">
                    <button type="button" className="text-center">{price_range}</button>
                    <button className="btn btn-info items-center">Details button</button>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;