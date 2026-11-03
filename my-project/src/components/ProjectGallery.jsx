const projects = [
  {
    title: "Character Design",
    years: "2025",
    image: "../../images/landing_page/img_1.png",
    link: "/character-design",
    alt: "Character Design",
  },
  {
    title: "Sous Pression",
    years: "2025",
    image: "../../images/landing_page/img_2.jpg",
    link: "/sous-pression",
    alt: "Sous Pression",
  },
  {
    title: "Bath Trip",
    years: "2025",
    image: "../../images/landing_page/img_3.png",
    link: "/bath-trip",
    alt: "Bath Trip",
  },
  {
    title: "Cauchemar en Cuisine",
    years: "2025",
    image: "../../images/landing_page/img_4.png",
    link: "/cauchemar-cuisine",
    alt: "Cauchemar en Cuisine",
  },
  {
    title: "Sa va",
    years: "2026",
    image: "../../images/landing_page/img_5.png",
    link: "/sa-va",
    alt: "Sa va",
  },
  {
    title: "Fantasmatic",
    years: "2026",
    image: "../../images/landing_page/img_6.png",
    link: "/fantasmatic",
    alt: "Fantasmatic",
  },
  {
    title: "Illustrations",
    years: "2025",
    image: "../../images/landing_page/img_7.jpg",
    link: "/illustrations",
    alt: "Illustrations",
  },
];

import { Link } from "react-router-dom";

export default function ProjectGallery() {
  return (
    <section className="bg-[#212121] pt-12">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 pb-12">
        {[projects.slice(0, 3), projects.slice(3, 7)].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {row.map((project) => (
              <Link
                key={project.title}
                to={project.link}
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />

                <div className="Adorn-Engraved-Expanded absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 p-3 text-center text-xl font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>{project.title}</span>
                </div>
                <div className="absolute bottom-3 right-3 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  <span>{project.years}</span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
