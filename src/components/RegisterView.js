import React, { Component } from 'react';

import { registerUserInit, logoutInit } from '../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onRegister = () => {
        const { name, email, password } = this.state;

        const newUser = {
            name, email, password
        }

        this.props.registerUserInit(newUser);
    }

    onLogout = () => {
        this.props.logoutInit();
    }

    render() {
        const { user, error, isAuthenticated } = this.props;

        return(
            <div>
                <h2>Register View</h2>
                <input 
                    name='name'
                    type='text'
                    onChange={this.onChange}
                    placeholder='Name' />
                <br />
                <input 
                    name='email'
                    type='text'
                    onChange={this.onChange}
                    placeholder='Email' />
                <br />
                <input 
                    name='password'
                    type='text'
                    onChange={this.onChange}
                    placeholder='Password' />
                <br />
                <button
                    onClick={this.onRegister}>
                        Register
                </button>
                <p>{ (error.msg.msg !== '') ? error.msg.msg : '' }</p>
                <p>{ isAuthenticated ? user.id : '' }</p>
                { isAuthenticated ? <button onClick={this.onLogout}>Logout</button> : null }
            </div>
        );
    }
}

RegisterView.propTypes = {
    registerUserInit: PropTypes.func.isRequired,
    logoutInit: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
    error: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
})

export default connect(mapStateToProps, {
    registerUserInit,
    logoutInit
})(RegisterView)