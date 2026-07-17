const LINKEDIN_URL =
  "https://www.linkedin.com/in/andressarochafigueiredoufrrj/";
const LINKEDIN_IMAGE =
  "https://static.vecteezy.com/system/resources/previews/023/986/926/large_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png";

const SUBSTACK_URL = "https://substack.com/@dessalui";
const SUBSTACK_IMAGE =
  "https://www.amystewart.com/wp-content/uploads/2024/01/4.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#2b1c12] text-white py-16 px-10">
      <div className="max-w-md mx-auto text-center">
        <h2 className="uppercase tracking-[0.3em] text-sm text-white/80 mb-10">
          Acesse também
        </h2>

        <div className="flex items-center justify-between">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <img
              src={LINKEDIN_IMAGE}
              alt="LinkedIn de Andressa Rocha"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover bg-white p-1 group-hover:scale-110 transition duration-300"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70">
              LinkedIn
            </span>
          </a>

          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 group"
          >
            <img
              src={SUBSTACK_IMAGE}
              alt="Substack de Andressa Rocha"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover group-hover:scale-110 transition duration-300"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70">
              Substack
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}