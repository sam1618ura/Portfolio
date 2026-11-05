import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const images = [
  {
    src: "../images/fantasmatic/img_1.png",
    alt: "Fantasmatic poster",
    title: "Scene 1",
  },
  {
    src: "../images/fantasmatic/img_2.png",
    alt: "Fantasmatic image 2",
    title: "Scene 2",
  },
  {
    src: "../images/fantasmatic/img_3.png",
    alt: "Fantasmatic image 3",
    title: "Scene 3",
  },
  {
    src: "../images/fantasmatic/img_4.png",
    alt: "Fantasmatic image 4",
    title: "Scene 4",
  },
  {
    src: "../images/fantasmatic/img_5.png",
    alt: "Fantasmatic image 5",
    title: "Scene 5",
  },
  {
    src: "../images/fantasmatic/img_6.png",
    alt: "Fantasmatic image 6",
    title: "Scene 6",
  },
  {
    src: "../images/fantasmatic/img_7.png",
    alt: "Fantasmatic image 7",
    title: "Scene 7",
  },
  {
    src: "../images/fantasmatic/img_8.png",
    alt: "Fantasmatic image 8",
    title: "Scene 8",
  },
  {
    src: "../images/fantasmatic/img_9.png",
    alt: "Fantasmatic image 9",
    title: "Scene 9",
  },
  {
    src: "../images/fantasmatic/img_10.png",
    alt: "Fantasmatic image 10",
    title: "Scene 10",
  },
  {
    src: "../images/fantasmatic/img_11.png",
    alt: "Fantasmatic image 11",
    title: "Scene 11",
  },
  {
    src: "../images/fantasmatic/img_12.png",
    alt: "Fantasmatic image 12",
    title: "Scene 12",
  },
  {
    src: "../images/fantasmatic/img_13.png",
    alt: "Fantasmatic image 13",
    title: "Scene 13",
  },
  {
    src: "../images/fantasmatic/img_14.png",
    alt: "Fantasmatic image 14",
    title: "Scene 14",
  },
  {
    src: "../images/fantasmatic/img_15.png",
    alt: "Fantasmatic image 15",
    title: "Scene 15",
  },
  {
    src: "../images/fantasmatic/img_16.png",
    alt: "Fantasmatic image 16",
    title: "Scene 16",
  },
  {
    src: "../images/fantasmatic/img_17.png",
    alt: "Fantasmatic image 17",
    title: "Scene 17",
  },
  {
    src: "../images/fantasmatic/img_18.png",
    alt: "Fantasmatic image 18",
    title: "Scene 18",
  },
  {
    src: "../images/fantasmatic/img_19.png",
    alt: "Fantasmatic image 19",
    title: "Scene 19",
  },
  {
    src: "../images/fantasmatic/img_20.png",
    alt: "Fantasmatic image 20",
    title: "Scene 20",
  },
  {
    src: "../images/fantasmatic/img_21.png",
    alt: "Fantasmatic image 21",
    title: "Scene 21",
  },
  {
    src: "../images/fantasmatic/img_22.png",
    alt: "Fantasmatic image 22",
    title: "Scene 22",
  },
  {
    src: "../images/fantasmatic/img_23.png",
    alt: "Fantasmatic image 23",
    title: "Scene 23",
  },
  {
    src: "../images/fantasmatic/img_24.png",
    alt: "Fantasmatic image 24",
    title: "Scene 24",
  },
  {
    src: "../images/fantasmatic/img_25.png",
    alt: "Fantasmatic image 25",
    title: "Scene 25",
  },
  {
    src: "../images/fantasmatic/img_26.png",
    alt: "Fantasmatic image 26",
    title: "Scene 26",
  },
  {
    src: "../images/fantasmatic/img_27.png",
    alt: "Fantasmatic image 27",
    title: "Scene 27",
  },
  {
    src: "../images/fantasmatic/gif_1.gif",
    alt: "Fantasmatic gif 1",
    title: "Gif 1",
  },
  {
    src: "../images/fantasmatic/gif_2.gif",
    alt: "Fantasmatic gif 2",
    title: "Gif 2",
  },
];

const info = [
  ["Année", "2024"],
  ["Durée du projet", "4 mois"],
  ["Genre", "Fantastique"],
  ["Durée estimée", "30 secondes"],
  ["Réalisateurs", "Samanda MASDURAUD URREA"],
  [
    "",
    "Projet 3ème année. Il fallait réaliser une mini-prod à partir de trois mots au hasard dont un personnage, un objet et un décor. J'ai pioché : Chevalier, épée et Apothèque. Cette mini-prod devait tenir sur 5 plans. Cela a été un long travail, sur 4 mois, mais très intéressant sur comment gérer une prod seule, du début à la fin. J'ai beaucoup appris sur l'ambition et la gestion du temps.",
  ],
];

const pitch =
  "Ruby McKenzie est un fantôme chevalier, qui erre dans l'apothèque familiale. Elle voit un colis et, curieuse, elle essaye de l'ouvrir par tous les moyens dont elle dispose, mais cette simple tâche semble plus compliquée que prévu.";

const characterText =
  "Ruby McKenzie est une fille solaire à la personnalité électrique. Aînée de la famille McKenzie, elle est dotée d'un caractère bien trempé et d'une énergie débordante, au grand désespoir de ses parents. Ses deux grandes passions sont : regarder les chevaliers s'entraîner et se battre avec ses ami.e.s. En grandissant, celles-ci ne l'ont pas quittée : elle intègre l'école de chevaliers la plus cotée de sa région. Elle s'y consacre pleinement pour rendre ses parents fiers et devient vite l'un des chevaliers les plus talentueux. Malgré les années qui lui ont fait gagner de l'expérience, son impulsivité, elle, demeure, tant pour le meilleur que pour le pire. À l'aube de sa vingt-cinquième année, elle meurt au combat à la suite d'une mauvaise décision stratégique. Désormais, son esprit erre dans la boutique familiale pour veiller sur sa famille et ses ami.e.s.";

const btn =
  "fixed z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#F82173] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F82173]";

const tight = "mx-auto grid max-w-6xl items-start gap-1 px-6 pb-3";

const Heading = ({ children }) => (
  <h2 className="mx-auto max-w-7xl px-6 pb-6 text-2xl font-bold sm:text-3xl">
    {children}
  </h2>
);

const GridTileSolo = ({ image, onOpen }) => (
  <div className="group relative mx-auto flex w-full items-center justify-center overflow-hidden rounded-xs">
    <img
      src={image.src}
      alt={image.alt}
      onClick={onOpen}
      loading="lazy"
      className="h-auto max-h-[600px] w-full max-w-sm cursor-zoom-in object-contain py-10 transition-opacity duration-300 group-hover:opacity-60"
    />

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="Adorn-Engraved-Expanded px-4 text-center text-xl text-white">
        {image.title}
      </p>
    </div>
  </div>
);

const GridTile = ({ image, onOpen }) => (
  <div className="group relative overflow-hidden rounded-xs">
    <img
      src={image.src}
      alt={image.alt}
      onClick={onOpen}
      loading="lazy"
      className="h-auto w-full cursor-zoom-in object-contain transition-opacity duration-300 group-hover:opacity-60 md:h-72 md:object-cover"
    />

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="Adorn-Engraved-Expanded px-4 text-center text-xl text-white">
        {image.title}
      </p>
    </div>
  </div>
);

export default function Fantasmatic() {
  const [sel, setSel] = useState(null);

  const step = (d) => setSel((c) => (c + d + images.length) % images.length);

  const current = sel !== null ? images[sel] : null;

  const gallery = (from, to, className) => (
    <section className={className}>
      {images.slice(from, to).map((image, i) => (
        <GridTile
          key={image.src}
          image={image}
          onOpen={() => setSel(from + i)}
        />
      ))}
    </section>
  );

  const uniformGallery = (from, to, className) => (
    <section className={className}>
      {images.slice(from, to).map((image, i) => (
        <GridTile
          key={image.src}
          image={image}
          onOpen={() => setSel(from + i)}
        />
      ))}
    </section>
  );

  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      {/* Info + poster */}
      <section className="mx-auto grid max-w-5xl items-center gap-8 px-6 py-12 md:grid-cols-2">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">Fantasmatic</h1>

          {info.map(([label, value], index) => (
            <div key={`${label}-${index}`}>
              {label && (
                <h2 className="text-xl font-bold uppercase tracking-wide text-[#7B052A]">
                  {label}
                </h2>
              )}
              <p className="text-lg leading-relaxed">{value}</p>
            </div>
          ))}
        </div>

        <GridTileSolo
          image={images[0]}
          onOpen={() => setSel(0)}
        />
      </section>

      {/* Pitch */}
      <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
        <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-[#7B052A]">
          Pitch
        </h2>
        <p className="space-y-6 text-lg leading-relaxed text-justify">
          {pitch}
        </p>
      </section>

      {/* Storyboard */}
      <Heading>Storyboard</Heading>

      {gallery(1, 3, `${tight} grid-cols-2`)}
      {gallery(3, 4, "mx-auto max-w-3xl px-6 pb-6")}

      {/* Character Design */}
      <Heading>Character Design</Heading>
      {gallery(4, 5, "mx-auto max-w-3xl px-6 pb-6")}

      <section className="mx-auto max-w-4xl px-6 pb-10">
        <p className="space-y-6 text-lg leading-relaxed text-justify">
          {characterText}
        </p>
      </section>

      {/* Character Design images: uniform sizes */}
      {uniformGallery(5, 27, `${tight} grid-cols-1 sm:grid-cols-3`)}

      {/* GIFs */}
      {gallery(27, 29, `${tight} grid-cols-1 sm:grid-cols-2`)}
      {/* Image modal */}
      <Modal
        isOpen={sel !== null}
        onRequestClose={() => setSel(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged Fantasmatic image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {current && (
          <>
            <button
              type="button"
              onClick={() => setSel(null)}
              aria-label="Close image"
              className={`${btn} right-6 top-6 font-bold`}
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
              src={current.src}
              alt={current.alt}
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
              {sel + 1} / {images.length}
            </div>
          </>
        )}
      </Modal>

      <Footer />
    </main>
  );
}