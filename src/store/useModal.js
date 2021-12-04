import { useEffect, useState } from "react"

export default function useModal() {
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        openModal && (document.body.style.overflow = 'hidden')
        !openModal && (document.body.style.overflow = 'unset')
    }, [openModal])

    return [openModal, setOpenModal]
}