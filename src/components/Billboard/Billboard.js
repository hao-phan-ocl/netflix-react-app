import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Modal from '../Modal/Modal';
import './Billboard.scss';

export default function Billboard() {
    const {context, context3} = useContext(UserContext);
    const [billboard] = context;
    const [openModal, setOpenModal] = context3;

    function truncate(string, num) {
        return string?.length > num ? string.slice(0, num) + '...' : string;
    }

    return (    
        <div className="billboard">
            <img 
                className="banner" 
                src={`https://image.tmdb.org/t/p/original/${billboard?.backdrop_path}`} 
                alt={ billboard?.name || billboard?.title }/>
            <div className="info-wrapper">
                <div className="info-inner">
                    <h1 className="movie-title">
                        {billboard?.name || billboard?.title}
                    </h1>
                    <h3 className="description">
                        {truncate(billboard?.overview, 200)}
                    </h3>
                    <div className="button-box">
                        <button className="play">
                            <PlayArrow className="icon"/>
                            Play
                        </button>
                        <button className="info" onClick={() => setOpenModal(true)}> 
                            <InfoOutlined className="icon"/>
                            More Info
                        </button>
                    </div>
                </div>
            </div>            
            {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} billboard={billboard}/>}
        </div>      
    )
}


