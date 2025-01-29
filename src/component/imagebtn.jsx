import React from "react";
import { useState } from "react";

export default function Imagebtn({ btnn, sectionbtnn, classnamediv, textebtnn, imagecontent, sectionimage, image, altimage }) {
  return (
    <div className={classnamediv}>
      <div className={btnn}>
      <button className={sectionbtnn}>{textebtnn}</button>
      </div>
      <div className={imagecontent}>
        <img src={image} alt={altimage} className={sectionimage} />
      </div>
    </div>
  );
}