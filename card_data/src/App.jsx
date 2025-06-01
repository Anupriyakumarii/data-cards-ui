import { useState } from "react";
import "./App.css";
import CardData from "./components/CardData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CardData></CardData>
    </>
  );
}

export default App;
