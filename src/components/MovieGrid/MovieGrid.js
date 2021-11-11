import { Grid } from '@material-ui/core';
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
            <Grid 
                item 
                xl={2} 
                lg={2.4} 
                md={3} 
                sm={4} 
                xs={6} 
                className='movie-card'
            >
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
            </Grid>
            {openModal && <Modal data={movieId} setOpenModal={setOpenModal} />}
        </>
    )
}