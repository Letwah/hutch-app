const getFineArtCatalogue = () => {
  const catalogue = [
    {
      title: "A.M",
      desc: "Part of the collection from the 'Hung Drawn and painted' exhibition",
      image: "/large/am.jpg",
      avail: false,
      price: 160000, //in pennies
      createdTimeStamp: "2021-05-13 11:00:00",
      medium: "Oil on Canvas",
      size: "50cm x 75cm",
      show: true,
    },
    {
      title: "Drawn Up",
      desc: "Part of the collection from the 'Hung Drawn and painted' exhibition",
      image: "/large/drawnUp.jpg",
      avail: true,
      price: 160000, //in pennies
      createdTimeStamp: "2022-11-1 11:00:00",
      medium: "Oil on Canvas",
      size: "50cm x 75cm",
      show: true,
    },
    {
      title: "Knowledge and Nature",
      desc: "Part of the collection from the 'Hung Drawn and painted' exhibition",
      image: "/large/knowledgeAndNature.jpg",

      avail: false,
      price: 210000, //in pennies
      createdTimeStamp: "2021-06-28 11:00:00",
      medium: "Oil on Canvas",
      size: "120cm x 60cm",
      show: true,
    },
    {
      title: "Orange Peel",
      desc: "Part of the collection from the 'Hung Drawn and painted' exhibition",
      image: "/large/orangePeel.jpg",

      avail: true,
      price: 180000, //in pennies
      createdTimeStamp: "2021-11-5 11:00:00",
      medium: "Oil on Canvas",
      size: "60cm x 60cm",
      show: true,
    },
    {
      title: "Plants and Planets",
      desc: "Part of the collection from the 'Hung Drawn and painted' exhibition",
      image: "/large/plantsAndPlanets.jpg",

      avail: true,
      price: 195000, //in pennies
      createdTimeStamp: "2021-10-2 11:00:00",
      medium: "Oil on Canvas",
      size: "75cm x 75cm",
      show: true,
    },
    {
      title: "Shelf Life",
      desc: "New work, 2022",
      image: "/large/shelflife.jpg",

      avail: true,
      price: 160000, //in pennies
      createdTimeStamp: "2022-02-5 11:00:00",
      medium: "Oil on Canvas",
      size: "50cm x 75cm",
      show: true,
    },
    {
      title: "Sofa",
      desc: "Part of the collection from the 'Hung Drawn and painted' exhibition",
      image: "/large/sofa.jpg",

      avail: true,
      price: 95000, //in pennies
      createdTimeStamp: "2021-9-5 11:00:00",
      medium: "Oil on Canvas",
      size: "40cm x 50cm",
      show: true,
    },
  ];
  catalogue.forEach((item, index) => {
    item.id = index + 1;
  });
  return catalogue;
};

export default getFineArtCatalogue;

//for list of images
// images: [
//   "src/assets/images/fineArt/large/orangePeel.jpg",
//   "src/assets/images/fineArt/small/orangePeelSmall.jpg",
// ],
