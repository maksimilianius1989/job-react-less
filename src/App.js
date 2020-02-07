import React from 'react';
import './App.css';

import {Template} from "./components/template";
import {Provider} from "./HOC/context";

import {TaskList} from "./init/taskList";

const App = () => {
  return(
      <Provider value={TaskList}>
        <Template/>
      </Provider>
    )
};
export default App;
