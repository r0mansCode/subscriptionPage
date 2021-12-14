import React, { Component } from 'react';
import './Navbar.scss';
import Union from '../../Assets/Union.png';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className='navBar'>
                <div className='navBar__text'>
                <div className='navBar__text__elPineapple'> 
                    <Link to="/"><img src={Union} className='navBar__text__elPineapple__elPicContainer' alt="pineapple" /></Link>
                    <div className='navBar__text__elPineapple__elText'>pineapple.</div>
                </div>
                <Link className='navBar__text__el' to="/about">About</Link>
                <Link className='navBar__text__el' to="/how">How it works</Link>
                <Link className='navBar__text__el' to="/contact">Contact</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;