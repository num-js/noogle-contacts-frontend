import React from 'react'
import { INDEX } from '../../utils/routerLinks'
import './auth.css'

export default function Login() {

    const loginHandler = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="col-sm-4 p-0" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header nbg-primary text-light">
                            <b>Login</b>
                        </div>
                        <div className="card-body">

                            <form onSubmit={loginHandler}>
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control my-input" id="name" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control my-input" id="email" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input type="number" min="0" name="phone" id="phone" class="form-control my-input" placeholder="Phone" />
                                </div>
                                <div class="text-center d-flex">
                                    <div type="submit" class="btn nbg-primary text-white d-flex">
                                        <span className="text-left"> Login </span>
                                        <span className="text-right"> - </span>
                                    </div>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="login-or">
                                        <hr class="hr-or" />
                                        <span class="span-or">or</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <a class="btn btn-block g-button" href="#">
                                        Create Free Account
                                    </a>
                                </div>
                                <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                                </p>
                            </form>

                            <div>
                                <button type="submit" className="btn nbg-primary text-white">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
