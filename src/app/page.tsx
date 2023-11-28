import React from "react";
import MainPage from "@/components/pages/main-page/main-page";
import { mainPageData } from "@/constants/data-examples";

export default async function Home() {

  // const data = await getHomeData().catch((err) => console.log(err));
  const data = mainPageData;

  return data?.Header ? <MainPage data={data} /> : <div>404 Not Found</div>;
}
