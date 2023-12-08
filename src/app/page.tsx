import MainPage from "@/components/pages/main-page/main-page";
import { getHomeData } from "@/utils/fetches";

export default async function Home() {
  const data = getHomeData();

  return (await data)?.res.Header ? (
    <MainPage data={(await data)?.res} />
  ) : (
    <div>404 Not Found</div>
  );
}
