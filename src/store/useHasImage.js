import { useState, useEffect } from "react"

export default function useHasImage(data) {
    const [hasImage, setHasImage] = useState([])

    useEffect(() => {
        const filtered = data?.filter(e => e.backdrop_path != null)
        setHasImage(filtered)
    }, [data])

    return [hasImage]
}
