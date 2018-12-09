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
import Start from '../StartFeedback/StartComponent'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Start} />
          <Route exact path="/Feeling" component={Feeling} />
          <Route exact path="/Understanding" component={Understanding} />
          <Route exact path="/Supported" component={Supported} />
          <Route exact path="/Comments" component={Comments} />
          <Review />
        </div>

      </Router >
    );
  }
}

export default App;
