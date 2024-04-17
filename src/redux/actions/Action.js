export const addcards = (items) => {
  return {
    type: "add_card",
    payload: items,
  };
};

//delete item from addcard
export const delet = (id) => {
  return {
    type: "delt_card",
    payload: id,
  };
};
//remove individual item
export const remove = (iteam) => {
  return {
    type: "remove_card",
    payload: iteam,
  };
};
