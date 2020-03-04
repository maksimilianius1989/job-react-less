import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from "./HOC/context";

import {TaskList} from "./init/taskList";
import {Routes} from "./routes";

const App = () => {
  return(
      <Provider value={TaskList}>
          <Router>
              <Routes/>
          </Router>
      </Provider>
    )
};
export default App;
