import { useState } from "react";
import "./App.css";
import MyApp from "./MyApp";

function App() {
  const [count, setCount] = useState(0);
  const Add = () => {
    setCount(count + 1);
  };
  const remo = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };
  return (
    <>
      <MyApp data={count} add={Add} re={remo} />
    </>
  );
}

export default App;
