import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import "./thumbnail.css";

function Thumbnail(props) {
  const {
    imagesList,
    topIndex,
    bottomIndex,
    selectedImageIndex,
    onclickScrollUp,
    onclickScrollDown,
    onSelectImageHandle,
  } = props;

  const onSelectHandle = (index) => {
    console.log("Key", index);
    onSelectImageHandle(index)
  };

  const ThumbnailNotSelected = 'thumbnail'
  const ThumbnailSelected = 'selected'

  return (
    <div className="thumbnails">
      <div className="carouselButton" onClick={onclickScrollUp}>
        <KeyboardArrowUpIcon/>
      </div>

      {imagesList.map((item) => {
        let isSelected = selectedImageIndex == item.id ? true :false
        return item.id >= topIndex && item.id <= bottomIndex ? (
          <img
            className={`${ThumbnailNotSelected} ${isSelected && ThumbnailSelected}`}
            key={item.id}
            src={item.tb}
            alt={`thumbnail ${item.id}`}
            onClick={() => {
              onSelectHandle(item.id);
            }}
          />
        ) : null;
      })}
      <div className="carouselButton" onClick={onclickScrollDown}>
        <KeyboardArrowDownIcon/>
      </div>
    </div>
  );
}

export default Thumbnail;
