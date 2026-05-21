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
                src="https://images5.alphacoders.com/644/644141.jpg"
                alt=""
              />

              <div className="overlay">
                <h2>Red Dead Redemption 2</h2>

                <p>
                  Uma das maiores obras da história dos videogames.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img
                src="https://wallpapercave.com/wp/wp11351427.jpg"
                alt=""
              />

              <div className="overlay">
                <h2>Marvel's Spider-Man 2</h2>

                <p>
                  O ápice cinematográfico dos jogos de herói.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img
                src="https://wallpapercave.com/wp/wp12815717.jpg"
                alt=""
              />

              <div className="overlay">
                <h2>Hollow Knight: Silksong</h2>

                <p>
                  O indie mais aguardado da geração.
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