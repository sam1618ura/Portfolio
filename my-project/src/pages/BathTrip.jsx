import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const images = [
  {
    src: "../images/bath-trip/img_1.png",
    alt: "Character design scene 1",
    title: "Poster",
  },
  {
    src: "../images/bath-trip/img_2.png",
    alt: "Character design scene 2",
    title: "Image 2",
  },
  {
    src: "../images/bath-trip/img_3.png",
    alt: "Character design scene 3",
    title: "Image 3",
  },
  {
    src: "../images/bath-trip/img_4.png",
    alt: "Character design scene 4",
    title: "Image 4",
  },
  {
    src: "../images/bath-trip/img_5.png",
    alt: "Character design scene 5",
    title: "Image 5",
  },
  {
    src: "../images/bath-trip/img_6.png",
    alt: "Character design scene 6",
    title: "Image 6",
  },
  {
    src: "../images/bath-trip/img_7.png",
    alt: "Character design scene 7",
    title: "Image 7",
  },
  {
    src: "../images/bath-trip/img_8.png",
    alt: "Character design scene 8",
    title: "Affiche réalisée par Gilles Cuvelier",
  },
];

const info = [
  ["Titre", "Bath Trip"],
  ["Genre", "Art vidéo"],
  ["Durée estimée", "15 secondes"],
  ["Réalisateurs", "Axelle, Elisanne, Alice, Léa et Sam"],
  [
    "Description",
    "Réalisation d'une pastille vidéo d'introduction à partir des éléments graphiques de l'affiche réalisée par Gilles Cuvelier et des éléments du festival envoyés par l’AFCA.",
  ],
];

const SectionTitle = ({ children }) => (
  <h2 className="Adorn-Engraved-Expanded mb-3 text-xl underline underline-offset-8 decoration-[#7B052A]">
    {children}
  </h2>
);

const btn =
  "fixed z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#7B052A] hover:text-white focus-visible:outline-2 focus-visible:outline-[#7B052A]";

const Tile = ({ image, onOpen }) => (
  <div className="group relative overflow-hidden rounded-xs">
    <img
      src={image.src}
      alt={image.alt}
      onClick={onOpen}
      loading="lazy"
      className="h-auto w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
    />

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="Adorn-Engraved-Expanded px-4 text-center text-xl text-white">
        {image.title}
      </p>
    </div>
  </div>
);

export default function BathTrip() {
  const [sel, setSel] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const step = (d) => setSel((c) => (c + d + images.length) % images.length);
  const current = images[sel];
  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Bath Trip
        </h1>

        <h2 className="mx-auto max-w-3xl px-2 py-2 text-sm font-medium sm:text-base text-[#A9A9A9]">
          Affiche animée du Festival national du film d'animation 2025, une
          pastille de 15 secondes en collaboration avec ; Axelle Royer, Elisanne
          Mombelli, Alice Chen, Léa Fritsch et moi même au character design,
          animation
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* First image */}
          <div className="group relative overflow-hidden rounded-xs">
            <img
              src={images[0].src}
              alt={images[0].alt}
              onClick={() => setSel(0)}
              className="w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {images[0].title}
              </p>
            </div>
          </div>

          {/* Project Information */}
          <div className="space-y-7 text-base leading-relaxed">
            <div>
              <SectionTitle>Titre</SectionTitle>
              <p className="text-xl">Bath Trip</p>
            </div>

            <div>
              <SectionTitle>Genre</SectionTitle>
              <p className="text-xl">Art vidéo</p>
            </div>

            <div>
              <SectionTitle>Durée estimée</SectionTitle>
              <p className="text-xl">15 secondes</p>
            </div>

            <div>
              <SectionTitle>Réalisateurs</SectionTitle>
              <p className="text-lg">
                Axelle ROYER, Elisanne MOMBELLI, Alice CHEN, Léa FRITSCH et
                Samanda MASDURAUD URREA
              </p>
            </div>

            <div>
              <SectionTitle>Description</SectionTitle>
              <p className="text-lg">
                Réalisation d'une pastille vidéo d'introduction à partir des
                éléments graphiques de l'affiche réalisée par Gilles Cuvelier et
                des éléments du festival envoyés par l'AFCA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video + le avertissement de contenu */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        {showVideo ? (
          <video
            className="w-full rounded-xs shadow-md"
            controls
            autoPlay
            playsInline
            preload="metadata"
          >
            <source src="../videos/Bath_Trip.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        ) : (
          <div
            role="alert"
            className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xs border border-[#7b052a]/60 bg-black/40 px-6 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7b052a]">
              ⚠ Trigger warning
            </p>
            <p className="max-w-md text-sm md:text-base leading-relaxed text-white/90">
              Cette vidéo contient des images clignotantes/flashs et des effets
              lumineux pouvant provoquer des crises chez les personnes
              épileptiques ou photosensibles.
            </p>
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="rounded-full bg-white md:px-6 md:py-2 py-1 px-3 text-sm font-semibold text-black transition-colors hover:bg-[#7b052a] hover:text-white focus-visible:outline-2 focus-visible:outline-[#7b052a]"
            >
              Je comprends. Voir la vidéo
            </button>
          </div>
        )}
      </section>
      {/* Gallery */}
      <section className="mx-auto max-w-7xl columns-1 gap-3 px-6 pb-16 sm:columns-2 lg:columns-3 [&>*]:mb-3 [&>*]:break-inside-avoid">
        {images.slice(1).map((image, i) => (
          <Tile key={image.src} image={image} onOpen={() => setSel(i + 1)} />
        ))}
      </section>
      <Modal
        isOpen={sel !== null}
        onRequestClose={() => setSel(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged Sharp Potion image"
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
