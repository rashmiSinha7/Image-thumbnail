import React, { useState, useEffect } from "react"; 

import "./thumbnail.css";

function SelectedImage(props) {
  const { selectedImageIndex, imagesList, zoomValue } = props;
  const [isPan, setPan] = useState(false);
  const [posXStart, setPosXStart] = useState(0);
  const [posYStart, setPosYStart] = useState(0);
  const [posXEnd, setPosXEnd] = useState(0);
  const [posYEnd, setPosYEnd] = useState(0);
  const [posx, setPosx] = useState(0);
  const [posy, setPosy] = useState(0);

  const imageHeight = zoomValue * 20 + "%";

  const onMouseDownHandle = (e) => {
    if (isPan) {
      setPosXStart(e.clientX);
      setPosYStart(e.clientY);
    }
  };

  const onMouseDragHandle = (e) => {
    if (isPan) {
      setPosXEnd(e.clientX);
      setPosYEnd(e.clientY);
      if (posXStart - posXEnd < 500 && posYStart - posYEnd < 500) {
        setPosx(posXStart - posXEnd);
        setPosy(posYStart - posYEnd);
      }
    }
  };

  useEffect(() => {
    setPosx(0);
    setPosy(0);
  }, [selectedImageIndex]);

  useEffect(() => {
    if (zoomValue > 6) {
      setPan(true);
    } else {
      setPan(false);
      setPosx(0);
    setPosy(0)
    }
  }, [zoomValue]);

  return (
    <div className="selected-image-container">
      <img
        className="selectedImage"
        src={imagesList[selectedImageIndex].img}
        alt="selected Image"
        height={imageHeight}
        onMouseDown={onMouseDownHandle}
        onDragEnd={onMouseDragHandle}
        style={{
          position: "relative",
          bottom: `${posy}px`,
          right: `${posx}px`,
        }}
      />
    </div>
  );
}

export default SelectedImage;
