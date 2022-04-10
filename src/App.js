import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/app.css';

//Importing Components
import NavBar from './components/SharedComponents/NavBar';
import Contacts from './components/contacts/Contacts';

import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import ViewContact from './components/contacts/ViewContact';
import { ADD_CONTACT, EDIT_CONTACT, INDEX, LOGIN, SIGNUP, VIEW_CONTACT } from './utils/routerLinks';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { getCookie } from './utils/cookieHelper';
import { AUTH_SERVICE_TOKEN } from './utils/constants';
import { APICall } from './utils/APICall';

function App() {
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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
        if (getCookie(AUTH_SERVICE_TOKEN)) {
            setIsAuthenticated(true);
            fetchAllContacts();
            history.push(INDEX);
        } else {
            toast.warning('Plase Login first.');
            history.push(LOGIN);
        }
    }, []);

    return (
        <>
            <>
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
                                    <Route exact path={LOGIN}>
                                        <Login />
                                    </Route>
                                    <Route exact path={SIGNUP}>
                                        <Signup />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default App;
