import {track} from "@amplitude/analytics-browser";

const Button = () => {
 return (
    <div>
      <h1>Welcome to Host!</h1>
      <button onClick={() => track("Event sent from HOST app: btn", {
        source: "host",
      })}>Send event from host!</button>
      </div>
 )
}

export  default  Button
