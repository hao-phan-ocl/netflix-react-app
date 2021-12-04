import './Carousel.scss'
import Slider from 'react-slick'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined, Info, PlayCircleFilled } from '@material-ui/icons'
import { useState } from 'react'
import requests from '../../api/requests'
import Modal from '../Modal/Modal'
import useModal from '../../store/useModal'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div
      className="arrow next"
      onClick={onClick}
    >
      <ArrowForwardIosOutlined />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className="arrow prev"
      onClick={onClick}
    >
      <ArrowBackIosOutlined />
    </div>
  )
}

export default function Carousel({ data }) {
    const [slideData, setSlideData] = useState([])
    const [openModal, setOpenModal] = useModal()
    
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
            {data.map(elem => (
              <div className="slide" key={elem.id}>
                <img className="image" src={requests.slideImage + elem.backdrop_path} alt={elem.name || elem.title} />
                <div className="button-box">
                  <PlayCircleFilled className="play" type="button" />
                  <Info 
                    className="info" 
                    type="button" 
                    onClick={() => {
                      setOpenModal(true)
                      setSlideData(elem)
                    }}
                  />  
                </div>
              </div>
            ))}
          </Slider>
          {openModal && <Modal setOpenModal={setOpenModal} data={slideData} />}
        </div>
    )
}
