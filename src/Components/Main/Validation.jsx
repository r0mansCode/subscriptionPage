import React, { Component } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export class Validation extends Component {

    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.validate()){
            console.log(this.state);
    
            let input = {};
            input["email"] = "";
            this.setState({input:input});
    
            alert('Form is submited');
        }
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Email address is required";
        }

        if ((input["email"]).slice((input["email"]).length-3) === ".co") {
            isValid = false;
            errors["email"] = "We are not accepting subscriptions from Colombia emails";
          }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please provide a valid e-mail address";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    render() {
        return (
            
            <div>
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
                        <div className="text-danger">{this.state.errors.email}</div>
                    </div>
                    {/* <input type="submit" value="Submit"/> */}
                </form>
            </div>
        )
    }
}

export default Validation;