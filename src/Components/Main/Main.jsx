import React, { Component } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './Main.scss';

export class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className='main__content'>
                    <div className='main__content__title'>Subscribe to newsletter</div>
                    <div className='main__content__text'>Subscribe to our newsletter and get 10% discount on pineapple glasses.</div>
                    <div className='main__content__input'>
                    <input className='main__content__input__box' placeholder='Type your email address here...' />
                    <HiOutlineArrowNarrowRight className='main__content__input__box__arrow' />
                    </div>
                    <div className='main__content__checkbox__text1'>
                        <label className="container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        I agree to <span className='main__content__checkbox__text2'>terms of service</span>
                    </div>
                    <div className='main__content__line'></div>
                    <div className='main__content__icons'>
                        <FaFacebookF className='main__content__icons__icon' />
                        <AiOutlineInstagram className='main__content__icons__icon' />
                        <AiOutlineTwitter className='main__content__icons__icon' />
                        <BsYoutube className='main__content__icons__icon' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;