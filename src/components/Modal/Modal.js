import { Add, Cancel, PlayArrow } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import instance from '../../api/axiosInstance';
import requests from '../../api/requests';
import './Modal.scss';

export default function Modal({ setOpenModal, billboard }) {
    const [genres, setGenres] = useState([]);
    const type = billboard?.media_type;
    
    useEffect(() => {
        async function fetchGenres () {
            const res = await instance.get(
                type === 'movie'? 
                requests.movie_genres: 
                requests.tv_genres
            );
            setGenres(
                res.data.genres.filter(elem => billboard.genre_ids.includes(elem.id))
            );
            console.log(billboard.genre_ids)
            console.log(res.data.genres)
        }
        fetchGenres();
    }, []);
    
    return (
        <div className="modal">
            <div className="modal-content">
                <Cancel className="close" onClick={() => setOpenModal(false)}/>
                <div className="banner-and-info">
                    <img 
                        className="banner"
                        src={`https://image.tmdb.org/t/p/original/${billboard?.backdrop_path}`} 
                    />
                    <div className="info-container">
                        <h1 className="title">
                            {billboard?.name || billboard?.title}
                        </h1>
                        <div className="button-box">
                            <button type="button" className="play">
                                <PlayArrow className="icon"/>
                                Play
                            </button>
                            <button className="add">
                                <Add className="icon"/>
                                My List
                            </button>
                        </div>
                    </div>
                </div>
                <div className="movie-info">
                    <div className="description">
                        {billboard?.overview}
                    </div>
                    <div className="genres">
                        <span style={{color: '#777'}}>Genres: </span>
                        <span>
                            {genres.map((genre, i, arr) => {
                                return i !== (arr.length-1) ? genre.name + ', ' : genre.name
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
