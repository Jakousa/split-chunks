import React, { Suspense, useState } from 'react'
import { render } from 'react-dom'
import { withRouter } from 'react-router'
import { Route, BrowserRouter as Router } from 'react-router-dom'
const App1 = React.lazy(() => import('../app1'))
const App2 = React.lazy(() => import('../app2'))

const NavBar = withRouter(({ history }) => {
  const handleClick = (app) => () => {
    if (app === 0) history.push({ pathname: '/' })
    if (app === 1) history.push({ pathname: '/app1' })
    if (app === 2) history.push({ pathname: '/app2' })
  }

  return (
    <div>
      <button onClick={handleClick(0)}> away </button>
      <button onClick={handleClick(1)}> one </button>
      <button onClick={handleClick(2)}> two </button>
    </div>
  )
})

const Routing = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Suspense fallback={null}>
          <Route path="/app1" component={App1} />
          <Route path="/app2" component={App2} />
        </Suspense>
      </div>
    </Router>
  )
}

render(<Routing />, document.getElementById('root'))