import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginInit, logoutInit, registerUserInit } from '../actions/authActions';
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';

class Header extends Component {

    render() {
        return(
            <div>
                <img src='images/header.jpg' width='100%' height='auto' />
                <Navbar color='dark' dark expand='md'>
                    <NavbarBrand href='/'>Booking app</NavbarBrand>
                    <Nav navbar className='ml-auto'>
                            <NavItem>
                                <NavLink href='/mission'>Our Mission</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/about'>About Us</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Components
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Item 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Item 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Divided Item
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav> 
                    
                </Navbar>
            </div>
        );
    }
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
    error: PropTypes.object.isRequired,
    loginInit: PropTypes.func.isRequired,
    logoutInit: PropTypes.func.isRequired,
    registerUserInit: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
})

export default connect(mapStateToProps, {
    loginInit, logoutInit, registerUserInit
})(Header);