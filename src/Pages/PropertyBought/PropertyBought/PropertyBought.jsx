import { Helmet } from "react-helmet-async";
import PropertyBoughtRow from "../PropertyBoughtRow/PropertyBoughtRow";
import useOffersSale from "../../../Hooks/useOffersSale";


const PropertyBought = () => {


    const [, offersSale] = useOffersSale()

    return (
        <div>
            <Helmet>
                <title>DR-Estate | PropertyBought</title>
            </Helmet>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="text-2xl font-semibold leading-tight text-center mb-10">Property Bought</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap tabs-boxed table-zebra-zebra">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead className="bg-red-300">
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
                        {
                                    offersSale.map(offered => <PropertyBoughtRow key={offered._id} offered={offered}></PropertyBoughtRow>)
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PropertyBought;