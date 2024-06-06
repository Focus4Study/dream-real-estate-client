import { useEffect, useState } from "react";


const useProperties = () => {
    const [properties, setProperties] = useState([])
    const [loading, setLoading]= useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/property',{
            method:'GET',
        })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                setProperties(data)
                setLoading(false)
            })    
    },[])
    return[properties, loading]
};

export default useProperties;
