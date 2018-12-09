import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Start extends Component {
    handleClick = () => {
        this.props.history.push('/Feeling')
    }
    render() {
       
        return (
           
            <div>
                <h1>Start</h1>
                <button onClick={this.handleClick}></button>

            </div>

        )
    }
}

export default withRouter(Start)