import { articles } from "@/data/articles";
import Footer from "@/components/Footer";

export default function Home() {
  const featuredArticle = articles[0];

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-black">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-gradient-to-b from-black/75 via-black/40 to-transparent border-b border-white/10">
        <div className="flex justify-between items-center px-10 py-5">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Paren(theses)
          </h1>

          <div className="flex gap-8 text-sm uppercase tracking-[0.2em] text-white">
            <a href="/sobre">Sobre</a>
          </div>
        </div>
      </nav>

      {/* Capa: reduzida para ~metade da altura de tela (antes h-screen) */}
      <section className="relative h-[52vh] md:h-[58vh] min-h-[340px] overflow-hidden rounded-b-[3rem]">
        <img
          src={featuredArticle.image}
          alt={featuredArticle.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-10 pt-28">
          <div className="flex justify-between items-end gap-10 mb-4">
            <div className="max-w-4xl">
              <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-3 text-white/70">
                {featuredArticle.category}
              </p>

              <h2 className="text-[2.1rem] md:text-[2.9rem] lg:text-[3.3rem] font-black leading-[0.95] tracking-tight text-white mb-3">
                {featuredArticle.title}
              </h2>
            </div>

            <div className="hidden lg:block text-right text-white/80 mb-2 min-w-[240px]">
              <p className="text-base font-semibold">
                Escrito por {featuredArticle.author}
              </p>

              <p className="text-xs uppercase tracking-[0.2em]">
                {featuredArticle.role}
              </p>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            {featuredArticle.subtitle}
          </p>
        </div>
      </section>

      <section className="px-10 py-24">
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {articles.map((article) => (
            
              href={`/ensaios/${article.slug}`}
              key={article.slug}
              className="group border border-black/10 rounded-[2rem] overflow-hidden bg-[#f8f5ef] hover:bg-[#f3efe8] transition duration-500"
            >
              <div className="grid md:grid-cols-[1.1fr_0.9fr] items-stretch">
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[360px] object-cover brightness-[0.92] contrast-[1.05] saturate-[0.95] group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <p className="uppercase text-[0.7rem] tracking-[0.3em] text-neutral-500 mb-5">
                    {article.category}
                  </p>

                  <h3 className="text-[2.2rem] md:text-[2.5rem] font-black leading-[1] tracking-tight mb-5">
                    {article.title}
                  </h3>

                  <p className="text-[1rem] text-neutral-700 leading-[1.8] max-w-xl">
                    {article.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}