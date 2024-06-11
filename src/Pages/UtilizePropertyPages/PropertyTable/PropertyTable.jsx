import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMyProperties from "../../../Hooks/useMyProperties";
import PropertyRow from "../PropertyRow/PropertyRow";
// import { useState } from "react";

const PropertyTable = () => {
    const axiosSecure = useAxiosSecure()
    const [refetch, myProperties] = useMyProperties()
    // const [wishlistState, setWishlistState] = useState()
    console.log(myProperties);
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
    return (
        <div>
            <Helmet>
                <title>DR-Estate | Wishlist</title>
            </Helmet>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="text-2xl font-semibold leading-tight text-center mb-10">My Added Properties</h2>
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
                                <th className="p-3">Verification Status</th>
                                <th className="p-3">Price Range</th>
                                <th className="p-3">Update</th>
                                <th className="p-3">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            {
                                myProperties.map(myProperty => <PropertyRow key={myProperty._id} myProperty={myProperty} handleDelete={handleDelete}></PropertyRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PropertyTable;