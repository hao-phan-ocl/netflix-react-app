import Billboard from '../Billboard/Billboard'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../store/useFetch'

export default function TvShows({fetchData}) {
    const [billboardData] = useFetch(fetchData.tvTrending, 'billboard')
    const [tvTopRated] = useFetch(fetchData.tvTopRated, 'carousel', 'tv')
    const [tvNetflix] = useFetch(fetchData.tvNetflix, 'carousel', 'tv')
    const [tvDocumentary] = useFetch(fetchData.tvDocumentary, 'carousel', 'tv')
    const [tvAnimation] = useFetch(fetchData.tvAnimation, 'carousel', 'tv')
    const [tvAdventure] = useFetch(fetchData.tvAdventure, 'carousel', 'tv')
    const [tvComedy] = useFetch(fetchData.tvComedy, 'carousel', 'tv')
    const [tvDrama] = useFetch(fetchData.tvDrama, 'carousel', 'tv')
    
    return (
        <div className="page"> 
            <Billboard data={billboardData} />
            <Carousel data={tvTopRated} text={'Top Rated TV Shows'} />
            <Carousel data={tvNetflix} text={'Netflix Originals'} />
            <Carousel data={tvDocumentary} text={'Documentary'} />
            <Carousel data={tvAnimation} text={'Animation'} />
            <Carousel data={tvAdventure} text={'Action & Adventure'} />
            <Carousel data={tvComedy} text={'Comedy'} />
            <Carousel data={tvDrama} text={'Drama'} />
        </div>
    )
}
