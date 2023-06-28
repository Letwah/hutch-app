const getIllustrationCatalogue = () => {
  const catalogue = [
    {
      id: "Suffolk Mind Emotional Needs",
      title: "Suffolk Mind",
      desc: "Suffolk Mind Commission",
      images: [
        "/large/suffolkMind/Suffolk Mind 2021 Resources Black and White Thinking Fight or Flight Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Dreaming Am I Dre m ng Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Emotions E Motion Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Imagination Imagine Nation Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Memory Memory Garden Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Mini Card Layout Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Observing Self Making Good Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Pattern Matching Snap Linden Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Rapport Rap Port Hutch.jpg",
        "/large/suffolkMind/Suffolk Mind 2021 Resources Rational Thinking Rach's Nail Tinkering Hutch.jpg",
      ],
      createdTimeStamp: "2021-05-13 11:00:00",
      medium: "pen and goashe",
      show: true,
    },
    {
      id: "Obsidian Wine Co.",
      title: "Obsidian Wine Co. Label Design",
      desc: "Obsidian Wine Commission",
      images: [
        "/large/obsidian/Hutch 12 Obsidian Wine.jpg",
        "/large/obsidian/OBSIDIAN.jpeg",
        "/large/obsidian/ORCHF17_webstore-(1).png",
        "/large/obsidian/ORSB18_webstore-(1).png",
        "/large/obsidian/PERUVIAN.jpeg",
      ],
      createdTimeStamp: "2020-05-13 11:00:00",
      medium: "pen on acid free paper",
      show: false,
    },
    {
      id: "Insights Publication",
      title: "Insights Publication 2018",
      desc: "Insights Publication 2018 Commission",
      images: [
        "/large/insights/Insights 2021 Back Cover artwork only no titles Hutch.jpg",
        "/large/insights/Insights 2021 Employment Centre HGV Hutch.jpg",
        "/large/insights/Insights 2021 Employment Left Plumber and 3 other workers Hutch.jpg",
        "/large/insights/Insights 2021 Employment Right Shopworker and 5 other workers Hutch.jpg",
        "/large/insights/Insights 2021 Family and Conenction Right Hutch.jpg",

        "/large/insights/Insights 2021 Foodbank Hutch.jpg",
        "/large/insights/Insights 2021 Front Cover artwork only no titles Hutch.jpg",
        "/large/insights/Insights 2021 Income, Consumption and Wealth Right Hutch.jpg",
        "/large/insights/Insights 2021 Polling Station Hutch.jpg",
        "/large/insights/Insights 2021 Youth Strike Hutch.jpg",
        "/large/insights/Page 28 mini illo.jpg",
      ],
      createdTimeStamp: "2018-05-13 11:00:00",
      medium: "pen on acid free paper",
      show: true,
    },
  ];
  catalogue.forEach((item, index) => {
    item.id = index + 1;
  });
  return catalogue;
};

export default getIllustrationCatalogue;
