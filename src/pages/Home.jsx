import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {Categories, LoadingBlock, PizzaBlock, SortPopup} from "../components"

import {setCategory} from "../redux/actions/filters"
import {fetchPizzas} from "../redux/actions/pizzas"


const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
  {type: 'popular', name: 'популярности'},
  {type: 'price', name: 'цене'},
  {type: 'alphabet', name: 'алфавиту'}
]

const Home = () => {
  const dispatch = useDispatch()
  const pizzas = useSelector(({pizzasReducer}) => pizzasReducer.items)
  const isLoaded = useSelector(({pizzasReducer}) => pizzasReducer.isLoaded)
  const {category, sortBy} = useSelector(({filtersReducer}) => filtersReducer)

  useEffect(() => {
    dispatch(fetchPizzas())
  }, [category])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12).fill(0).map((_, index) => (<LoadingBlock key={index}/>))}
      </div>
    </div>
  )
}

export default Home