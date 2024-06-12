// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";


// const usePropertyDelete = () => {

//     const axiosSecure = useAxiosSecure()
//     const {refetch, data: deletedProperties=[]} = useQuery({
//         queryKey: ['property'],
//         queryFn: async ()=>{
//             const res = await axiosSecure.delete(`/property/delete`)
//             return res.data
//         }
//     })
//     return [refetch, deletedProperties]
// };

// export default usePropertyDelete;


