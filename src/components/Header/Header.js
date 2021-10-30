import React from 'react';
import './Header.css';
import { Container, Button, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import companyImage from '../../resources/images/vromon-large.png';

const Header = () => {

    const activeNavItem = {
        fontWeight: "bold",
        color: "#ec7d1c"
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container className="d-flex justify-content-between">
                    <div>
                        <NavLink to="/"><img src={companyImage} alt="" /></NavLink>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <NavLink exact to="/" activeStyle={activeNavItem} className="nav-item">
                                Home
                            </NavLink>
                            <NavLink exact to="/destinations" activeStyle={activeNavItem} className="nav-item">
                                Destinations
                            </NavLink>
                            <NavLink exact to="/packages" activeStyle={activeNavItem} className="nav-item">
                                Packages
                            </NavLink>
                            <NavLink exact to="/contacts" activeStyle={activeNavItem} className="nav-item">
                                Contact Us
                            </NavLink>

                            <NavDropdown title={<span style={{ color: "#d8d1d1" }}>More</span>} id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink exact to="/gallary" className="dropdown-item">
                                        Gallary
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink exact to="/myOrders" className="dropdown-item">
                                        My Orders
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink exact to="/allOrders" className="dropdown-item">
                                        Manage All Orders
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink exact to="/addService" className="dropdown-item">
                                        Add A New Service
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* <div className="border-start ms-2 px-2 border-2">
                            {
                                userName.userName ? <span className="text-primary pe-2">{userName.userName}</span> : ''
                            }
                            {
                                userName.userName ?
                                    < Button onClick={handleLogout} variant="primary">Logout</Button>
                                    :
                                    <NavLink exact to="/login" activeClassName="selected" className="nav-item">
                                        Login / Signup
                                    </NavLink>
                            }
                        </div> */}
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;