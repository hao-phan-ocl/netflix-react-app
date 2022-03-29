import { requests } from '../../api/requests'
import PlayButton from '../PlayButton/PlayButton'
import InfoButton from '../InfoButton/InfoButton'
import './Billboard.scss'

export default function Billboard({ data }) {
  function truncate(string, num) {
    return string?.length > num ? string.slice(0, num) + '...' : string
  }

  return (
    <div className="billboard">
      <img
        className="banner"
        src={requests.billboardImage + data?.backdrop_path}
        alt={data?.name || data?.title}
      />
      <div className="info-wrapper">
        <div className="info-inner">
          <h1 className="movie-title">{data?.name || data?.title}</h1>
          <h3 className="description">{truncate(data?.overview, 200)}</h3>
          <div className="button-box">
            <PlayButton buttonSize={'large'} data={data} />
            <InfoButton buttonSize={'large'} data={data} />
          </div>
        </div>
      </div>
      <div className="banner-shadow-top" />
      <div className="banner-shadow-bottom" />
    </div>
  )
}
