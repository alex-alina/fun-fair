import { useState } from "react";
import "./index.css";
import ThreePointVis, { type LayoutName } from "./threePointVis/ThreePointVis";
import clsx from "clsx";

const data = new Array(1000).fill(0).map((d, id) => ({ id }));

function App() {
  const [layout, setLayout] = useState<LayoutName>("grid");

  return (
    <div className="relative box-border h-screen p-4">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <ThreePointVis data={data} layout={layout} />
      </div>
      <div className="relative z-10 flex w-fit items-center rounded-xl bg-gray-950 px-4 py-3 text-white">
        <strong>Layouts</strong>
        <button
          onClick={() => setLayout("grid")}
          className={clsx(
            "mx-2 w-fit cursor-pointer rounded-xl bg-gray-950 px-3 py-1 tracking-wider uppercase hover:bg-gray-700",
            {
              "bg-gray-800 font-bold text-yellow-300": layout === "grid",
            },
          )}
        >
          Grid
        </button>
        <button
          onClick={() => setLayout("spiral")}
          className={clsx(
            "w-fit cursor-pointer rounded-xl bg-gray-950 px-3 py-1 tracking-wider text-white uppercase hover:bg-gray-700",
            {
              "bg-gray-800 font-bold text-yellow-300": layout === "grid",
            },
          )}
        >
          Spiral
        </button>
      </div>
    </div>
  );
}

export default App;
