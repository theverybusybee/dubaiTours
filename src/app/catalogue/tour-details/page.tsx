import styles from "./page.module.scss";
import { getTourDetails } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import TourDetailsPage from "@/components/pages/tour-details-page/tour-details-page";
import { TTourDetailsData } from "@/app/lib/pages-types";

export default async function TourDetails() {
  const data: Promise<{ message: string; res: TTourDetailsData }> = getTourDetails();

  return (
    <div className={`${montserrat.variable} ${styles.container}`}>
      <TourDetailsPage data={(await data).res} tourId={""} />
    </div>
  );
}
