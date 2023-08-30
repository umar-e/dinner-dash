const itemReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case "GET_ITEMS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ITEMS_SUCCESS":
      return {
        loading: false,
        items: action.payload.data,
        categories: action.payload.categories,
      };
    case "GET_ITEMS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "NEW_ITEM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "NEW_ITEM_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "NEW_ITEM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_ITEM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_ITEM_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "DELETE_ITEM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CHANGE_ITEM_STATUS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CHANGE_ITEM_STATUS_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "CHANGE_ITEM_STATUS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "EDIT_ITEM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_ITEM_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "EDIT_ITEM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default itemReducer;
