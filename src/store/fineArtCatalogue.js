import axios from "axios";
import { apiURL } from "../config";

const getFineArtCatalogue = async () => {
  const { data } = await axios.get(`${apiURL}/get/fineArt`);
  console.log(data);
  return data.items;
};

export default getFineArtCatalogue;
