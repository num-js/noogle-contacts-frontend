import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewContact = (props) => {
    let { id } = useParams();
    let history = useHistory();

    const [specificContact, setSpecificContact] = useState([]);

    useEffect(() => {
        if (id != null) {
            const specificContactData = props.allContacts.filter(singleContact => singleContact._id === id);

            if (specificContactData.length <= 0) {
                toast.error('Contact not Found');
                history.push('/');
            } else {
                setSpecificContact(specificContactData[0]);
            }
        } else {
            toast.error('Contact not Found');
            history.push('/');
        }
    }, [specificContact]);

    return (
        <div align="center">
            <div className="col-lg-4 col-sm-12 p-0">
                <div className="col-sm-12 p-0" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header nbg-primary text-light">
                            <Link style={{ float: 'right' }} to="/"><span className="btn btn-light btn-sm fa fa-home"></span></Link>
                            <b>{specificContact.name}</b>
                        </div>
                        <div className="card-body">
                            <table>
                                <tr>
                                    <td>
                                        <a href={`tel:${'number'}`} className="btn btn-dark btn-sm"><span className="fa fa-phone"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>{specificContact.mobile_num}</td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <a href={`mailto:${'email'}`} className="btn btn-dark btn-sm"><span className="fa fa-envelope"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>{specificContact.email}</td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <a className="btn btn-dark btn-sm"><span className="fa fa-map-marker text-light"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>{specificContact.address}</td>
                                </tr>
                            </table>
                            <hr />
                            <div>
                                {specificContact.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContact;
