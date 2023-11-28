import styles from "./checkout-section.module.scss";

import Button from "@/components/ui/buttons/button/button";
import CheckoutCard from "@/components/ui/cards/checkout-card/checkout-card";
import ContactsForm from "@/components/ui/forms/contacts-form/contacts-form";
import SectionTitle from "@/components/ui/section-title/section-title";

function CheckoutSection() {
  return (
    <div className={styles.container}>
      <SectionTitle
        extraClass={styles.title}
        content="Checkout"
        position="left"
      />
      <div className={styles.cardsContainer}>
        <CheckoutCard />
        <CheckoutCard />
      </div>

      <ContactsForm />

      <div className={styles.payButtonContainer}>
        <div className={styles.priceContainer}>
          <div className={styles.priceContainer}>
            <p className={`${styles.price} ${styles.lastPrice}`}>$350</p>
            <p className={`${styles.price} ${styles.newPrice}`}>$250 price</p>
          </div>
        </div>
        <Button content="Pay" extraClass={styles.button}></Button>
      </div>
    </div>
  );
}

export default CheckoutSection;
