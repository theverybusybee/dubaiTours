import React from "react";
import MainPage from "@/components/pages/main-page/main-page";
import { TMain } from "./lib/pages-types";
import { getHomeData } from "@/utils/fetches";

export default async function Home() {
  const data: Promise<{ message: string; res: TMain }> = getHomeData();

  return (await data)?.res.Header ? (
    <MainPage data={(await data)?.res} />
  ) : (
    <div>404 Not Found</div>
  );
}
