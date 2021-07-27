import React, { Component } from 'react';
import './signupForm.css';

export default class SignupForm extends Component {
    render() {
        return (
            <div>
                <div className="container total-web">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-4">
                            <div className="left-sign-up"
                                style={{  
                                    backgroundImage: "url(" + "https://images.pexels.com/photos/1400249/pexels-photo-1400249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                    }}
                            >
                                <div className="cover-bg">
                                    <div className="left__text">
                                        <h2>One of us?</h2>
                                        <p>If you already has an account, just sign in. We've missed you!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-xs-8">
                            <div className="form-sign-up">
                                <h2 className="form__title">Time to feel like home</h2>
                                <form className="form-signup__control">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                                        <input type="text" className="form-control no-border" id="exampleInputName" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control no-border" id="exampleInputEmail" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control no-border" id="exampleInputPassword" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-signup">Signup</button>
                                    <button type="submit" className="btn btn-primary">Join with Facebook</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
