import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMyProperties = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: myProperties = [] } = useQuery({
        queryKey: ['properties', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/property/my-property?email=${user.email}`)
            return res.data
        }
    })
    return [refetch, myProperties]
};


export default useMyProperties;