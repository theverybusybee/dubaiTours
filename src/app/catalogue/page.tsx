import styles from "./page.module.scss";
import { montserrat } from "@/app/fonts";
import CataloguePage from "@/components/pages/catalogue-page/catalogue-page";
import { getCatalogueData } from "@/utils/fetches";
import { TCatalogue } from "../lib/types/pages-types";

export default async function Catalogue() {
  const data = getCatalogueData();

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <CataloguePage data={(await data)?.res} />
    </div>
  );
}
