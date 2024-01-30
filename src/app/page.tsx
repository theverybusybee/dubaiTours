import MainPage from "@/components/pages/main-page/main-page";
import { getHomeData } from "@/utils/fetches";

async function getData() {
  const res =
    (await getHomeData()
      .then((res) => res.res)
      .catch((err) => console.log(err))) || null;

  return res;
}

export default async function Home() {
  const data = await getData();
  return data ? <MainPage data={data} /> : <div>404 Not Found</div>;
}
