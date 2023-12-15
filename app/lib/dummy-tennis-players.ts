import { TennisPlayer } from "./definitions";

export const dummyTennisPlayers: TennisPlayer[] = [
  {
    id: 1,
    name: "Roger Federer",
    age: 39,
    country: "Switzerland",
    countryCode: "ch",
    image: "/images/federer.jpg",
    forehand: "Right-handed (one-handed backhand)",
    videos: [
      {
        id: 1,
        title: "Forehand slow motion",
        url: "https://www.youtube.com/embed/coq2h9P1uwQ",
      },
      {
        id: 2,
        title: "Backhand Slow Motion 2019",
        url: "https://www.youtube.com/embed/MTP99IHemNA",
      },
      {
        id: 3,
        title: "Serve Slow Motion in Court Level View",
        url: "https://www.youtube.com/embed/B2uDfNd9QSo",
      },
    ],
  },
  {
    id: 2,
    name: "Rafael Nadal",
    age: 34,
    country: "Spain",
    countryCode: "es",
    image: "/images/nadal.webp",
    forehand: "Left-handed (two-handed backhand)",
    videos: [
      {
        id: 4,
        title: "Backhand Drill",
        url: "https://www.youtube.com/embed/6cdQLPbxcpk",
      },
      {
        id: 5,
        title: "Forehand Slow Motion",
        url: "https://www.youtube.com/embed/Q7Ta9DbHKjk",
      },
    ],
  },
  {
    id: 3,
    name: "Novak Djokovic",
    age: 33,
    country: "Serbia",
    countryCode: "rs",
    image: "/images/djokovic.jpg",
    forehand: "Right-handed (two-handed backhand)",
    videos: [
      {
        id: 6,
        title: "Forehand Slow Motion in Court Level View",
        url: "https://www.youtube.com/embed/8YH0-jO14NQ",
      },
    ],
  },
  {
    id: 4,
    name: "Dominic Thiem",
    age: 27,
    country: "Austria",
    countryCode: "at",
    image: "/images/thiem.webp",
    forehand: "Right-handed (one-handed backhand)",
  },
  {
    id: 5,
    name: "Daniil Medvedev",
    age: 24,
    country: "Russia",
    countryCode: "ru",
    image: "/images/medvedev.png",
    forehand: "Right-handed (two-handed backhand)",
  },
];
