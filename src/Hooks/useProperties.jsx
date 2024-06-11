import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useProperties = () => {

    const axiosSecure = useAxiosSecure()
    const {refetch, data: properties=[]} = useQuery({
        queryKey: ['property'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/property`)
            return res.data
        }
    })
    return [refetch, properties]
};

export default useProperties;


