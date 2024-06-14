const OfferedPropertiesResponsive = ({ offered, handleVerification }) => {
    const {
        _id,
        property_title,
        property_location,
        buyer_name,
        buyer_email,
        offer,
        status } = offered


    const accepted = 'accepted'
    const rejected = 'rejected'

    return (
        <tr className="grid justify-center text-center">
            <td className="px-3 font-medium dark:text-gray-600 text-center py-4 space-y-2">
                <p>{property_title}</p>

                <p>{property_location}</p>

                <p className="dark:text-gray-600 text-center">{buyer_name}</p>

                <p>{buyer_email}</p>

                <p>{offer}</p>

                {
                    status !== 'pending' ?

                        (status === 'accepted' ? <p className="uppercase">{status}</p> : <></>)
                        :
                        (<button onClick={() => handleVerification(_id, accepted)} title="Open details" className="btn bg-emerald-400 dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Accept
                        </button>)
                }

                {
                    status !== 'pending' ?
                        (status === 'rejected' ? <p className="uppercase">{status}</p> : <></>)
                        :
                        (<button onClick={() => handleVerification(_id, rejected)} title="Open details" className="btn bg-red-400 dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Reject
                        </button>)
                }


            </td>
        </tr>
    );
};

export default OfferedPropertiesResponsive;