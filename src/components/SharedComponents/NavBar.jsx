import React from 'react'
import { Link } from 'react-router-dom';
import { ADD_CONTACT } from '../../utils/routerLinks';

const NavBar = () => {
    return (
        <div>
            <Link to="/">
                <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark nbg-primary">
                    <div className="container">
                        <div role="button" className="navbar-brand">
                            Noogle<i className="material-icons">account_circle</i>Contacts
                        </div>
                        <div>
                            <Link to={ADD_CONTACT} className="btn btn-info btn-sm ml-auto shadow rounded-0"><i className="fa fa-user-plus shadow"></i> Add Contact</Link>
                        </div>
                    </div>
                </nav>
            </Link>
        </div>
    )
}

export default NavBar;