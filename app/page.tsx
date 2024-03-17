import Image from "next/image";
import { Inter, Urbanist, Lexend } from "next/font/google";
import headshot from "./img/headshot.jpeg";

const lexend = Lexend({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="z-10 max-w-5xl w-full">
        <header>
          <h1 className={`text-7xl  mb-4 font-extralight		 ${lexend.className}`}>
            Jayla Ellul
          </h1>
        </header>

        <div className="inline">
          <Image
            src={headshot}
            width={100}
            height={100}
            alt="profile headshot"
            className="rounded-full"
          />
        </div>
      </div>
      <p>
        Welcome to my website! I'm Jayla, a software engineer based in Toronto,
        Canada. with a knack for turning ideas into reality through code.
      </p>
    </main>
  );
}
