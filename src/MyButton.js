import { useState, useId } from "react";

// MyButton component accepts label, onClick (function), and globalCount as props.
// Passing these in in {curly braces} is called destructuring
export default function MyButton({ label = "Generic label", onClick, globalCount }) {
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