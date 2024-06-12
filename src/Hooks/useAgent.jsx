import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAgent = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAgent} = useQuery({
        queryKey: ['isAgent', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/agent/${user.email}`)
            return res.data?.agent
        }
    })
    return [isAgent]
};

export default useAgent;