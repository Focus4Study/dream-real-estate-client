import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://dream-real-estate-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic 
};

export default useAxiosPublic;