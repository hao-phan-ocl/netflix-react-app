import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React from 'react';
import SliderItem from '../SliderItem/SliderItem';
import './RowContainer.scss';

export default function RowContainer() {
    return (
        <div className="row-container">
            <div className="title">Continue to watch</div>
            <div className="slider">
                <ArrowBackIosOutlined className="arrow left" />
                <div className="slider-container">
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                </div>
                <ArrowForwardIosOutlined className="arrow right"/>
            </div>
        </div>
    )
}