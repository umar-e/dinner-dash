import axios from "axios";
import { getLocalStorageItem } from "../utils/localStorageUtils";
const token = getLocalStorageItem("token");

const instance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export default instance;
