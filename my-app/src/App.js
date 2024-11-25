import "./App.css";
import Rectangle from "./components/Rectangle";
import SumNumber from "./components/SumNumber";
import SalaryCalculate1 from "./components/SalaryCalculate1";
import CRUDManage from "./components/CRUDManage";
import CallAPI from "./components/CallAPI";
import Timer from "./components/Timer";
import LoginForm from "./components/LoginForm";
import SumCalculator from "./components/SumCalculator";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* {/* <h1> Adding Two Numbers</h1> */}
      {/* <SumNumber /> */}
      {/* <h1>Area of the Rectangle</h1>
      <Rectangle />
      <br></br>  */}
      {/* <h2>Salary</h2>
      <SalaryCalculate1 /> */}
      {/* <CRUDManage /> */}

      {/* <CallAPI/> */}

      {/* <Timer /> */}

      {/* For Examination */}

      <SearchFilter />

      <SumCalculator />

      <LoginForm />
    </div>
  );
}

export default App;
