import Image from "next/image";
import LogosSlide from "../components/LogosSlide";

export default function Hero() {
  return (
    <section className="mt-16">
      <div className="container w-[1240px] m-auto ">
        <div className="flex justify-between items-start">
          <div className="flex flex-col justify-start  items-start gap-9">
            <h1 className="text-6xl">
              Navigating the digital landscape for success
            </h1>

            <p className="text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            <button
              className="flex text-center justify-center items-center whitespace-nowrap text-white
                     bg-[#191A23] rounded-2xl px-9 py-5 text-xl "
            >
              Book a Consultation
            </button>
          </div>
          <Image
            src="/hero-illustration.svg"
            alt="hero"
            width={600}
            height={515}
            className="object-contain w-[600px] h-[515px] ml-28"
          />
        </div>
      <LogosSlide />
        
      </div>
      
    </section>
  );
}
