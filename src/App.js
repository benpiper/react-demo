import "./App.css";
// The useState hook from the react library is necessary to add state variables to our components
// useId randomly generates unique IDs for our elements
import { useState, useId } from "react";

// App component
export default function App() {
  // Set the globalCount of button clicks to 0 initially
  // setGlobalCount is a method to update globalCount
  const [globalCount, setGlobalCount] = useState(0);

  // Function to increment globalCount on button click
  function handleClick() {
    setGlobalCount(globalCount + 1);
  }

  // Function to create buttons from a JSON array `options`
  // This passes in the label, globalCount, and handleClick functions as props so the MyButton component can use them.
  const createButtons = options.map((option) => (
    <MyButton
      key={option.id}
      label={option.label}
      globalCount={globalCount}
      onClick={handleClick}
    />
  ));

  //
  const [fieldValue, setFieldValue] = useState('');

  // Function to set the field value state to what the user inputs
  function handleChangeFieldValue(e) {
    // e.target references the DOM element that triggered the event (the input field) and value references the attribute
    setFieldValue(e.target.value);
  }

  return (
    <div>
      <h1>React Button Demo</h1>
      {/* This passes in the label, globalCount, and handleClick functions as props so the MyButton component can use them. */}
      <MyButton
        label="I'm a button"
        globalCount={globalCount}
        onClick={handleClick}
      />
      <MyButton
        label="I'm a button too"
        globalCount={globalCount}
        onClick={handleClick}
      />
      {/* We aren't passing in a label here */}
      <MyButton globalCount={globalCount} onClick={handleClick} />
      {createButtons}
      <p>L = Local, G = Global</p>
      <InputFields fieldValue={fieldValue} onChange={handleChangeFieldValue} />
      {fieldValue}
    </div>
  );
}

const options = [
  { label: "Start", id: 1 },
  { label: "Stop", id: 2 },
  { label: "Pause", id: 3 },
];

// MyButton component accepts label, onClick (function), and globalCount as props.
// Passing these in in {curly braces} is called destructuring
function MyButton({ label = "Generic label", onClick, globalCount }) {
  // Conditional button labeling. If no label is passed in, "Generic label" will be used.

  // Set the count state variable for the individual button click counter
  const [count, setCount] = useState(0);

  // Function to increment the count variable and the globalCount variables when the button is clicked
  function handleClick() {
    // Increment the count variable
    setCount(count + 1);
    // Call the onClick function (passed in as a prop) to increment the globalCount variable in the App parent component
    onClick();
  }

  return (
    // {Create the button, labeling it with a label and count value}
    <button id={useId()} onClick={handleClick}>
      {label}: L {count}, G {globalCount}
    </button>
  );
}

function InputFields({ onChange, fieldValue }) {
  return (
    <input
      type="text"
      id={useId()}
      placeholder="Put something here"
      value={fieldValue}
      onChange={onChange}
    ></input>
  );
}
