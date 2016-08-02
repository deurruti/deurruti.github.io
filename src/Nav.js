import React from 'react'
import { Link , IndexLink } from 'react-router'
const App = React.createClass({

  render: function(){
    console.log(this.props.children);
    return(
    <div>
        <header className="nav">
        <div className="nav-row">
            <div className="nav-content">
              <span id="nav-name"> Daniel Urrutia </span>
              <span id="nav-title"> front-end developer </span>
            </div>
            <ul className="nav-links">
              <li><IndexLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</IndexLink></li>
              <li><Link to='/about' activeClassName="active">About</Link></li>
              <li><a href="https://github.com/deurruti"> Github </a></li>
              <li><a href="https://www.linkedin.com/in/daniel-urrutia-49a980b8">LinkedIn</a></li>
              <li><a href="mailto:danielurrutia24@gmail.com">Email</a></li>
            </ul>
          </div>
          </header>
          {this.props.children}
    </div>
  )
  }
})

export default App;
