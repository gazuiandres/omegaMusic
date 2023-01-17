import Jujutsu from "./music/jujutsu.mp3";
import OnePuchManOp2 from "./music/one_punch.mp3";
import jbalvinMigente from "./music/JBalvin_miGente.mp3";
import djSnakeLeanOn from "./music/djSnake_leanOn.mp3";
import karolgBichota from "./music/karolG_bichota.mp3";
import theweekendBlindingLights from "./music/theWeeknd_BlindingLights.mp3";
import badBunnyYonaguni from "./music/badBunny_yonaguni.mp3";
import kdaTheBaddest from "./music/kda_theBaddest.mp3";
import badBunnyDakiti from "./music/badBunny_Dakiti.mp3";
import jbalvinRojo from "./music/jBalvin_rojo.mp3";

const InitialState = {
  songs: [
    {
      id: 1,
      name: "Mi gente",
      autor: "J-balvin",
      src: jbalvinMigente,
      cover:
        "https://cdns-images.dzcdn.net/images/cover/aad5dfbfd03587d830cb7dec810d92e0/350x350.jpg",
    },
    {
      id: 2,
      name: "Lean on",
      autor: "Major Lazer x DJ Snake",
      src: djSnakeLeanOn,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/e/ed/Major_Lazer_and_DJ_Snake_-_Lean_On_%28feat._M%C3%98%29.png",
    },
    {
      id: 3,
      name: "BICHOTA",
      autor: "KAROL G",
      src: karolgBichota,
      cover:
        "https://www.buenamusica.com/media/fotos/discos/k/karol-g/karol-g_bichota.jpg",
    },
    {
      id: 4,
      name: "Blinding lights",
      autor: "The Weeknd",
      src: theweekendBlindingLights,
      cover:
        "https://www.tonica.la/__export/1597263809344/sites/debate/img/2020/08/12/the-weeknd-blinding-lights-rompe-records.jpg_423682103.jpg",
    },
    {
      id: 5,
      name: "Yonaguni",
      autor: "Bad Bunny",
      src: badBunnyYonaguni,
      cover:
        "https://images.genius.com/4f4ac94076139f5e8a532dbb14e210a8.1191x777x1.png",
    },
    {
      id: 6,
      name: "The baddest",
      autor: "KD/A",
      src: kdaTheBaddest,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/KDA_THE_BADDEST.jpeg",
    },
    {
      id: 7,
      name: "Dakiti",
      autor: "Bad Bunny",
      src: badBunnyDakiti,
      cover:
        "https://i.pinimg.com/736x/ec/51/05/ec5105e1f03f84b8c452a834826dfa25.jpg",
    },
    {
      id: 8,
      name: "One punch opening 2",
      autor: "one punch man",
      src: OnePuchManOp2,
      cover:
        "http://pm1.narvii.com/7196/5442aabdb3f4f4170b54814bf7e5281fd7f0a0fcr1-611-458v2_uhq.jpg",
    },
    {
      id: 9,
      name: "Lost in paradise",
      autor: "Jujutsu kaisen",
      src: Jujutsu,
      cover:
        "https://i1.sndcdn.com/artworks-VnrTzzyhzAyRRFsA-DiLLeQ-t500x500.jpg",
    },
    {
      id: 10,
      name: "Rojo",
      autor: "J-Balvin",
      src: jbalvinRojo,
      cover:
        "https://c-fa.cdn.smule.com/rs-s-sf-2/arr/de/74/3b484bd6-df79-4eb8-aca5-e043433b582b_256.jpg",
    },
  ],
  main: {
    id: 0,
    src: "",
    name: "",
    autor: "",
    cover: "",
  },
  favorites: [],
  controls: {
    play: false,
    volume: 0.5,
  },
};

export default InitialState;
