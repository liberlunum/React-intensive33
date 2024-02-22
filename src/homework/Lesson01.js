import React from "react";
export default class Lesson01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nastasiya",
      inputText: "",
    };
  }

  handleInput(event) {
    this.setState(() => {
      return {
        inputText: event.target.value,
      };
    });
  }

  changeName() {
    this.setState((prevState) => {
      return { name: prevState.inputText };
    });
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    // return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <p>My name {this.state.name}</p>
        <input
          type="text"
          value={this.state.inputText}
          onChange={(event) => this.handleInput(event)}
        />
        <button onClick={() => this.changeName()}>Change name</button>
      </div>
    );
  }
}
