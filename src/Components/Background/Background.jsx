import React, { Component } from 'react';
import image_summer from '../../Assets/image_summer.png';
import './Background.scss';

export class Background extends Component {
    render() {
        return (
            <div className='background'>
                <img src={image_summer} alt="Pineapple" className="background__pineapple" />
            </div>
        )
    }
}


export default Background;