import React from "react";
import ReactDOM from "react-dom/client"

function JsxApp () {
    return (
        <div>
            <div>Hi, I'm div</div>
            <h1>Hi, I'm header inside div</h1>
            <ul>
                <li>Hi, I'm list item inside list inside div</li>
                <li>Hi, I'm list item inside list inside div</li>
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<JsxApp/>);
