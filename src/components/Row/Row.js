import { ArrowBackIosOutlined, ArrowForwardIos } from '@material-ui/icons';
import React from 'react';
import './Row.scss';

export default function Row() {
    return (
        <div className="row">
            <div className="title"></div>
            <div className="row-wrapper">
                <ArrowForwardIos />
                <ArrowBackIosOutlined />
            </div>
        </div>
    )
}
