import { CONSTANTS } from "../actions";

const initialState = [
  {
    title: "To Do",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Setup Project"
      },
      {
        id: `card-${1}`,
        text: "Install necessary Packages"
      }
    ]
  },
  {
    title: "In Progress",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "ERD Design"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:

      const listID = state.length;

      const newList = {
        title: action.payload.title,
        cards: [],
        id: `list-${listID}`
      }

      return [...state, newList]

    case CONSTANTS.ADD_CARD: {

      const newState = state.map(list => {
        if(list.id === action.payload.listId){
     
          const cardID = list.cards.length;

          const newCard = {
            text:action.payload.text,
            id:`card-${cardID}`
          }

          return { 
            ...list, 
            cards: [...list.cards, newCard]
          };
        }else {
          return list;
        }
      })

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload;

      const newState = [...state];

      if(type === "list") {
        const list = newState.splice(droppableIndexStart, 1);

        newState.splice(droppableIndexEnd, 0, ...list);

        return newState;       
      }

      if(droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if(droppableIdStart !== droppableIdEnd) {
        // find the list where drag happened
        const listStart = state.find(list => droppableIdStart === list.id);

        // pull out the card from the list
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // find the list where drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card)

      }

      return newState;

    default: 
      return state;
  }
}


export default listsReducer;