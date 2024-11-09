import React, { useEffect, useState } from "react";

const Rectangle = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const widthValue = parseFloat(width);
    const heightValue = parseFloat(height);
    const areaValue = widthValue * heightValue;
    if (widthValue > 0 && heightValue > 0) {
      setArea(areaValue);
    } else {
      setArea("Please Enter Positive Value Of With and Height");
    }
  };

  useEffect(() => calculateArea(), [width, height]);

  return (
    <div>
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Enter Width"
        min={0}
      ></input>
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter Height"
        min={0}
      ></input>
      <p>Area: {area !== null ? area : ""}</p>
    </div>
  );
};

export default Rectangle;
