import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/app.css';

//Importing Components
import NavBar from './components/SharedComponents/NavBar';
import Contacts from './components/contacts/Contacts';

import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import ViewContact from './components/contacts/ViewContact';
import { ADD_CONTACT, EDIT_CONTACT, INDEX, VIEW_CONTACT } from './utils/routerLinks';

function App() {

    const [allContacts, setAllContacts] = useState([]);
    const [allContactsLoadingAnim, setAllContactsLoadingAnim] = useState(true);

    const appendNewCreatedContact = (newContactData) => {
        setAllContacts([...allContacts, newContactData])
    }

    const removeDeletedContact = (deletedContactId) => {
        const removedDeltedContact = allContacts.filter(singleContact => singleContact._id !== deletedContactId);
        setAllContacts(removedDeltedContact);
    }

    const modifyUpdatedContact = (updatedContactData) => {
        // console.log('updatedContactData', updatedContactData);

        allContacts.map((singleContact, index) => {
            if (updatedContactData._id === singleContact._id) {
                console.log('singleContact.name ', singleContact.name);
                singleContact.name = updatedContactData.name
                singleContact.number = updatedContactData.mobile_num
                singleContact.email = updatedContactData.email
                singleContact.address = updatedContactData.address
                singleContact.description = updatedContactData.description
            }
        })

        // setAllContacts(modifiedContactData);

        // const updatedMeetingsData = this.state.meetingsData.map((meeting) => {
        //     if (res.data._id === meeting._id) {
        //         meeting.meeting_pin = res.data.meeting_pin;
        //     }
        // });
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}get_contacts/`)
            .then(res => res.json())
            .then(data => {
                setAllContacts(data);
                // console.log('data', data);
            })
            .catch(err => console.log('error occured while fetching All Contacts Data. ', err))
            .then(() => {
                setAllContactsLoadingAnim(false)
            })
    }, []);

    return (
        <>
            <Router>
                <div className="App">
                    <NavBar />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className="container">
                        <div className="py-3">
                            <br />
                            <div>
                                <Switch>
                                    <Route exact path={INDEX}>
                                        <Contacts
                                            allContacts={allContacts}
                                            removeDeletedContact={removeDeletedContact}
                                            allContactsLoadingAnim={allContactsLoadingAnim}
                                        />
                                    </Route>
                                    <Route exact path={ADD_CONTACT}>
                                        <AddContact
                                            // allContacts={allContacts}
                                            appendNewCreatedContact={appendNewCreatedContact}
                                        />
                                    </Route>
                                    <Route exact path={`${EDIT_CONTACT}/:id`}>
                                        <EditContact
                                            allContacts={allContacts}
                                            modifyUpdatedContact={modifyUpdatedContact}
                                        />
                                    </Route>
                                    <Route exact path={`${VIEW_CONTACT}/:id`}>
                                        <ViewContact
                                            allContacts={allContacts}
                                        />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;
