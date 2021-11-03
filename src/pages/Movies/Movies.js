import Billboard from '../../components/Billboard/Billboard';
import Carousel from '../../components/Carousel/Carousel';
import Nav from '../../components/Nav/Nav';
import './Movies.scss';

export default function Movies() {
    return (
        <div className="movies"> 
            <Nav />
            <Billboard />
            <Carousel />
        </div>
    )
}
