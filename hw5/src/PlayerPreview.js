import { memo } from "react";
import React from "react";

const PlayerPreview = memo(({ avatar, username, children }) => (
  <div>
    <div className="column">
      <img src={avatar} alt="avatar" className="avatar" />
      <h3>{username}</h3>
    </div>
    {children}
  </div>
));

export default PlayerPreview;
