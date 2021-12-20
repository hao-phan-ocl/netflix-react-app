import Billboard from '../Billboard/Billboard'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../store/useFetch'

export default function Movies({fetchData}) {
    const [billboardData] = useFetch(fetchData.movieTrending, 'billboard')
    const [movieTopRated] = useFetch(fetchData.movieTopRated, 'carousel', 'movie')
    const [movieNetflix] = useFetch(fetchData.movieNetflix, 'carousel', 'movie')
    const [movieDocumentary] = useFetch(fetchData.movieDocumentary, 'carousel', 'movie')
    const [movieRomance] = useFetch(fetchData.movieRomance, 'carousel', 'movie')
    const [movieCrime] = useFetch(fetchData.movieCrime, 'carousel', 'movie')
    const [movieWestern] = useFetch(fetchData.movieWestern, 'carousel', 'movie')
    const [movieHorror] = useFetch(fetchData.movieHorror, 'carousel', 'movie')

    return (
        <div className="page"> 
            <Billboard data={billboardData} />
            <Carousel data={movieTopRated} text={'Top Rated Movies'} />
            <Carousel data={movieNetflix} text={'Netflix Originals'} />
            <Carousel data={movieDocumentary} text={'Documentary'} />
            <Carousel data={movieRomance} text={'Romance'} />
            <Carousel data={movieCrime} text={'Crime'} />
            <Carousel data={movieWestern} text={'Wertern'} />
            <Carousel data={movieHorror} text={'Horror'} />
        </div>
    )
}