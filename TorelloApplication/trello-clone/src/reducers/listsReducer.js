import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 3;

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
        id: 2,
        text: "ERD Design"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.title,
        cards: [],
        id: listID
      }
      listID++;
      return [...state, newList]
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text:action.payload.text,
        id:cardID
      }
      cardID++;

      const newState = state.map(list => {
        if(list.id === action.payload.listId){
          return { 
            ...list, 
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      })

      return newState;
    default: 
      return state;
  }
}


export default listsReducer;