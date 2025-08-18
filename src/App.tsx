import "./App.css";
import { useState } from "react";
import "./App.css";
import PresidentTimeline from "./components/PresidentTimeline";

function App() {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <>
      <h1>PRESI GUESSER</h1>
      <div className="card">
        <PresidentTimeline />
      </div>
    </>
  );
}

export default App;
