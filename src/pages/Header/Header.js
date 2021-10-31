import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../../src/logo/favicon.ico'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar variant="light" bg="light" collapseOnSelect expand="lg" sticky="top">
                <Container>

                    <Navbar.Brand > <img width="70px" height="70px" src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>


                        <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/addOrders">Add Foods</Nav.Link>
                        <Nav.Link as={Link} to="/manageOrders">Mange All Orders</Nav.Link>





                        {
                            user?.email && <span> {user?.email}</span>
                        }
                        {user?.email ?
                            <button className="btn btn-warning" onClick={logOut}>Log out</button> :
                            <Nav.Link as={Link} to="/login">Sing up</Nav.Link>}



                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;