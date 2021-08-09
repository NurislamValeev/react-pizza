import React, {useEffect} from "react"
import {Route} from 'react-router-dom'
import {useDispatch} from "react-redux"

import {Header} from "./components"
import {Cart, Home} from "./pages"
import {setPizzas} from "./redux/actions/pizzas"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPizzas(data))
      })
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' component={Home}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  )
}

export default App