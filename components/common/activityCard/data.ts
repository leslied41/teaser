export type SingleActivity = {
  id: number;
  title: {
    title: string;
    title_cn: string;
    content: string;
    content_cn: string;
  };
  date: string;
  date_cn: string;
  time: string;
  venue: string;
  venue_cn: string;
  personeOnelTitle: {
    title: string;
    title_cn: string;
    list: string[];
    list_cn: string[];
  };
  personeTwolTitle?: {
    title: string;
    title_cn: string;
    list: string[];
    list_cn: string[];
  };
  details: string[];
  details_cn: string[];
  registeration_link: string;
};

export const data = [
  {
    id: 0,
    title: {
      title: "Artist Talk",
      title_cn: "藝術家對談",
      content: "On Landscape, Place and Memories",
      content_cn: "風景、地方與回憶",
    },
    date: "8 · 10 · 2022 (Sat)",
    date_cn: "8 · 10 · 2022 (六)",
    time: "3:00 — 5:00pm",
    venue: "4/F, Pao Galleries, Hong Kong Arts Centre",
    venue_cn: "香港藝術中心四樓 包氏畫廊",
    personeOnelTitle: {
      title: "Speakers",
      title_cn: "講者",
      list: ["Koon Wai Bong", " Leung Ka Yin, Joey ", "Wong Lai Ching, Fiona"],
      list_cn: ["管偉邦", "梁嘉賢", "黃麗貞"],
    },
    personeTwolTitle: {
      title: "Moderator ",
      title_cn: "主持",
      list: ["Ting Wing Yan, Vivian"],
      list_cn: ["丁穎茵"],
    },
    details: [
      "Free Addmission",
      "Cantonese",
      "30 peoples (onsite)",
      "No audience limited online",
    ],
    details_cn: ["費用全免", "粵語", "30 人 (現場參與)", "網上參與人數不拘"],
    registeration_link: "https://forms.gle/zKMke1dNQqGEYkDC9",
  },
  {
    id: 1,
    title: {
      title: "Artist Talk",
      title_cn: "藝術家對談",
      content: "On Landscape, Bodily perceptions and sense of place",
      content_cn: "風景、身體感與地方感",
    },
    date: "9 · 10 · 2022 (Sun)",
    date_cn: "9 · 10 · 2022 (日)",
    time: "3:00 — 5:00pm",
    venue: "4/F, Pao Galleries, Hong Kong Arts Centre",
    venue_cn: "香港藝術中心四樓 包氏畫廊",
    personeOnelTitle: {
      title: "Speakers",
      title_cn: "講者",
      list: ["Ho Yuen Leung", " Lam Tung Pang", "Wong Chun Hei, Stephen"],
      list_cn: ["何遠良", "林東鵬 ", "黃進曦"],
    },
    personeTwolTitle: {
      title: "Moderator ",
      title_cn: "主持",
      list: ["Chan Pui, Pedith"],
      list_cn: ["陳蓓"],
    },
    details: [
      "Free Addmission",
      "Cantonese",
      "30 peoples (onsite)",
      "No audience limited online",
    ],
    details_cn: ["費用全免", "粵語", "30 人 (現場參與)", "網上參與人數不拘"],
    registeration_link: "https://forms.gle/UpkcFjKLAjHM4gZr7",
  },
  {
    id: 2,
    title: {
      title: "Public Talk",
      title_cn: "公開講座",
      content:
        "Revisiting the Early Hong Kong Travel Activities from Travel Guidebooks",
      content_cn: "從旅遊指南看早期的香港旅行活動",
    },
    date: "22 · 10 · 2022 (Sat)",
    date_cn: "22 · 10 · 2022 (六)",
    time: "3:00 — 5:00pm",
    venue: "4/F, Pao Galleries, Hong Kong Arts Centre",
    venue_cn: "香港藝術中心四樓 包氏畫廊",
    personeOnelTitle: {
      title: "Speakers",
      title_cn: "講者",
      list: ["Dr Yuen Chi"],
      list_cn: ["阮志博士"],
    },
    details: [
      "Free Addmission",
      "Cantonese",
      "30 peoples (onsite)",
      "No audience limited online",
    ],
    details_cn: ["費用全免", "粵語", "30 人 (現場參與)", "網上參與人數不拘"],
    registeration_link: "https://forms.gle/BZhgbe3hNmfXADFs7",
  },
  {
    id: 3,
    title: {
      title: "Re-imagining Hong Kong: Sketching Tour",
      title_cn: "想見香港寫生團",
      content: "THe Peak and Pok fu lam",
      content_cn: "山頂、薄扶林四圍走",
    },
    date: "15 · 10 · 2022 (Sat)",
    date_cn: "15 · 10 · 2022 (六)",
    time: "10:30am — 1:00pm",
    venue: "4/F, Pao Galleries, Hong Kong Arts Centre",
    venue_cn: "香港藝術中心四樓 包氏畫廊",
    personeOnelTitle: {
      title: "Life-drawing",
      title_cn: "寫生",
      list: ["Wong Chun Hei, Stephen"],
      list_cn: ["黃進曦"],
    },
    personeTwolTitle: {
      title: "Docent",
      title_cn: "導賞",
      list: ["Ting Wing Yan, Vivian"],
      list_cn: ["丁穎茵"],
    },
    details: ["Admission Fee: $100", "Cantonese", "15 peoples"],
    details_cn: ["費用：$100", "粵語", "15人"],
    registeration_link: "https://forms.gle/cPU3PVxWuzpvnoJZ8",
  },
  {
    id: 4,
    title: {
      title: "Re-imagining Hong Kong: Sketching Tour",
      title_cn: "想見香港寫生團",
      content: "Wan chai and the peak",
      content_cn: "灣仔、太平山樂悠遊",
    },
    date: "29 · 10 · 2022 (Sat)",
    date_cn: "29 · 10 · 2022 (六)",
    time: "10:30am — 1:00pm",
    venue: "4/F, Pao Galleries, Hong Kong Arts Centre",
    venue_cn: "香港藝術中心四樓 包氏畫廊",
    personeOnelTitle: {
      title: "Life-drawing",
      title_cn: "寫生",
      list: ["Wong Chun Hei, Stephen"],
      list_cn: ["黃進曦"],
    },
    personeTwolTitle: {
      title: "Docent",
      title_cn: "導賞",
      list: ["Ting Wing Yan, Vivian"],
      list_cn: ["丁穎茵"],
    },
    details: ["Admission Fee: $100", "Cantonese", "15 peoples"],
    details_cn: ["費用：$100", "粵語", "15人"],
    registeration_link: "https://forms.gle/cPU3PVxWuzpvnoJZ8",
  },
];
