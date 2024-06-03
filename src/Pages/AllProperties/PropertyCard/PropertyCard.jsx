
const PropertyCard = () => {
    return (
        <div>
            <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-1 text-xl font-semibold">Property title</h2>
                <div>
                    {/* Property image */}
                    <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />

                    <div className="flex space-x-4 mb-5">
                        {/* Agent image */}
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Agent name</a>
                            <span className="text-xs dark:text-gray-600">Verification status</span>
                        </div>
                    </div>
                    <p className="text-sm dark:text-gray-600">Property location Property location Property location Property location Property location Property location Property location Property location</p>
                </div>
                <div className="flex justify-between">
                    <button aria-label="Share this post" type="button" className="text-center">Price range</button>
                    <button type="button" className="flex items-center">Details button</button>

                </div>
            </div>
        </div>
    );
};

export default PropertyCard;