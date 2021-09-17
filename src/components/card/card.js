import React from "react";
import Chip from "../chips/chips";
function card({ title, description, tools }) {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div>
        <div>
          {tools?.map((tool) => (
            <Chip content={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default card;
