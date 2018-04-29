import React from 'react';
import { Route, Link } from 'react-router-dom';
import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import('./containers/Pizza');
});

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>{' '}
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" component={AsyncPizza} /> 
        </div>
      </div>
    );
  }
}

export default App;
