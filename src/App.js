// import { useEffect, useState } from "react";
import ExchangeRate from "./components/ExchangeRate";

function App() {
//   const [number, setNumber] = useState(0);

//   useEffect(() => {
//     alert('Hello');
//   });

// //side effect
// //fetch - ajax
// //styling

//   const color = {
//     red: Math.floor(Math.random() * 255),
//     green: Math.floor(Math.random() * 255),
//     blue: Math.floor(Math.random() * 255),

//   };

//   const styles = {
//     color: `rgb(${color.red}), ${color.green}, ${color.blue}`,
//   }

  return (
    <div className="App">
      {/* <h1 style={styles}>Hello world</h1>
      <span>{number}</span>
      <button onClick={() => setNumber(number + 1)}>+</button> */}
      <ExchangeRate from="USD" to="KGS"/>
    </div>
  );
}

export default App;