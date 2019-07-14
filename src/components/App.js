import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCount, incrementCount, decrementCount, incrementCountByNum } from '../actions/countActions';
import { loadUser, loadLocalToken } from '../actions/authActions';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'reactstrap';

class App extends Component {
    componentDidMount() {
        this.props.getCount();
        this.props.loadLocalToken();
        this.props.loadUser();
    }

    render() {
        const { count } = this.props.count;
     
        return(
            <div>
                <Header />
                <Container>
                    <h3>What is Lorem Ipsum?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h3>Why do we use it?</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </Container>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    getCount: PropTypes.func.isRequired,
    incrementCount: PropTypes.func.isRequired,
    incrementCountByNum: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    loadLocalToken: PropTypes.func.isRequired,
    count: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps, {
    getCount,
    incrementCount,
    incrementCountByNum,
    decrementCount,
    loadUser,
    loadLocalToken
})(App);