import { Cancel } from '@material-ui/icons';
import './PreviewModal.scss';

export default function PreviewModal({ setOpenModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <Cancel className="close" onClick={() => setOpenModal(false)}/>
            </div>
        </div>
    )
}
