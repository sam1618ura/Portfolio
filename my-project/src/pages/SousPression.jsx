import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const teamMembers = [
  {
    name: "Maëlle Chaize",
    url: "https://www.linkedin.com/in/ma%C3%ABlle-chaize-02524a240/",
  },
  {
    name: "Gémima Paulina",
    url: "https://www.linkedin.com/in/gemima-paulina-851a02233/",
  },
  {
    name: "Henry Hinchliffe",
    url: "https://www.linkedin.com/in/henry-hinchliffe-915931213/",
  },
  {
    name: "Mylène Wozniak",
    url: "https://www.linkedin.com/in/myl%C3%A8ne-wozniak-886023309/",
  },
  {
    name: "Samanda Masduraud Urrea",
    url: "https://www.linkedin.com/in/samanda-masduraud-urrea-1463752b9/",
  },
];

export default function SousPression() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    {
      src: "../images/sous_pression/img_1.jpg",
      alt: "Character design scene 1",
      title: "Poster",
    },
    {
      src: "../images/sous_pression/img_2.png",
      alt: "Character design scene 2",
      title: "Image 2",
    },
    {
      src: "../images/sous_pression/img_3.png",
      alt: "Character design scene 3",
      title: "Image 3",
    },
    {
      src: "../images/sous_pression/img_4.png",
      alt: "Character design scene 4",
      title: "Image 4",
    },
    {
      src: "../images/sous_pression/img_5.png",
      alt: "Character design scene 5",
      title: "Image 5",
    },
    {
      src: "../images/sous_pression/img_6.png",
      alt: "Character design scene 6",
      title: "Image 6",
    },
    {
      src: "../images/sous_pression/img_7.png",
      alt: "Character design scene 7",
      title: "Image 7",
    },
    {
      src: "../images/sous_pression/img_8.png",
      alt: "Character design scene 8",
      title: "Épée réalisée par Mylène Wozniak",
    },
    {
      src: "../images/sous_pression/img_9.png",
      alt: "Character design scene 9",
      title: "Image 9",
    },
    {
      src: "../images/sous_pression/img_10.png",
      alt: "Character design scene 10",
      title: "Image 10",
    },
    {
      src: "../images/sous_pression/img_11.png",
      alt: "Character design scene 11",
      title: "Image 11",
    },
    {
      src: "../images/sous_pression/img_12.png",
      alt: "Character design scene 12",
      title: "Image 12",
    },
    {
      src: "../images/sous_pression/img_13.png",
      alt: "Character design scene 13",
      title: "Image 13",
    },
    {
      src: "../images/sous_pression/img_14.png",
      alt: "Character design scene 14",
      title: "Image 14",
    },
    {
      src: "../images/sous_pression/img_15.png",
      alt: "Character design scene 15",
      title: "Image 15",
    },
    {
      src: "../images/sous_pression/gif_1.gif",
      alt: "Gif 1",
      title:
        "Réalisation du turn par moi-même. Clean et Colo réalisées par Maëlle Chaize",
    },
    {
      src: "../images/sous_pression/gif_2.gif",
      alt: "Gif 2",
      title:
        "Réalisation du turn par moi-même. Clean et Colo réalisée par Maëlle Chaize",
    },
    {
      src: "../images/sous_pression/gif_3.gif",
      alt: "Gif 3",
      title:
        "Réalisation du turn par moi-même  Clean et Colo réalisée par Mylène Wozniak",
    },
  ];

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const showNextImage = () => {
    setSelectedImageIndex((current) => (current + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex(
      (current) => (current - 1 + images.length) % images.length,
    );
  };

  const SectionTitle = ({ children }) => (
    <h2 className="Adorn-Engraved-Expanded mb-5 text-2xl underline underline-offset-8 decoration-[#7B052A]">
      {children}
    </h2>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* introduction */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="Adorn-Engraved-Expanded mb-12 text-center text-4xl font-bold">
          Sous Pression
        </h1>

        {/* First image + project information */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xs">
            <img
              src={images[0].src}
              alt={images[0].alt}
              onClick={() => setSelectedImageIndex(0)}
              className="w-full cursor-zoom-in object-cover transition-opacity duration-300 hover:opacity-70"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {images[0].title}
              </p>
            </div>
          </div>

          <div className="space-y-7 text-base leading-relaxed">
            <div>
              <SectionTitle>Titre</SectionTitle>
              <p className="text-xl">Sous Pression</p>
            </div>

            <div>
              <SectionTitle>Genre</SectionTitle>
              <p className="text-xl">Comédie, Tranche de vie, Fantastique</p>
            </div>

            <div>
              <SectionTitle>Durée estimée</SectionTitle>
              <p className="text-xl">7 minutes 13</p>
            </div>

            <div>
              <SectionTitle>Réalisateurs</SectionTitle>
              <p className="text-lg">
                Henry HINCHLIFFE, Mylène WOZNIAK, Samanda MASDURAUD URREA,
                Maëlle CHAIZE, Gemima PAULINA
              </p>
            </div>

            <div>
              <SectionTitle>Pitch</SectionTitle>
              <p className="text-lg italic">
                Au beau milieu d'une soirée parisienne,{" "}
                <span className="italic text-[#7B052A]">Stud</span> est poussée
                par sa meilleure amie,{" "}
                <span className="italic text-[#7B052A]">Jessica</span>, à aller
                chercher de l'alcool. Contrainte de faire équipe avec{" "}
                <span className="italic text-[#7B052A]">Arthur</span>, un
                gringalet excentrique fan de médiéval, ce petit trajet mettra à
                l'épreuve non seulement la patience de{" "}
                <span className="italic text-[#7B052A]">Stud</span>, mais aussi
                la vision qu'ils ont de{" "}
                <span className="italic text-[#7B052A]">Jessica</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deuxieme img */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="group relative overflow-hidden rounded-xs">
          <img
            src={images[1].src}
            alt={images[1].alt}
            onClick={() => setSelectedImageIndex(1)}
            className="w-full cursor-zoom-in object-cover transition-opacity duration-300 hover:opacity-70"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
              {images[1].title}
            </p>
          </div>
        </div>

        {/* linkdein Btns */}
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

      {/* Intention */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionTitle>Intention</SectionTitle>

        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            Ce projet de fin d'études aborde les relations toxiques, qu'elles
            soient amicales, familiales ou amoureuses ; c'est une épreuve par
            laquelle beaucoup, dont notre équipe également.
          </p>

          <p>
            Ce film a pour objectif de montrer qu'il est possible de se libérer
            de ce type de relation et de s'en affranchir. Il suffit parfois
            d'une personne, d'un témoignage, d'un article ou d'un conseil avisé
            pour aider quelqu'un à réaliser que certains comportements ne sont
            pas normaux.
          </p>

          <p>
            Il ne faut pas avoir peur de se retrouver seul et nous croyons
            profondément au dicton :
            <span className="italic text-[#7B052A]">
              {" "}
              « Vaut mieux être seul que mal accompagné ».
            </span>
          </p>

          <p>
            Nous avons décidé d'illustrer à travers ce court métrage à la fois
            comique et fantastique.
          </p>

          <p>
            Ce film invite le spectateur à revoir sa conception des relations
            humaines au sein de la société actuelle. Nous aimerions que ce film
            puisse être une source d'espoir et de force pour toutes les
            personnes luttant pour se sortir de relations toxiques et
            dévalorisantes.
          </p>
        </div>
      </section>

      {/* THIRD IMAGE */}
      <section className="group mx-auto max-w-6xl px-6 py-12">
        <div className="group relative overflow-hidden rounded-xs">
          <img
            src={images[2].src}
            alt={images[2].alt}
            onClick={() => setSelectedImageIndex(2)}
            className="w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
              {images[2].title}
            </p>
          </div>
        </div>

        {/* CHARACTER DESIGN */}
        <div className="mx-auto max-w-4xl py-12">
          <SectionTitle>Character Design</SectionTitle>

          <p className="text-lg leading-relaxed text-justify">
            La recherche des chara a vraiment été un travail à quatre mains en
            collaboration avec Gémima Paulina. Je me suis majoritairement
            occupée d'<span className="italic text-[#7B052A]">Arthur</span>,{" "}
            <span className="italic text-[#7B052A]">Stud Médiéval</span> ainsi
            que <span className="italic text-[#7B052A]">Monstre Jessica</span> .
          </p>
        </div>
      </section>

      {/* tout les autres images */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2">
        {images.slice(3, 18).map((image, index) => {
          const actualIndex = index + 3;

          return (
            <div
              key={image.src}
              className="group relative h-72 w-full overflow-hidden rounded-xs"
            >
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => setSelectedImageIndex(actualIndex)}
                className="h-full w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                  {image.title}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={() => setSelectedImageIndex(null)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        contentLabel="Enlarged Sous Pression image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {selectedImage && (
          <>
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image"
              className="fixed right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl font-bold text-black transition-colors hover:bg-[#7B052A] hover:text-white"
            >
              &times;
            </button>

            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="fixed left-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#7B052A] hover:text-white"
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
              onClick={showNextImage}
              aria-label="Next image"
              className="fixed right-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#7B052A] hover:text-white"
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
