export const replaceImgWithError = (e) => {
  e.target.onerror = null;
  e.target.src = "/images/mock.jpg";
};
