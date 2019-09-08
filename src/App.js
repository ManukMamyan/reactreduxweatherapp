import React, { Component } from 'react';
import Main from "./components/main";

import StoreRef from "./store/store";
import {Provider} from "react-redux";


class App extends Component {
  render() {
    return (
      <Provider store={StoreRef}>
        <div className="container">
          <h1>Weather App </h1>
          <Main />
        
        </div>
      </Provider>
    );
  }
}

export default App;
