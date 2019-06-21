import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCount, incrementCount, decrementCount, incrementCountByNum } from '../actions/countActions';
import PropTypes from 'prop-types';

class App extends Component {
    componentDidMount() {
        this.props.getCount();
    }

    render() {
        const { count } = this.props.count;
     
        return(
            <div>
                Initial test 2!
                <h2>Count from redux: {count}</h2>
                <button onClick={() => this.props.incrementCount()}>+</button>
                <br />
                <button onClick={() => this.props.decrementCount()}>-</button>
                <br />
                <button onClick={() => this.props.incrementCountByNum(count)}>Increment by Num</button>
            </div>
        );
    }
}

App.propTypes = {
    getCount: PropTypes.func.isRequired,
    incrementCount: PropTypes.func.isRequired,
    incrementCountByNum: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired,
    count: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps, { getCount, incrementCount, incrementCountByNum, decrementCount })(App);