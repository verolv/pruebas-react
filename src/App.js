import './App.css';
//import { Home } from './modules/home/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from 'react-redux';

import RestaurantsList from './modules/restaurantsList/RestaurantsList';
import Login from './modules/login/Login';
//import { useState } from 'react';

function App(props) {
    /*
    const [userInfo, setUserInfo] = useState(null);
    console.log("userInfo", userInfo);
    */

    const {
      userInfo
    } = props;

    return (
      <Router>
        <Switch>
          <Route exact={true} path="/">
            {userInfo == null &&
              <Login/>
            }
            {userInfo != null &&
            <Redirect
              to={{
                pathname: '/home'
              }}
            />
            }
          </Route>
          <Route path="/home">
            <RestaurantsList />
          </Route>
        </Switch>
      </Router>
    );
    
  /*
  //Prueba inicial
  return (
		<RestaurantList />
	)
  */

  /*
  //Codigo por defecto
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  export default App;
  */
}

export default connect(
  store => ({
      userInfo: store.login.userInfo,
  }),
  null
)(App);
