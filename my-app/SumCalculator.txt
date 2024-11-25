import React, { useState } from "react";

const SumCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculateSum = (e) => {
    e.preventDefault();
    const sum = parseFloat(num1 || 0) + parseFloat(num2 || 0);
    setResult(sum);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sum Calculator</h2>
      <form onSubmit={calculateSum} style={styles.form}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Calculate</button>
      </form>
      {result !== null && <div style={styles.result}>Result: {result}</div>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "50%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  result: {
    marginTop: "20px",
    fontSize: "20px",
    color: "#4CAF50",
  },
};

export default SumCalculator;
