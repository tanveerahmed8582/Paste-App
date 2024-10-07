import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  return (
    <div className="flex flex-row gap-7">
      <input
        className="p-2 rounded-2xl mt-2 "
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>{pasteId ? "Updated My Button" : "Create My Button"}</button>
    </div>
  );
};

export default Home;
