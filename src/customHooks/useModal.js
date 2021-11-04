import { useEffect, useState } from "react";

export default function useModal() {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        openModal && (document.body.style.overflow = 'hidden');
        !openModal && (document.body.style.overflow = 'unset');
        // document.getElementById('modal-container').onclick = setOpenModal(false);
    }, [openModal]);

    return [openModal, setOpenModal]
}