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
            <Carousel data={scienceFiction} text={'Science Fiction'} />
            <Carousel data={thriller} text={'Thriller'} />
            <Carousel data={drama} text={'Drama'} />
            <Carousel data={animation} text={'Animation'} />
            <Carousel data={family} text={'Family'} />
            <Carousel data={kid} text={'Kids'} />
            <Carousel data={mystery} text={'Mystery'} />
        </div>
    )
}