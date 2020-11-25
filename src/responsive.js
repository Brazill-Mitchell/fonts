export const screenSizes = {
  MOBILE: "MOBILE",
  TABLET: "TABLET",
  COMPUTER: "COMPUTER",
  XL: "XL",
};

export const mediaList = [
  [screenSizes.MOBILE, "(max-width: 500px)"],
  [screenSizes.TABLET, "(max-width: 800px)"],
  [screenSizes.COMPUTER, "(max-width: 1400px)"],
  [screenSizes.XL, "(min-width: 1400px)"],
];

export function checkScreenSize() {
  let screenSize = "";
  for (let x = 0; x < mediaList.length; x++) {
    if (window.matchMedia(mediaList[x][1]).matches) {
      screenSize = mediaList[x][0];
      return screenSize;
    }
  }
}
export default checkScreenSize;
