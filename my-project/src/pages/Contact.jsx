import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Contact
        </h1>
        <img
          src="/contact_img.png"
          alt="Contact banner"
          className="mx-auto mb-6 w-sm max-w-2xl object-cover object-center"
        />
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-4">
          <a
            key="linktree"
            href="https://linktr.ee/samandamasduraudurrea?utm_source=linktree_profile_share&ltsid=97488444-e56d-43f2-8dde-5629faf17019"
            target="_blank"
            rel="noopener noreferrer"
            className="Adorn-Engraved-Expanded rounded-full bg-[#7B052A] px-10 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#C7184D] hover:text-white hover:scale-105"
          >
            Linktree
          </a>
        </div>

        <section className="relative isolate h-[50px] w-full overflow-hidden md:h-[50px] py-12">
          <ul className="absolute bottom-5 flex w-full items-center justify-center gap-5 px-6">
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#7B052A] bg-transparent text-[#7B052A] transition-all duration-300 hover:scale-110 hover:border-[#C7184D] hover:bg-transparent hover:text-[#C7184D]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    fill="currentColor"
                    d="M21.8789 0.24H2.2497C1.17715 0.24 0.24 1.01175 0.24 2.07175V21.7445c0 1.06575 0.93715 2.0155 2.0097 2.0155h19.62345c1.07835 0 1.8868 -0.95605 1.8868 -2.0155V2.07175C23.7663 1.01175 22.9515 0.24 21.8789 0.24ZM7.5307 19.84505h-3.3695V9.3687h3.3695v10.47635ZM5.9625 7.7758h-0.02415c-1.07835 0 -1.7766 -0.8027 -1.7766 -1.8075 0 -1.02325 0.71665 -1.8071 1.81915 -1.8071 1.10245 0 1.7771 0.7781 1.80125 1.8071 -0.0005 1.0048 -0.6988 1.8075 -1.81965 1.8075Zm13.88255 12.06925h-3.36945V14.1168c0 -1.37235 -0.4903 -2.31 -1.7094 -2.31 -0.93135 0 -1.4826 0.63 -1.7278 1.24375 -0.09185 0.22045 -0.1165 0.5208 -0.1165 0.8274v5.9671h-3.36945V9.3687h3.36945v1.45795c0.4903 -0.6983 1.2563 -1.7031 3.0387 -1.7031 2.2118 0 3.885 1.4579 3.885 4.60105l-0.00055 6.12045Z"
                  />
                </svg>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#7B052A] bg-transparent text-[#7B052A] transition-all duration-300 hover:scale-110 hover:border-[#C7184D] hover:bg-transparent hover:text-[#C7184D]"
              >
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <path
                    fill="currentColor"
                    d="M16.8998 2.1998c1.2985 0.0039 2.54265 0.52145 3.4608 1.4396 0.9181 0.91815 1.4357 2.1623 1.43955 3.4608v9.7996c-0.00385 1.2985 -0.52145 2.54265 -1.43955 3.4608 -0.91815 0.91815 -2.1623 1.4357 -3.4608 1.43955H7.1002c-1.2985 -0.00385 -2.54265 -0.52145 -3.4608 -1.43955 -0.91815 -0.91815 -1.4357 -2.1623 -1.4396 -3.4608V7.1002c0.0039 -1.2985 0.52145 -2.54265 1.4396 -3.4608 0.91815 -0.91815 2.1623 -1.4357 3.4608 -1.4396h9.7996Zm0 -1.9598H7.1002C3.327 0.24 0.24 3.327 0.24 7.1002v9.7996C0.24 20.67295 3.327 23.76 7.1002 23.76h9.7996c3.77315 0 6.8602 -3.08705 6.8602 -6.8602V7.1002C23.76 3.327 20.67295 0.24 16.8998 0.24Z"
                  />
                  <path
                    fill="currentColor"
                    d="M18.369 7.0993c-0.2907 0 -0.57485 -0.0862 -0.8166 -0.24775 -0.2417 -0.1615 -0.43015 -0.3911 -0.5414 -0.65965 -0.11125 -0.26855 -0.14035 -0.56415 -0.08365 -0.8493 0.05675 -0.2851 0.1967 -0.547 0.40225 -0.7526 0.2056 -0.20555 0.4675 -0.34555 0.75265 -0.40225 0.2851 -0.0567 0.5807 -0.0276 0.84925 0.0836 0.26865 0.1113 0.4982 0.2997 0.65965 0.54145 0.16155 0.2417 0.24775 0.5259 0.24775 0.8166 0.00045 0.19315 -0.0373 0.3845 -0.11105 0.56295 -0.0737 0.17855 -0.182 0.34075 -0.31855 0.47735 -0.1366 0.13655 -0.2988 0.2448 -0.4773 0.31855 -0.1785 0.0737 -0.36985 0.11145 -0.563 0.11105Z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.0006 8.0799c0.7753 0 1.5333 0.2299 2.1779 0.66065 0.6447 0.43075 1.1472 1.043 1.44385 1.75935 0.2967 0.7163 0.37435 1.50455 0.22305 2.26495 -0.15125 0.76045 -0.5246 1.45895 -1.0728 2.0072 -0.5483 0.5482 -1.2468 0.9216 -2.0072 1.07285 -0.76045 0.1513 -1.54865 0.07365 -2.26495 -0.2231 -0.7164 -0.29665 -1.3286 -0.7991 -1.7594 -1.4438 -0.43075 -0.64465 -0.66065 -1.4026 -0.66065 -2.1779 0.00115 -1.0394 0.41455 -2.03585 1.14945 -2.77075 0.73495 -0.73495 1.7314 -1.14835 2.77075 -1.14945Zm0 -1.95985c-1.16295 0 -2.2998 0.3449 -3.26675 0.99095 -0.967 0.64615 -1.7206 1.5645 -2.1656 2.63885 -0.44505 1.0745 -0.56155 2.2567 -0.3347 3.39735 0.22695 1.1406 0.78695 2.1883 1.60925 3.01065 0.8224 0.8223 1.87005 1.3823 3.01065 1.60925 1.14065 0.2269 2.32285 0.1104 3.39735 -0.3346 1.07445 -0.44505 1.99275 -1.1987 2.63885 -2.1657 0.64605 -0.96695 0.99095 -2.10375 0.99095 -3.2667 0 -1.55945 -0.6195 -3.0551 -1.7222 -4.1578s-2.59835 -1.72225 -4.1578 -1.72225Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </section>
        <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed sm:text-lg">
          <h2 className="mx-8 text-center text-lg sm:text-xl">My CV</h2>

          <div className="pt-3">
            <a
              href="/CV_Samanda_Masduraud_Urrea.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-5 py-3 font-bold text-black transition hover:bg-[#7B052A] hover:text-white"
            >
              Click here!
            </a>
          </div>
        </div>
      </section>

      {/* Contact form - pour l'instant en commentaire */}
      {/* <section className="mx-auto max-w-md pb-12 sm:pb-16">
        <form className="space-y-5 text-left">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base">
              Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name..."
              className="mt-2 w-full rounded-md border border-white/20 bg-transparent p-3 text-base text-white placeholder:text-white/50 focus:border-[#F82173] focus:outline-none focus:ring-1 focus:ring-[#F82173]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm sm:text-base">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your email..."
              className="mt-2 w-full rounded-md border border-white/20 bg-transparent p-3 text-base text-white placeholder:text-white/50 focus:border-[#F82173] focus:outline-none focus:ring-1 focus:ring-[#F82173]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm sm:text-base">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Your message..."
              className="mt-2 w-full resize-y rounded-md border border-white/20 bg-transparent p-3 text-base text-white placeholder:text-white/50 focus:border-[#F82173] focus:outline-none focus:ring-1 focus:ring-[#F82173]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-white px-4 py-3 font-bold text-black transition hover:bg-[#F82173] hover:text-white"
          >
            Send Message
          </button>
        </form>
      </section> */}
    </main>
  );
}
