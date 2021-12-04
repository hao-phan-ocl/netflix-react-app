import { useEffect, useState } from "react"
import instance from "../api/axiosInstance"

export default function useFetch(url, isBillboard) {
    const [data, setData] = useState([])

    useEffect(() => {       
        async function fetchData() {
            const request = await instance.get(url)

            isBillboard ? 
            setData(request.data.results[Math.floor(Math.random() * request.data.results.length)]) :
            setData(request.data.results)           
        }
        fetchData()
    }, [url, isBillboard])

    return [data, setData]
}