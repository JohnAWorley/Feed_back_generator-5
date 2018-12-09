import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        newElement: ''
    }

    handleClick = () => {
        this.props.history.push('/')
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.newElement });
    }
    handleElementChange = (event) => {
        this.setState({
            newElement: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                <input onChange={this.handleElementChange}>

                </input>
                <button onClick={this.handleClick}>Next Page</button>
            </div>
        )
    }
}

export default withRouter(connect()(Comments));