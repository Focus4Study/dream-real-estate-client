import { FaUserAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const PropertyRow = ({ property, handleDelete }) => {
    const {
        _id,
        property_image,
        property_title,
        property_location,
        agent_name,
        agent_image,
        min_price_range,
        max_price_range,
        verification_status,
        email } = property
    const location = useLocation()
    const manageProperties = location.pathname.includes('manageProperties')
    const addedProperties = location.pathname.includes('my-added-property')
    const verification = verification_status === 'Verified'

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

            <td className="px-3 py-2 items-center mx-auto">
                {
                    agent_image ?
                        <img className="rounded-full h-14 w-14 mx-auto" src={agent_image} alt="" />
                        :
                        <FaUserAlt className="h-10 w-10" />
                }
                {
                    agent_name ?
                        <p className="dark:text-gray-600 text-center">{agent_name}</p>
                        :
                        <p>No Name</p>
                }

            </td>

            {
                manageProperties ?
                    <td className="px-3 py-2 text-center">
                        <p>{email}</p>
                    </td>
                    :
                    <td className="px-3 py-2 text-center">
                        <p>{verification_status? verification_status : 'Pending'}</p>
                    </td>
            }

            <td className="px-3 py-2 text-center">
                <p>{min_price_range}-{max_price_range}</p>
            </td>

            <td className="px-3 py-2 text-center">
                {
                    manageProperties ?
                        (verification?(
                            <p>{verification_status}</p>
                        )
                        :
                        (<button title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Verify
                        </button>))
                        :
                        (addedProperties?(<button title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Update
                        </button>)
                        :
                        (<button title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Make an offer
                        </button>
                        )
                    )
                        

                }

            </td>

            <td className="px-3 py-2 text-center">

                {
                    manageProperties ? (

                        verification ?
                            (<>
                            </>)
                            :
                            (<button title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                Reject
                            </button>
                            )
                    ) : (
                        (<button onClick={() => handleDelete(_id)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Remove
                        </button>)
                    )


                }



            </td>
        </tr>
    );
};

export default PropertyRow;