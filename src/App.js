import "./App.css";
// The useState hook from the react library is necessary to add state variables to our components
import { useState } from "react"; 

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
  return (
    <div>
      <h1>Welcome to my app.</h1>
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
      <MyButton globalCount={globalCount} onClick={handleClick} />
      {createButtons}
    </div>
  );
}

const options = [
  { label: "Start", id: 1 },
  { label: "Stop", id: 2 },
  { label: "Pause", id: 3 },
];

// MyButton component acceps label, onClick (function), and globalCount as props.
function MyButton({ label, onClick, globalCount }) {
  // Conditional button labeling. If no label is passed in, "Generic label" will be used.
  let buttonlabel;
  if (label) {
    buttonlabel = label;
  } else {
    buttonlabel = "Generic label";
  }

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
    <button onClick={handleClick}>
      {buttonlabel}: L {count}, G {globalCount}
    </button>
  );
}
