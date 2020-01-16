import React from 'react';
import './App.css';
import {List} from "./components/list";
import {Header} from "./components/header";
import {LoginForm} from "./components/LoginForm";

const App = () => {
  return (
      <>
          <Header/>
          <div className="container">
              <LoginForm/>
            <h2>Test</h2>
            <List/>
          </div>
      </>
  );
};
export default App;
