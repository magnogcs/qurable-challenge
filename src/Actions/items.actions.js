import { itemsConstants } from "../Constants";
import { itemsService } from "../Services";
import { alertActions } from "./";

export const itemsAction = {
  getItems,
  getItemDetails,
  getItemsByCreator,
};

function getItems(query) {
  return (dispatch) => {
    itemsService.getItems(query).then(
      (items) => {
        dispatch(success(items));
      },
      (error) => {
        dispatch(alertActions.error("Error to get item, try again soon"));
      }
    );
  };

  function success(items) {
    return { type: itemsConstants.ITEM_REQUEST_SUCCESS, items };
  }
}

function getItemDetails(id) {
  return (dispatch) => {
    itemsService.getItemDetails(id).then(
      (items) => {
        dispatch(success(items));
      },
      (error) => {
        dispatch(alertActions.error("Error to get item, try again soon"));
      }
    );
  };

  function success(items) {
    return { type: itemsConstants.ITEM_DETAIL_REQUEST_SUCCESS, items };
  }
}

function getItemsByCreator(id) {
  return (dispatch) => {
    itemsService.getItemsByCreator(id).then(
      (items) => {
        dispatch(success(items));
      },
      (error) => {
        dispatch(alertActions.error("Error to get item, try again soon"));
      }
    );
  };

  function success(items) {
    return { type: itemsConstants.ITEM_CREATOR_REQUEST_SUCCESS, items };
  }
}
