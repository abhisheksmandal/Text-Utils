import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClear = () => {
    setText('');
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
        className="btn btn-primary"
        onclick="{handleUpClick}"
      >
        Click
      </button>
      <button
        type="button"
        className="btn btn-primary mx-3"
        onclick="{handleOnClear}"
      >
        Clear
      </button>
    </div>
  );
}
