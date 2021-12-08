import React, { Component } from 'react';
import './Navbar.scss';
import { GiPineapple } from 'react-icons/gi';

export class Navbar extends Component {
    render() {
        return (
            <nav className='navBar'>
                <div className='navBar__text'>
                <div className='navBar__text__elPineapple'> <GiPineapple /> pineapple.</div> 
                <div className='navBar__text__el'>About</div>
                <div className='navBar__text__el'>How it works</div>
                <div className='navBar__text__el'>Contact</div>
                </div>
            </nav>
        )
    }
}

export default Navbar;