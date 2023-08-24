import axios from "axios";
const getFineArtCatalogue = async () => {
  const { data } = await axios.get("http://localhost:6003/get/fineArt");
  console.log(data);

  return data.items;
};

export default getFineArtCatalogue;

//for list of images
// images: [
//   "src/assets/images/fineArt/large/orangePeel.jpg",
//   "src/assets/images/fineArt/small/orangePeelSmall.jpg",
// ],
