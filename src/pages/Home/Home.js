import React from 'react';
import Billboard from '../../components/Billboard/Billboard';
import Nav from '../../components/Nav/Nav';
import RowContainer from '../../components/RowContainer/RowContainer';
import './Home.scss';

export default function Home() {
    return (
        <div className="home"> 
            <Nav />
            <Billboard />
            <RowContainer />
            <RowContainer />
            <RowContainer />
            <RowContainer />
        </div>
    )
}
