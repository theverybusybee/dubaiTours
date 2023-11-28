import styles from "./page.module.scss";
import { getTourData } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import TourPage from "@/components/pages/tour-page/tour-page";

export default async function Page() {

  const bodyParams = {
    main: {
      url: `/en/tour/`,
      city: "dubai",
      lang: "russian",
      currency: "RUB",
    },
    page: 1,
  };

  const data = await getTourData(bodyParams).catch((err) => console.error(err));

  return data?.Header ? (
    <TourPage data={data} params={bodyParams} />
  ) : (
    <div>404 Not Found</div>
  );
}
