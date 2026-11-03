import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const images = [
  {
    src: "../images/illustrations/img_1.jpg",
    alt: "Others scene 1",
    title: "Scene 1",
  },
  {
    src: "../images/illustrations/img_2.jpg",
    alt: "Others scene 2",
    title: "Scene 2",
  },
  {
    src: "../images/illustrations/img_3.jpg",
    alt: "Others scene 3",
    title: "Scene 3",
  },
  {
    src: "../images/illustrations/img_4.jpg",
    alt: "Others scene 4",
    title: "Scene 4",
  },
  {
    src: "../images/illustrations/img_5.jpg",
    alt: "Others project",
    title: "Scene 5",
  },
  {
    src: "../images/illustrations/img_6.png",
    alt: "Others project",
    title: "Scene 6",
  },
  {
    src: "../images/illustrations/img_7.png",
    alt: "Others project",
    title: "Scene 7",
  },
  {
    src: "../images/illustrations/img_8.png",
    alt: "Others project",
    title: "Scene 8",
  },
  {
    src: "../images/illustrations/img_9.jpg",
    alt: "Others project",
    title: "Scene 9",
  },
  {
    src: "../images/illustrations/img_10.png",
    alt: "Others project",
    title: "Scene 10",
  },
  {
    src: "../images/illustrations/img_11.png",
    alt: "Others project",
    title: "Scene 11",
  },
  {
    src: "../images/illustrations/img_12.jpg",
    alt: "Others project",
    title: "Scene 12",
  },
];

const tight = "mx-auto grid max-w-6xl items-start gap-3 px-6 pb-3";
const img = "w-full cursor-zoom-in hover:opacity-80";
const cover = `${img} rounded-xs object-cover transition-opacity`;

// [from, to, section classes, image classes]
const sections = [
  [
    0,
    1,
    "mx-auto grid max-w-4xl grid-cols-1 gap-3 px-6 pb-12",
    `${cover} h-72 sm:h-96 md:h-[32rem]`,
  ],
  [1, 5, `${tight} grid-cols-1 sm:grid-cols-2 md:grid-cols-4`, `${cover} h-72`],
  [5, 7, `${tight} grid-cols-1 md:grid-cols-2`, `${cover} h-72 md:h-96`],
  [7, 9, `${tight} grid-cols-1 md:grid-cols-2`, `${cover} h-72 md:h-96`],
  [9, 12, `${tight} grid-cols-1 sm:grid-cols-3`, `${cover} h-72`],
];

const arrow =
  "fixed top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173] focus-visible:outline-2 focus-visible:outline-[#F82173]";

export default function Illustrations() {
  const [sel, setSel] = useState(null);
  const step = (d) => setSel((p) => (p + d + images.length) % images.length);
  const current = sel !== null ? images[sel] : null;

  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Illustrations</h1>
      </section>

      {sections.map(([from, to, sectionClass, imgClass]) => (
        <section key={from} className={sectionClass}>
          {images.slice(from, to).map((image, i) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-xs"
            >
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => setSel(from + i)}
                className={imgClass}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* Image modal */}
      <Modal
        isOpen={sel !== null}
        onRequestClose={() => setSel(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged project image"
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