import { url } from "./apiURL.js";
import { fetchPage } from "./script2.js";


async function loadAllPages(startPage = 1, limit = 10, signal = new AbortController().signal) {
  const allPosts = [];

  async function loadPage(page) {
    const { data, nextPage } = await fetchPage(page, limit, signal);
    allPosts.push(...data);
    
    if (nextPage !== null) {
      await loadPage(nextPage);
    }
  }

  await loadPage(startPage);
  
  return allPosts;
}

const arr = await loadAllPages()
console.log(arr) // вроде выдает список объектов