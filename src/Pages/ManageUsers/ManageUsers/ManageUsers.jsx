import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import ManageUsersRow from "../ManageUsersRow/ManageUsersRow";
import useUsersList from "../../../Hooks/useUsersList";


const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()
    const [refetch, users] = useUsersList()
    console.log(users);
    const handleDelete = id => {

        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you would like to delete this item?',
            icon: 'error',
            confirmButtonText: 'Yes, I am'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`users/${id}`)
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
                <h2 className="text-2xl font-semibold leading-tight text-center mb-10">Manage Users</h2>
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
                                <th className="p-3">User Image</th>
                                <th className="p-3">User Name</th>
                                <th className="p-3">User Email</th>
                                <th className="p-3">Make Admin</th>
                                <th className="p-3">Make Agent</th>
                                <th className="p-3">Mark as Fraud</th>
                                <th className="p-3">Delete user</th>

                            </tr>
                        </thead>
                        <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            {
                                users.map(user => <ManageUsersRow key={user._id} user={user} handleDelete={handleDelete}></ManageUsersRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;