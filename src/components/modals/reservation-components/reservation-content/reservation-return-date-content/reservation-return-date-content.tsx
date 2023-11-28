import styles from "./reservation-return-date-content.module.scss";
import ReservationOptionButton from "@/components/modals/reservation-components/reservation-option-button/reservation-option-button";
import Calendar from "@/images/logos/icons/calendar.svg";
import { SET_RESERVATION_LABELS_STATE_RETURN_DATE } from "@/redux/constants/reservation-modal";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { SyntheticEvent, useEffect } from "react";

interface Props {
  onButtonClick: (() => void) | ((e: SyntheticEvent) => void);
  activeButtonState: string;
  extraClass?: string;
}

function ReservationReturnDateContent({
  onButtonClick,
  activeButtonState,
  extraClass,
}: Props) {
  const returnData = useAppSelector(
    (state) => state.reservationModalData.allData.ReserveOne
  );
  const dispatch = useAppDispatch();

  const { reservationFormState } = useAppSelector(
    (state) => state.reservationModalData
  );

  useEffect(() => {
    dispatch({ type: SET_RESERVATION_LABELS_STATE_RETURN_DATE });
  }, []);

  useEffect(() => {
    !!reservationFormState.returnDate &&
      dispatch({ type: SET_RESERVATION_LABELS_STATE_RETURN_DATE });
  }, [reservationFormState.returnDate]);

  return returnData ? (
    <div className={`${styles.container} ${extraClass}`}>
      {returnData?.freeDate?.map((el, index: number) => {
        return (
          <ReservationOptionButton
            key={index}
            title={el.nameDay}
            additionalData={el.DataDay}
            onButtonClick={onButtonClick}
            activeButtonState={activeButtonState}
          />
        );
      })}
      <ReservationOptionButton
        title={returnData?.calendarButton}
        Icon={<Calendar width={16} height={16} />}
        onButtonClick={onButtonClick}
        buttonValue={returnData.calendarButton}
        activeButtonState={activeButtonState}
      />
    </div>
  ) : null;
}

export default ReservationReturnDateContent;
