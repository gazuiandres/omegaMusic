import Jujutsu from "./music/jujutsu.mp3";
import OnePuchManOp2 from "./music/one_punch.mp3";

const InitialState = {
  songs: [
    {
      id: 1,
      name: "mi gente",
      autor: "j-balvin",
      src: "https://mus5.djxd.tk/mp3/8c215d65-187c-44f9-8b90-e472c24cd11e.mp3",
      cover:
        "https://cdns-images.dzcdn.net/images/cover/aad5dfbfd03587d830cb7dec810d92e0/350x350.jpg",
    },
    {
      id: 2,
      name: "Blinding lights",
      autor: "The Weeknd",
      src: "https://mus7.djxd.tk/mp3/2eed9bda-5ebd-403c-8728-d4bfdaf39ce0.mp3",
      cover:
        "https://www.tonica.la/__export/1597263809344/sites/debate/img/2020/08/12/the-weeknd-blinding-lights-rompe-records.jpg_423682103.jpg",
    },
    {
      id: 3,
      name: "The baddest",
      autor: "KD/A",
      src: "https://mus7.djxd.tk/mp3/449d3522-8c8e-4844-bef0-8c78e89b6044.mp3",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/KDA_THE_BADDEST.jpeg",
    },
    {
      id: 4,
      name: "El poder es nuestro DBZ",
      autor: "Adrian barba",
      src: "https://mus4.djxd.tk/mp3/7af5ced0-2d5c-4d29-93d2-8e822b836bd3.mp3",
      cover: "https://i1.sndcdn.com/artworks-000089619875-bszbsq-t500x500.jpg",
    },
    {
      id: 5,
      name: "dragon ball gt opening",
      autor: "Adrian barba",
      src: "https://mus4.djxd.tk/mp3/a62b496e-9b93-4967-bbe0-e691ec37b1ad.mp3",
      cover:
        "https://www.tierragamer.com/wp-content/uploads/2019/02/dragon-ball-gt.jpg",
    },
    {
      id: 6,
      name: "Angeles fuimos",
      autor: "Adrian barba",
      src: "https://mus4.djxd.tk/mp3/88da9a91-0823-4a5d-adab-a558a01b42c5.mp3",
      cover:
        "https://c-fa.cdn.smule.com/rs-s82/arr/73/26/33d98749-4ed7-4215-a6b9-a7ef715172f3_1024.jpg",
    },
    {
      id: 7,
      name: "dakiti",
      autor: "Bad Bunny",
      src: "https://mus7.djxd.tk/mp3/eb5ba693-2d2f-42c5-9cc8-5aa96994a867.mp3",
      cover:
        "https://i.pinimg.com/736x/ec/51/05/ec5105e1f03f84b8c452a834826dfa25.jpg",
    },
    {
      id: 8,
      name: "one punch opening2",
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
      src: "https://mus5.djxd.tk/mp3/a7676e35-dc48-4611-9467-fafa484ae9ee.mp3",
      cover:
        "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_700/https://www.nicaradios.com.ni/wp-content/uploads/2020/02/3-Singleart_Rojo_red_1106KK-700x700.jpg",
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
