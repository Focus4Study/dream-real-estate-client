




const OfferedRow = ({ offered, handleVerification }) => {
    const {
        _id,
        property_title,
        property_location,
        buyer_name,
        buyer_email,
        offer,
    status} = offered


        const accepted = 'accepted'
        const rejected = 'rejected'

    return (
        <tr>
            <td className="px-3 w-32 font-medium dark:text-gray-600 text-center py-4">
                <p>{property_title}</p>
            </td>
            <td className="px-3 py-2">
                <div className="w-full text-center">
                    <p className="w-52 text-wrap mx-auto">{property_location}</p>
                </div>
            </td>
            <td className="px-3 py-2 items-center gap-3">
                <p className="dark:text-gray-600 text-center">{buyer_name}</p>
            </td>
            <td className="px-3 py-2 text-center">
                <p>{buyer_email}</p>
            </td>
            <td className="px-3 py-2 text-center">
                <p>{offer}</p>
            </td>
            <td className="px-3 py-2 text-center">
                {
                    status!=='pending'?
                    
                    (status==='accepted'?<p className="uppercase">{status}</p>: <></>)
                    :
                    (<button onClick={()=>handleVerification(_id, accepted)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                        Accept
                    </button>)
                }
            </td>
            <td className="px-3 py-2 text-center">
            {
                    status!=='pending'?
                    (status==='rejected'?<p className="uppercase">{status}</p>: <></>)
                    :
                    (<button onClick={()=>handleVerification(_id, rejected)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                    Reject
                </button>)
                }


            </td>
        </tr>
    );
};

export default OfferedRow;