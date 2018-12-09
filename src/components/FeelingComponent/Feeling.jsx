import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


class Feeling extends Component {
    handleClick = () => {
        this.props.history.push('/Understanding')
    }
    render() {
        return (
       
                <div>
                    <h1>Feeling</h1>
                    <button onClick={this.handleClick} />
                <button onClick={() => this.props.dispatch({ type: 'BUTTON_CHECK', payload: 'hey' })}>check</button>
                </div>
            
        )
    }
}

export default withRouter(connect()(Feeling));