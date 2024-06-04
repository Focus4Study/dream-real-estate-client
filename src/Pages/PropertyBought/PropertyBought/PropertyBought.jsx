

const PropertyBought = () => {
    return (
        <div className="pt-20">
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="text-2xl font-semibold leading-tight text-center mb-10">Property Bought</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="dark:bg-gray-300 text-center">
                                <th className="p-3">Property</th>
                                <th className="p-3">Property Name</th>
                                <th className="p-3">Property Location</th>
                                <th className="p-3">Agent</th>
                                <th className="p-3">Offered Amount</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 w-32 text-xl font-medium dark:text-gray-600 text-center py-4">
                                    <img className="rounded-lg w-28" src="https://i.ibb.co/FBbxYNW/lodge.jpg" alt="" />
                                </td>
                                <td className="px-3 py-2 text-center">
                                    <p>Property title</p>
                                </td>
                                <td className="px-3 py-2">
                                    <div className="w-full text-center">
                                        <p className="max-w-96 text-wrap mx-auto">property locationproperty
                                            locationproperty location</p>
                                    </div>
                                </td>
                                <td className="px-3 py-2 items-center gap-3">
                                    <img className="rounded-full h-14 w-14 mx-auto" src="https://i.ibb.co/FBbxYNW/lodge.jpg" alt="" />
                                    <p className="dark:text-gray-600 text-center">Agent Name</p>
                                </td>

                                <td className="px-3 py-2 text-center">
                                    <p>Offered Amount</p>
                                </td>

                                <td className="px-3 py-2 text-center">
                                    <button title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                                        Status
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PropertyBought;