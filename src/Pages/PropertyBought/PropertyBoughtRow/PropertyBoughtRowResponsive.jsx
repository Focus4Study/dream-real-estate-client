import { Link } from "react-router-dom";

export
    const PropertyBoughtRow = ({ offered }) => {

        const {
            _id,
            property_title,
            property_location,
            offer,
            agent_name,
            property_image,
            status,
            buyer_name,
            buyer_email } = offered

        const soldPage = location.pathname.includes('property_sold')
        return (
            <tr className="grid justify-center">
                <td className="px-3 text-xl font-medium dark:text-gray-600 py-4 text-center">
                    <img className="rounded-lg w-28 mx-auto" src={property_image} alt="" />
                    <p>{property_title}</p>
                    <p>Location: {property_location}</p>
                    {!soldPage ?
                        <p className="dark:text-gray-600 text-center">Agent: {agent_name}</p>
                        :
                        <p className="dark:text-gray-600 text-center">Buyer Email: {buyer_email}</p>
                    }
                    {!soldPage ?
                        <p>Offer: ${offer}</p>
                        :
                        <p>Buyer: {buyer_name}</p>
                    }
                    {
                        !soldPage ?
                            (status === 'accepted' ?
                                (<Link to={`/dashboard/payment_page/id/${_id}`}>
                                    <button title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        Buy
                                    </button>
                                </Link>)
                                :
                                (
                                    <p className="uppercase">{status}</p>
                                ))
                            :
                            <p>Sold For: ${offer}</p>
                    }
                </td>
            </tr>

        );
    };

export default PropertyBoughtRow;