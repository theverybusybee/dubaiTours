import styles from "./page.module.scss";
import { montserrat } from "@/app/fonts";
import TourDetailsPage from "@/components/pages/tour-details-page/tour-details-page";

export default async function TourDetails() {
  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <TourDetailsPage />
    </div>
  );
}
