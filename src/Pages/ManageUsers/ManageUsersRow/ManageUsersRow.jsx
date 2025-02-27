const ManageUsersRow = ({ user, handleDelete, handleMakeAdmin, handleMakeAgent, handleMarkFraud }) => {
    const { _id, name, email, photoURL, role } = user
    return (

        <tr>
            <td className="px-3 w-32 text-xl font-medium dark:text-gray-600 text-center py-4">
                <img className="rounded-lg w-28" src={photoURL} alt="" />
            </td>

            <td className="px-3 py-2 text-center">
                <p>{name}</p>
            </td>

            <td className="px-3 py-2">
                <div className="w-full text-center">
                    <p className="w-52 text-wrap mx-auto">{email}</p>
                </div>
            </td>

            <td className="px-3 py-2 items-center mx-auto">
                {
                    role === 'admin' || role === 'agent'?
                        <p className="w-52 text-wrap mx-auto uppercase">{role}</p>
                        :
                        <button onClick={() => handleMakeAdmin(_id)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Make Admin
                        </button>
                }

            </td>

            <td className="px-3 py-2 text-center">
                {
                    role === 'agent' || role === 'admin'?
                        <p className="w-52 text-wrap mx-auto uppercase">{role}</p>
                        :
                        <button onClick={() => handleMakeAgent(_id)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                            Make Agent
                        </button>
                }

            </td>

            <td className="px-3 py-2 text-center">
                <button onClick={() => handleMarkFraud(_id, email)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                    Mark as Fraud
                </button>
            </td>

            <td className="px-3 py-2 text-center">
                <button onClick={() => handleDelete(_id)} title="Open details" className="btn dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
                    Delete User
                </button>
            </td>
        </tr>
    );
};

export default ManageUsersRow;