import React from "react";

const FirstNameInput = ({ value, onChange, error }) => (
  <>
    <label htmlFor="firstname">Имя:</label>
    <input
      type="text"
      id="firstname"
      name="firstname"
      value={value}
      onChange={onChange}
      required
    />
    {error && <span className="error">{error}</span>}
  </>
);

export default FirstNameInput;
