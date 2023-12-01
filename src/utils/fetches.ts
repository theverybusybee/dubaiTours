import { baseUrl, checkResponse } from "./constants";
import {
  IGetTourDataArgs,
  IGetTourDetailsArgs,
  IReservationFormData,
} from "./types";

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

export type TLoginForm = {
  readonly email: string;
  readonly password: string;
};

export type TRegisterForm = {
  readonly email: string;
  readonly name: string;
  readonly password: string;
};

// тестовый
export const getHomeData = () => {
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
        url: "/en/dubai/", //адрес страницы которую запрашиваешь
        city: "dubai", //город  по которому идет запрос
        lang: "english", //язык на котором нужно отдать старницу
        currency: "usd", //валюта в которой нуно отображать товары
      },
    }),
  };

  return fetch(`http://localhost:3000/api/home/`, requestOptions).then(
    checkResponse
  );
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

export async function getTourData(args: IGetTourDataArgs) {
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
        url: args.main.url,
        city: args.main.city,
        lang: args.main.lang,
        currency: args.main.currency,
      },
      page: args.page,
    }),
  };

  return fetch(`${baseUrl}/api/tour2`, requestOptions).then(checkResponse);
}

export const getTourDetails = (args: IGetTourDetailsArgs) => {
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
        url: args.main.url,
        city: args.main.city,
        lang: args.main.lang,
        currency: args.main.currency,
      },
    }),
  };

  return fetch(`${baseUrl}:8080/frontapi/catalog/tour/`, requestOptions).then(
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

export const getReservationDataByTourId = (tourId: string) => {
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
    `${baseUrl}:8080/frontapi/checkout/reserve` +
      "?" +
      new URLSearchParams({ calc: "false", type: "tour", id: tourId }),
    requestOptions
  ).then(checkResponse);
};

// export const getReservationDataByTourId = (tourId: string) => {
//   const requestOptions: TRequestOptions = {
//     method: "GET",
//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   };

//   return fetch(
//     `${baseUrl}:8080/frontapi/checkout/reserve` +
//       "?" +
//       new URLSearchParams({
//         calc: "1",
//         type: "tour",
//         id: tourId,
//         date: "19 July",
//         time: "13:48",
//         adults: "2",
//         children: "3",
//         currency: "AED",
//       }),
//     requestOptions
//   ).then(checkResponse);
// };

export function sendFeedback(formData: FormData) {
  const requestOptions: TRequestOptions = {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",
    body: formData,
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  return fetch(`${baseUrl}/api/createReview2`, requestOptions).then(
    checkResponse
  );
}

export const loginRequest = async (form: TLoginForm) => {
  return await fetch(`${baseUrl}/api/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  }).then(checkResponse);
};

// export function sendFeedback(args: ISendFeedbackParams) {
//   // console.log(args, images)
//   const requestOptions: TRequestOptions = {
//     method: "POST",
//     credentials: "same-origin",
//     cache: "no-cache",
//     mode: "cors",
//     headers: {
//       // "Content-Type": "multipart/form-data",
//        "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       transport: args.transport,
//       price_quality: args.price_quality,
//       service: args.service,
//       organization: args.organization,
//       text: args.text,
//       // images: images,
//       tour_id: args.tour_id,
//       user_id: args.user_id,
//     }),
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   };

//   return fetch(`${baseUrl}/api/createReview2`, requestOptions).then(
//     checkResponse
//   );
// }

export const getBlog = () => {
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
      page: "1",
      tab: "tag1",
    }),
  };
  return fetch(`${baseUrl}/api/blog2`, requestOptions).then(checkResponse);
};

export const registernRequest = async (form: TRegisterForm) => {
  return await fetch(`${baseUrl}/api/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  }).then(checkResponse);
};

export const getGuidCity = (city: any) => {
  const requestOptions: TRequestOptions = {
    method: "POST",

    credentials: "same-origin",
    cache: "no-cache",
    mode: "cors",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      main: {
        url: `/en/guide/${city}`,
        city: "dubai",
        lang: "russian",
        currency: "usd",
      },
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};

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

  return fetch(
    `${baseUrl}:8080/frontapi/checkout/reserve` + "?" + params,
    requestOptions
  ).then(checkResponse);
};

export const getGuidDetal = (city: any, shopp: any, detal: any) => {
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
        url: "/en/guide/city1/shopping1/detal1", //здесь адрес раздела
        city: "dubai",
        lang: "russian",
        currency: "usd",
      },
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};

export const getGuidShopping = (city: any, shopp: any) => {
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
        // url: `/en/guide/${city}/${shopp}`,
        url: `/en/guide/dubai/shopping1`,
        city: "dubai",
        lang: "russian",
        currency: "usd",
      },
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};

export const getGuidMain = () => {
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
        url: "/en/guide",
        city: "dubai",
        lang: "russian",
        currency: "usd",
      },
    }),
  };

  return fetch(`${baseUrl}/api/guide/catalog`, requestOptions).then(
    checkResponse
  );
};
