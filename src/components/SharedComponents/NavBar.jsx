import React from 'react'
import { Link } from 'react-router-dom';
import { ADD_CONTACT } from '../../utils/routerLinks';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark nbg-primary">
                <div className="container">
                    <Link to="/">
                        <div role="button" className="navbar-brand">
                            Noogle<i className="material-icons">account_circle</i>Contacts
                        </div>
                    </Link>
                    <div>
                        <div class="d-flex justify-content-center align-items-center" style={{}}>
                            {/* <div class=""> */}
                            <div class="search">
                                <input type="text" class="form-control" placeholder="Search" />
                                <button class="btn nbg-primary"><i class="fa fa-search"></i>N</button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div>
                        <Link to={ADD_CONTACT} className="btn btn-info btn-sm ml-auto shadow rounded-0"><i className="fa fa-user-plus shadow"></i> Add Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;