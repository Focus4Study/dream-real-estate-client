import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useOffered = () => {
        const {user} = useAuth()
        const axiosPublic = useAxiosPublic()
        const {refetch, data: offers=[]} = useQuery({
            queryKey: ['offers', user?.email],
            queryFn: async ()=>{
                const res = await axiosPublic.get(`/offers/prices/${user.email}`)
                return res.data
            }
        })
        return [refetch,offers]
};

export default useOffered;