import React from "react";
import { useState, useEffect } from "react";

import "./thumbnail.css";

const MAX = 10;

function ZoomSlider(props) {
  const { onSliderRangeChange, selectedImageIndex } = props;
  const [value, setValue] = useState(0);


  useEffect(() => {
    setValue(5);
  }, [selectedImageIndex]);

  useEffect(() => {
    onSliderRangeChange && onSliderRangeChange(value);
  }, [value]);

  return (
    <div className="slider-container">
      <input
      className="slider"
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default ZoomSlider;
