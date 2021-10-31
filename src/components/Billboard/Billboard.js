import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import instance from '../../api/axiosInstance';
import requests from '../../api/requests';
import PreviewModal from '../PreviewModal/PreviewModal';
import './Billboard.scss';

export default function Billboard() {
    const [billboard, setBilboard] = useState([]);
    const [openModal, setOpenModal] = useState(false);
            
    useEffect(() => {       
        async function fetchMovie() {
            const request = await instance.get(requests.trending);

            setBilboard(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            console.log(request.data.results)
        } 
        fetchMovie();
    },[]);

    useEffect(() => {
        openModal && (document.body.style.overflow = 'hidden');
        !openModal && (document.body.style.overflow = 'unset');
    }, [openModal]);

    function truncate(string, num) {
        return string?.length > num ? string.slice(0, num) + '...' : string;
    }

    return (    
        <div className="billboard">
            <img className="banner" src={`https://image.tmdb.org/t/p/original/${billboard?.backdrop_path}`} alt={billboard?.name || billboard?.original_title || billboard?.original_name}/>
            <div className="info-wrapper">
                <div className="info-inner">
                    <h1 className="movie-title">
                        {billboard?.name || billboard?.original_title || billboard?.original_name}
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
            {openModal && <PreviewModal setOpenModal={setOpenModal}/>}
        </div>      
    )
}


