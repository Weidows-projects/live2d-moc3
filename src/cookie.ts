import { getCookie, setCookie } from "typescript-cookie";

export function GetLive2dIndex(models: any[]): number {
  const cookie = getCookie("live2d");

  if (!cookie || parseInt(cookie) < 0 || parseInt(cookie) > models.length - 1) {
    let randomIndex = Math.floor(Math.random() * models.length);
    setCookie("live2d", randomIndex.toString(), { expires: 1 }); // 1 day
    return randomIndex;
  } else return parseInt(cookie);
}
