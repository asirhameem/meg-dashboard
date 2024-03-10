import { booleanToTinyInt } from "./typeConverter";

export const formData = (data: any) => {
  const formData = new FormData();
  for (const key in data) {
    if (data[key][0] instanceof File) {
      formData.append(key, data[key][0]);
    } else if (typeof data[key] === "boolean") {
      formData.append(key, booleanToTinyInt(data[key]));
    }
    else {
      formData.append(key, data[key]);
    }
  }
  return formData;
}