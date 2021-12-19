import reactDom from 'react-dom'
import ReactPlayer from 'react-player'
import { requests } from '../../api/requests'
import useFetch from '../../store/useFetch'
import './Video.scss'

export default function Video({data, setOpenVideo}) {
    const [videos] = useFetch(`${'movie' || 'tv'}/${data.id}` + requests.video)
    const youtubeKey = videos[Math.floor(Math.random() * videos.length)]?.key

    return reactDom.createPortal(
        <div className='player' onClick={() => setOpenVideo(false)}>
            <div className="player-content">
                {youtubeKey && <ReactPlayer width='100%' height='100%' controls url={`https://www.youtube.com/watch?v=${youtubeKey}`} />}
            </div>
        </div>,
        document.getElementById('modal')
    )
}