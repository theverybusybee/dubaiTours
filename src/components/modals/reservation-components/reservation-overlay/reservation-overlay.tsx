"use client";

import styles from "./reservation-overlay.module.scss";

import { ReactNode, SyntheticEvent } from "react";
import Modal from "react-modal";
import Arrow from "@/images/logos/icons/arrow-right.svg";
import CloseButton from "@/images/logos/icons/close-popup-button.svg";
import ReservationLabel from "../reservation-label/reservation-label";
import { Montserrat } from "next/font/google";
import Button from "@/components/ui/buttons/button/button";
import { useAppSelector } from "@/redux/redux-hooks";
import { useTDispatch } from "@/types/types";
import { SET_RESERVATION_MODAL_CLOSED } from "@/redux/constants/reservation-modal";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  isOpen?: boolean;
  tourId: string;
  children: ReactNode;
  onSubmitClick: (() => void) | ((e: SyntheticEvent) => void);
  onReturnButtonClick?: (() => void) | ((e: SyntheticEvent) => void);
  extraClass?: string;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function ReservationOverlay({
  children,
  onSubmitClick,
  extraClass,
  onReturnButtonClick,
}: Props) {
  const dispatch = useTDispatch();
  const isMobile = useMediaQuery("(max-width:800px)");

  const isReservationPopupOpen = useAppSelector(
    (state) => state.reservationModalData.isReservationPopupOpen
  );
  const { currentReservationModalData, reservationLabelsState } =
    useAppSelector((state) => state.reservationModalData);

  const { currentOpenedModal, reservationFormState } = useAppSelector(
    (state) => state.reservationModalData
  );

  const overlayStyles = {
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.6)",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: montserrat.style.fontFamily,
  };

  const overlayStylesMobile = {
    background: "#fff",
    zIndex: 1000,
    fontFamily: montserrat.style.fontFamily,
  };

  const contentStylesMobile = {
    padding: 0,
    top: 0,
    left: 0,
    minWidth: "100vw",
    minHeight: "100vh",
    width: "100%",
    borderWidth: "0",
    borderRadius: "0",
  };

  const contentStyles = {
    maxWidth: "606px",
    width: "100%",
    height: "fit-content",
    padding: "88px 105px 101px",
    boxSizing: "border-box" as "border-box",
    margin: "auto",
    border: "none",
    overflow: "visible",
    cursor: "default",
    inset: "0px",
  };

  return currentReservationModalData?.title ? (
    <Modal
      isOpen={isReservationPopupOpen}
      onRequestClose={() => dispatch({ type: SET_RESERVATION_MODAL_CLOSED })}
      style={{
        overlay: isMobile ? overlayStylesMobile : overlayStyles,
        content: isMobile ? contentStylesMobile : contentStyles,
      }}
      className={styles.modal}
      ariaHideApp={false}
    >
      <div className={`${styles.container} ${extraClass}`}>
        <div className={styles.header}>
          {isMobile && (
            <div className={`${styles.backButton}`}>
              <Arrow className={styles.arrow} width={14} height={14} />
              <p className={`${styles.backButtonContent}`}>Back</p>
            </div>
          )}
          <div className={styles.headerWithPrice}>
            <p className={styles.headerTitle}>
              {currentReservationModalData?.title}
            </p>
            {currentOpenedModal.receiptPopup &&
              "Price" in currentReservationModalData && (
                <div className={styles.receiptPriceContainer}>
                  <p className={styles.receiptPrice}>
                    <span
                      className={`${styles.span_color_grey} ${styles.span_textDecoration_lineThrough}`}
                    >
                      {currentReservationModalData.Price?.OldPrice}
                    </span>
                  </p>
                  <p className={styles.receiptPrice}>
                    {currentReservationModalData.Price?.NewPrice}
                  </p>
                </div>
              )}
          </div>

          <CloseButton
            onClick={() => dispatch({ type: SET_RESERVATION_MODAL_CLOSED })}
            className={styles.closeButton}
            width={40}
            height={40}
          />
        </div>
        {!currentOpenedModal.receiptPopup && (
          <div className={styles.labelContainer}>
            {!!reservationLabelsState.returnDate && (
              <ReservationLabel content={reservationLabelsState.returnDate} />
            )}
            {!!reservationLabelsState.returnTime && (
              <ReservationLabel content={reservationLabelsState.returnTime} />
            )}
            {(!!reservationLabelsState.people.adults ||
              !!reservationLabelsState.people.kids) && (
              <ReservationLabel
                content={`adults ${reservationLabelsState.people.adults}, kids ${reservationLabelsState.people.kids}`}
              />
            )}
          </div>
        )}

        <div className={styles.contentContainer}>{children}</div>
        {!currentOpenedModal.receiptPopup ? (
          <div className={styles.footer}>
            {currentReservationModalData?.arrowBack && (
              <button
                className={styles.squareButton}
                onClick={onReturnButtonClick}
              >
                <Arrow className={styles.arrow} width={16} height={16} />
              </button>
            )}
            <Button
              // getUpdateTourDetailsById
              extraClass={styles.button}
              onClick={onSubmitClick}
              htmlType="submit"
              onSubmit={onSubmitClick}
              content="Next"
            />
          </div>
        ) : (
          <div className={styles.receiptButtons}>
            <Button extraClass={styles.button} content="Reserve" />
            <Button
              onClick={() => dispatch({ type: SET_RESERVATION_MODAL_CLOSED })}
              extraClass={styles.button}
              background="white"
              contentColor="darkBlue"
              content="Back to tour"
            />
          </div>
        )}
      </div>
    </Modal>
  ) : null;
}

export default ReservationOverlay;
