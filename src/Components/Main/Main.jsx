import React, { Component } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './Main.scss';

export class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className='main__content'>
                <div className='main__content__title'>Subscribe to newsletter</div>
                <div>Subscribe to our newsletter and get 10% discount on pineapple glasses.</div>
                <input placeholder='Type your email address here...' />
                <div><input type='checkbox' /> I agree to terms of service </div> 
                <FaFacebookF />
                <AiOutlineInstagram />
                <AiOutlineTwitter />
                <BsYoutube />
                </div>
            </div>
        )
    }
}

export default Main;