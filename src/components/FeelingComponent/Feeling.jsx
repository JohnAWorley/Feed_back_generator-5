import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Feeling extends Component {
    handleClick = () => {
        this.props.history.push('/Understanding')
    }
    render() {
        return (
       
                <div>
                    <h1>Feeling</h1>
                    <button onClick={this.handleClick} />
                </div>
            
        )
    }
}

export default withRouter(Feeling)