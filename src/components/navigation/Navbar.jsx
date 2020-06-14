import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Link to="/people" className="nav-link">People</Link>
                <Link to="/planets" className="nav-link">Planets</Link>
                <Link to="/starships" className="nav-link">Starships</Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;