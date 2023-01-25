import React, { useState } from "react";


export default function FormText(props) {
  const handleOnChange = (event) => {
    // console.log("first");

    SetText(event.target.value);

  };
  const changeToUpper = () => {
    // console.log(Text);
    let upperText = text.toUpperCase();
    SetText(upperText);
  };
  const clearText = () => {
    // console.log(Text);
    let emptyText = "";
    SetText(emptyText);
  };
  const changeToLower = () => {
    // console.log(Text);
    let lowerText = text.toLowerCase();
    SetText(lowerText);
  };
  const copy = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    // let copy = document.getElementById("copy");
    // copy.addEventListener("click", () => {


    let copyAlert = document.getElementById("copyAlert");
    copyAlert.style.display = "inlineBlock";
    copyAlert.innerHTML += ` <div className="alert alert-primary" role="alert">
    Text Copied Successfully!!
    </div>`
    setTimeout(() => {
      copyAlert.innerHTML = "";
    }, 3000);
    // })
  }
  const [text, SetText] = useState("");
  let wordCount = 0;
  let split = text.split(" ");

  for (let i = 0; i < split.length; i++) {
    if (split[i] !== "") {
      wordCount += 1;
    }

  }
  let chars = text.length;

  // console.log(wordCount)
  return (
    <>
      <div id="copyAlert" className="alert alert-success" role="alert"></div>
      <div style={{ color: props.mode === "dark" ? "white" : "#343a40" }}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" id="textBox" style={{ backgroundColor: props.mode === "dark" ? "#343a40" : "white", color: props.mode === "dark" ? "white" : "#343a40" }} rows="6" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="buttons">
          <button className="btn btn-primary mx-1 my-1" onClick={changeToUpper}>Convert Text Into Upper Case</button>
          <button className="btn btn-primary mx-1 my-1" onClick={changeToLower}>Convert Text Into Lower Case</button>
          <button className="btn btn-primary mx-1 my-1" id="copy" onClick={copy}>Copy Text</button>
          <button className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear text</button>
        </div>
        <h2 className="my-3">Your text summary</h2>
        <p>
          {wordCount} Words and {chars} Characters
        </p>
        <p>{text.length === 0 ? 0 : 0.008 * text.split(" ").length} Minutes reading</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Enter text above to see preview" : text}</p>
      </div>
    </>
  );
}
