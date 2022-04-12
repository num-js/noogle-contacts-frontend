import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authAPICall } from '../../utils/authAPICall';
import { LOGIN } from '../../utils/routerLinks'
import './auth.css'

const Signup = () => {
    const { push } = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupHandler = async (event) => {
        event.preventDefault();
        const signupData = { name, email, password };
        const response = await authAPICall('/signup', signupData);
        if (!response || response?.error) {
            return;
        }
        toast.success(response.message);
        push(LOGIN);
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="col-sm-4 p-0" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header nbg-primary text-light">
                            <b>Signup</b>
                        </div>
                        <div className="card-body">
                            <form onSubmit={signupHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" required
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" required
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>


                                <div className="form-group">
                                    <p className="small mt-3">
                                        By signing up, you are indicating that you have read and agree to the <a href="#" className="">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                                    </p>
                                    <button type="submit" className="btn nbg-primary text-white"
                                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                                    >
                                        <span className="text-left"> Signup </span>
                                        <span className="text-right"> --&gt; </span>
                                    </button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                        <span className="span-or">or</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    Already have an Account,&nbsp;
                                    <Link to={LOGIN} style={{ textDecoration: 'none' }}>
                                        Login
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;