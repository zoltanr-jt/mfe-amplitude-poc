import {createInstance} from "@amplitude/analytics-browser";

export const amp3 = createInstance();
amp3.init('REPLACE_WITH_API_KEY', undefined, { defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true }});


export function App() {
  return (
    <div>
      <h1>Welcome to remote-app2!</h1>
      <button onClick={() => amp3.track("Event sent from Remote2 app: btn", {
        source: "remoteApp2",
      })}>Send event from remote app 1)!</button>

    </div>
  );
}

export default App;
