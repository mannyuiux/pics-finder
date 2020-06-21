import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1JsJ_ELfOatqy0FsaI7YlvsWTN1LZlCT1DzIM1SCq2o",
  },
});
