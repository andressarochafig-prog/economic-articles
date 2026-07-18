import { articles } from "@/data/articles";
import Footer from "@/components/Footer";

function ArticleBlock({ block, index }) {
  if (block.type === "heading") {
    return (
      <h2
        key={index}
        className="text-[1.6rem] md:text-[1.8rem] font-black tracking-tight mt-14 mb-5 text-black"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        key={index}
        className="border-l-4 border-black/20 pl-6 my-10 italic text-[1.25rem] leading-[1.9] text-neutral-800"
      >
        <p>"{block.text}"</p>
        {block.cite && (
          <cite className="block not-italic text-sm text-neutral-500 mt-3">
            — {block.cite}
          </cite>
        )}
      </blockquote>
    );
  }

  if (block.type === "figure") {
    return (
      <figure key={index} className="my-12">
        {block.src ? (
          <div className="w-full rounded-xl border border-black/10 bg-white p-4 md:p-6">
            <img
              src={block.src}
              alt={`Figura ${block.number}`}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="w-full aspect-video rounded-xl border border-dashed border-black/20 bg-black/5 flex items-center justify-center text-neutral-400 text-sm">
            Imagem da Figura {block.number} pendente de envio
          </div>
        )}
        <figcaption className="text-xs text-neutral-500 leading-relaxed mt-3">
          <strong>Figura {block.number}:</strong> {block.caption}
        </figcaption>
      </figure>
    );
  }

  // paragraph (default)
  return (
    <p key={index} className="text-[1.1rem] leading-[1.95] text-neutral-700 mb-7">
      {block.text}
    </p>
  );
}

export default async function EssayPage({ params }) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#f5f1ea] p-10">
        <h1 className="text-5xl font-black">Artigo não encontrado</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-black">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-gradient-to-b from-black/75 via-black/40 to-transparent border-b border-white/10">
        <div className="flex justify-start items-center px-10 py-5">
          <a href="/" className="text-2xl font-bold tracking-tight text-white">
            Paren(theses)
          </a>
        </div>
      </nav>

      {/* Capa: texto centralizado verticalmente */}
      <section className="relative h-[52vh] md:h-[58vh] min-h-[340px] overflow-hidden rounded-b-[3rem]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col justify-center h-full px-10 py-10">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-3 text-white/70">
            {article.category}
          </p>

          <h1 className="text-[2.1rem] md:text-[2.9rem] lg:text-[3.3rem] font-black leading-[0.95] tracking-tight text-white max-w-4xl mb-3">
            {article.title}
          </h1>

          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* Autora + data */}
      <div className="max-w-[680px] mx-auto px-6 pt-10 flex items-center gap-4">
        <img
         src="/figures/foto-andressa.jpg"
          alt="Andressa Rocha"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-neutral-800">
            Escrito por Andressa Rocha — Graduanda de Ciências Econômicas
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            {article.date || "17/07/2026"}
          </p>
        </div>
      </div>

      {/* Coluna de leitura estreita e centralizada, como uma matéria de jornal */}
      <article className="max-w-[680px] mx-auto px-6 py-16">
        {article.content.map((block, index) => (
          <ArticleBlock block={block} index={index} key={index} />
        ))}
      </article>

      <Footer />
    </main>
  );
}