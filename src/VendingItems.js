import React from 'react';
import { NavLink } from 'react-router-dom';

export default function VendingItems(props) {
    return (
        <nav className='Vending-items'>
            <NavLink exact to='/soda'>Soda</NavLink>
            <NavLink exact to='/chips'>Chips</NavLink>
            <NavLink exact to='/fresh-sardines'>Fresh-Sardines</NavLink>
        </nav>
    )
};