import React from 'react'

import GlobalStyles from '../src/components/globalstyles'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
