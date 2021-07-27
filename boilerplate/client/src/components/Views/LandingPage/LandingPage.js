import axios from 'axios';
import {React, useState, useEffect} from 'react';

const LandingPage = () => {

    useEffect(()=> {
        axios.get('/api/hello')
        .then(response => {console.log(response.data)})
    }, [])

    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage;
