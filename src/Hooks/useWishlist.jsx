import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useWishlist = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {refetch, data: wishlist=[]} = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/wishlist?email=${user.email}`)
            return res.data
        }
    })
    return [refetch,wishlist]
};

export default useWishlist;