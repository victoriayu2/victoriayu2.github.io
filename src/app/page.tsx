import Image from "next/image";
import myImage from "../../public/VictoriaYuHeadshot.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-6">
        <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full">
          <Image
            src={myImage}
            alt="Headshot of Victoria Yu"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col text-left md:text-left">
          <h1 className="text-4xl font-bold text-black mb-2">
            Hi, my name is Victoria!
          </h1>
          <p className="text-lg text-black">
            Victoria is a sophomore CS major at Cornell University originally from California. She is broadly interested in social impact, machine learning, and software engineering. She is always looking for opportunities to grow her technical skills and meet new people!
          </p>
        </div>
      </div>
    </main>
  );
}
