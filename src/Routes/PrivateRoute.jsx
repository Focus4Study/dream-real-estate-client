import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        // todo change this to skeleton loader or loading or something
        return <div className="w-16 h-16 absolute top-2/4 right-1/2 border-4 border-dashed rounded-full border-emerald-500 m-auto animate-spin dark:border-violet-600"></div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;