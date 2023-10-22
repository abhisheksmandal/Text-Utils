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

  function formatReadingTime(seconds) {
    if (seconds < 60) {
      return `${seconds} Second${seconds !== 1 ? "s" : ""} read`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} Minute${minutes !== 1 ? "s" : ""} read`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      return `${hours} Hour${
        hours !== 1 ? "s" : ""
      } and ${remainingMinutes} Minute${
        remainingMinutes !== 1 ? "s" : ""
      } read`;
    }
  }

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
      <p>
        {text.trim() === ""
          ? "0 words"
          : `${text.split(/\s+/).filter(Boolean).length} words and ${
              text.length
            } characters.`}
      </p>

      <p>
        {text.trim() === ""
          ? "0 Seconds read"
          : text.split(" ").length > 0
          ? formatReadingTime((text.split(" ").length * 60) / 200)
          : "0 Seconds read"}
      </p>

      <h3>Brief summary</h3>
      <p>{text}</p>
    </div>
  );
}
