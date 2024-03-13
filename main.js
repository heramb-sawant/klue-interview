import fetch from "node-fetch";

const get = async (url) => {
  try {
    const getResponse = await fetch(url, {
      method: "GET",
    });
    const response = await getResponse.json();

    return response;
  } catch (error) {
    console.log("Error: Could not complete Get request", error);
  }
};

const post = async (url, body = {}) => {
  try {
    const postResponse = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const response = await postResponse.json();

    return response;
  } catch (error) {
    console.log("Error: Could not complete Post request", error);
  }
};

const main = async () => {
  await get("https://jsonplaceholder.typicode.com/todos/1");
  await get("https://jsonplaceholder.typicode.com/posts");
  await post("https://httpbin.org/post", { something: "else" });
};

main();
