// components/GlobalStyles.js
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  .btn{
      ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
