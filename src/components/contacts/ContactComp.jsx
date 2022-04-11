import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Avatar from '../SharedComponents/Avatar';
import { EDIT_CONTACT, VIEW_CONTACT } from '../../utils/routerLinks';
import { APICall } from '../../utils/APICall';

const ContactComp = ({ singleContact: { _id, name, mobile_num, email }, removeDeletedContact }) => {

    const deleteContact = async (id) => {
        const response = await APICall(`/delete_contact/${id}`, 'DELETE');
        if (!response || response.error) {
            return;
        }
        removeDeletedContact(response._id);
        toast.success(`${response.name} - Contact Deleted`);
    }

    return (
        <>
            <tr key={_id + Date.now}>
                <td className="text-right mr-0">
                    <div className="row">
                        <div className="col">
                            <Avatar />
                        </div>
                    </div>
                </td>
                <td className="text-left ml-0 text-nowrap">
                    <Link to={`${VIEW_CONTACT}/${_id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{name}</Link>
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
                    <Link to={`${EDIT_CONTACT}/${_id}`}>
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
