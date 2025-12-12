import Image from "next/image"

export default function Home() {
  return (
    <main className="font-jetbrains">
      <section className="h-screen flex flex-row items-center justify-center gap-80 border-b-2">
        {/*<div className="w-svw top-0 left-0 absolute z-10">*/}
        {/*  <div className="h-4 w-full bg-[#5EBD3E]"></div>*/}
        {/*  <div className="h-4 w-full bg-[#FFB900]"></div>*/}
        {/*  <div className="h-4 w-full bg-[#F78200]"></div>*/}
        {/*  <div className="h-4 w-full bg-[#E23838]"></div>*/}
        {/*  <div className="h-4 w-full bg-[#973999]"></div>*/}
        {/*  <div className="h-4 w-full bg-[#009CDF]"></div>*/}
        {/*</div>*/}
        <h1 className="tk-anatol-mn text-9xl">Andy Sorge</h1>
        <div className="max-w-1/5">
          <p>
            A young developer, learning to think creatively in order to bring
            passion and functional yet stunning design to the web.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary border-b-2 flex flex-row" id="design-reflections">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex-1 flex items-center justify-center p-4">
            <h2 className="text-6xl">
              Design Reflections
            </h2>
          </div>
          <div className="flex-1 h-full w-full bg-red-500 flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/collage.png" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto" fill />
            </div>
          </div>
          <div className="flex-1 h-full w-full bg-green-500 p-4"></div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex-1 h-full w-full bg-pink-600 flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/collage.png" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto" fill />
            </div>
          </div>
          <div className="flex-1 h-full w-full bg-purple-700 flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/collage.png" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto" fill />
            </div>
          </div>
          <div className="flex-1 h-full w-full bg-orange-500 flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/collage.png" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto" fill />
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-primary border-b-2 flex flex-row items-center justify-center" id="self-portrait">
        <div className="flex-1 flex justify-center items-center p-20">
          <Image src="/collage.png" alt="Self Portrait Collage" className="w-full" width="2667" height="2000" />
        </div>
        <div className="flex-1 p-20 flex flex-col gap-4">
          <h2 className="text-5xl text-center">Self Portrait Collage</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary border-b-2 bg-[url(/la_sunset.avif)] bg-cover" id="red-hot">
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
      <section className="h-screen bg-primary border-b-2 bg-[url(/undersea-web.png)]" id="wallpaper">
        <div className="float-right w-1/2 h-svh bg-[#2e3440] flex flex-col items-center justify-center gap-6" style={{ clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)" }}>
          <h2 className="text-white text-5xl max-w-1/2 text-center">Undersea Tiling Wallpaper</h2>
          <Image src="/undersea-print.png" alt="Undersea Tiling Wallpaper" height={373} width={538} />
          <p className="text-white text-center max-w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Scenic Words Poster</h2>
      </section>
      <section className="h-screen bg-primary border-b-2 flex flex-col items-center justify-center gap-12 bg-[#0c7639]" id="gestalt">
        <h2 className="text-7xl">Gestalt Theory Animation</h2>
        <video autoPlay loop muted className="h-auto w-auto max-w-1/2 max-h-1/2">
          <source src="/gestalt.mp4" type="video/mp4" />
        </video>
        <p className="text-center max-w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="h-screen bg-black text-white border-b-2 p-4" id="logo">
        <h2 className="text-6xl">Animated Logo</h2>
        <pre>
          Medium.....................................<br/>
          Software...................................<br/>
          Date.......................................<br/>
          Best Enjoyed...............................Fullscreen, Volume On<br/>
          Statement..................................
        </pre>
        <video controls className="h-full w-auto max-w-1/2 max-h-1/2">
          <source src="/animated_logo.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="h-screen bg-primary border-b-2">
        <h2>Short Form Video Montage</h2>
      </section>
    </main>
  );
}
