import { Link } from "react-router-dom";




const WishRow = ({ wishProperty, handleDeleteWish }) => {
    const {
        _id,
        propertyId,
        property_image,
        property_title,
        property_location,
        agent_name,
        agent_image,
        min_price_range,
        max_price_range,
        verification_status, } = wishProperty




    return (
        <tr>
            <td className="px-3 w-32 font-medium dark:text-gray-600 text-center py-4">
                <img className="rounded-lg w-28 mx-auto my-5" src={property_image} alt="" />
                <p>{property_title}</p>
            </td>
            <td className="px-3 py-2">
                <div className="w-full text-center">
                    <p className="w-52 text-wrap mx-auto">{property_location}</p>
                </div>
            </td>
            <td className="px-3 py-2 items-center gap-3">
                <img className="rounded-full h-14 w-14 mx-auto" src={agent_image} alt="" />
                <p className="dark:text-gray-600 text-center">{agent_name}</p>
            </td>
            <td className="px-3 py-2 text-center">
                <p>{verification_status}</p>
            </td>
            <td className="px-3 py-2 text-center">
                <p>{min_price_range}-{max_price_range}</p>
            </td>
            <td className="px-3 py-2 text-center">
                <Link to={`/dashboard/offer/${propertyId}`}>
                    <button title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                        Offer
                    </button></Link>
            </td>
            <td className="px-3 py-2 text-center">

                <button onClick={() => handleDeleteWish(_id)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                    Remove
                </button>

            </td>
        </tr>
    );
};

export default WishRow;