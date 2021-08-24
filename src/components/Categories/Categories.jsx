import React from "react"
import PropTypes from "prop-types"

const Categories = ({activeCategory, items, onClickCategory}) => {

  const elements = items && items.map(
    (item, index) =>
      <li
        className={activeCategory === index ? 'active' : ''}
        onClick={() => onClickCategory(index)}
        key={item}>{item}
      </li>
  )

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory(null)} className={activeCategory === null ? 'active' : ''}>Все</li>
        {elements}
      </ul>
    </div>
  )
}

Categories.propTypes = {
  activeCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired

}

Categories.defaultProps = {activeCategory: null, items: []}

export default React.memo(Categories)