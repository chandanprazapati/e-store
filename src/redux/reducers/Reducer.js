const INIT_STATE = {
  cards: [],
};

export const cardreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "add_card":
      const IteamIndex = state.cards.findIndex(
        (item) => item.id === action.payload.id
      );
      if (IteamIndex >= 0) {
        state.cards[IteamIndex].qnty += 1;
      } else {
        const indxqt = { ...action.payload, qnty: 1 };
        return {
          ...state, //spread operator to store multiple card items
          cards: [...state.cards, indxqt],
        };
      }
    case "delt_card":
      const del_data = state.cards.filter((dfi) => dfi.id !== action.payload);
      return {
        ...state,
        cards: del_data,
      };
    case "remove_card":
      const IteamIndex_dec = state.cards.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cards[IteamIndex_dec].qnty >= 1) {
        const dltitem = (state.cards[IteamIndex_dec].qnty -= 1);
        console.log([...state.cards, dltitem]);

        return {
          ...state,
          cards: [...state.cards],
        };
      } else if (state.cards[IteamIndex_dec].qnty === 1) {
        const del_data = state.cards.filter((dfi) => dfi.id !== action.payload);
        return {
          ...state,
          cards: del_data,
        };
      }

    default:
      return state;
  }
};
