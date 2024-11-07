// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Bạn đã nhấn {count} lần</p>
//       <button onClick={handleClick}>Nhấn vào đây</button>
//     </div>
//   );
// }

// export default Counter;


import React, { useState } from "react";

function Counter() {
  const [count,setCount] = useState(0);


  const increaseClick = () => {
    setCount(count + 1);
  }

  const decreaseClick = () => {
    setCount(count - 1);
  }


  return (
    <div>
      <p> Bạn đã ấn {count} lần</p>
      <button onClick={increaseClick}>Tăng</button>
      <button onClick={decreaseClick}>Giảm</button>
    </div>
  )
}

export default Counter;