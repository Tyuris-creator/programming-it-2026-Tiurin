import { url } from "./apiURL.js";

// с аборт контроллером

export async function fetchPage(page = 0, limit = 10, signal = undefined) {
  const urlToFetch = url(page, limit);
  try {
    const response = await fetch(urlToFetch, {
      signal,
    });
    if (response.status !== 200 && !response.ok) {
      throw new Error("Couldn't establish connection to server!");
    }
    const data = await response.json();
    const nextPage = data.length === limit ? page + 1 : null;
    return { data, nextPage };
  } catch (e) {
    if (e.name === "AbortError") {
      console.error("Process was aborted...");
      throw e;
    }
    console.error("Something went wrong...", e);
  }
}

const controller = new AbortController();
const signal = controller.signal;

// прерывается сразу
const result1 = await fetchPage(3, 10);

// результат который прерывается
// controller.abort()
const result = await fetchPage(3, 10, signal);
console.log(result.data.length); // 10
console.log(result.nextPage); // 4
