import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);

  const addvalue = () => {

    if (counter < 20) {
      counter = counter + 1;
      setcounter(counter);
    }
  };

  const removevalue = () => {
    
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter:{counter} </h2>

      <button onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
    </>
  );
}

export default App;
