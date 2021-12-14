import React, { Component } from 'react';
import './Navbar.scss';
import Union from '../../Assets/Union.png';

export class Navbar extends Component {
    render() {
        return (
            <nav className='navBar'>
                <div className='navBar__text'>
                <div className='navBar__text__elPineapple'> 
                    <img src={Union} className='navBar__text__elPineapple__elPicContainer' alt="pineapple" />
                    <div className='navBar__text__elPineapple__elText'>pineapple.</div>
                </div>
                <div className='navBar__text__el'>About</div>
                <div className='navBar__text__el'>How it works</div>
                <div className='navBar__text__el'>Contact</div>
                </div>
            </nav>
        )
    }
}

export default Navbar;