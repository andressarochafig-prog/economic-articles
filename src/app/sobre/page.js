import Footer from "@/components/Footer";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-black">

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-b from-black/60 to-black/10 border-b border-white/10">
        <div className="flex justify-start items-center px-10 py-5">

          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Paren(theses)
          </a>

        </div>
      </nav>

      <section className="px-10 pt-40 pb-24">

        <div className="max-w-[680px] mx-auto">

        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          Sobre
        </p>

        <h1 className="text-[2.6rem] md:text-[3.2rem] font-black leading-[0.95] tracking-tight mb-10">
          Olá...
        </h1>

        <div className="text-[1.1rem] leading-[1.95] text-neutral-700 space-y-7">

          <p>
            Meu nome é Andressa Rocha, sou estudante de Ciências Econômicas e
            sempre encontrei na escrita a minha forma de processar o mundo.
            Conforme fui me aprofundando na faculdade e aprendendo programação,
            percebi que tinha em mãos as ferramentas perfeitas para o que eu
            queria fazer: investigar a realidade. Daí nasceu o Paren(theses).
          </p>

          <p>
            A economia está em absolutamente tudo o que vivemos, mas muitas
            vezes ela passa despercebida na correria. Este site é o meu espaço
            para abrir um parêntese na pressa do dia a dia e olhar o que costuma
            passar batido.
          </p>

          <p>
            Aqui, a análise é (quase) completa. Uso a programação e os dados de
            forma quantitativa para enxergar os padrões, mas sem nunca perder o
            lado qualitativo, social e humano. O objetivo é entender quais
            forças econômicas moldam a nossa sociedade e o nosso comportamento.
          </p>

          <p>
            Mais do que respostas prontas, o Paren(theses) é um lugar para
            formular perguntas, organizar ideias e transformar curiosidade em
            tese.
          </p>

        </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}