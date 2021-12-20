import Billboard from '../Billboard/Billboard'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../store/useFetch'

export default function Home({fetchData}) {
    const [billboardData] = useFetch(fetchData.trending, 'billboard')
    const [scienceFiction] = useFetch(fetchData.scienceFiction, 'carousel', 'movie')
    const [thriller] = useFetch(fetchData.thriller, 'carousel', 'movie')
    const [drama] = useFetch(fetchData.drama, 'carousel', 'movie')
    const [animation] = useFetch(fetchData.animation, 'carousel', 'movie')
    const [family] = useFetch(fetchData.family, 'carousel', 'tv')
    const [kid] = useFetch(fetchData.kid, 'carousel', 'tv')
    const [mystery] = useFetch(fetchData.mystery, 'carousel', 'tv')

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