import {
  getReservationDataByTourId,
} from "@/utils/fetches";
import {
  GET_RESERVATION_DATA_FAILED,
  GET_RESERVATION_DATA_REQUEST,
  GET_RESERVATION_DATA_SUCCESS,
} from "../constants/reservation-modal";
import { TDispatch } from "../store";

export function getReservationModalData(id: string) {
  return function (dispatch: TDispatch) {
    dispatch({ type: GET_RESERVATION_DATA_REQUEST });
    getReservationDataByTourId(id)
      .then((res) => {
        if (res.Reserve) {
          dispatch({
            type: GET_RESERVATION_DATA_SUCCESS,
            payload: res.Reserve,
          });
        } else {
          dispatch({ type: GET_RESERVATION_DATA_FAILED });
        }
      })
      .catch(() =>
        dispatch({
          type: GET_RESERVATION_DATA_FAILED,
        })
      );
  };
}
