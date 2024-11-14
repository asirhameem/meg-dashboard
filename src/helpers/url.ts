import { Params } from "react-router-dom";

export const replaceUrlParams = (url: string, params: Readonly<Params<string>>) => {
  let newUrl = url;
  Object.keys(params).forEach((key) => {
    newUrl = newUrl.replace(`:${key}`, params[key] ?? '');
  });
  return newUrl;
}