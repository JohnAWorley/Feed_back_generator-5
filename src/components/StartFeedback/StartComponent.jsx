import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';





class Start extends Component {
    handleClick = () => {
        this.props.history.push('/Feeling')
    }
    render() {
       
        return (
           
            <div>
                <h1>Start</h1>
                <button onClick={this.handleClick}>NextPage</button>
                

            </div>

        )
    }
}

export default withRouter(connect()(Start));