import {createInstance} from "@amplitude/analytics-browser";

export const amp2 = createInstance();
amp2.init('37c46696968a81dd4193b5c2e5b5ad9', undefined, { defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true }});


export function App() {
  return (
    <div>
      <h1>Welcome to remote-app1!</h1>
      <button onClick={() => amp2.track("Event sent from Remote1 app: btn", {
        source: "remoteApp1",
      })}>Send event from remote app 1)!</button>

    </div>
  );
}

export default App;
