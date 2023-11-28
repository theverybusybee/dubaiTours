export function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

export const baseUrl = "http://38.180.11.127";
