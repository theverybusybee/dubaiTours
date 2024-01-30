import styles from "./page.module.scss";
import { montserrat } from "@/app/fonts";
import CheckoutSection from "@/components/page-sections/checkout-section/checkout-section";

export default function Checkout() {
  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <CheckoutSection />
    </div>
  );
}
