// import App from 'next/app'
import React, { useEffect, useRef } from 'react'
import Layout from "../components/Layout";
import TagManager from 'react-gtm-module'

const GTM_ID = 'GTM-MG22WVT'

function MyApp({ Component, pageProps }) {
  const tagManagerArgsRef = useRef({})
  
  useEffect(() => {
    if (!GTM_ID) {
      return
    }
    tagManagerArgsRef.current = {
      gtmId: GTM_ID
    }
    TagManager.initialize(tagManagerArgsRef.current)
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
