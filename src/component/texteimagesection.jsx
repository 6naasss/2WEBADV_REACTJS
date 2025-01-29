import React from "react";
import { useState } from "react";

export default function TextImageSection({ classnamediv, textcontent, sectiontitle, sectionbutton, sectiontext, imagecontent, sectionimage, titreh2, textebtn, paragraphe, image, altimage }) {
  return (
    <div className={classnamediv}>
      <div className={textcontent}>
        <h2 className={sectiontitle}>{titreh2}</h2>
        <button className={sectionbutton}>{textebtn}</button>
        <p className={sectiontext}>{paragraphe}</p>
      </div>
      <div className={imagecontent}>
        <img src={image} alt={altimage} className={sectionimage} />
      </div>
    </div>
  );
}
//pas eu le temps de l'utiliser 