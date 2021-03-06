import { h, render, Component } from "preact";
import { useState, useEffect } from "preact/hooks";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    // Create the count state.
    const [count, setCount] = useState(0);
    // Update the count (+1 every second).
    useEffect(() => {
      const timer = setTimeout(() => setCount(count + 1), 1000);
      return () => clearTimeout(timer);
    }, [count, setCount]);
    // Return the App component

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from app</h1>
          <p>
            Page has been open for <code>{count}</code> seconds.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
