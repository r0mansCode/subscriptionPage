import React, { Component } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Union_2 from '../../Assets/Union_2.png';

export class Validation extends Component {

    constructor() {
        super();
        this.state = {
          input: {},
          errors: {},
          check: false,
          subscription: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(event) {
        this.setState(prevState => ({
            check: !prevState.check
          }));
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({input});
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.validate()){
            console.log(this.state);
    
            let input = {};
            input["email"] = "";

            this.setState(prevState => ({
                subscription: !prevState.subscription, input:input
              }));
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (this.state.check === false) {
            isValid = false;
            errors["email"] = "You must accept the terms and conditions";
        }    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Email address is required";
        }
        if (typeof input["email"] !== "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please provide a valid e-mail address"
          }
        }
        if (typeof input["email"] !== "undefined") {
            if ((input["email"]).slice((input["email"]).length-3) === ".co") {
                isValid = false;
                errors["email"] = "We are not accepting subscriptions from Colombia emails";
            }
        }
        this.setState({
          errors: errors
        });
        return isValid;
    }

    displaySubscription () {
        if(this.state.subscription === false){
            return  <div>
                        <div className='main__content__title'>Subscribe to newsletter</div>
                        <div className='main__content__text'>Subscribe to our newsletter and get 10% discount on pineapple glasses.</div>
                        <form onSubmit={this.handleSubmit}>
                            <div className='main__content__input'>
                                <input className='main__content__input__box'
                                type="text" 
                                name="email" 
                                value={this.state.input.email}
                                onChange={this.handleChange}
                                placeholder='Type your email address here...'
                                id="email" />
                                <HiOutlineArrowNarrowRight  className='main__content__input__box__arrow'
                                                            onClick={this.handleSubmit} />
                            </div>
                            <div className="main__content__input__message">{this.state.errors.email}</div>
                        </form>
                        <div className='main__content__checkbox__text1'>
                            <label className="container">
                                <input type="checkbox" onChange={this.handleCheck} />
                                <span className="checkmark"></span>
                            </label>
                            I agree to <span className='main__content__checkbox__text2'>terms of service</span>
                        </div>
                    </div>
        } else {
            return <div>
                        <img src={Union_2} className='main__content__cup' alt="cup" />
                        <div className='main__content__title'>Thanks for subscribing</div>
                        <div className='main__content__text'>You have successfully subscribed to our email listing. Check your email for the discount code</div>
                    </div>
        }
    }


    render() {
        console.log(this.state)
        return (           
            <div>
                {this.displaySubscription()}              
            </div>
        )
    }
}

export default Validation;