import {track} from "@amplitude/analytics-browser";

 const Button = () => {
 return (
    <div>
      <h1>Welcome to Host!</h1>
      <button onClick={() => track("Event sent from HOST app", {
        source: "host",
      })}>Send event with  (host)!</button>
      </div>
 )
}

export  default  Button
