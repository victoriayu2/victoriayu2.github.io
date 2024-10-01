import Image from "next/image";
import myImage from "../../public/VictoriaYuHeadshot.png"; // Ensure this path and filename are correct

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <header className="mb-5 text-center w-full">
        <h1 className="text-4xl font-bold text-black-600">
          Hi, my name is Victoria!
        </h1>
      </header>

      <div className="flex items-start space-x-6">
        <div className="w-48 h-48 overflow-hidden rounded-full relative">
          <Image
            src={myImage}
            alt="Headshot of Victoria Yu"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col text-left">
          <p className="text-lg text-gray-700">
            Victoria is a sophomore CS major at Cornell University originally from California.
          </p>
          <p className="text-lg text-gray-700">
            She is broadly interested in social impact, machine learning, and software engineering.
          </p>
          <p className="text-lg text-gray-700">
            She is always looking for opportunities to grow her technical skills and meet new people!
          </p>
        </div>
      </div>
    </main>
  );
}
