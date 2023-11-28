import { getTourDetails } from "@/utils/fetches";
import TourDetailsPage from "@/components/pages/tour-details-page/tour-details-page";

export default async function Page({
  params,
}: {
  params: { city: string; attraction: string; tourId: string };
}) {
  const { city, attraction, tourId } = params;

  const fetchParams = {
    url: `/en/tour/${city}/${attraction}/${tourId}/`,
    city: city,
    lang: "en",
    currency: "uae",
  };

  const data = await getTourDetails(fetchParams).catch((err) =>
    console.error(err)
  );

  return data?.Header ? (
    <TourDetailsPage data={data} tourId={tourId} />
  ) : (
    <div>404 Not Found</div>
  );
}
