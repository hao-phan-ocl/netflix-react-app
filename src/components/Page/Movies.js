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