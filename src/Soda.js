import React from "react";
import { NavLink } from "react-router-dom";

const URL = "https://cdn.pixabay.com/photo/2018/10/19/09/02/soda-3758181_1280.png";

export default function Soda(props) {
    return (
        <div className='Soda'>
            <h1>Sooo Sweeet!</h1>
            <img className='Soda-img' src={URL} alt='soda' />
            <NavLink exact to='/'>Back</NavLink>
        </div>
    )
}