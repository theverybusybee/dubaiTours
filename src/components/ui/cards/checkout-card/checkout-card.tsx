"use client";

import Image from "next/image";
import styles from "./checkout-card.module.scss";
import photo from "@/images/photos/entertainment.png";
import Bin from "@/images/logos/icons/bin.svg";
import Counter from "../../inputs/counter/counter";
import { useMediaQuery } from "@mui/material";

function CheckoutCard() {
  
  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <li className={styles.listItem}>
      {!isMobile && (
        <Image
          className={styles.image}
          src={photo}
          alt="card photo"
          width={185}
          height={185}
        />
      )}

      <div className={styles.mainContent}>
        <div className={styles.titleContent}>
          {isMobile && (
            <Image
              className={styles.image}
              src={photo}
              alt="card photo"
              width={115}
              height={115}
            />
          )}
          <div className={styles.titleContainer}>
            <p className={styles.cardTitle}>Ferrari Park Abu Dabi</p>
            <div className={styles.priceContainer}>
              <p className={`${styles.price} ${styles.lastPrice}`}>$350</p>
              <p className={`${styles.price} ${styles.newPrice}`}>$250 price</p>
            </div>
          </div>
          <button className={styles.deleteButton}>
            <Bin width={17} height={17} />
          </button>
        </div>
        <ul className={styles.cardInfoList}>
          <li className={styles.cardInfoItem}>
            <p className={styles.cardInfoTitle}>Date and Time</p>
            <p className={styles.cardInfoContent}>Tomorrow, 16 June - 10:00</p>
          </li>
          <li className={styles.cardInfoItem}>
            <p className={styles.cardInfoTitle}>Included</p>
            <p className={styles.cardInfoContent}>Transfer, food</p>
          </li>
        </ul>
        <ul className={styles.peopleList}>
          <li className={styles.peopleListItem}>
            <Counter
              title="adults"
              minValue={0}
              extraClass={styles.counter}
              titleExtraClass={styles.counterTitle}
            />
          </li>
          <li className={styles.peopleListItem}>
            <Counter
              title="adults"
              minValue={0}
              extraClass={styles.counter}
              titleExtraClass={styles.counterTitle}
            />
          </li>
        </ul>
      </div>
    </li>
  );
}

export default CheckoutCard;
