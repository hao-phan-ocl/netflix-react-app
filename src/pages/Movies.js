import requests from '../api/requests';
import Billboard from '../components/Billboard/Billboard';
import Carousel from '../components/Carousel/Carousel';
import useFetch from '../customHooks/useFetch';

export default function Movies() {
    const [billboardData] = useFetch(`${requests.movieTrending}`, true);
    const [carouselData] = useFetch(`${requests.movieTrending}`, false);

    return (
        <div className="movies"> 
            <Billboard data={billboardData} />
            <Carousel data={carouselData} />
        </div>
    )
}