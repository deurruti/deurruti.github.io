import React from 'react'

function Post({post}){
  console.log("Here");
  return (
    <div style={{textAlign: 'center', padding: '20px'}}>
    <span> {post.title} -  {post.desc} </span>
    <hr></hr>
    <img src={post.imgurl} style={{height: "auto", width: "100%"}}/>

    <div>  <a href={post.giturl}> Go to repo </a></div>
    { post.url ?  <div><a href={post.url}> Go to site </a></div> : <div/>}


    </div>
  );
}

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
    posts:  [
          {title: 'TechCloud',
          desc: 'A SoundCloud client built with React and Redux',
          giturl:"https://github.com/deurruti/techcloud-react-redux",
          url: '',
          imgurl: 'https://gmkr.io/s/579ad99b7df1b3de7add697a/0'
          },
          {title: 'The Long Two',
          desc: 'A data visualization built with D3.js, jQuery, and Material UI',
          giturl:"https://github.com/deurruti/thelongtwo",
          url: "http://joshm101.github.io/thelongtwo/",
          imgurl: 'https://gmkr.io/s/579adbf42e042be87a9794a5/0'
          },
          {title: 'Hask-a-Question',
          desc: 'A Stack Overflow-like site built with Meteor',
          giturl:"https://bitbucket.org/deurruti/cmps112",
          url: '',
          imgurl: 'https://gmkr.io/s/579ade037df1b3de7add697c/0'
          },
          {title: 'UCSC Free and For Sale',
          desc: 'A simple sell/exchange site built in Web2py, which utilizes Material UI and Bootstrap ',
          url:"",
          giturl: "https://bitbucket.org/jshm101/ucsc-free-for-sale",
          imgurl: 'https://gmkr.io/s/579ae3534f24edd1781ef44b/0'
          }
      ]
    }
  }
  render(){
    return (
    <div className="view-container container project-view">
    {
         this.state.posts.map((p,idx) => {
           return <Post post={p} key={idx} />
         })
    }
    </div>
   );
  }
}

export default Home;
