import React from "react"
import {Categories, PizzaBlock, SortPopup} from "../components"

const Home = ({pizzas}) => {

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => alert(item)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
        <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          pizzas.map(obj => (
            <PizzaBlock key={obj.id} {...obj} />
          ))
        }
      </div>
    </div>
  )
}

export default Home