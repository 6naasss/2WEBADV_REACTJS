import React from "react";

export default function Image({ src, alt }) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image"  />
    </div>
  );
}
