import { itemsConstants } from "../Constants";

export function items(state = {}, action) {
  switch (action.type) {
    case itemsConstants.ITEM_REQUEST_SUCCESS:
      return { itemsData: action.items };
    default:
      return state;
  }
}

export function itemDetails(state = {}, action) {
  switch (action.type) {
    case itemsConstants.ITEM_DETAIL_REQUEST_SUCCESS:
      return { itemDetails: action.items };
    default:
      return state;
  }
}

export function itemCreators(state = {}, action) {
  switch (action.type) {
    case itemsConstants.ITEM_CREATOR_REQUEST_SUCCESS:
      return { itemCreators: action.items };
    default:
      return state;
  }
}
