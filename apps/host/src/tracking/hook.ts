// 3. create custom hook; use this instead useContext(MediaFilesContext)
import {BrowserClient} from "@amplitude/analytics-types";
import {useContext} from "react";
import AnalyticsContext from "./context";

export function useAnalyticsContext(): BrowserClient {
  return useContext(AnalyticsContext) as BrowserClient
}
