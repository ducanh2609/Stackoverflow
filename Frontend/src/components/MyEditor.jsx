// import { useState } from "react";
import React, { useState, useRef, useMemo } from "react";


export default function MyEditor() {
  // const [value, setValue] = useState("");
  let menuIcon = [
    {
      src: "/image/Menubar/header.svg",
    },
    {
      src: "/image/Menubar/Bold.svg",
    },
    {
      src: "/image/Menubar/em.svg",
    },
    {
      src: "/image/Menubar/code.svg",
    },
    {
      src: "/image/Menubar/codeBlock.svg",
    },
    {
      src: "/image/Menubar/link.svg",
    },
    {
      src: "/image/Menubar/quote.svg",
    },
    {
      src: "/image/Menubar/image-insert.svg",
    },
    {
      src: "/image/Menubar/table.svg",
    },
    {
      src: "/image/Menubar/ordered-list.svg",
    },
    {
      src: "/image/Menubar/unordered-list.svg",
    },
    {
      src: "/image/Menubar/horizontal.svg",
    },
  ];

  return (
    <div className="myEditor">
      <div className="menu-bar">
        <div className="menu-item-box">
          {menuIcon.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.src} alt="" />
            </div>
          ))}
        </div>
        <div className="menu-preview">
          <div className="preview-item">
            <img src="/image/Menubar/rich-text.svg" alt="" />
          </div>
          <div className="preview-item">
            <img src="/image/Menubar/max-down.svg" alt="" />
          </div>
          <div className="preview-item">
            <img src="/image/Menubar/max-down-preview.svg" alt="" />
          </div>
        </div>
      </div>

      {/* <textarea
        type="text"
        value={value}
        onChange={(e) => {
          console.log(e.target);
          setValue(e.target.value);
        }}
      ></textarea> */}
    </div>
  );
}
