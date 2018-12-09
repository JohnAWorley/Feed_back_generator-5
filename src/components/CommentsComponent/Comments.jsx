import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Comments extends Component {
    handleClick = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>comments</h1>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default withRouter(Comments);