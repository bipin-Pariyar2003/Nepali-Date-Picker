import Home from "./Views/Home/index.jsx";
import "./App.css";
import EngDatePicker from "./Components/EngDatePicker/index.jsx";
import NepDatePicker from "./Components/NepDatePicker/index.jsx";
function App() {
  return (
    <>
      <Home />
      <div style={{ display: "flex", justifyContent: "center", gap: "300px" }}>
        <EngDatePicker />
        <NepDatePicker />
      </div>
    </>
  );
}

export default App;
