import React from "react";

const EmailInput = ({ value, onChange, error }) => (
  <>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={value}
      onChange={onChange}
      required
    />
    {error && <span className="error">{error}</span>}
  </>
);

export default EmailInput;
