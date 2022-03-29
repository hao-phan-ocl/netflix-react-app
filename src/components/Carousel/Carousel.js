import Slider from 'react-slick'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'

import { requests } from '../../api/requests'
import useHasImage from '../../store/useHasImage'
import PlayButton from '../PlayButton/PlayButton'
import InfoButton from '../InfoButton/InfoButton'
import './Carousel.scss'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className="arrow next" onClick={onClick}>
      <ArrowForwardIosOutlined />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className="arrow prev" onClick={onClick}>
      <ArrowBackIosOutlined />
    </div>
  )
}

export default function Carousel({ data, text }) {
  const [hasImage] = useHasImage(data)

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
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <div className="carousel">
      <h2 className="title">{text}</h2>
      <Slider {...settings} className="slider-container">
        {hasImage.map((elem) => (
          <div className="slide" key={elem.id}>
            <img
              className="image"
              src={requests.slideImage + elem.backdrop_path}
              alt={elem.name || elem.title}
            />
            <div className="button-box">
              <PlayButton buttonSize={'small'} data={elem} />
              <InfoButton buttonSize={'small'} data={elem} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
