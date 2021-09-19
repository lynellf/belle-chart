import React from 'react'
import ReactDOM from 'react-dom'
import Belle from './lib/es6_global/src/Belle.bs.js'

function App() {
  return (
    <>
      <h1>Belle.js</h1>
      <Belle datasets={[]} options={{}} />
    </>
  )
}

function main() {
  ReactDOM.render(<App />, document.getElementById('app'))
}

main()
