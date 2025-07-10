import { classicalConcerts } from "@/data/concerts";

export default function ConcertsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🎼 Classical Concerts</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {classicalConcerts.map((concert, idx) => (
          <a
            key={idx}
            href={concert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={concert.image}
              alt={concert.title}
              className="w-full h-60 object-cover"
            />
            <p className="p-2 text-center font-semibold">{concert.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
