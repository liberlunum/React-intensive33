import React from "react";
import styles from "./Lesson02.module.css";
export default class Lesson02classComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
    this.focus = this.focus.bind(this);
  }

  handleInput(event) {
    this.setState(() => {
      return {
        inputText: event.target.value,
      };
    });
  }

  disabledButton() {
    return this.state.inputText === "react" || this.state.inputText === "реакт";
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <>
        <h1 className={styles.headerText}>
          Как называется JS библиотека
          <br />
          для создания пользовательских интерфейсов,
          <br />
          основанных на компонетах?
        </h1>
        <input
          className={styles.input}
          type="text"
          onChange={(event) => this.handleInput(event)}
          ref={(input) => (this.textInput = input)}
        />
        <button
          className={styles.buttonSubmit}
          disabled={this.disabledButton()}
        >
          Submit
        </button>
        <div className={styles.containerOtherButton}>
          <button className={styles.focusButton} onClick={this.focus}>
            Focus on Input
          </button>
        </div>
      </>
    );
  }
}
