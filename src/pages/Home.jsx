import React from "react"
import {useDispatch, useSelector} from "react-redux"

import {Categories, PizzaBlock, SortPopup} from "../components"

import {setCategory} from "../redux/actions/filters"

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortItems = [
  {type: 'popular', name: 'популярности'},
  {type: 'price', name: 'цене'},
  {type: 'alphabet', name: 'алфавиту'}
]

const Home = () => {

  const dispatch = useDispatch()
  const pizzas = useSelector(({pizzasReducer}) => pizzasReducer.items)

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
        {
          pizzas && pizzas.map(obj => (
            <PizzaBlock key={obj.id} {...obj} />
          ))
        }
      </div>
    </div>
  )
}

export default Home