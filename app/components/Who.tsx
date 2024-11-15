"use client";

import clsx from "clsx";
import { useState } from "react";

const Who = () => {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      <button
        className="p-4 bg-yellow-200 rounded-md hover:bg-yellow-300 text-xl"
        onClick={() => {
          setShowResponse(showResponse === true ? false : true);
        }}
      >
        Qui je suis ?
      </button>
      <h2
        className={clsx("text-2xl", {
          "opacity-0": showResponse === false,
          "opacity-100": showResponse === true,
        })}
      >
        JE SUIS UN MONSIEUR
      </h2>
    </div>
  );
};

export default Who;
