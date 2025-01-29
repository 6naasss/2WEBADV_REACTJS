import React from "react";

export default function Footer({ classNameFooter, classNameContent, classNameLinks, classNameLink, links, copyright }) {
  return (
    <footer className={classNameFooter}>
      <div className={classNameContent}>
        <ul className={classNameLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className={classNameLink}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="copyright">{copyright}</p>
    </footer>
  );
}
