import React, {useState} from "react";
import Thumbnail from "./thumbnail";
import SelectedImage from "./SelectedImage";
import { images } from "../Utils/thumbnails";

import "./thumbnail.css";
import ZoomSlider from "./ZoomSlider";

function ThumbnailContainer() {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(3);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomValue, setZoomValue] = useState(8);

  const onclickScrollUp = () => {
    if (topIndex > 0) {
      setTopIndex(topIndex - 1);
      setBottomIndex(bottomIndex - 1);
    }
  };

  const onclickScrollDown = () => {
    if (bottomIndex < images.length - 1) {
      setBottomIndex(bottomIndex + 1);
      setTopIndex(topIndex + 1);
    }
  };

  const onSelectImageHandle = (index) => {
    setSelectedImageIndex(index);
  };

  const onSliderRangeChange = (value) => {
    setZoomValue(value);
  };

  return (
    <div className="main-container">
      <div className="container">
        <Thumbnail
          imagesList={images}
          topIndex={topIndex}
          bottomIndex={bottomIndex}
          selectedImageIndex={selectedImageIndex}
          onclickScrollUp={onclickScrollUp}
          onclickScrollDown={onclickScrollDown}
          onSelectImageHandle={onSelectImageHandle}
        />
        <SelectedImage
          imagesList={images}
          selectedImageIndex={selectedImageIndex}
          zoomValue={zoomValue}
        />
      </div>
      <ZoomSlider
        selectedImageIndex={selectedImageIndex}
        onSliderRangeChange={onSliderRangeChange}
      />
    </div>
  );
}

export default ThumbnailContainer;
