import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const options = [
    { label: "Start", id: 1 },
    { label: "Stop", id: 2 },
    { label: "Pause", id: 3 },
  ];

  const createButtons = options.map((option) => (
    <MyButton key={option.id} label={option.label} />
  ));
  return (
    <div>
      <h1>Welcome to my app.</h1>
      <MyButton label="I'm a button" />
      <MyButton label="I'm a button too" />
      <MyButton />
      {createButtons}
    </div>
  );
}

function MyButton({ label }) {
  // Conditional button labeling
  let buttonlabel;
  if (label) {
    buttonlabel = label;
  } else {
    buttonlabel = "Generic label";
  }
  // Set the count of button clicks to 0 initially
  const [count, setCount] = useState(0);
  // Whenever the handleClick function is called, increment count by 1
  function handleClick() {
    setCount(count + 1);
  }
  return (
    // {Create the button, labeling it with a label and count value}
    <button onClick={handleClick}>{buttonlabel}: {count}</button>
  );
}
