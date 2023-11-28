import { getTourData } from "@/utils/fetches";
import ToursInDubaiPage from "@/components/pages/tours-in-dubai-page/tours-in-dubai-page";

export default async function Page({ params }: { params: { city: string } }) {
  const { city } = params;

  const fetchParams = {
    language: "russian",
    currency: "RUB",
    type: "tour",
    city: city,
    pageNumber: 1,
  };

  const data = await getTourData(fetchParams).catch((err) =>
    console.error(err)
  );

  return data?.Header ? (
    <ToursInDubaiPage data={data} />
  ) : (
    <div>404 Not Found</div>
  );
}
