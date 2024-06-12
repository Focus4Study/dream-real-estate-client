import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useOffersSale = () => {

        const {user} = useAuth()
        const axiosPublic = useAxiosPublic()
        const {refetch, data: offersSale=[]} = useQuery({
            queryKey: ['offersSale', user?.email],
            queryFn: async ()=>{
                const res = await axiosPublic.get(`/offers/selling/${user.email}`)
                return res.data
            }
        })
        return [refetch,offersSale]
};

export default useOffersSale;