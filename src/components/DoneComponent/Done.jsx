import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

class Done extends Component{
   
    sendFeedback = () => {

        axios.post('/feedback', (this.props.reduxState.buttonReducer)).then(response => {})
        this.props.dispatch({ type: 'CLEAR'});
        this.props.history.push('/')

    }
    render(){
       
        return(
            <div>
                
                <button onClick={this.sendFeedback}>Send Feedback & Start Again</button>
            </div>
        )
    }
}



export default connect(mapReduxStateToProps)(Done);