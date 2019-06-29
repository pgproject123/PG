import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import classes from './Signup.css'
import SignupForm from './SignupForm/SignupForm';
import LoginForm from './LoginForm/LoginForm';
import Card from './Card';
// import Image from '../../assets/bkg.png'


class Signup extends Component {
    render() {
    
        return (
            <div className={classes.box}>
                <Header
                    title="AIEZOLO"
                />
                
                <div className={classes.main}>
                    <div className={classes.bkgImg}>
                        <Card />
                    </div>
                    <div className={classes.loginSignup}>
                        <LoginForm />
                        <SignupForm />
                    </div>
                    
                </div>

                <Footer />
            </div>
        );
    }
}

export default Signup;