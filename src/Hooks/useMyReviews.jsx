import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMyReviews = () => {

        const {user} = useAuth()
        const axiosSecure = useAxiosSecure()
        const {refetch, data: myReviews=[]} = useQuery({
            queryKey: ['reviews', user?.email],
            queryFn: async ()=>{
                const res = await axiosSecure.get(`/reviews/my-reviews?email=${user.email}`)
                return res.data
            }
        })
        return [refetch,myReviews]
};

export default useMyReviews;