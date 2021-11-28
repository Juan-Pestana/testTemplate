import Head from 'next/head'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`
   bg-blue-900 flex flex-col items-center
`}
  .rojo {
    color: red;
  }
`

export default function Home() {
  return (
    <>
      <Container>
        <div
          css={tw`font-bold text-xl bg-gray-100 m-64 text-center rounded p-24`}
        >
          next.js + twin.macro
        </div>
        <div className={`rojo`}>next.js + twin.macro</div>
        <button
          css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3`}
        >
          Hola me llamo antonio
        </button>
      </Container>
      <button className={'btn'}>Hola me llamo antonio</button>
    </>
  )
}
