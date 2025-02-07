import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        This is simple web app that converts the date from Gregorian to Nepali
        and Nepali to Gregorian AD to BS and BS to AD
      </h1>
    </>
  );
}

export default App;
