import styles from "./page.module.scss";
import { montserrat } from "@/app/fonts";
import CataloguePage from "@/components/pages/catalogue-page/catalogue-page";
import { catalogueData } from "@/constants/data-examples";

export default async function Catalogue() {
  const data = catalogueData;

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <CataloguePage data={data} />
    </div>
  );
}
