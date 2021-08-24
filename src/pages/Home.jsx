import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {Categories, LoadingBlock, PizzaBlock, SortPopup} from "../components"

import {setCategory, setSortBy} from "../redux/actions/filters"
import {fetchPizzas} from "../redux/actions/pizzas"
import {addPizzaToCart} from "../redux/actions/cart"

const sortItems = [
  {name: 'популярности', type: 'rating', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'},
]
const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

const Home = () => {
  const dispatch = useDispatch()
  const pizzas = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup activeSortType={sortBy.type} items={sortItems} onSelectSortType={onSelectSortType}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map(obj =>
            <PizzaBlock
              onClickAddPizza={handleAddPizza}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}
            />)
          : Array(12).fill(0).map((_, index) => (<LoadingBlock key={index}/>))}
      </div>
    </div>
  )
}

export default Home