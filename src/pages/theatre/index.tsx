import { broadwayShows } from "@/data/broadway-shows";

export default function TheatreList() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Broadway Shows</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg-grid-cols-6 gap-4">
        {broadwayShows.map((show, idx) => (
          <a
            key={idx}
            href={show.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border round-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={show.image}
              alt="show.title"
              className="w-full h-48 object-cover"
            />
            <p className="p-2 text-center font-semibold">{show.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
