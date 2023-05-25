import React from 'react';
import Chips from './Chips';
import Soda from './Soda';
import Home from './Home';
import FreshSardines from './FreshSardines';
import { Route } from 'react-router-dom';

function VendingMachine(props) {
    return (
        <main className='Vendingmachine'>
            <Route exact path="/chips">
                <Chips />
            </Route>
            <Route exact path="/soda">
                <Soda />
            </Route>
            <Route exact path="/fresh-sardines">
                <FreshSardines />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </main>
    )
}

export default VendingMachine;