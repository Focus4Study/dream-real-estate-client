const ManageUsersRowResponsive = ({ user, handleDelete, handleMakeAdmin, handleMakeAgent, handleMarkFraud }) => {
    const { _id, name, email, photoURL, role } = user
    return (

        <tr className=" grid justify-center items-center">
            <td className="text-xl font-medium dark:text-gray-600 text-center py-4 space-y-4">
                <img className="rounded-lg w-28 mx-auto" src={photoURL} alt="" />
                <p>{name}</p>
                <p className="mx-auto">{email}</p>
                {
                    role === 'admin' || role === 'agent' ?
                        <p className="  uppercase">{role}</p>
                        :
                        <button onClick={() => handleMakeAdmin(_id)} title="Open details" className="btn mx-auto dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Make Admin
                        </button>
                }
                {
                    role === 'agent' || role === 'admin' ?
                        <p className="mx-auto uppercase">{role}</p>
                        :
                        <button onClick={() => handleMakeAgent(_id)} title="Open details" className="btn block mx-auto bg-emerald-400 dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Make Agent
                        </button>
                }
                <button onClick={() => handleMarkFraud(_id, email)} title="Open details" className="btn mx-auto bg-red-500 block dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                    Mark as Fraud
                </button>
                <button onClick={() => handleDelete(_id)} title="Open details" className="btn mx-auto bg-orange-400 dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                    Delete User
                </button>
            </td>
        </tr>
    );
};

export default ManageUsersRowResponsive;