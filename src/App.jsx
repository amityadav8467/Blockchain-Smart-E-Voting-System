import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Define your routes here */}
        <Route path='/' exact>
          <h1>Welcome to the Blockchain Smart E-Voting System</h1>
        </Route>
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
