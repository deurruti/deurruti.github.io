import React  from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory , IndexRoute} from 'react-router'
import { Link } from 'react-router'
import About from './About'
import Home from './Home'
import App from './Nav'

require('../styles/index.scss');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
),document.getElementById('app'))
