import React from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
// import Post from './Components/Post/Post';
import routes from './routes';


function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' || props.location.pathname === '/register'
      ? (<>
      {routes}
      </>)
      : (<>
      <Nav />
      {routes}
      </>)}
    </div>
  );
}

export default withRouter(App);
