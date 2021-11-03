import './Carousel.scss';
import img1 from './django.jpg';
import img2 from './tintin.jpg';
import img3 from './hobbit.png';
import SliderItem from '../SliderItem/SliderItem';
import Slider from 'react-slick';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="arrow next"
      onClick={onClick}
    >
      <ArrowForwardIosOutlined />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="arrow prev"
      onClick={onClick}
    >
      <ArrowBackIosOutlined />
    </div>
  );
}

export default function Carousel() {
    const {context2} = useContext(UserContext);
    const [fetchTrending] = context2;
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    }

    return (            
        <div className="carousel">
          <h2 className="title"> Trending </h2>
          <Slider {...settings} className="slider-container">
            {}
            {/* <div className="a">
              <img src={img1} alt=""/>
            </div>
            <div className="a">
              <img src={img2} alt=""/>
            </div>
            <div className="a">
              <img src={img3} alt=""/>
            </div>
            <div className="a">
              <img src={img1} alt=""/>
            </div>
            <div className="a">
              <img src={img2} alt=""/>
            </div>
            <div className="a">
              <img src={img3} alt=""/>
            </div><div className="a">
              <img src={img1} alt=""/>
            </div>
            <div className="a">
              <img src={img2} alt=""/>
            </div>
            <div className="a">
              <img src={img3} alt=""/>
            </div><div className="a">
              <img src={img1} alt=""/>
            </div>
            <div className="a">
              <img src={img2} alt=""/>
            </div>
            <div className="a">
              <img src={img3} alt=""/>
            </div><div className="a">
              <img src={img1} alt=""/>
            </div>
            <div className="a">
              <img src={img2} alt=""/>
            </div>
            <div className="a">
              <img src={img3} alt=""/>
            </div><div className="a">
              <img src={img1} alt=""/>
            </div>
            <div className="a">
              <img src={img2} alt=""/>
            </div>
            <div className="a">
              <img src={img3} alt=""/>
            </div><div className="a">
              <img src={img1} alt=""/>
            </div>
            <div className="a">
              <img src={img2} alt=""/>
            </div>
            <div className="a">
              <img src={img3} alt=""/>
            </div> */}
          </Slider>
        </div>      
    )
}
