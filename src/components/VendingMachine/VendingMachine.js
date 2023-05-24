import React from 'react';
import './VendingMachine.css'
import Aside from '../Aside/Aside';
import Nav from '../Nav/Nav';

export default function VendingMachine() {
    return (
        <div className='VendingMachine'>
            <Aside />
            <Nav />
        </div>
    )
}