import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const getPOSTS = async (setState) => {
  let res = await axios.get(url);
  let data = res.data;
  setState(data);
};
const getPOST = async (setState, id) => {
  let res = await axios.get(url + "/" + id);
  let data = res.data;
  setState(data);
};
const putPOST = async (setState, id) => {
  let res = await axios.post(url + "/" + id);
  let data = res.data;
  setState(data);
};

export { getPOSTS, getPOST };
