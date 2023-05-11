
import { track } from "@amplitude/analytics-browser";


export function NxWelcome({ title }: { title: string }) {
  return (

    <div className="text-center">
      <button onClick={() => track("Event sent from HOST app", {
        source: "host",
      })}>Send event with Amplitude (host)!</button>
    </div>
  );
}

export default NxWelcome;
