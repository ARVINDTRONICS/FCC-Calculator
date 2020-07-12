import React from "react";
import { Button } from "./Button/index";
import { Number } from "./constant";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: "0",
      operatorFlag: false,
      decimalFlag: false,
    };
    this.handleInput = this.handleInput.bind(this);
  }
  // handleInput(input) {
  //   if (input === "=") {
  //     let exp = this.state.display;
  //     if (eval(exp)) {
  //       this.setState({ display: eval(exp) });
  //     } else {
  //       this.setState({ display: "Invalid Input" });
  //     }
  //   } else if (input === "C") {
  //     this.setState({ display: "" });
  //   } else {
  //     this.setState((state) => ({ display: state.display + input }));
  //   }
  // }

  handleInput = (buttonName) => {
    let currentNumber = this.state.currentNumber;
    let operatorFlag = this.state.operatorFlag;
    switch (true) {
      case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
        if (this.state.currentNumber !== "0") {
          currentNumber += buttonName;
          operatorFlag = false;
        } else {
          currentNumber = buttonName;
        }
        break;
      case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
        if (!this.state.operatorFlag) {
          currentNumber += buttonName;
          operatorFlag = true;
          this.setState({ decimalFlag: false });
        } else {
          const newNumber = currentNumber.slice(0, currentNumber.length - 1);
          currentNumber = newNumber;
          currentNumber += buttonName;
        }
        break;
      case buttonName === "C":
        currentNumber = "0";
        operatorFlag = false;
        this.setState({ decimalFlag: false });
        break;
      case buttonName === "=":
        currentNumber = eval(currentNumber);
        operatorFlag = false;
        this.setState({ decimalFlag: true });
        break;
      case buttonName === ".":
        if (!this.state.decimalFlag) {
          currentNumber += ".";
          this.setState({ decimalFlag: true });
        }
    }
    this.setState({ operatorFlag });
    this.setState({ currentNumber });
  };

  render() {
    return (
      <div className="App">
        <div class="wrapper">
          <h3>Basic Calculator</h3>
          <div id="display">{this.state.currentNumber}</div>
          <div className="operation-wrap">
            <Button
              id="seven"
              name="7"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="eight"
              name="8"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="nine"
              name="9"
              handleInput={(input) => this.handleInput(input)}
            />

            <Button
              id="divide"
              name="/"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="clear"
              name="C"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="four"
              name="4"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="five"
              name="5"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="six"
              name="6"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="multiply"
              name="*"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="leftBrace"
              name="("
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="one"
              name="1"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="two"
              name="2"
              handleInput={(input) => this.handleInput(input)}
            />

            <Button
              id="three"
              name="3"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="subtract"
              name="-"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="rightBrace"
              name=")"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="zero"
              name="0"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="decimal"
              name="."
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="percentage"
              name="%"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="add"
              name="+"
              handleInput={(input) => this.handleInput(input)}
            />
            <Button
              id="equals"
              name="="
              handleInput={(input) => this.handleInput(input)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
