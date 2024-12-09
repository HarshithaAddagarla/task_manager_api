import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Task Management System</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-task" component={AddTask} />
          <Route path="/edit-task/:id" component={EditTask} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
