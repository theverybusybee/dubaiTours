import styles from "./page.module.scss";
import { getCatalogueData } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import CheckoutSection from "@/components/page-sections/checkout-section/checkout-section";

export default async function Catalogue() {
  const data = await getCatalogueData();

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      {/* <CataloguePage data={data} /> */}
      <CheckoutSection />
    </div>
  );
}
