import { requests } from '../../api/requests'
import InfoButton from '../InfoButton/InfoButton'
import PlayButton from '../PlayButton/PlayButton'
import './MovieCard.scss'

export default function MovieCard({ data }) {
  return (
    <div className="movie-card">
      <img
        className="image"
        src={requests.billboardImage + data?.backdrop_path}
        alt={data?.name || data?.title}
      />
      <div className="button-box">
        <PlayButton buttonSize={'small'} data={data} />
        <InfoButton buttonSize={'small'} data={data} />
      </div>
    </div>
  )
}
