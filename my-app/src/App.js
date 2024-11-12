import "./App.css";
import Rectangle from "./components/Rectangle";
import SumNumber from "./components/SumNumber";
import SalaryCalculate from "./components/SalaryCalculate";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* {/* <h1> Adding Two Numbers</h1> */}
      {/* <SumNumber /> */}
      {/* <h1>Area of the Rectangle</h1>
      <Rectangle />
      <br></br>  */}
      <h2>Salary</h2>
      <SalaryCalculate />
    </div>
  );
}

export default App;
