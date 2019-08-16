import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    handaleSubmit= event => {
       event.preventDefault();
       this.setState({email:'', password:''});
    }
    handaleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handaleSubmit}>
                    <FormInput name='email' 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handaleChange}
                    label='email'
                    required/>
                    
                    <FormInput
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handaleChange}
                    label='password'
                     required/>
                   

                    <CustomButton type='submit' value='submit form'>Sign in</CustomButton>

                </form>

            </div>
        )
    }
}

export default SignIn;