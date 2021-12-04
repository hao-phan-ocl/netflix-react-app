import Billboard from '../Billboard/Billboard'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../store/useFetch'

export default function Page({fetchData}) {
    const [billboardData] = useFetch(`${fetchData}`, true)
    const [carouselData] = useFetch(`${fetchData}`, false)

    return (
        <div className="page"> 
            <Billboard data={billboardData} />
            <Carousel data={carouselData} />
        </div>
    )
}