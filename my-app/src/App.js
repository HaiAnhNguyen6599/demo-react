import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ứng dụng đếm số lần nhấn</h1>
      <Counter />
    </div>
  );
}

export default App;
