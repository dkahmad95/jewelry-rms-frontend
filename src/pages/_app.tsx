'use client'
import '@/styles/globals.css'
import {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "@/lib/redux/store";
import {getAmplifyConfig} from "@/lib/amplify.service";

function App({Component, pageProps}: AppProps) {


  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
    getAmplifyConfig();

  }, []);
  if (isServer) return null;

  return (

      <div suppressHydrationWarning>
        <Provider store={store}>
          <PersistGate  loading={null} persistor={persistor} >

        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
          </PersistGate>
        </Provider >
      </div>
  );
}
export default App;