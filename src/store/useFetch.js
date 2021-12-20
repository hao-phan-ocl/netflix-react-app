import { useEffect, useState } from "react"
import instance from "../api/axiosInstance"

export default function useFetch(url, fetchType, mediaType) {
    const [data, setData] = useState([])
    
    useEffect(() => {       
        async function fetchData() {
            const request = await instance.get(url)
            
            if (fetchType === 'billboard' || fetchType === 'video') {
                setData(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            } else if (fetchType === 'carousel') {
                request.data.results.map(elem => elem.media_type = mediaType)
                setData(request.data.results)
            } else if (fetchType === 'search') {
                setData(request.data.results)
            } 
        }
        
        fetchData()
    }, [url, fetchType, mediaType])

    return [data, setData]
}