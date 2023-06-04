import React from "react";

const PasswordInput = ({ value, onChange, error }) => (
  <>
    <label htmlFor="password">Пароль:</label>
    <input
      type="password"
      id="password"
      name="password"
      value={value}
      onChange={onChange}
      required
    />
    {error && <span className="error">{error}</span>}
  </>
);

export default PasswordInput;
