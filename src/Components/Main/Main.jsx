import React, { Component } from 'react';
import Validation from './Validation';
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
                    <Validation />
                    <div className='main__content__line'></div>
                    <div className='main__content__icons'>
                        <FaFacebookF className='main__content__icons__iconFA' />
                        <AiOutlineInstagram className='main__content__icons__iconINS' />
                        <AiOutlineTwitter className='main__content__icons__iconTW' />
                        <BsYoutube className='main__content__icons__iconYO' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;