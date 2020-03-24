const initialState = [
  {
    title: "To Do",
    id: 0,
    cards: [
      {
        id: 0,
        title: "Setup Project"
      },
      {
        id: 1,
        title: "Install necessary Packages"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}


export default listsReducer;