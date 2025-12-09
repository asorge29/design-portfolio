import Image from "next/image"

export default function Home() {
  return (
    <main className="font-jetbrains">
      <section className="h-screen bg-[#f6efd5] flex flex-row items-center justify-center gap-80">
        <h1 className="tk-anatol-mn text-9xl">Andy Sorge</h1>
        <div className="max-w-1/5">
          <p>
            A young developer, learning to think creatively in order to bring
            passion and functional yet stunning design to the web.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Design Reflections</h2>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Self Portrait Collage</h2>
      </section>
      <section className="h-screen bg-primary border-b-2 bg-[url(/la_sunset.avif)]" id="red-hot">
        <div className="w-full h-full backdrop-brightness-50 flex flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
            <h2 className="tk-groupie-gloss text-[30vh] text-[#d91e36] text-outline-white">RED HOT</h2>
            <p className="text-white text-center mx-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="h-full flex-1 flex items-center justify-center">
            <div className="relative w-[90%] h-[90%] flex flex-col gap-4">
              <div className="flex justify-between w-full h-1/3">
                <Image
                  src="/billboard.png"
                  alt="Billboard"
                  className="h-full w-auto"
                  width={500}
                  height={500}
                />
                <Image
                  src="/cover.png"
                  alt="Cover"
                  className="h-full w-auto"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex w-full justify-between h-1/3">
                <Image
                  src="/vinyl.png"
                  alt="Vinyl"
                  className="h-full w-auto"
                  width={500}
                  height={500}
                />
                <Image
                  src="/tracklist.png"
                  alt="Tracklist"
                  className="h-full w-auto"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex justify-between w-full h-1/3">
                <Image
                  src="/cd.png"
                  alt="CD"
                  className="h-full w-auto"
                  width={500}
                  height={500}
                />
                <Image
                  src="/center.png"
                  alt="Center"
                  className="h-full w-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Patterned Wallpaper</h2>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Scenic Words Poster</h2>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Gestalt Theory Animation</h2>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Animated Logo</h2>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Short Form Video Montage</h2>
      </section>
    </main>
  );
}
