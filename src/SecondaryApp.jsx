import React from "react";

class SecondaryApp extends React.Component {
  state = {
    count: 0,
    name: "Coder",
  };

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Artir
        </button>
        <p>{this.state.count}</p>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Azalt
        </button>
        {this.state.name}
      </div>
    );
  }
}

export default SecondaryApp;
