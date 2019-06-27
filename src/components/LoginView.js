import React, { Component } from 'react';
import { loginInit, logoutInit } from '../actions/authActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginView extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    send = () => {
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginInit(user);
    }

    logout = () => {
        this.props.logoutInit();
    }

    render() {
        const { isAuthenticated, error, user } = this.props;
        return(
            <div>
                <input 
                    type='email'
                    name='email'
                    placeholder='email'
                    onChange={this.onChange} />
                <input
                    type='text'
                    name='password'
                    placeholder='password'
                    onChange={this.onChange} />
                <button
                    onClick={this.send}>
                        Login
                </button>
                <p>{ isAuthenticated ? user.id : 'Guest' }</p>
                <p>{ (error.msg.msg !== '') ? error.msg.msg : '' }</p>
                { isAuthenticated ? <button onClick={this.logout}>Logout</button> : null }
            </div>
        );
    }
}

LoginView.propTypes = {
    loginInit: PropTypes.func.isRequired,
    logoutInit: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    user: PropTypes.object
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    user: state.auth.user
})

export default connect(mapStateToProps, {
    loginInit,
    logoutInit
})(LoginView);