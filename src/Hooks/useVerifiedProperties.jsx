import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useVerifiedProperties = () => {
    const axiosSecure = useAxiosSecure()
    const verification_status = "Verified"
    const {refetch, data: verifiedProperties=[]} = useQuery({
        queryKey: ['property', verification_status],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/property/verified?verification_status=${verification_status}`)
            return res.data
        }
    })
    return [refetch, verifiedProperties]
};

export default useVerifiedProperties;
