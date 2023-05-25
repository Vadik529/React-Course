import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      name: "Stepan",
      age: 30,
    };
    this.isVisible = this.isVisible.bind(this);
  }
  isVisible() {
    this.setState({
      visible: !this.state.visible,
      name: "Vadim",
      age: 24,
    });
  }

  render() {
    if (this.state.visible) {
      return (
        <div className="container">
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
          <button onClick={this.isVisible}>Скрыть</button>
        </div>
      );
    } else {
      return (
        <div className="container">
          <button onClick={this.isVisible}>Показать</button>
        </div>
      );
    }
  }
}

export default App;
