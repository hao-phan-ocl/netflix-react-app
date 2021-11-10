import requests from '../api/requests';
import Billboard from '../components/Billboard/Billboard';
import Carousel from '../components/Carousel/Carousel';
import useFetch from '../store/useFetch';

export default function TvShows() {
    const [billboardData] = useFetch(`${requests.tvTrending}`, true);
    const [carouselData] = useFetch(`${requests.tvTrending}`, false);

    return (
        <div className="shows"> 
            <Billboard data={billboardData} />
            <Carousel data={carouselData} />
        </div>
    )
}