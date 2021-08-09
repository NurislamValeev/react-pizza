import React, {useState} from "react"

const Categories = ({items, onClickItem}) => {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
    onClickItem(index)
  }

  const elements = items && items.map(
    (item, index) =>
      <li
        className={activeItem === index ? 'active' : ''}
        onClick={() => onSelectItem(index)}
        key={item}>{item}
      </li>
  )

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
        {elements}
      </ul>
    </div>
  )
}

export default React.memo(Categories)