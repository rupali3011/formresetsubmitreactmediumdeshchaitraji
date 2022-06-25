import "./styles.css";
import React, { useState } from "react";
// Part1:: make a form with 2 input fields, 1 submit button,
// and 1 reset button. when we click on submit the data
// show the captured data in console.log and the reset button
// should reset whatever input we give in input fields,
// reset button should be disabled unless and until there are
// no values in 2 fields.

// Part2:: when you reload the page, the first input Field
// should focus, after finishing filling the focused input
// field. the focus has to go to the second Input Filed.
export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div className="App">
      <div>
        Name:
        <input
          type="text"
          onChange={function type(e) {
            const val = e.target.value;
            setName(val);
          }}
          value={name}
        />
      </div>
      <br />
      <div>
        Age:
        <input
          type="number"
          onChange={function type1(e) {
            const val1 = e.target.value;
            setAge(val1);
          }}
          value={age}
        />
      </div>
      <button
        onClick={function () {
          console.log("name:" + name + "age:" + age);
        }}
      >
        submit
      </button>
      <button
        disabled={name.length < 1 || age.length < 1 ? true : false}
        onClick={function () {
          setName("");
          setAge("");
        }}
      >
        reset
      </button>
    </div>
  );
}
