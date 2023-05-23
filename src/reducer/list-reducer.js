export default function listReducer(list, action) {
  switch (action.type) {
    case "SET_LIST":
      console.log("set list");
      return action.payload;
    case "ADD_LIST":
      return [...list, action.payload];
    case "REMOVE_LIST":
      return list.filter((item) => item.id !== action.id);
    default:
      throw new Error(`다룰 수 없는 action type입니다. ${action.type}`);
  }
}
