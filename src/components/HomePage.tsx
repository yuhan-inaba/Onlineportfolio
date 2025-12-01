import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const people = [
  {
    id: "seanella-rose-cuenco",
    name: "Seanella Rose V. Cuenco",
    image: "https://i.postimg.cc/zGS1Y0B9/seya.jpg",
  },
  {
    id: "joecel-hann-labosta",
    name: "Joecel Hann R. Labosta",
    image: "https://i.postimg.cc/x1tnb62P/joecell.jpg",
  },
  {
    id: "froilan-johanan-balanon",
    name: "Froilan Johanan A. Balanon",
    image: "https://i.postimg.cc/7YwFMSmw/yuhan.jpg",
  },
  {
    id: "curein-paul-tegan",
    name: "Curein Paul W. Tegan",
    image: "https://i.postimg.cc/L69WZ28F/paul.jpg",
  },
  {
    id: "mc-criyun-pagnas",
    name: "Mc Criyun V. Pagnas",
    image: "https://i.postimg.cc/wMHG2d5v/maki.jpg",
  },
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-neutral-950 text-neutral-100" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      <header className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Theme Toggle */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg transition-all duration-300 ${
                theme === "dark"
                  ? "bg-neutral-900 hover:bg-neutral-800 text-violet-400 hover:shadow-lg hover:shadow-violet-500/20"
                  : "bg-white hover:bg-gray-100 text-violet-600 shadow-md hover:shadow-lg"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="text-center">
            <h1 className="mb-4">
              <span
                className={
                  theme === "dark"
                    ? "text-violet-400"
                    : "text-violet-600"
                }
              >
                Creative
              </span>{" "}
              Portfolio
            </h1>
            <p
              className={
                theme === "dark"
                  ? "text-neutral-400"
                  : "text-gray-600"
              }
            >
              Explore the creative journeys of talented
              professionals
            </p>
          </div>
        </div>
      </header>

      {/* Character Cards Grid */}
      <main className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {people.map((person) => (
              <div
                key={person.id}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col hover:scale-105 ${
                  theme === "dark"
                    ? "bg-neutral-900 border-neutral-800 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20"
                    : "bg-white border-gray-200 hover:border-violet-400 shadow-md hover:shadow-xl hover:shadow-violet-400/20"
                }`}
              >
                {/* Circular Portrait */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`w-32 h-32 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      theme === "dark"
                        ? "border-violet-500/30 hover:border-violet-500"
                        : "border-violet-400/40 hover:border-violet-600"
                    }`}
                  >
                    <ImageWithFallback
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3
                  className={`text-center mb-6 flex-1 ${theme === "dark" ? "text-neutral-100" : "text-gray-900"}`}
                >
                  {person.name}
                </h3>

                {/* View Portfolio Button */}
                <Link to={`/portfolio/${person.id}`}>
                  <button
                    className={`w-full py-3 rounded-lg transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-violet-600 hover:bg-violet-500 text-white hover:shadow-lg hover:shadow-violet-500/50"
                        : "bg-violet-600 hover:bg-violet-700 text-white shadow-md hover:shadow-lg hover:shadow-violet-600/50"
                    }`}
                  >
                    View Portfolio
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}