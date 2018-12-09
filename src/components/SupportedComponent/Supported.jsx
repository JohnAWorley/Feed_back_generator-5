import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Supported extends Component {
    handleClick = () => {
        this.props.history.push('/Comments')
    }
    render() {
        return (
            <div>
                <h1>Supported</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default withRouter(connect()(Supported));