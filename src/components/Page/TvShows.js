import Billboard from '../Billboard/Billboard'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../store/useFetch'

export default function TvShows({fetchData}) {
    const [billboardData] = useFetch(fetchData.tvTrending, true)
    const [tvTopRated] = useFetch(fetchData.tvTopRated, false)
    const [tvNetflix] = useFetch(fetchData.tvNetflix, false)
    const [tvDocumentary] = useFetch(fetchData.tvDocumentary, false)
    const [tvAnimation] = useFetch(fetchData.tvAnimation, false)
    const [tvAdventure] = useFetch(fetchData.tvAdventure, false)
    const [tvComedy] = useFetch(fetchData.tvComedy, false)
    const [tvDrama] = useFetch(fetchData.tvDrama, false)
    
    return (
        <div className="page"> 
            <Billboard data={billboardData} />
            <Carousel data={tvTopRated} text={'Top Rated TV Shows'} mediaType={'tv'} />
            <Carousel data={tvNetflix} text={'Netflix Originals'} mediaType={'tv'} />
            <Carousel data={tvDocumentary} text={'Documentary'} mediaType={'tv'} />
            <Carousel data={tvAnimation} text={'Animation'} mediaType={'tv'} />
            <Carousel data={tvAdventure} text={'Action & Adventure'} mediaType={'tv'} />
            <Carousel data={tvComedy} text={'Comedy'} mediaType={'tv'} />
            <Carousel data={tvDrama} text={'Drama'} mediaType={'tv'} />
        </div>
    )
}
