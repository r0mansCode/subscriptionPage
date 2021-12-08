import React, { Component } from 'react';
import './Background.scss';

export class Background extends Component {
    render() {
        return (
            <div className='background'>
                <img src="https://cdn.pixabay.com/photo/2015/07/30/11/05/pineapple-867245_960_720.jpg" alt="Pineapple" className="background__pineapple" />
            </div>
        )
    }
}


export default Background;