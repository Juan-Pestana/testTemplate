import React from 'react'
import { GlobalStyles } from 'twin.macro'

import '../src/styles.css'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
