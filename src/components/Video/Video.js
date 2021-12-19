import { useEffect, useState } from 'react'
import reactDom from 'react-dom'
import ReactPlayer from 'react-player'
import instance from '../../api/axiosInstance'
import { requests } from '../../api/requests'
import './Video.scss'

export default function Video({data, setOpenVideo}) {
    const [video, setVideo] = useState([])
    
    useEffect(() => {
        async function fetchVideo () {
            const res = await instance.get(
                `movie/${data.id}` + requests.video
            )
            if (res)
            setVideo(res?.data.results[Math.floor(Math.random() * res.data.results.length)]?.key)
        }
        fetchVideo()
    }, [data])

    useEffect(() => {
        async function fetchVideo () {
            const res = await instance.get(
                `tv/${data.id}` + requests.video
            )
            if (res) 
            setVideo(res?.data.results[Math.floor(Math.random() * res.data.results.length)]?.key)
        }
        fetchVideo()
    }, [data])

    return reactDom.createPortal(
        <div className='player' onClick={() => setOpenVideo(false)}>
            <div className="player-content">
                {video && <ReactPlayer width='100%' height='100%' controls url={`https://www.youtube.com/watch?v=${video}`} />}
            </div>
        </div>,
        document.getElementById('modal')
    )
}