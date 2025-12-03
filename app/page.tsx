export default function Home() {
  return (
    <div className="grid grid-cols-[minmax(0,_1fr),auto] w-screen gap-4">
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
        <section className="h-screen bg-primary">

        </section>
      </main>
      <div className="bg-red-600 h-10 w-60 top-0 sticky">

      </div>
    </div>
  );
}
