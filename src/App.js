import { useState, useId } from "react";
import "./App.css";
import MyButton from "./MyButton.js";
// The useState hook from the react library is necessary to add state variables to our components
// useId randomly generates unique IDs for our elements

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
  const [fieldValue, setFieldValue] = useState("");
  const [buttonLabelValue, setButtonLabelValue] = useState("Enter some text");

  // Function to set the field value state to what the user inputs
  function handleChangeFieldValue(e) {
    // e.target references the DOM element that triggered the event (the input field) and value references the attribute
    setFieldValue(e.target.value);
  }

  function handleButtonLabelValueChange(e) {
    setButtonLabelValue(e.target.value);
  }

  return (
    <div>
      <h1>React Demo</h1>
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
      <p>
        <TextInputField
          fieldValue={fieldValue}
          onChange={handleChangeFieldValue}
        />
        {fieldValue}
      </p>
      <ButtonInputField
        buttonLabelValue={buttonLabelValue}
        onChange={handleButtonLabelValueChange}
      />
      <MyButton
        label={buttonLabelValue}
        onClick={handleClick}
        globalCount={globalCount}
      />
    </div>
  );
}

const options = [
  { label: "Start", id: 1 },
  { label: "Stop", id: 2 },
  { label: "Pause", id: 3 },
];

function TextInputField({ onChange, fieldValue }) {
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

function ButtonInputField({ onChange, buttonLabelValue }) {
  return (
    <input
      type="text"
      id={useId()}
      value={buttonLabelValue}
      onChange={onChange}
    ></input>
  );
}
