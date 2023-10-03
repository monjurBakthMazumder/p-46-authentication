import { useEffect } from "react";
import { useState } from "react";

const useGetData = () => {
    const [data, setData] =useState()
    useEffect(() =>{
        fetch('/jobs.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    return [data]
};


export default useGetData;