import Image from "next/image"

export default function Home() {
  return (
    <main className="font-jetbrains">
      <div className="fixed left-6 h-screen w-16 z-40 flex flex-col items-start justify-center gap-4">

          <div
            className="group h-6 w-6 hover:w-11 bg-[#5EBD3E] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#top"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Top
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-47 bg-[#FFB900] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#design-reflections"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Design Reflections
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-54 bg-[#F78200] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#self-portrait"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Self Portrait Collage
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-20 bg-[#E23838] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#red-hot"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              RED HOT
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-46 bg-[#973999] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#wallpaper"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Undersea Wallpaper
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-46 bg-[#009CDF] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#poster"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Senic Words Poster
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-61 bg-[#5EBD3E] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#gestalt"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Gestalt Theory Animation
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-35 bg-[#FFB900] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#logo"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Animated Logo
            </a>
          </div>

          <div
            className="group h-6 w-6 hover:w-35 bg-[#F78200] overflow-hidden transition-all duration-300 ease-out flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#video"
              className="ml-2 whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
            >
              Video Montage
            </a>
          </div>

      </div>
      <section className="h-screen flex flex-row items-center justify-center gap-80" id="top">
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
          <p className="text-center">
            A young developer, learning to think creatively in order to bring
            passion and functional yet stunning design to the web.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary flex flex-row" id="design-reflections">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex-1 flex items-center justify-center p-4">
            <h2 className="text-6xl">
              Design Reflections
            </h2>
          </div>
          <div className="flex-1 h-full w-full flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #4</h3>
              <p className="text-center">
                The sculpture appears to be a urinal laying down on its back.
                It looks slightly use or weathered, like it was just taken off a wall somewhere.
                The orientation & title &quot;Fountain&quot; could be the artist saying that things don&apos;t have
                to be what we think they are.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/3.jpg" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto object-contain" fill />
            </div>
          </div>
          <div className="flex-1 h-full w-full flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/9.jpg" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto object-contain" fill />
            </div>
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #10</h3>
              <p className="text-center">
                The black & red set a tone of passion & darkness letting you know that it is likely not a bright or
                uplifting EP. If it used yellows & blues, the vibrance of those colors would be too jubilant
                for the music & the design would not accurately reflect the music.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex-1 h-full w-full flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #15</h3>
              <p className="text-center">
                The pattern is balanced despite being asymmetrical due to the bright colors being in opposing corners.
                If I were to change anything, I would add some sort of pattern that used color throughout rather than
                just black shapes.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/15.jpg" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto object-contain" fill />
            </div>
          </div>
          <div className="flex-1 h-full w-full flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/18.jpg" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto object-contain" fill />
            </div>
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #18</h3>
              <p className="text-center">
                The hand-drawn typography reminds the viewer of the human element behind the Declaration of Independence
                It adds emotion and passion to the words, showing that they represent much more than their physical
                presence.
              </p>
            </div>
          </div>
          <div className="flex-1 h-full w-full flex flex-row items-center justify-center gap-4 p-4">
            <div className="flex-1 flex items-center justify-center flex-col gap-4">
              <h3>DR #21</h3>
              <p className="text-center">
                This image uses closure because your brain automatically fills in the distorted area. It is successful
                because the text is readable despite being partially obscured.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center h-full w-full relative">
              <Image src="/21.jpg" alt="Self Portrait Collage" className="max-h-full max-w-full w-auto h-auto object-contain" fill />
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-primary flex flex-row items-center justify-center" id="self-portrait">
        <div className="flex-1 flex justify-center items-center p-20">
          <Image src="/collage.png" alt="Self Portrait Collage" className="w-full" width="2667" height="2000" />
        </div>
        <div className="flex-1 p-20 flex flex-col gap-4">
          <h2 className="text-5xl text-center">Self Portrait Collage</h2>
          <p className="text-center">
            Photograph Collage | Photoshop | September 9, 2025<br/><br/>
            This collage consists of the things that are around me in my everyday life. Some of the items in the picture
            have special sentimental value to me, but the rest of the world cannot tell. This makes the collage very
            personal and unique.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary bg-[url(/la_sunset.avif)] bg-cover" id="red-hot">
        <div className="w-full h-full backdrop-brightness-50 flex flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center flex-1 w-full h-full">
            <h2 className="tk-groupie-gloss text-[30vh] text-[#d91e36] text-outline-white">RED HOT</h2>
            <p className="text-white text-center mx-20">
              Photographs, Vectors | Photoshop | September 22, 2025<br/><br/>
              The goal of the album art for this EP was to instantly portray the energy and uplifting spirit of the music
              that it contains. A thick, psychedelic font with heavy white drop shadow overlaid on pink and green
              graphics, combined with a sunset over Los Angeles, catches the eyes of potential listeners and invites
              them to enjoy an upbeat and relaxing collection of music.
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
      <section className="h-screen bg-primary bg-[url(/undersea-web.png)]" id="wallpaper">
        <div className="float-right w-1/2 h-svh bg-[#2e3440] flex flex-col items-center justify-center gap-6" style={{ clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)" }}>
          <h2 className="text-white text-5xl max-w-1/2 text-center">Undersea Tiling Wallpaper</h2>
          <Image src="/undersea-bed-mockup.png" alt="Undersea Tiling Wallpaper" height={3072} width={3072} className="max-w-1/2 max-h-1/2" />
          <p className="text-white text-center max-w-1/2">
            Vectors | Illustrator | October 3, 2025<br/><br/>
            This image is capable of infinitely seamlessly tiling, which makes it usable as a wallpaper or as a print
            on any number of items. The image uses the Nord color palette to create a cohesive color scheme that is
            subdued and relaxing yet whimsical.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary flex flex-row bg-[#050406] text-white" id="poster">
        <div className="flex-1 flex flex-col items-center justify-center relative p-12">
          <Image src="/poster.png" alt="Poster" height={5100} width={3300} className="h-full w-auto" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center -ml-10">
          <h2 className="text-6xl">Scenic Words Poster</h2>
          <p className="text-center max-w-[80%]">
            <br/>
            Vectors, Photographs, Text | Photoshop | October 17, 2025<br/><br/>
            This poster is designed to be powerful. It uses vivid, over the top imagery as symbolism for a real world
            issue, and causes the viewer to stop and think about what the words mean in the context of the world. The
            flames that make up the main call to action of the quote really emphasize the fact that climate change is an
            issue that requires swift action.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary flex flex-col items-center justify-center gap-12 bg-[#0c7639]" id="gestalt">
        <h2 className="text-7xl">Gestalt Theory Animation</h2>
        <video autoPlay loop muted className="h-auto w-auto max-w-1/2 max-h-1/2">
          <source src="/gestalt.mp4" type="video/mp4" />
        </video>
        <p className="text-center max-w-1/2">
          Animation | After Effects | October 24, 2025<br/><br/>
          This is a simple animation in which four squares move in and out from behind a green circle that is the same
          color as the background. Although the full outline of the circle is never visible, viewers can clearly see
          that there is a circle there, which demonstrates the Gestalt principle of closure.
        </p>
      </section>
      <section className="h-screen bg-black text-white p-12" id="logo">
        <h2 className="text-6xl">Animated Logo</h2>
        <pre>
          &gt; Medium.....................................Animation, Text<br/>
          &gt; Software...................................After Effects<br/>
          &gt; Date.......................................November 7, 2025<br/>
          &gt; Best Enjoyed...............................Fullscreen, Volume On<br/>
          &gt; Statement..............................................................................................<br/>
          &gt; This logo combines a bunch of my favorite technology nostalgia with the monomer &quot;asorge29&quot;, which is my<br/>
          &gt; developer username. It is heavily inspired by a Linux computer booting up, and even features recordings<br/>
          &gt; of a hard dick drive spinning up and mechanical keystrokes.
        </pre>
        <video controls className="h-full w-auto max-w-1/2 max-h-1/2 mt-4">
          <source src="/animated_logo.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="h-screen bg-primary flex flex-col items-center justify-center gap-12" id="video">
        <h2 className="text-7xl">Take A Walk - Video Montage</h2>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ceCTR0X3Dzc?si=BWjgXpnBwD0EVOrY"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
        <p className="text-center max-w-1/2">
          Video | Premiere Pro | December 1, 2025<br/><br/>
          This montage opens with clips of myself studying, and then hard cuts to clips of a relaxing walk around campus
          at night. It uses music and background noise to amplify the energy of the clips, and to portray feelings to
          viewers.
        </p>
      </section>
    </main>
  );
}
