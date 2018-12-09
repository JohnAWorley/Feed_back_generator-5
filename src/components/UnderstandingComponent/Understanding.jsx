import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


class Understanding extends Component {
    handleClick = () => {
        this.props.history.push('/Supported')
    }
    render() {
        return (
            
                <div>
                    <h1>Understanding</h1>
                    <button onClick ={this.handleClick}></button>
                    
                </div>
           
        )
    }
}

export default withRouter(connect()(Understanding));