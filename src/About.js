import React from 'react'

export default React.createClass({
  render(){
    return(
      <div className="view-container container about-view">
        <div className="about-content">
          <div className="content-image">
            <img className="image" src="http://i.imgur.com/3aqMaPQ.jpg" width='200' height="200"/>
          </div>
          <hr></hr>
          <h3> Ambitious and ready to learn more</h3>
          <p>
          I'm a college graduate who's delving into the world of front-end development. I'm passionate about
           building and deploying web applications that are beautiful and thoughtful. I'm also hungry to learn
           more, at the start of the summer I started learning React and the environment associated with it. Utilizing
           the NPM,such as build/bundling tools like Webpack, writing Javascript with ES6 features via Babel, and all of the
           other amazing packages.
          </p>
          <h3> What I'm looking for </h3>
          <hr></hr>
          <p>
          I'm looking for an oppurtunity to kickstart my career, I've had the experience building projects that are modest
          in scale. However, I'm ready to see what professional software development looks like. I'm passionate about using
          the latest technologies and trending ones too, I hope I find a team that feels just the same.
          </p>
          <h3> Built with </h3>
          <hr></hr>
          <p>
          I leveraged the modularity and simplicity of React for my site. I'm fascinated with how easy it is to create
          components, how each component ensures to refresh itself when data changes, and most of all it's pure Javascript.
          </p>

        </div>
      </div>
   )
  }
})
