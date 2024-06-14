import { Helmet } from "react-helmet-async";
import useWishlist from "../../../Hooks/useWishlist";
import WishRow from "../WishRow/WishRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { useState } from "react";

const Wishlist = () => {
    const axiosSecure = useAxiosSecure()
    const [refetch, wishlist] = useWishlist()
    // const [wishlistState, setWishlistState] = useState()

    const handleDeleteWish = id => {

        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you would like to remove this property?',
            icon: 'error',
            confirmButtonText: 'Yes, I am'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/wishlist/${id}`)
                        // .then(res => res.json())
                        .then(data => {
                            if (data.data.deletedCount > 0) {
                                Swal.fire({
                                    title: 'Deleted',
                                    text: 'You have removed an property from wishlist',
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
                <h2 className="text-2xl font-semibold leading-tight text-center mb-10">Wishlist</h2>
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
                                <th className="p-3">Verification Status</th>
                                <th className="p-3">Price Range</th>
                                <th className="p-3">Make an Offer</th>
                                <th className="p-3">Remove</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            {
                                wishlist.map(wishProperty => <WishRow key={wishProperty._id} wishProperty={wishProperty} handleDeleteWish={handleDeleteWish}></WishRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;