export const setLoaded = value => ({
  type: 'SET_LOADED',
  payload: value
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))

  fetch(
    `http://localhost:3001/pizzas?${
      category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})