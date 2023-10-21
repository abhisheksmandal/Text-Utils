import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClear = () => {
    setText("");
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>Enter your text here</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary me-3"
        onClick={handleUpClick}
      >
        Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary me-3"
        onClick={handleLowClick}
      >
        Lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary me-3"
        onClick={handleOnClear}
      >
        Clear
      </button>
      <h3 className="mt-3">Your text summary</h3>
      <p>{text}</p>
    </div>
  );
}
