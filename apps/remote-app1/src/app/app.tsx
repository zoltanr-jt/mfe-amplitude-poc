import React from "react";
import {track} from "@amplitude/analytics-browser";

export function App() {
  return (
    <div>
      <h1>Welcome to Remote1 app!</h1>
      <button onClick={() => track("Event sent from remote1 app: btn", {
        source: "remote1",
      })}>Send event from REMOTE1!</button>
    </div>
  );
}

export default App;
