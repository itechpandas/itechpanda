import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase'

const Authenticated = (props) => {
    const [IsloggedIn, setIsloggedIn] = useState(null);
    auth.onAuthStateChanged(user => {
        if (user) {
            setIsloggedIn(true)
        } else {
            setIsloggedIn(false)
        }
    })


    if (props.nonAuthenticated) {
        if (IsloggedIn == null) {
            return "Loading.."
        } else if (!IsloggedIn) {
            return props.children
        } else if (IsloggedIn) {
            return <Redirect to="" />
        }
    } else {

        if (IsloggedIn == null) {
            return "Loading.."
        } else if (IsloggedIn) {
            return props.children
        } else if (!IsloggedIn) {
            return <Redirect to="/login" />
        }
    }
};

export default Authenticated
