import { uiState } from "../states/uiState";
import {
  UI_ACTIVE_LOADER,
  UI_REMOVE_LOADER,
  UI_ADD_MESSAGE,
  UI_REMOVE_MESSAGE,
} from "../type";

const uiReducer = (state = uiState, action) => {
  switch (action?.type) {
    case UI_ACTIVE_LOADER:
      return {
        ...state,
        loader: true,
      };
    case UI_REMOVE_LOADER:
      return {
        ...state,
        loader: false,
      };
    case UI_ADD_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case UI_REMOVE_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
export default uiReducer;
