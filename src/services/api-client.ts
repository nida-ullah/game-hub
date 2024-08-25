import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d1c1d2ce5da949ab9bce994932283bef",
  },
});
