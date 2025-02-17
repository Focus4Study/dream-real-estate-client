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
            <tr>
                <td className="px-3 w-32 text-xl font-medium dark:text-gray-600 text-center py-4">
                    <img className="rounded-lg w-28" src={property_image} alt="" />
                </td>
                <td className="px-3 py-2 text-center">
                    <p>{property_title}</p>
                </td>
                <td className="px-3 py-2">
                    <div className="w-full text-center">
                        <p className="max-w-96 text-wrap mx-auto">{property_location}</p>
                    </div>
                </td>
                <td className="px-3 py-2 items-center gap-3">
                    {!soldPage ?
                        <p className="dark:text-gray-600 text-center">{agent_name}</p>
                        :
                        <p className="dark:text-gray-600 text-center">{buyer_email}</p>
                        }
                </td>

                <td className="px-3 py-2 text-center">
                    {!soldPage ?
                        <p>{offer}</p>
                        :
                        <p>{buyer_name}</p>
                    }
                </td>

                <td className="px-3 py-2 text-center">
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
                            <p>{offer}</p>

                    }
                </td>
                <td></td>
            </tr>

        );
    };

export default PropertyBoughtRow;