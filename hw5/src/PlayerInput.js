import React, { useState, memo } from "react";

const PlayerInput = memo(({ id, label, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(id, userName);
  };

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type="text"
        placeholder="Github Username"
        autoComplete="off"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="button" type="submit" disabled={!userName.length}>
        Submit
      </button>
    </form>
  );
});

export default PlayerInput;
