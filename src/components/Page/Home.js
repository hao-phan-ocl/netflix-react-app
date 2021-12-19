import Billboard from '../Billboard/Billboard'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../store/useFetch'

export default function Home({fetchData}) {
    const [billboardData] = useFetch(fetchData.trending, true)
    const [scienceFiction] = useFetch(fetchData.scienceFiction, false)
    const [thriller] = useFetch(fetchData.thriller, false)
    const [drama] = useFetch(fetchData.drama, false)
    const [animation] = useFetch(fetchData.animation, false)
    const [family] = useFetch(fetchData.family, false)
    const [kid] = useFetch(fetchData.kid, false)
    const [mystery] = useFetch(fetchData.mystery, false)

    return (
        <div className="page"> 
            <Billboard data={billboardData} />
            <Carousel data={scienceFiction} text={'Science Fiction'} mediaType={'movie'} />
            <Carousel data={thriller} text={'Thriller'} mediaType={'movie'} />
            <Carousel data={drama} text={'Drama'} mediaType={'movie'} />
            <Carousel data={animation} text={'Animation'} mediaType={'movie'} />
            <Carousel data={family} text={'Family'} mediaType={'tv'} />
            <Carousel data={kid} text={'Kids'} mediaType={'tv'} />
            <Carousel data={mystery} text={'Mystery'} mediaType={'tv'} />
        </div>
    )
}