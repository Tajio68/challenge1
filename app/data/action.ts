"use server";

export const getData = async () => {
  const revalidate = 3600;
  const data = await fetch("https://dummyjson.com/products");
  const jsonData = await data.json();

  return jsonData;
};
