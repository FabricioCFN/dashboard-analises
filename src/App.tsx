import React from 'react'
import styled from 'styled-components'

const Container = styled.div\`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
  font-family: sans-serif;
\`;

function App() {
  return (
    <Container>
      <h1>Dashboard de Análises</h1>
    </Container>
  )
}

export default App