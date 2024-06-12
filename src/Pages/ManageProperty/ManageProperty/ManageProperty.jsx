import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useProperties from "../../../Hooks/useProperties";
import PropertyRow from "../../UtilizePropertyPages/PropertyRow/PropertyRow";

const ManageProperty = () => {
        const axiosSecure = useAxiosSecure()
        const [refetch, properties] = useProperties()
        console.log(properties);
        const handleDelete = id => {
            Swal.fire({
                title: 'Confirm Delete',
                text: 'Are you sure you would like to delete this item?',
                icon: 'error',
                confirmButtonText: 'Yes, I am'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`property/${id}`)
                            .then(data => {
                                console.log(data);
                                if (data.data.deletedCount > 0) {
                                    Swal.fire({
                                        title: 'Deleted',
                                        text: 'You have deleted a blog',
                                        icon: 'info',
                                        confirmButtonText: 'Ok'
                                    })
                                }
                                refetch()
                            })
                    }
                    else {
                        error => console.log(error);
                    }
                })

        }

        const handleVerification = (id, verification_status) =>{
            console.log(verification_status);
            Swal.fire({
                title: 'Confirm Update',
                text: 'Are you sure you would like to Update this property?',
                icon: 'info',
                confirmButtonText: 'Yes, I am'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.patch(`/property/status/${id}`, {verification_status})
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
                                    <th className="p-3">Property</th>
                                    <th className="p-3">Property Location</th>
                                    <th className="p-3">Agent</th>
                                    <th className="p-3">Agent Email</th>
                                    <th className="p-3">Price Range</th>
                                    <th className="p-3">Verify</th>
                                    <th className="p-3">Reject</th>
                                </tr>
                            </thead>
                            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                                {
                                    properties.map(property => <PropertyRow key={property._id} property={property} handleDelete={handleDelete} handleVerification={handleVerification}></PropertyRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

    export default ManageProperty;
