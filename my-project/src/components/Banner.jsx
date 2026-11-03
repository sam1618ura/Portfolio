export default function Banner() {
  return (
    <section className="relative isolate h-[360px] w-full overflow-hidden md:h-[670px]">
      {/* Background image */}
      <img
        src="/banner/banner.png"
        alt="Portfolio banner"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Image overlays */}

      {/* Main texts */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg md:text-6xl text-[#FF66D1] pb-5">
          Character
          <br />
          Artist
        </h1>
        <h2 className="mt-2 text-lg font-medium tracking-wide drop-shadow-md md:text-2xl text-[#FFC4D7]">
          2025 - 2026
        </h2>
      </div>
    </section>
  );
}
