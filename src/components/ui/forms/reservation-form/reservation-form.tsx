"use client";

import Button from "../../buttons/button/button";
import Checkbox from "../../inputs/checkbox/checkbox";
import FormInput from "../../inputs/form-input/form-input";
import styles from "./reservation-form.module.scss";
import { useTDispatch } from "@/types/types";
import {
  SET_RESERVATION_FORM_STATE_TRANSFER,
  SET_RESERVATION_MODAL_OPENED,
} from "@/redux/constants/reservation-modal";
import { useAppSelector } from "@/redux/redux-hooks";
import { TTourReserve } from "@/app/lib/sections-types";

interface Props {
  data: TTourReserve;
  extraClass?: string;
}

function ReservationForm({ data, extraClass }: Props) {
  const dispatch = useTDispatch();
  const reservationFormState = useAppSelector(
    (state) => state.reservationModalData.reservationFormState
  );

  return (
    <div className={`${styles.container} ${extraClass}`}>
      <p className={styles.title}>
        <span
          className={`${styles.span} ${styles.span_color_grey} ${styles.span_textDecoration_lineThrough}`}
        >
          {data.priceReserve.oldPrice}
        </span>
        <span> {data.priceReserve.price} </span>
        <span className={`${styles.span_fontWeight_regular}`}>
          {data.priceReserve.priceTitle}
        </span>
      </p>
      <form className={styles.form} action="submit">
        <FormInput
          name="people"
          title={data.DateTime.title}
          value={data.DateTime.des}
          disabled
        />
        <FormInput
          name="date"
          title={data.People.title}
          value={data.People.des}
          disabled
        />
        <Checkbox
          title={data.Transfer.title}
          caption={data.Transfer.des}
          dispatchType={SET_RESERVATION_FORM_STATE_TRANSFER}
          checked={reservationFormState.options.Transfer}
        />
        <Button
          onClick={() => dispatch({ type: SET_RESERVATION_MODAL_OPENED })}
          extraClass={styles.button}
          content={data.Button}
          htmlType="button"
        />
      </form>
    </div>
  );
}

export default ReservationForm;
