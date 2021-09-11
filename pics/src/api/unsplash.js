import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID O45SanqvA6WxAzA6j7ssT_K7FbLHvx33bLLqIMF6Gvk",
  },
});

//creat instance of axios w/default properties, customized for our url and headers.
