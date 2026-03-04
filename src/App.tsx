import "./index.css";
import ThreePointVis from "./threePointVis/ThreePointVis";

function App() {
  return (
    <div className="relative box-border h-screen p-4">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <ThreePointVis />
      </div>
    </div>
  );
}

export default App;
