import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App';
import { HashRouter as Router, Route } from 'react-router-dom'
import './index.scss';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App}/>
      </div>
  </Router>, 
  document.getElementById('root')
)