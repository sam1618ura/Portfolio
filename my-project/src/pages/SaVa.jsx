import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SaVa() {
  const images = [
    {
      src: "../images/sa-va/img_1.png",
      alt: "Sa Va scene 1",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_2.png",
      alt: "Sa Va scene 2",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_3.png",
      alt: "Sa Va scene 3",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_4.png",
      alt: "Sa Va scene 4",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_5.png",
      alt: "Sa Va scene 5",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_6.png",
      alt: "Sa Va scene 6",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_7.png",
      alt: "Sa Va scene 7",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_8.png",
      alt: "Sa Va scene 8",
      title: "Lorem ipsum",
    },
    {
      src: "../images/sa-va/img_9.png",
      alt: "Sa Va scene 9",
      title: "Lorem ipsum",
    },
  ];

  const teamMembers = [
    {
      name: "Valentina GAULTIER",
      url: "https://www.linkedin.com/in/valentina-gaultier-061768307/",
    },
    {
      name: "Marie DOS SANTOS",
      url: "https://www.linkedin.com/in/marie-dos-santos-7301a1301/",
    },
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const showNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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

  const [sel, setSel] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const step = (d) => setSel((c) => (c + d + images.length) % images.length);
  const current = images[sel];
  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Sa va :)
        </h1>

        <h2 className="mx-auto max-w-3xl px-2 py-2 text-sm font-medium sm:text-base text-[#A9A9A9]">
          Au cœur d'une boite de nuit vibrante de vie, une jeune femme trouve
          refuge dans une petite cabine de toilette. Submergée par une crise,
          comment va-t-elle trouver le moyen de retourner à la fête ?
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* First image */}
          <div className="group relative overflow-hidden rounded-xs">
            <img
              src={images[0].src}
              alt={images[0].alt}
              onClick={() => setSel(0)}
              className="h-80 w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
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
              <p className="text-xl">Sa va :)</p>
            </div>
            <div>
              <SectionTitle>Genre</SectionTitle>
              <p className="text-xl">Tranche de vie</p>
            </div>
            <div>
              <SectionTitle>Durée estimée</SectionTitle>
              <p className="text-xl">1 minutes 25 secondes</p>
            </div>
            <div>
              <SectionTitle>Scénario</SectionTitle>
              <p className="text-xl">Samanda MASDURAUD</p>
            </div>
            <div>
              <SectionTitle>Réalisateurs</SectionTitle>
              <p className="text-lg">
                Valentina GAULTIER, Marie DOS SANTOS, Samanda MASDURAUD URREA
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
            <source src="../videos/Sa_Va.mp4" type="video/mp4" />
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
            <p className="max-w-md text-base leading-relaxed text-white/90">
              Cette vidéo contient des images clignotantes/flashs et des effets
              lumineux pouvant provoquer des crises chez les personnes
              épileptiques ou photosensibles.
            </p>
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#7b052a] hover:text-white focus-visible:outline-2 focus-visible:outline-[#7b052a]"
            >
              Je comprends. Voir la vidéo
            </button>
          </div>
        )}

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-4">
          {teamMembers.map((member) => (
            <a
              key={member.name}
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="Adorn-Engraved-Expanded rounded-full bg-[#7B052A] px-10 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#C7184D] hover:text-white hover:scale-105"
            >
              {member.name}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionTitle>Intention</SectionTitle>

        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            J'ai eu le plaisir d'écrire un texte pour une mini prod qui a été
            sélectionné pour être réaliser en Animation.
          </p>

          <p>
            Le thème portait sur :
            <span className="italic text-[#7B052A] px-1">Petit Géant</span>. Je
            voulais répondre au thème sans prendre le sens propre mais plutôt
            figuré tout en mettant l'accent sur l'aspect psychologique du
            personnage.
          </p>

          <p>
            Je l'ai raconté de cette manière car je pense que c'est toujours
            intéressant de représenter un état mental de manière graphique, de
            plus cela laisse une grande liberté d'interprétation, rien que
            concernant la safe place.
            <span className="italic text-[#7B052A] px-1">
              Comment représenter un endroit où on se sent bien mentalement ?
            </span>
          </p>

          <p>
            <span className="italic text-[#7B052A] px-1">
              Est-ce qu'il s'agit d'un lieu précis ou abstrait ?
            </span>
            Je ne suis pas particulièrement confrontée à des crises d'angoisse
            aussi intenses que le personnage que j'ai mis en scène, mais j'ai
            toujours été fasciné par la mentalité des gens de manière générale.
            La perception du monde à travers les yeux de chacun est, à mon sens,
            très intéressante et essayer de la comprendre à travers l'art est un
            défi qui me plait beaucoup.
          </p>

          <p>
            Sur ce projets je me suis occupée du concept Art de l'animation et
            la couleur. Le travail à été réaliser en un mois.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionTitle>Color Script </SectionTitle>

        <div className="group relative inline-block w-full overflow-hidden rounded-xs">
          <img
            src={images[1].src}
            alt={images[1].alt}
            onClick={() => setSelectedImageIndex(1)}
            className="block h-auto w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-70"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
              {images[1].title}
            </p>
          </div>
        </div>
      </section>

      {/* Images gallery */}
      <SectionTitle>Props </SectionTitle>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pb-16 lg:grid-cols-2">
        {images.slice(2, 4).map((image, index) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index + 2)}
              className="w-full cursor-zoom-in object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </section>

      <SectionTitle>Backgrounds </SectionTitle>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pb-16 lg:grid-cols-3">
        {images.slice(4, 9).map((image, index) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index + 4)}
              className="h-55 w-full cursor-zoom-in object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Image modal */}
      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={() => setSelectedImageIndex(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged Rennes image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {selectedImage && (
          <>
            <button
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image"
              className="fixed right-6 top-6 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-black transition hover:bg-[#F82173] hover:text-white"
            >
              &times;
            </button>

            <button
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="fixed left-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173]"
            >
              &#8249;
            </button>

            <div className="flex h-full w-full items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] max-w-[75vw] rounded-xs object-contain"
              />
            </div>

            <button
              onClick={showNextImage}
              aria-label="Next image"
              className="fixed right-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173]"
            >
              &#8250;
            </button>

            <span className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
              {selectedImageIndex + 1} / {images.length}
            </span>
          </>
        )}
      </Modal>
      <Footer />
    </main>
  );
}
