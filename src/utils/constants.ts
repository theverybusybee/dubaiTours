export function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

export const baseUrl = "http://127.0.0.1:3000";
