import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const images = [
  {
    src: "../images/character_design/img_1.png",
    alt: "Character design scene 1",
    title: "Scene 1",
  },
  {
    src: "../images/character_design/img_2.png",
    alt: "Character design scene 2",
    title: "Scene 2",
  },
  {
    src: "../images/character_design/img_3.png",
    alt: "Character design scene 3",
    title: "Scene 3",
  },
  {
    src: "../images/character_design/img_4.png",
    alt: "Character design scene 4",
    title: "Scene 4",
  },
  {
    src: "../images/character_design/img_5.png",
    alt: "Character design scene 5",
    title: "Scene 5",
  },
  {
    src: "../images/character_design/img_6.png",
    alt: "Character design scene 6",
    title: "Scene 6",
  },
  {
    src: "../images/character_design/img_7.png",
    alt: "Character design scene 7",
    title: "Scene 7",
  },
  {
    src: "../images/character_design/img_8.png",
    alt: "Character design scene 8",
    title: "Scene 8",
  },
  {
    src: "../images/character_design/img_9.png",
    alt: "Character design scene 9",
    title: "Scene 9",
  },
  {
    src: "../images/character_design/img_10.png",
    alt: "Character design scene 10",
    title: "Scene 10",
  },
  {
    src: "../images/character_design/img_11.png",
    alt: "Character design scene 11",
    title: "Scene 11",
  },
  {
    src: "../images/character_design/img_12.png",
    alt: "Character design scene 12",
    title: "Scene 12",
  },
  {
    src: "../images/character_design/img_13.png",
    alt: "Character design scene 13",
    title: "Scene 13",
  },
  {
    src: "../images/character_design/img_14.png",
    alt: "Character design scene 14",
    title: "Scene 14",
  },
  {
    src: "../images/character_design/img_15.png",
    alt: "Character design scene 15",
    title: "Scene 15",
  },
  {
    src: "../images/character_design/img_16.png",
    alt: "Character design scene 16",
    title: "Scene 16",
  },
  {
    src: "../images/character_design/img_17.png",
    alt: "Character design scene 17",
    title: "Scene 17",
  },
  {
    src: "../images/character_design/img_18.png",
    alt: "Character design scene 18",
    title: "Scene 18",
  },
  {
    src: "../images/character_design/img_19.png",
    alt: "Character design scene 19",
    title: "Scene 19",
  },
  {
    src: "../images/character_design/img_20.png",
    alt: "Character design scene 20",
    title: "Scene 20",
  },
  {
    src: "../images/character_design/img_21.png",
    alt: "Character design scene 21",
    title: "Scene 21",
  },
];

const tight = "mx-auto grid max-w-6xl items-start gap-3 px-6 pb-3";
const wide = "mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-3";
const img = "w-full cursor-zoom-in hover:opacity-80";
const cover = `${img} h-auto object-contain transition-opacity md:h-full md:object-cover`;

// [from, to, section classes, image classes]
const sections = [
  [0, 2, `${tight}`, `${img} h-auto rounded-xs object-contain`],
  [
    2,
    4,
    `${tight} grid-cols-2`,
    `${img} h-30 md:h-90 rounded-xs object-contain`,
  ],
  [
    4,
    10,
    `${tight}  md:grid-cols-2`,
    `${img} h-auto md:h-80 object-cover transition-opacity`,
  ],
  [10, 11, `${tight}`, cover],
  [12, 18, `${wide}  md:grid-cols-2`, cover],
  [18, 21, `${wide} md:grid-cols-3`, cover],
];

const arrow =
  "fixed top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173] focus-visible:outline-2 focus-visible:outline-[#F82173]";

export default function CharacterDesign() {
  const [sel, setSel] = useState(null);
  const step = (d) => setSel((p) => (p + d + images.length) % images.length);
  const current = images[sel];

  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Character Design
        </h1>
        <p className="mx-auto max-w-4xl text-sm leading-relaxed sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          maiores similique modi eveniet.
        </p>
      </section>

      {sections.map(([from, to, sectionClass, imgClass]) => (
        <section key={from} className={sectionClass}>
          {images.slice(from, to).map((image, i) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-xs grid-cols-1"
            >
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => setSel(from + i)}
                className={imgClass}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* modal for big image */}

      <Modal
        isOpen={sel !== null}
        onRequestClose={() => setSel(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {current && (
          <>
            <button
              onClick={() => setSel(null)}
              aria-label="Close image"
              className="fixed right-6 top-6 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-black transition hover:bg-[#F82173] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F82173]"
            >
              &times;
            </button>
            <button
              onClick={() => step(-1)}
              aria-label="Previous image"
              className={`${arrow} left-6`}
            >
              &#8249;
            </button>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[85vh] max-w-[75vw] object-contain"
              />
            </div>
            <button
              onClick={() => step(1)}
              aria-label="Next image"
              className={`${arrow} right-6`}
            >
              &#8250;
            </button>
            <span className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
              {sel + 1} / {images.length}
            </span>
          </>
        )}
      </Modal>

      <Footer />
    </main>
  );
}
