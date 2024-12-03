import { useEffect, useState } from "react";


function useCurrrencyinfo(currency){
    const [data, setData]= useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        fetch(url)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])
    return data

}

export default useCurrrencyinfo