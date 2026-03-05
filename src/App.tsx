import "./index.css";
import ThreePointVis from "./threePointVis/ThreePointVis";

const data = new Array(100000).fill(0).map((d, id) => ({ id }));

function App() {
  return (
    <div className="relative box-border h-screen p-4">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <ThreePointVis data={data} />
      </div>
    </div>
  );
}

export default App;
