import { Info, PlayCircleFilled } from '@material-ui/icons';
import { useState } from 'react';
import requests from '../../api/requests';
import useModal from '../../store/useModal';
import Modal from '../Modal/Modal';
import './MovieGrid.scss';

export default function Search({data}) {
    const [movieId, setMovieId] = useState([]);
    const [openModal, setOpenModal] = useModal();

    return (
        <>
            <div className='movie-card' >
                <img 
                    className="image"
                    src={requests.billboardImage + data?.backdrop_path} 
                    alt={data?.name || data?.title}
                />
                <div className="button-box">
                    <PlayCircleFilled className="play" type="button" />
                    <Info 
                        className="info" 
                        type="button" 
                        onClick={() => {
                            setOpenModal(true);
                            setMovieId(data);
                        }} 
                    />
                </div>
            </div>
            {openModal && <Modal data={movieId} setOpenModal={setOpenModal} />}
        </>
    )
}