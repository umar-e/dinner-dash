export const getAllItemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case "GET_ITEMS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_ITEMS_SUCCESS":
      return {
        loading: false,
        items: action.payload,
      };
    case "GET_ITEMS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const newItemReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW_ITEM_REQUEST":
      return {
        loading: true,
      };
    case "NEW_ITEM_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "NEW_ITEM_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteItemReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_ITEM_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_ITEM_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELETE_ITEM_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getItemByIdReducer = (state = { item: {} }, action) => {
  switch (action.type) {
    case "GET_ITEM_BY_ID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_ITEM_BY_ID_SUCCESS":
      return {
        loading: false,
        item: action.payload,
      };
    case "GET_ITEM_BY_ID_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const changeItemStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_ITEM_STATUS_REQUEST":
      return {
        loading: true,
      };
    case "CHANGE_ITEM_STATUS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "CHANGE_ITEM_STATUS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const editItemReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_ITEM_REQUEST":
      return {
        loading: true,
      };
    case "EDIT_ITEM_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "EDIT_ITEM_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
