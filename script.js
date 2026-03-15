import { url } from "./apiURL.js";

async function fetchPage(page = 0, limit = 10) {
  const urlToFetch = url(page, limit);
  try {
    const response = await fetch(urlToFetch);
    if (response.status !== 200) {
      throw new Error("Couldn't establish connection to server!");
    }
    const data = await response.json();
    const nextPage = data.length === limit ? page + 1 : null;
    return { data, nextPage };
  } catch (e) {
    console.error("Something went wrong...", e);
  }
}

const result = await fetchPage(3,10);
console.log(result.data.length)
console.log(result.nextPage); 
