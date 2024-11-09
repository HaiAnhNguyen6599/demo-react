import React, { useEffect, useState } from "react";

function SumNumber() {
  const [numA, setNumA] = useState(""); // hook dùng để khai báo biến trạng thái (state) của numA và hàm cập nhập setNumA cho trạng thái numA. setNumA được sử dụng để cập nhật giá trị của numA khi người dùng nhập input
  const [numB, setNumB] = useState(""); // hook dùng để khai báo biến trạng thái (state) của numB và hàm cập nhập setNumB cho trạng thái numB
  const [sum, setSum] = useState(null); // hook dùng để khai báo biến trạng thái (state) của sum và hàm cập nhập setSum cho trạng thái sum

  // Biến sumResult gán cho anonymous function ()
  const sumResult = () => {
    const result = parseFloat(numA) + parseFloat(numB); //chuyển đổi numA và numbB thành float
    setSum(result); // Cập nhật trạng thái của sum bằng hàm cập nhập setSum với result là value
  };

  //useEffect sẽ cập nhập sumResult() mỗi khi được thay đổi
  // Tự động hiện kêt quả sumReact
  // useEffect(() => sumResult(), [numA, numB]);

  // (e) arrow function nhận sự kiện e và cập nhập giá trị numA với giá trị hiện tại ở input (e.target.value).  e sẽ được dùng để lấy giá trị input hiện tại
  // Sau đó setNumA sẽ được sử dụng để cập nhật trạng thái ở input cho numA.
  return (
    <div>
      <input
        type="number"
        value={numA}
        onChange={(e) => setNumA(e.target.value)}
        placeholder="Enter First Number"
      ></input>

      <input
        type="number"
        value={numB}
        onChange={(e) => setNumB(e.target.value)}
        placeholder="Enter Second Number"
      ></input>

      <button onClick={sumResult}>Add Two Numbers</button>
      <p>Total: {sum !== null ? sum : ""}</p>
    </div>
  );
}

export default SumNumber;

// import React, { useState } from "react";

// const SumNumber = () => {
//   const [numA, setNumA] = useState("");
//   const [numbB, setNumB] = useState("");
//   const [sum, setSum] = useState(null);

//   const sumResult = () => {
//     const result = parseFloat(numA) + parseFloat(numbB);
//     setSum(result);
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         value={numA}
//         onChange={(e) => setNumA(e.target.value)}
//         placeholder="Enter First Number"
//       ></input>

//       <input
//         type="number"
//         value={numbB}
//         onChange={(e) => setNumB(e.target.value)}
//         placeholder="Enter Second Number"
//       ></input>

//       <button onClick={sumResult}>Adding Two Numbers</button>
//       <p>Total: {sum !== null ? sum : ""} </p>
//     </div>
//   );
// };

// export default SumNumber;

// import React, { useState, useEffect } from "react";

// function SumNumber() {
//   const [numA, setNumA] = useState("");
//   const [numB, setNumB] = useState("");
//   const [sum, setSum] = useState(null);

//   const sumResult = () => {
//     const result = parseFloat(numA) + parseFloat(numB);
//     setSum(result);
//   };

//   useEffect(() => sumResult(), [numA, numB]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={numA}
//         onChange={(e) => setNumA(e.target.value)}
//         placeholder="Enter First Number"
//       ></input>
//       <input
//         type="number"
//         value={numB}
//         onChange={(e) => setNumB(e.target.value)}
//         placeholder="Enter Second"
//       ></input>
//       <p>Total: {sum}</p>
//     </div>
//   );
// }

// export default SumNumber;
