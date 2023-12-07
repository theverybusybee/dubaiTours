import {
  GET_MAIN_DATA_REQUEST,
  GET_MAIN_DATA_SUCCESS,
  GET_MAIN_DATA_FAILED,
  SET_MODAL_STATE,
} from "../constants/main-data";
import { TApiMainDataActions } from "../actions/main-data";

type TMainDataState = {
  allData: any;
  allDataRequest: boolean;
  allDataFailed: boolean;
  modalIsOpen: boolean;
};

export interface ISetMainData {
  readonly type: any;
  payload: any;
}

const initialState: TMainDataState = {
  allData: {},
  allDataRequest: false,
  allDataFailed: false,
  modalIsOpen: false,
};

export const mainData = (
  state = initialState,
  action: TApiMainDataActions
): TMainDataState => {
  switch (action.type) {
    case SET_MODAL_STATE:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };

    case GET_MAIN_DATA_REQUEST:
      return { ...state, allDataRequest: true };

    case GET_MAIN_DATA_SUCCESS:
      return {
        ...state,
        allData: action.payload,
        allDataRequest: false,
        allDataFailed: false,
      };

    case GET_MAIN_DATA_FAILED:
      return { ...state, allDataFailed: true };

    default:
      return state;
  }
};
