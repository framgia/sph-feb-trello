const initialState = [
  {
    title: "To Do",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Setup Project"
      },
      {
        id: 1,
        text: "Install necessary Packages"
      }
    ]
  },
  {
    title: "In Progress",
    id: 1,
    cards: [
      {
        id: 0,
        text: "ERD Design"
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