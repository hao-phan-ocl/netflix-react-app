import requests from '../api/requests';
import Billboard from '../components/Billboard/Billboard';
import Carousel from '../components/Carousel/Carousel';
import useFetch from '../customHooks/useFetch';

export default function Home() {
    const [billboardData] = useFetch(`${requests.trending}`, true);
    const [carouselData] = useFetch(`${requests.trending}`, false);

    return (
        <div className="home"> 
            <Billboard data={billboardData} />
            <Carousel data={carouselData} />
        </div>
    )
}