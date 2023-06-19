import React from "react";

const LastNameInput = ({ value, onChange, error }) => (
  <>
    <label htmlFor="lastname">Фамилия:</label>
    <input
      type="text"
      id="lastname"
      name="lastname"
      value={value}
      onChange={onChange}
      required
    />
    {error && <span className="error">{error}</span>}
  </>
);

export default LastNameInput;
