
import {amp1} from "./app";
 const Button = () => {
 return (
    <div>
      <h1>Welcome to Host!</h1>
      <button onClick={() => amp1.track("Event sent from HOST app: btn", {
        source: "host",
      })}>Send event with  (host)!</button>
      </div>
 )
}

export  default  Button
