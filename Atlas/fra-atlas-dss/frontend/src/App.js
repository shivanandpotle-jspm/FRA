import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapView from './components/MapView';
import Filters from './components/Filters';
import ProgressTracker from './components/ProgressTracker';
import DSSRecommendations from './components/DSSRecommendations';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>FRA Atlas and Decision Support System</h1>
        <Filters />
        <Switch>
          <Route path="/" exact component={MapView} />
          <Route path="/progress" component={ProgressTracker} />
          <Route path="/recommendations" component={DSSRecommendations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;