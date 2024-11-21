"use server";

export const postData = async (mail: string, pwd: string, news: boolean) => {
  return console.log(
    `Mail : ${mail} Password : ${pwd} News : ${
      news === true ? "Subscribed" : "Not-subscribed"
    }`
  );
};
