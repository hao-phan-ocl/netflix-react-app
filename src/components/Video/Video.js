import reactDom from 'react-dom'
import ReactPlayer from 'react-player'

import { requests } from '../../api/requests'
import useFetch from '../../store/useFetch'
import './Video.scss'

export default function Video({data, setOpenVideo}) {
    const [video] = useFetch(`${data.media_type}/${data.id}` + requests.video, 'video')

    return reactDom.createPortal(
        <div className='player' onClick={() => setOpenVideo(false)}>
            <div className="player-content">
                {video && <ReactPlayer width='100%' height='100%' controls url={`https://www.youtube.com/watch?v=${video.key}`} />}
            </div>
        </div>,
        document.getElementById('modal')
    )
}