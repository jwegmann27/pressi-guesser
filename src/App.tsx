import "./App.css";
import { useState } from "react";
import "./App.css";
import PresidentTimeline from "./components/PresidentTimeline";

function App() {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <>
      <h1>PRESI GUESSER</h1>
      <p>guess guess guess logo coming soon</p>
      {!showTimeline && (
        <div>
          <button onClick={() => setShowTimeline(true)}>
            Go to President Timeline
          </button>
        </div>
      )}
      <div className="card">
        {showTimeline && (
          <div>
            <PresidentTimeline />
            <button onClick={() => setShowTimeline(false)}>Go to home</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
