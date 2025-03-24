import React from "react";
import UsewindowSize from "../Hooks/UsewindowSize.js";

const WindowSizeDisplay = () => {
    const {width, height} = UsewindowSize();
    return (
        <div className="container">
            <h1>Responsive Window Size Tracker</h1>
            <div className="size-box">
                <p>📏 Width: <span>{width}px</span></p>
                <p>📐 Height: <span>{height}px</span></p>
            </div>
        </div>
    )
}

export default WindowSizeDisplay;