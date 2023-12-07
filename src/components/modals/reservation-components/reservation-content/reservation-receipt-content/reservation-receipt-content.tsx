import styles from "./reservation-receipt-content.module.scss";
import { useAppSelector } from "@/redux/redux-hooks";
import { useEffect, useMemo, useState } from "react";
import { IReservationModalDataReceipt } from "@/app/lib/types/reservation-types";

interface Props {
  receiptData: IReservationModalDataReceipt;
  extraClass?: string;
}

function ReservationReceiptContent({ receiptData, extraClass }: Props) {

  const reservationFormState = useAppSelector(
    (state) => state.reservationModalData.reservationFormState
  );

  const [totalPrice, setTotalPrice] = useState({
    withoutDiscount: 0,
    withDiscount: 0,
  });

  const filterPrice = (name: string) => {
    return Number(
      receiptData?.calculator.filter((el) => el.name === name)[0].price
    );
  };

  const priceWithoutDiscount = useMemo(() => {
    return (
      (Number(reservationFormState.people.adults) +
        Number(reservationFormState.people.kids)) *
      (filterPrice("Tour") +
        (reservationFormState.options.Food ? filterPrice("Food") : 0) +
        (reservationFormState.options.Transfer ? filterPrice("Transfer") : 0))
    );
  }, [reservationFormState.people, reservationFormState.options]);


  const priceWithDiscount = useMemo(() => {
    return priceWithoutDiscount - filterPrice("Sale");
  }, [priceWithoutDiscount]);

  useEffect(() => {
    setTotalPrice({
      ...totalPrice,
      withoutDiscount: priceWithoutDiscount,
      withDiscount: priceWithDiscount,
    });
  }, []);

  return receiptData ? (
    <div className={`${styles.receipt} ${extraClass}`}>
      <div className={styles.receiptPriceContainer}>
        <p className={styles.receiptPrice}>
          <span
            className={`${styles.span_color_grey} ${styles.span_textDecoration_lineThrough}`}
          >
            {receiptData.Price.OldPrice}
          </span>
        </p>
        <p className={styles.receiptPrice}>{receiptData.Price.NewPrice}</p>
      </div>
      <ul className={styles.receiptItemsList}>
        <li className={styles.receiptItem}>
          <p className={styles.receiptItemTitle}>
            {receiptData.SelectOrder[0].name}
          </p>
          <p
            className={styles.receiptItemContent}
          >{`${reservationFormState.returnDate}, ${reservationFormState.returnTime}`}</p>
        </li>
        <li className={styles.receiptItem}>
          <p className={styles.receiptItemTitle}>
            {receiptData.SelectOrder[1].name}
          </p>
          <p
            className={styles.receiptItemContent}
          >{`adults ${reservationFormState.people.adults}, kids ${reservationFormState.people.kids}`}</p>
        </li>

        {reservationFormState.options && (
          <li className={styles.receiptItem}>
            {receiptData.calculator.map((el, index: number) => {
              const { name, price, currency } = el;

              if (name === "Tour" || name === "Sale") {
                return (
                  <div
                    key={index}
                    className={styles.receiptItemDetailsContainer}
                  >
                    <div className={styles.receiptItemDetailsContent}>
                      {name}
                    </div>
                    <div className={styles.receiptItemDetailsContent}>
                      {name === "Sale" && "-"}
                      {price}
                      {currency}
                    </div>
                  </div>
                );
              }
              if (
                name === "Transfer" &&
                reservationFormState.options.Transfer
              ) {
                return (
                  <div
                    key={index}
                    className={styles.receiptItemDetailsContainer}
                  >
                    <div className={styles.receiptItemDetailsContent}>
                      {name}
                    </div>
                    <div className={styles.receiptItemDetailsContent}>
                      {price}
                      {currency}
                    </div>
                  </div>
                );
              }

              if (name === "Food" && reservationFormState.options.Food)
                return (
                  <div
                    key={index}
                    className={styles.receiptItemDetailsContainer}
                  >
                    <div className={styles.receiptItemDetailsContent}>
                      {name}
                    </div>
                    <div className={styles.receiptItemDetailsContent}>
                      {price}
                      {currency}
                    </div>
                  </div>
                );
            })}
          </li>
        )}

        <li className={styles.receiptItem}>
          <p className={styles.receiptPrice}>
            <span
              className={`${styles.span_color_grey} ${styles.span_textDecoration_lineThrough}`}
            >
              {`${priceWithoutDiscount}${receiptData.calculator[0].currency}`}
            </span>
          </p>
          <p
            className={styles.receiptPrice}
          >{`${priceWithDiscount}${receiptData.calculator[0].currency}`}</p>
        </li>
      </ul>
    </div>
  ) : null;
}

export default ReservationReceiptContent;
