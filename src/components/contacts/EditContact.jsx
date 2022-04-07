import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = (props) => {

    let { id } = useParams();
    let history = useHistory();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    const updateContact = (e) => {
        e.preventDefault();

        const options = {
            headers: {
                "content-type": "application/json",
            }
        };
        let updateContactData = {
            name,
            mobile_num: number,
            email,
            address,
            description
        };
        // console.log('updateContactData', updateContactData);
        axios.patch(`${process.env.REACT_APP_API_URL}update_contact/${id}`, updateContactData, options)
            .then((res) => {
                console.log(res);
                props.modifyUpdatedContact(res.data);
                toast(`${res.data.name} - Contact Updated`);
                history.push('/');
            })
            .catch(err => {
                console.log('Failed to Update Contact: ', err);
                toast.error('Failed to Update Contact, try again');
            })
    }

    useEffect(() => {
        if (id != null) {
            const specificContactData = props.allContacts.filter(singleContact => singleContact._id === id);
            console.log('specificContactData', specificContactData);

            if (specificContactData.length <= 0) {
                toast.error('Contact not Found');
                history.push('/');
            } else {
                setName(specificContactData[0].name);
                setNumber(specificContactData[0].mobile_num);
                setEmail(specificContactData[0].email);
                setAddress(specificContactData[0].address);
                setDescription(specificContactData[0].description);
            }
        } else {
            toast.error('Contact not Found');
            history.push('/');
        }
    }, []);

    return (
        <div align="center">
            <div className="p-0 col-lg-10 col-sm-12">
                <div className="card border-0 shadow">
                    <div className="card-header nbg-primary text-light">
                        <Link style={{ float: 'right' }} to="/"><span className="btn btn-light btn-sm fa fa-home"></span></Link>
                        <center><b>Edit Contact</b></center>
                    </div>
                    <div className="p-2 card-body">
                        <div className="">
                            <form onSubmit={updateContact}>
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control shadow"
                                                value={name}
                                                placeholder="Name"
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="number"
                                                className="form-control shadow"
                                                value={number}
                                                placeholder="Number"
                                                onChange={(e) => setNumber(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="email"
                                                className="form-control shadow"
                                                value={email}
                                                placeholder="Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control shadow"
                                                value={address}
                                                placeholder="Address"
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group">
                                            <textarea rows="6" type="text"
                                                className="form-control"
                                                value={description}
                                                placeholder="Description"
                                                onChange={(e) => setDescription(e.target.value)}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <button className="btn btn-warning shadow btn-sm">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditContact;
