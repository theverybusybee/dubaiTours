import { getTourData } from "@/utils/fetches";
import ThemeParksPage from "@/components/pages/theme-parks-page/theme-parks-page";

async function ThemeParks({
  params,
}: {
  params: { city: string; attraction: string };
}) {
  const { city, attraction } = params;

  const fetchParams = {
    language: "russian",
    currency: "RUB",
    type: "tour",
    country: "uae",
    city: city,
    attraction: attraction,
    pageNumber: 1,
  };

  const data = await getTourData(fetchParams).catch((err) =>
    console.error(err)
  );

  return data?.Header ? (
    <ThemeParksPage params={fetchParams} data={data} />
  ) : (
    <div>404 Not Found</div>
  );
}

export default ThemeParks;
