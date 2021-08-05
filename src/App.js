import React, {useEffect, useState} from "react"
import {Route} from 'react-router-dom'
import {connect} from "react-redux"

import {Header} from "./components"
import {Cart, Home} from "./pages"
import {setPizzas} from "./redux/actions/pizzas"

const App = (props) => {

  // const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((data) => {
        props.setPizzas(data.pizzas)
      })
  }, [])

  console.log(props)

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' render={() => <Home pizzas={props.items}/>}/>
        <Route exact path='/cart' component={Cart}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzasReducer.items,
    filters: state.filtersReducer
  }
}

const mapDispatchToProps = {
  setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
