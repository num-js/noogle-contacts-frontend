import React from 'react';
// import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Avatar from '../SharedComponents/Avatar';

const ContactComp = ({ singleContact: { _id, name, mobile_num, email }, removeDeletedContact }) => {

    const deleteContact = (id) => {
        const options = {
            headers: {
                "content-type": "application/json",
            }
        };
        axios.delete(`${process.env.REACT_APP_API_URL}delete_contact/${id}`, options)
            .then((res) => {
                console.log(res);
                // props.appendNewCreatedContact(res.data);
                removeDeletedContact(res.data._id);
                toast(`${res.data.name} - Contact Deleted`);
            })
            .catch(err => {
                console.log('Failed to Delete Contact: ', err);
                toast.error('Failed to Delete Contact, try again');
            })
    }

    return (
        <>
            <tr key={_id + Date.now}>
                <td className="text-right mr-0">
                    <div className="row">
                        {/* <div style={{ display: 'none' }} id="checkBoxDiv" className="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    
                                />
                                <label className="custom-control-label"></label>
                            </div>
                        </div> */}
                        <div className="col">
                            {/* <Link to={`/viewContact/${_id}`}>
                                <Avatar className="shadow text-bolder" name={name} size="35" round={true} />
                            </Link> */}
                            <Avatar />

                        </div>
                    </div>
                </td>
                <td className="text-left ml-0 text-nowrap">
                    <Link to={`/viewContact/${_id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{name}</Link>
                    <a href={`tel:${mobile_num}`} className="ml-3 btn btn-sm btn-success">
                        <i className="fa fa-phone"></i>
                    </a>
                </td>
                <td>{mobile_num}</td>
                <td>
                    <a style={{ textDecoration: 'none' }} href={`mailto:${email}`} className="text-dark">
                        {email}
                    </a>
                </td>
                <td className="actions">
                    <Link to={`/contact/editContact/${_id}`}>
                        <span className="material-icons mt-1 mr-3 text-warning">edit</span>
                    </Link>
                </td>
                <td className="actions">
                    <span onClick={() => deleteContact(_id)} role="button" className="material-icons mr-3 text-danger">remove_circle</span>
                </td>
            </tr >
        </>
    )
}

export default ContactComp;
