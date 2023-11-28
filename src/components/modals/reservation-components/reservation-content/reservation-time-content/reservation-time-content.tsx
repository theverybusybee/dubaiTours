import styles from "./reservation-time-content.module.scss";
import ReservationOptionButton from "@/components/modals/reservation-components/reservation-option-button/reservation-option-button";
import { SET_RESERVATION_LABELS_STATE_RETURN_TIME } from "@/redux/constants/reservation-modal";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { SyntheticEvent, useEffect } from "react";

interface Props {
  onButtonClick: (() => void) | ((e: SyntheticEvent) => void);
  activeButtonState: string;
  extraClass?: string;
}

function ReservationTimeContent({
  onButtonClick,
  activeButtonState,
  extraClass,
}: Props) {
  const dispatch = useAppDispatch();
  const timeData = useAppSelector(
    (state) => state.reservationModalData.allData.ReserveThree
  );

  const { reservationFormState } = useAppSelector(
    (state) => state.reservationModalData
  );

  useEffect(() => {
    dispatch({ type: SET_RESERVATION_LABELS_STATE_RETURN_TIME });
  }, [reservationFormState.returnTime]);

  return timeData ? (
    <div className={`${styles.container} ${extraClass}`}>
      {timeData.time.map((el, index: number) => {
        return (
          <ReservationOptionButton
            key={index}
            title={el.timeFree}
            onButtonClick={onButtonClick}
            activeButtonState={activeButtonState}
            buttonValue={el.timeFree}
          />
        );
      })}
    </div>
  ) : null;
}

export default ReservationTimeContent;
