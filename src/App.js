import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Parent from "./Parent";

export default class App extends React.Component {
  state = {
    userName: '',
  }

  componentDidMount = () => {
    setTimeout(() => {
      // 全局存储（可以使用其他方式，比如cookie、redux）
      window.userName = 'user'
      this.setState({
        userName: 'user'
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <label>home</label>
          {/*关键代码*/}
          {this.state.userName && <Route path="/parent" component={Parent}/>}
        </Router>
      </div>
    );
  }
}
