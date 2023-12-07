import { IReservationData } from "@/app/lib/types/reservation-types";
import { baseUrl, checkResponse } from "./constants";
import { IReservationFormData } from "./types";

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
export const getHomeData = () => {
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

  return fetch(`${baseUrl}/api/main/`, requestOptions).then(checkResponse);
};

export const getCatalogueData = () => {
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

  return fetch(`${baseUrl}/api/catalogue/`, requestOptions).then(checkResponse);
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

export const getTourDetails = () => {
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

  return fetch(`${baseUrl}/api/tour-details`, requestOptions).then(
    checkResponse
  );
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
  return fetch(`http://localhost:3000`, requestOptions).then(checkResponse);
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

// export const registernRequest = async (form: TRegisterForm) => {
//   return await fetch(`${baseUrl}/api/register`, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(form),
//   }).then(checkResponse);
// };

export const getReservationUpdatedData = (form: IReservationFormData) => {
  const requestOptions: TRequestOptions = {
    method: "GET",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  const params = new URLSearchParams({
    calc: form.calc,
    type: form.type,
    id: form.id,
    date: `${form.date.arrivalDate}%20${form.date.returnDate}`,
    time: form.time,
    adults: form.adults,
    children: form.children,
    options: form.options,
  }).toString();

  return fetch(`${baseUrl}/api/reserve/checkout` + "?" + params, requestOptions).then(
    checkResponse
  );
};
