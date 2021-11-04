import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import useFetch from '../../customHooks/useFetch';
import Modal from '../Modal/Modal';
import './Billboard.scss';
import requests from '../../api/requests';
import useModal from '../../customHooks/useModal';

export default function Billboard() {
    const [data] = useFetch(`${requests.trending}`, true);
    const [openModal, setOpenModal] = useModal();
    
    function truncate(string, num) {
        return string?.length > num ? string.slice(0, num) + '...' : string;
    }

    return (    
        <div className="billboard">
            <img 
                className="banner" 
                src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} 
                alt={ data?.name || data?.title }
            />
            <div className="info-wrapper">
                <div className="info-inner">
                    <h1 className="movie-title">
                        {data?.name || data?.title}
                    </h1>
                    <h3 className="description">
                        {truncate(data?.overview, 200)}
                    </h3>
                    <div className="button-box">
                        <button className="play">
                            <PlayArrow className="icon"/>
                            Play
                        </button>
                        <button 
                            className="info" 
                            onClick={() => {setOpenModal(true)}}
                        > 
                            <InfoOutlined className="icon"/>
                            More Info
                        </button>
                    </div>
                </div>
            </div>            
            {openModal && <Modal setOpenModal={setOpenModal} data={data} />}
        </div>
    )
}


