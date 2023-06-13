import React from 'react';
import AnalyticsContext from "./context";
import {createInstance} from "@amplitude/analytics-browser";

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const amplitudeClient = createInstance();
  amplitudeClient.init('37c46696968a81dd4193b5c2e5b5ad9', undefined, { defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true }});


  return (
    <AnalyticsContext.Provider value={amplitudeClient}>{children}</AnalyticsContext.Provider>
);
}

export default AnalyticsProvider;
