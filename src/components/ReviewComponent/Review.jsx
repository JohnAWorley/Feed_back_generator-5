import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

class Review extends Component {
    render() {
        return (
            <div>
                <p>Your current feeling: {this.props.reduxState.buttonReducer.feeling}</p>
                <p>Your current understanding: {this.props.reduxState.buttonReducer.understanding} </p>
                <p>Your current support: {this.props.reduxState.buttonReducer.supported}</p>
                <p>Additional comments: {this.props.reduxState.buttonReducer.comments}</p>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Review);