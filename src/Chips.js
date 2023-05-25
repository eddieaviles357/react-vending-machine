import React from "react";
import { NavLink } from 'react-router-dom';

const URL = 'https://cdn.pixabay.com/photo/2013/07/13/12/49/chips-160417_1280.png'

export default function Chips(props) {
    return (
        <div className='Chips'>
            <h1>Gotta Love Them!</h1>
            <img className='Chips-img' src={URL} alt='chips' />
            <NavLink exact to='/'>Back</NavLink>
        </div>
    )
}