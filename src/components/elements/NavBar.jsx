import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark nbg-primary">
                <div className="container">
                    <div role="button" className="navbar-brand">
                        Noogle<i className="material-icons">account_circle</i>Contacts
                    </div>
                    <div>
                        <Link to="/contact/add" className="btn btn-info btn-sm ml-auto shadow rounded-0"><i className="fa fa-user-plus shadow"></i> Add Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;