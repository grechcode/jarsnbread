export const getData = async (url) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    const data = await res.json();
    return data;
  } catch (error) {
    throw Error("Что-то пошло не так :/");
  } finally {
    clearTimeout(timeout);
  }
};
