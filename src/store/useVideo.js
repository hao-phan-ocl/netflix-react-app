import { useEffect, useState } from "react"

export default function useVideo() {
    const [openVideo, setOpenVideo] = useState(false)

    useEffect(() => {
        openVideo && (document.body.style.overflow = 'hidden')
        !openVideo && (document.body.style.overflow = 'unset')
    }, [openVideo])

    return [openVideo, setOpenVideo]
}