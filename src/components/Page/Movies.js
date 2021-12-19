import Billboard from '../Billboard/Billboard'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../store/useFetch'

export default function Movies({fetchData}) {
    const [billboardData] = useFetch(fetchData.movieTrending, true)
    const [movieTopRated] = useFetch(fetchData.movieTopRated, false)
    const [movieNetflix] = useFetch(fetchData.movieNetflix, false)
    const [movieDocumentary] = useFetch(fetchData.movieDocumentary, false)
    const [movieRomance] = useFetch(fetchData.movieRomance, false)
    const [movieCrime] = useFetch(fetchData.movieCrime, false)
    const [movieWestern] = useFetch(fetchData.movieWestern, false)
    const [movieHorror] = useFetch(fetchData.movieHorror, false)

    return (
        <div className="page"> 
            <Billboard data={billboardData} />
            <Carousel data={movieTopRated} text={'Top Rated Movies'} mediaType={'movie'} />
            <Carousel data={movieNetflix} text={'Netflix Originals'} mediaType={'movie'} />
            <Carousel data={movieDocumentary} text={'Documentary'} mediaType={'movie'} />
            <Carousel data={movieRomance} text={'Romance'} mediaType={'movie'} />
            <Carousel data={movieCrime} text={'Crime'} mediaType={'movie'} />
            <Carousel data={movieWestern} text={'Wertern'} mediaType={'movie'} />
            <Carousel data={movieHorror} text={'Horror'} mediaType={'movie'} />
        </div>
    )
}