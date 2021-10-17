import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React, { useState } from 'react';
import Row from '../Row/Row';
import './MoviePreview.scss';

export default function moviePreview() {

    const API_KEY = '041f1966539ec8a6fa27643ecf32791b';

    return (
        <div className="container-fluid main">            
            <div className="movie-preview">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/37e540d6-dd41-4a16-a79b-61153822736f/FI-en-20211011-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix"/>
                <div className="info-wrapper">
                    <img src="https://occ-0-2537-1501.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeXJWv4gaZaX_7y0Kw2jtmEhNbfCwOciFWUqY6GNQvVwlTqJpZ0PuuWaZ9Igyp6_kil3BXubg5mrFO_994YnEC95WkS6OLqn6n3CdVi2IgL7biF7wzKZhfJxF4iTja3X34cgNgOKm0Y6FFM6mCeHs0OXrxAlfCbBO4p2h_E0x18c1Q.png?r=e3a" atl=""/>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed.</p>
                    </div>
                    <div className="button-box">
                        <button className="play">
                            <PlayArrow />
                            <span>Play</span>
                        </button>
                        <button className="more-info">
                            <InfoOutlined />
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
            <Row />
        </div>
    )
}


