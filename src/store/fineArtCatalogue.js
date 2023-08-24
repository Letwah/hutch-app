import axios from "axios";
const getFineArtCatalogue = async () => {
  const { data } = await axios.get("http://localhost:6003/get/fineArt");
  console.log(data);
  return data.items;
};

export default getFineArtCatalogue;
