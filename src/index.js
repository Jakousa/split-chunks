import React, { Suspense, useState } from 'react'
import { render } from 'react-dom'

const App1 = React.lazy(() => import('../app1'))
const App2 = React.lazy(() => import('../app2'))

const Content = ({ app }) => {
  if (app === 1) {
    return (
      <Suspense fallback={null}>
        <App1 />
      </Suspense>
    )
  }
  if (app === 2) {
    return (
      <Suspense fallback={null}>
        <App2 />
      </Suspense>
    )
  }
  return null
}

const App = () => {
  const [app, setApp] = useState(0)

  const handleClick = (app) => () => setApp(app)

  return (
    <div>
      <Content app={app} />
      <button onClick={handleClick(0)}> away </button>
      <button onClick={handleClick(1)}> one </button>
      <button onClick={handleClick(2)}> two </button>
    </div>
  )
}

render(<App />, document.getElementById('root'))