const articles = [
  {
    slug: "0",
    category: "Sociedade & Economia",
    title: "Por que alimentos saudáveis ficaram tão caros?",
    subtitle:
      "Uma análise sobre inflação, cultura wellness, logística e comportamento de consumo.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e",
    content: "Ensaio ainda em produção... aguarde.",
  },

  {
    slug: "1",
    category: "Sociedade & Economia",
    title: "O preço do movimento",
    subtitle:
      "Como a desigualdade de renda e a falta de infraestrutura urbana moldam o acesso à atividade física.",
    image:
      "https://i.pinimg.com/736x/65/ff/a5/65ffa503ef3fc661e86a0a76cefeaa21.jpg",
    content: "Ensaio ainda em produção... aguarde.",
  },
];

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

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">

        <div className="flex justify-start items-center px-10 py-5">

          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Paren(theses)
          </a>

        </div>

      </nav>

      <section className="relative h-[80vh] overflow-hidden rounded-b-[3rem]">

        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-16 pt-28">

          <p className="uppercase tracking-[0.3em] text-sm mb-6 text-white/70">
            {article.category}
          </p>

          <h1 className="text-[5.3rem] font-black leading-[0.9] tracking-tight text-white max-w-5xl mb-8">
            {article.title}
          </h1>

          <p className="text-[1.7rem] text-white/90 max-w-3xl leading-relaxed">
            {article.subtitle}
          </p>

        </div>

      </section>

      <article className="max-w-4xl mx-auto px-10 py-24">

        <p className="text-3xl leading-relaxed text-neutral-700">
          {article.content}
        </p>

      </article>

    </main>
  );
}