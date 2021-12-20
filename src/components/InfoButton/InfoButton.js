import { Info, InfoOutlined } from "@material-ui/icons"
import useModal from "../../store/useModal"
import Modal from "../Modal/Modal"

export default function InfoButton({buttonSize, data}) {
    const [openModal, setOpenModal] = useModal()

    return (
        <>
            {buttonSize === 'large' ? (
                <button className="info" onClick={() => setOpenModal(true)}> 
                    <InfoOutlined className="icon"/>
                    More Info
                </button>
            ) : (
                <Info className="info" onClick={() => setOpenModal(true)} />  
            )}
            {openModal && <Modal setOpenModal={setOpenModal} data={data} />}
        </>
    )
}