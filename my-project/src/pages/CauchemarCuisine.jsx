import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const images = [
  {
    src: "../images/cauchemar-cuisine/img_1.png",
    alt: "Cauchemar en Cuisine  Poster",
    title: "Cauchemar en Cuisine",
  },
  {
    src: "../images/cauchemar-cuisine/img_2.png",
    alt: "Image 2",
    title: "Scene 1",
  },
  {
    src: "../images/cauchemar-cuisine/img_3.png",
    alt: "Image 3",
    title: "Scene 2",
  },
  {
    src: "../images/cauchemar-cuisine/img_4.png",
    alt: "Image 4",
    title: "Scene 3",
  },
  {
    src: "../images/cauchemar-cuisine/img_5.png",
    alt: "Image 5",
    title: "Affiche réalisée par Gilles Cuvelier",
  },
];

const SectionTitle = ({ children }) => (
  <h2 className="Adorn-Engraved-Expanded mb-3 text-xl underline underline-offset-8 decoration-[#7B052A]">
    {children}
  </h2>
);

// IMAGE TILE
const Tile = ({ image, onOpen }) => (
  <div className="group relative overflow-hidden rounded-xs">
    <img
      src={image.src}
      alt={image.alt}
      onClick={onOpen}
      loading="lazy"
      className="h-full w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
    />

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
        {image.title}
      </p>
    </div>
  </div>
);

const btn =
  "fixed z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#7B052A] hover:text-white focus-visible:outline-2 focus-visible:outline-[#7B052A]";

export default function CauchemarEnCuisine() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const step = (direction) => {
    setSelectedImageIndex(
      (current) => (current + direction + images.length) % images.length,
    );
  };

  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-8 text-center md:px-6 md:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Cauchemar en Cuisine
        </h1>

        <h2 className="mx-auto max-w-3xl px-2 py-2 text-sm font-medium sm:text-base text-[#A9A9A9]">
          Affiche animée du Festival national du film d'animation 2025, une
          pastille de 20 secondes réalisée en collaboration avec Axelle Royer,
          Elisanne Mombelli, Alice Chen et Léa Fritsch. J'ai participé au chara
          design, à l'animation et au compositing. 2025. Durée du projet 3 mois
        </h2>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Project Information - Left Side */}
          <div className="space-y-7 text-base leading-relaxed">
            <div>
              <SectionTitle>Titre</SectionTitle>
              <p className="text-xl">Cauchemar en Cuisine</p>
            </div>

            <div>
              <SectionTitle>Genre</SectionTitle>
              <p className="text-xl">Cartoon comique</p>
            </div>

            <div>
              <SectionTitle>Durée estimée</SectionTitle>
              <p className="text-xl">20 secondes</p>
            </div>

            <div>
              <SectionTitle>Réalisateurs</SectionTitle>
              <p className="text-lg">
                Axelle ROYER, Elisanne MOMBELLI, Alice CHEN, Léa FRITSCH et
                Samanda MASDURAUD URREA
              </p>
            </div>

            <div>
              <SectionTitle>Réalisation</SectionTitle>
              <p className="text-lg">
                Réalisation d'une pastille vidéo d'introduction à partir des
                éléments de l'affiche réalisée par Gilles Cuvelier graphiques du
                festival envoyés par l'AFCA.
              </p>
            </div>
          </div>

          {/* First image */}
          <Tile image={images[0]} onOpen={() => setSelectedImageIndex(0)} />
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <video
          className="w-full rounded-xs shadow-md"
          controls
          autoPlay
          playsInline
          preload="metadata"
        >
          <source src="../videos/Cauchemar_en_Cuisine.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </section>

      {/* Three images */}
      <section className="mx-auto max-w-6xl px-6 py-2 md:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {images.slice(1).map((image, index) => (
            <Tile
              key={image.src}
              image={image}
              onOpen={() => setSelectedImageIndex(index + 1)}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={() => setSelectedImageIndex(null)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        contentLabel="Enlarged Cauchemar en Cuisine image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {selectedImage && (
          <>
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image"
              className={`${btn} right-6 top-6`}
            >
              &times;
            </button>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className={`${btn} left-6 top-1/2 -translate-y-1/2`}
            >
              &#8249;
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-[75vw] rounded-xs object-contain"
            />

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className={`${btn} right-6 top-1/2 -translate-y-1/2`}
            >
              &#8250;
            </button>

            <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </Modal>

      <Footer />
    </main>
  );
}
