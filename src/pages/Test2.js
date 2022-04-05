import "../App.css";
import { useState } from "react";

function Test2() {
  const [state, setState] = useState({ selections: [] });
  const options = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
  ];

  const handleCheckboxChange = (key) => {
    let sel = state.selections;
    let indexOfKey = sel.indexOf(key);
    // //missing code here
    if (indexOfKey === -1) {
      // If the index of the key doesn't exist in state.selections then we need
      // to use the spread operator to return a new state, exactly the same as before,
      // except with the new option added
      setState((prevState) => ({
        ...prevState,
        selections: [...prevState.selections, key],
      }));
    } else {
      // If the index of the key DOES exist in state.selections we need to use the
      // spread operator to return the same array except without the selected option.
      // We can do this using the .filter method that checks each item of the array
      // and compares it to our key.
      setState((prevState) => ({
        ...prevState,
        selections: prevState.selections.filter((option) => option !== key),
      }));
    }
  };

  const ListItem = ({ id, text, handleOnChange, selected }) => {
    return (
      <div className="container">
        <input
          id={id}
          className="checkbox"
          type="checkbox"
          checked={selected}
          onChange={handleOnChange}
        ></input>
        <p
          className="description column"
          style={{ width: "33%", float: "left" }}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Assessment 2</h1>
        <div
          style={{
            width: "270px",
            margin: "0px auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {options.map((option) => (
            <ListItem
              id={option.replace(/\s+/g, "")}
              key={option}
              text={option}
              handleOnChange={() => handleCheckboxChange(option)}
              selected={state.selections.includes(option)}
            ></ListItem>
          ))}
          <div
            style={{
              border: "2px solid white",
              borderRadius: "5%",
              padding: "0px 15px",
              marginTop: "20px",
            }}
          >
            <h3>Selected Items</h3>
            <p id="selecteditems" style={{ fontSize: "16px" }}>
              {state.selections.toString()}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Test2;
