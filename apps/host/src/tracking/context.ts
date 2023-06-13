import  { createContext } from 'react';
import { BrowserClient } from '@amplitude/analytics-types';


const AnalyticsContext = createContext<BrowserClient | null>(null);
export default  AnalyticsContext
