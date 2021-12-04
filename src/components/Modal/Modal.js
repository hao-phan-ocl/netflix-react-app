import { Add, Cancel, PlayArrow } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import reactDom from 'react-dom'
import instance from '../../api/axiosInstance'
import requests from '../../api/requests'
import './Modal.scss'

export default function Modal({ setOpenModal, data }) {
    const [genres, setGenres] = useState([])
    
    useEffect(() => {
        async function fetchGenres () {
            const res = await instance.get(
                data?.media_type === 'movie'? 
                requests.movie_genres: 
                requests.tv_genres
            )
            setGenres(
                res.data.genres.filter(elem => data?.genre_ids.includes(elem.id))
            )
        }
        fetchGenres()
    }, [data])

    return reactDom.createPortal(
        <div className="modal">
            <div className="modal-content">
                <Cancel className="close" onClick={() => setOpenModal(false)}/>
                <div className="banner-and-info">
                    <img 
                        className="banner"
                        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} 
                        alt={data?.name || data?.title}
                    />
                    <div className="info-container">
                        <h1 className="title">
                            {data?.name || data?.title}
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
                        {data?.overview}
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
        </div>,
        document.getElementById('modal')
    )
}