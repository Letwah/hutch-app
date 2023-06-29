const getIllustrationCatalogue = () => {
  const catalogue = [
    {
      title: "Suffolk Mind",
      desc: "Suffolk Mind Commission",
      images: [
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Black_and_White_Thinking_Fight_or_Flight_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Dreaming_Am_I_Dre_m_ng_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Emotions_E_Motion_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Imagination_Imagine_Nation_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Memory_Memory_Garden_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Mini_Card_Layout_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Observing_Self_Making_Good_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Pattern_Matching_Snap_Linden_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Rapport_Rap_Port_Hutch.jpg",
        "/large/suffolkMind/Suffolk_Mind_2021_Resources_Rational_Thinking_Rach's_Nail_Tinkering_Hutch.jpg",
      ],
      createdTimeStamp: "2021-05-13 11:00:00",
      medium: "pen and goashe",
      show: true,
    },
    {
      title: "Obsidian Wine Co. Label Design",
      desc: "Obsidian Wine Commission",
      images: [
        "/large/obsidian/Hutch_12_Obsidian_Wine.jpg",
        "/large/obsidian/OBSIDIAN.jpeg",
        "/large/obsidian/ORCHF17_webstore-(1).png",
        "/large/obsidian/ORSB18_webstore-(1).png",
        "/large/obsidian/PERUVIAN.jpeg",
      ],
      createdTimeStamp: "2020-05-13 11:00:00",
      medium: "pen on acid free paper",
      show: true, //set this to false when no longer want to show (DO NOT DELETE - WILL MESS UP ID's)
    },
    {
      title: "Insights Publication 2018",
      desc: "Insights Publication 2018 Commission",
      images: [
        "/large/insights/Insights_2021_Back_Cover_artwork_only_no_titles_Hutch.jpg",
        "/large/insights/Insights_2021_Employment_Centre_HGV_Hutch.jpg",
        "/large/insights/Insights_2021_Employment_Left_Plumber_and_3_other_workers_Hutch.jpg",
        "/large/insights/Insights 2021_Employment_Right_Shopworker_and_5_other_workers_Hutch.jpg",
        "/large/insights/Insights_2021_Family_and_Connection_Right_Hutch.jpg",
        "/large/insights/Insights_2021_Family_and_Connection_Left_Hutch.jpg",
        "/large/insights/Insights_2021_Foodbank Hutch.jpg",
        "/large/insights/Insights_2021_Front_Cover_artwork_only_no_titles_Hutch.jpg",
        "/large/insights/Insights_2021_Income_Consumption_and_Wealth_Right_Hutch.jpg",
        "/large/insights/Insights_2021_Polling_Station_Hutch.jpg",
        "/large/insights/Insights_2021_Youth_Strike_Hutch.jpg",
        "/large/insights/Page_28_mini_illo.jpg",
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
