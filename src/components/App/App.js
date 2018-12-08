import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Comments from '../CommentsComponent/Comments'
import Feeling from '../FeelingComponent/Feeling';
import Header from '../HeaderComponent/Header';
import Review from '../ReviewComponent/Review';
import Supported from '../SupportedComponent/Supported';
import Understanding from '../UnderstandingComponent/Understanding';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <Feeling />
            <Understanding />
            <Supported />
            <Comments />
            <Review />
            <Header />
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
        </div>
      </Router >
    );
  }
}

export default App;
