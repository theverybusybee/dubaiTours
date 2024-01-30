import styles from "./page.module.scss";
import { montserrat } from "@/app/fonts";
import CataloguePage from "@/components/pages/catalogue-page/catalogue-page";

export default async function Catalogue() {

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <CataloguePage />
    </div>
  );
}
