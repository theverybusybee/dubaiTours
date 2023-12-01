import React from "react";
import MainPage from "@/components/pages/main-page/main-page";
import { mainData } from "@/redux/reducers/main-data";
import { TMain } from "./lib/types";
import { getMainData } from "./lib/main-data";
import { getHomeData } from "@/utils/fetches";

export default async function Home() {
  // const data = await getHomeData().catch((err) => console.log(err));
  const data: Promise<{ message: string; res: TMain }> = getHomeData();

  return (await data)?.res.Header ? (
    <MainPage data={(await data)?.res} />
  ) : (
    <div>404 Not Found</div>
  );
}
