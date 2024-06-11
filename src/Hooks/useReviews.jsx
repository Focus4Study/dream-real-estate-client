import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useReviews = () => {

    const axiosSecure = useAxiosSecure()


    const {refetch, data: reviews=[]} = useQuery({
        queryKey: ['reviews'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/reviews`)
            return res.data
        }
    })
    return [refetch,reviews]

};

export default useReviews;