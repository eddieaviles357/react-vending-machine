import React from "react";
import { NavLink } from 'react-router-dom';

const URL = 'https://cdn.pixabay.com/photo/2021/09/07/06/33/tapas-6603067_1280.png'
export default function FreshSardines(props) {
    return (
        <div className='Sardines'>
            <h1>Never buy sardines from the a vending machine</h1>
            <img className='Sardines-img' src={URL} alt='sardines' />
            <NavLink exact to='/'>Back</NavLink>
        </div>
    )
}