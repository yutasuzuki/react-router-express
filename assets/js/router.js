import React from 'react'
import {
  Route,
  Link,
  hashHistory
} from 'react-router-dom'
import Header from './containers/Header'
import Top from './pages/Top'

const GlobalRouter = () => (
  <div>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/top" component={Top}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
    <Route path={`/topics/:topicId`} component={Topic}/>
    <Route exact={true} path={'/topics'} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


const Home = () => (
  <div>
    <Header />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/top">TOP</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <Header />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/top">TOP</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <Header />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/top">TOP</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3> 1{match.params.topicId}</h3>
  </div>
)

export default GlobalRouter
