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
    DropdownItem,
    Form,
    Container,
    Button,
    Input
} from 'reactstrap';
import PropTypes from 'prop-types';

import { LOGIN_ERROR } from '../actions/authActions';

class Header extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    logout = () => {
        this.props.logoutInit();
    }

    register = () => {
        console.log('reging');
    }

    forgetPasswordInit = () => {
        console.log('forgetting pass');
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onLogin = () => {
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ error: 'Both fields required!' });
        } else if (password.length < 8) {
            this.setState({ error: 'Password should be at least 8 characters long!' });
        } else {
            this.props.loginInit({ email, password });
            this.setState({ error: '' });
        }
    }

    render() {
        const { isAuthenticated, user, error } = this.props;

        const loginFormFontStyle = {
            fontSize: '0.8em'
        }

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
                                    Private
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem disabled>
                                        Hello, { isAuthenticated ? user.name : 'guest!' }
                                    </DropdownItem>
                                    { !isAuthenticated ?
                                        <Container>
                                            <Form>
                                                <Input 
                                                    type='email'
                                                    name='email'
                                                    placeholder='Email'
                                                    onChange={this.onChange}
                                                    className='mb-1'
                                                    style={loginFormFontStyle} />
                                                <Input
                                                    type='password'
                                                    name='password'
                                                    placeholder='Password'
                                                    onChange={this.onChange}
                                                    className='mb-2'
                                                    style={loginFormFontStyle} />
                                                { this.state.error === '' ? null :
                                                    <p style={{color: 'red', fontSize: '0.8em'}}>{this.state.error}</p>
                                                }
                                                { ((error.id === LOGIN_ERROR) && (error.msg !== null)) ?
                                                    <p style={{color: 'red', fontSize: '0.8em'}}>{error.msg.msg}</p>
                                                    : null
                                                }
                                                <Button
                                                    onClick={this.onLogin}
                                                    style={loginFormFontStyle}>
                                                        Login
                                                    </Button>
                                            </Form>
                                        </Container> : null }
                                    { isAuthenticated ? null :
                                        <div>
                                            <DropdownItem divider />
                                            <Container>
                                                <a href='#' onClick={this.register} style={{ fontSize: '0.8em', display: 'block', color: 'orange' }}>Register</a>
                                                <a href='#' onClick={this.forgetPasswordInit} style={{ fontSize: '0.8em', color: 'orange', fontStyle: 'italic' }}>Forgot password?</a>
                                            </Container>
                                        </div> }
                                    { isAuthenticated ?
                                        <div>
                                            <DropdownItem divider />
                                            <DropdownItem>
                                                <a onClick={this.logout}>Sign Out</a>
                                            </DropdownItem>
                                        </div>
                                    : null }
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