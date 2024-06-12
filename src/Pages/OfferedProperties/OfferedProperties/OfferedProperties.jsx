import { Helmet } from "react-helmet-async";
import OfferedRow from "../OfferedRow/OfferedRow"
import Swal from "sweetalert2";
import useOffered from "../../../Hooks/useOffered";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const OfferedProperties = () => {
        const axiosPublic = useAxiosPublic()
        const [refetch, offers] = useOffered()
        console.log(offers);
        

        const handleVerification = (id, status) =>{
            console.log(status);
            Swal.fire({
                title: 'Confirm Update',
                text: 'Are you sure you would like to Update this property?',
                icon: 'info',
                confirmButtonText: 'Yes, I am'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        axiosPublic.patch(`/offers/status/${id}`, {status})
                            .then(data => {
                                console.log(data);
                                if (data.data.modifiedCount>0) {
                                    Swal.fire({
                                        title: 'Updated',
                                        text: 'You have Updated a Listing',
                                        icon: 'info',
                                        confirmButtonText: 'Ok'
                                    })
                                }
                                refetch()
                            })
                    }
                })
            // navigate(from)
        }

        return (
            <div>
                <Helmet>
                    <title>DR-Estate | Added Properties</title>
                </Helmet>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                    <h2 className="text-2xl font-semibold leading-tight text-center mb-10">My Added Properties</h2>
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
                                    <th className="p-3">Property Title</th>
                                    <th className="p-3">Property Location</th>
                                    <th className="p-3">Buyer email</th>
                                    <th className="p-3">Buyer Name</th>
                                    <th className="p-3">Offered Price</th>
                                    <th className="p-3">Accept</th>
                                    <th className="p-3">Reject</th>
                                </tr>
                            </thead>
                            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                                {
                                    offers.map(offered => <OfferedRow key={offered._id} offered={offered} handleVerification={handleVerification}></OfferedRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

    export default OfferedProperties;
