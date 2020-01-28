import React from 'react';
import './App.css';

import {Template} from "./components/template";
import {LoginForm} from "./components/LoginForm";

const App = () => {
  return <Template data={[1,2,3]}><LoginForm/>{[1,3,4,[66,'sdfsdfsd']]}{[1,3,4,6]}</Template>
};
export default App;
