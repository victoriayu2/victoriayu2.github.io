// src/app/page.tsx
import Image from "next/image";
import myImage from "../../VictoriaYuHeadshot.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop solution for all things amazing!
        </p>
      </header>

      <Image
        src={myImage}
        alt="Headshot of Victoria Yu"
        className="w-full max-w-md rounded-lg shadow-lg"
      />

      <p className="mt-6 text-lg text-gray-800 max-w-xl text-center">
        Victoria is a sophomore CS major at Cornell University broadly interested in social impact, machine learning, and software engineering. She is on the WICC E-Board, Hack4Impact, and previously interned at Google. She is always looking for new experiences!
      </p>
    </main>
  );
}