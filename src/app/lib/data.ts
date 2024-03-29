import data from "./data.json";

export async function getData() {
  await new Promise((res) => setTimeout(res, 1000));
  return data;
}
