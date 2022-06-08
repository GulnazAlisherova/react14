
import ExchangeRate from "./components/ExchangeRate";

function App() {
  return (
    <div className="App">
      <ExchangeRate from="USD" to="KGS"/>
      <ExchangeRate from="EUR" to="KGS"/>
    </div>
  );
}

export default App;








// import { useEffect, useState } from "react";
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

   {/* <h1 style={styles}>Hello world</h1>
      <span>{number}</span>
      <button onClick={() => setNumber(number + 1)}>+</button> */}