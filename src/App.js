import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Home from './component/pages/Home'
import Update from './component/pages/Update'
import View from './component/pages/View'

const App = () => {
  return (
    <>
        <Switch>
            <Route exact path="/" component={()=><Home />} />
            <Route exact path='/view/:id' component={()=><View />} />
            <Route exact path='/update/:id' component={()=><Update />} />
        </Switch>
    </>
  )
}

export default App
