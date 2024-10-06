import React from "react";
import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState(0);

  return (
    <div>
      <input
        className="p-2 rounded-2xl mt-2 place-content-evenly"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>Create My Paste</button>
    </div>
  );
};

export default Home;
