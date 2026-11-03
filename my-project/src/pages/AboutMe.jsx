import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const software = [
  { name: "After Effects", src: "/banner/ae.svg" },
  { name: "Premiere Pro", src: "/banner/pr.svg" },
  { name: "Photoshop", src: "/banner/ps.svg" },
  { name: "Fresco", src: "/banner/fr.svg" },
  { name: "Toon Boom Harmony", src: "/banner/harmony.svg" },
  { name: "Blender", src: "/banner/blender.svg" },
];

export default function AboutMe() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <section className="relative bg-[#C9006F] isolate h-[360px] w-full overflow-hidden md:h-[570px]">
        {/* Background image */}
        <img
          src="/oc_limu.png"
          alt="OC Lumi"
          className="absolute inset-0 h-full w-full object-cover object-[25%_55%] md:object-[15%_5%]"
        />

        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Main texts */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 text-left sm:px-12 md:px-20">
          <h1 className="pb-5 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl">
            About Me
          </h1>

          <h2 className="mt-2 max-w-md text-lg font-medium tracking-wide text-white drop-shadow-md md:text-2xl">
            Portfolio Character Artist 2025-2026
          </h2>
        </div>
      </section>
      <section className="border-t border-white/10 bg-[#212121] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          {/* About Me */}
          <div className="mb-14">
            <h2 className="IrishGrover mb-8 text-center text-3xl sm:text-4xl">
              About Me
            </h2>

            <div className="mx-auto max-w-4xl space-y-5 text-center text-lg leading-relaxed text-white/90 md:text-xl">
              <p>
                "Toutes les histoires méritent d'être racontées." C'est une
                devise que je nourris depuis toujours. Faire vivre les récits de
                ceux qu'on n'entend pas en me plongeant dans la psychologie des
                personnages est une perspective que j'aimerais faire exister
                sous n'importe quelle forme. Faire rêver ou s'interroger les
                gens sur divers sujets à travers l'absurde, la romance,
                l'histoire ou la fantaisie, tout en gardant un angle mature,
                c'est ce que je préfère.
              </p>

              <p className="text-white/80 py-6">
                La création d'un visual novel est ce qui m'a orienté vers le
                domaine de l'animation. Afin de pouvoir réaliser plus librement
                mon projet, je suis ensuite allé dans le secteur de la 2D et
                plus précisément le character design sans délaisser la création
                d'univers et le storytelling. Au cours de mes études, je me suis
                rendu compte que la réalisation serait une voie qui pourrait
                être intéressante. Sans certitude, car j'aimerais explorer
                d'autres pistes pour m'en faire une idée.
              </p>
            </div>
          </div>

          {/* CV Downloads */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
            {/* French CV */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="Adorn-Engraved-Expanded text-lg font-medium text-white sm:text-xl">
                Télécharger mon CV
              </h3>

              <a
                href="/CV_Samanda_Masduraud_Urrea.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-block rounded-full border-2 border-[#7B052A] bg-transparent px-9 py-3 font-bold text-[#7B052A] transition-all duration-300 hover:scale-105 hover:border-[#C7184D] hover:text-[#C7184D]"
              >
                Mon CV
              </a>
            </div>

            {/* English CV */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="Adorn-Engraved-Expanded text-lg font-medium text-white sm:text-xl">
                Download my CV
              </h3>

              <a
                href="/CV_Samanda_Masduraud_Urrea.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-[#7B052A] bg-transparent px-9 py-3 font-bold text-[#7B052A] transition-all duration-300 hover:scale-105 hover:border-[#C7184D] hover:text-[#C7184D]"
              >
                My CV
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#212121]">
        <Footer />
      </div>
    </main>
  );
}
