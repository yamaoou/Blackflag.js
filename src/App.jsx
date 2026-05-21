import "./App.css";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "./components/Header";
import Footer from "./components/Footer";

const games = [
  {
    title: "Crimson Desert",
    image:
      "https://store-images.s-microsoft.com/image/apps.45738.13616283370123336.55bc585b-1fc2-4652-8965-61111d6975e0.5236f2e9-a0f4-4fc1-8aba-dbf96b812b95",
    rating: 5,
  },
  {
    title: "Marvel's Spider man 2",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/6/64/Spider-Man_2_2023_capa.jpg",
    rating: 2.5,
  },
  {
    title: "Hollow Knight: Silksong",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/8/86/Hollow_Knight_Silksong_cover.jpeg",
    rating: 4,
  },
  {
    title: "Red dead Redemption 2",
    image:
      "https://www.quadrorama.com.br/wp-content/uploads/2022/05/read-dead-redemption-2-ff572348.png",
    rating: 1.5,
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />

      {/* HERO CAROUSEL */}

      <section className="hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img
                src="https://xboxpower-wp.s3.amazonaws.com/wp-content/uploads/2021/12/analise-halo-infinite-featured.jpg"
                alt=""
              />

              <div className="overlay">
                <h2>Halo Infinite </h2>

                <p>
                  Halo Infinite anuncia modo battle royale para todos as plataformas.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img
                src="https://s2-techtudo.glbimg.com/YIvNCsjdqZWRHBwvED6ZODRgqJ4=/0x0:1600x1000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/H/Y/X3cA59Rim8LQ8Hp201zQ/001.jpg"
                alt=""
              />

              <div className="overlay">
                <h2>Left 4 dead</h2>

                <p>
                  Os desenvolvedores de left 4 dead anunciam o jogo novo
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/26950369fe4b03c2268620eb9815c8a246aa0b06/ss_26950369fe4b03c2268620eb9815c8a246aa0b06.1920x1080.jpg?t=1776125736"
                alt=""
              />

              <div className="overlay">
                <h2>Hollow Knight: Silksong</h2>

                <p>
                  O indie mais aguardado da geração aquece os corações.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* TITLE */}

      <section className="title-section">
        <h2>Avaliações</h2>
      </section>

      {/* GAMES */}

      <section className="games-row">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt={game.title} />

            <h3>{game.title}</h3>

            <div className="stars">
              <Stack spacing={1}>
                <Rating
                  name={`rating-${index}`}
                  defaultValue={game.rating}
                  precision={0.5}
                  size="large"
                />
              </Stack>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
