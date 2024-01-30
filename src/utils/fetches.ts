import { IReservationData } from "@/app/lib/types/reservation-types";
import { baseUrl, checkResponse } from "./constants";
import { TCatalogue, TTourDetailsData } from "@/app/lib/types/pages-types";

export type TRequestOptions = {
  method: "POST" | "GET" | "PATCH";
  mode: RequestMode | undefined;
  cache: RequestCache | undefined;
  credentials: RequestCredentials | undefined;
  redirect: RequestRedirect | undefined;
  referrerPolicy: ReferrerPolicy | undefined;
  headers?: {
    "Content-Type":
      | "application/json"
      | "multipart/form-data"
      | "application/x-www-form-urlencoded;charset=UTF-8"
      | "text/html; charset=utf-8";
    "Accept-Encoding"?: "gzip, deflate, br";
    Authorization?: string;
  };
  body?: any;
};

// тестовый
export async function getHomeData() {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  const res = await fetch(`${baseUrl}/api/main/`, requestOptions);
  return checkResponse(res);
}

export const getCatalogueData = async (): Promise<{ res: TCatalogue }> => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  const res = await fetch(`${baseUrl}/api/catalogue/`, requestOptions);
  return checkResponse(res);
};

export const getCatalogueCards = (pageNumber: number) => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: "/en/dubai/",
        city: "dubai",
        lang: "english",
        currency: "usd",
      },
      page: pageNumber,
    }),
  };
  return fetch(`${baseUrl}/frontapi/catalog/page/`, requestOptions).then(
    checkResponse
  );
};

export async function getTourData() {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/api/gallery`, requestOptions).then(checkResponse);
}

export const getTourDetails = async (): Promise<{ res: TTourDetailsData }> => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  const res = await fetch(`${baseUrl}/api/tour-details`, requestOptions);
  return checkResponse(res);
};

export const getProfile = () => {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: "/en/dubai/personal/",
        city: "dubai",
        lang: "english",
        currency: "usd",
      },
    }),
  };
  return fetch(`${baseUrl}`, requestOptions).then(checkResponse);
};

export const getReservationData = (
  tourId: string
): Promise<{ message: string; res: IReservationData }> => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(
    `${baseUrl}/api/reserve` + "?" + new URLSearchParams({ id: tourId }),
    requestOptions
  ).then(checkResponse);
};
