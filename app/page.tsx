
import Image from "next/image";
import Header from "./components/Header";
import Services from "./components/Services";
import Latest from "./components/Latest";
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e4d4ac]">
      <Header />

      <section className="relative mx-auto mt-2 w-full max-w-[1040px] px-5 pb-16 md:px-0">
        {/* Main content panel */}
        <div className="relative mt-[220px] min-h-[410px] bg-[#e5e2d6] md:mt-[215px] md:min-h-[400px]">
          {/* Office photograph overlapping panel */}
          <div className="absolute -top-[215px] left-1/2 z-10 w-[92%] -translate-x-1/2 md:left-[70px] md:w-[630px] md:translate-x-0">
            <div className="relative aspect-[1.78] w-full">
              <Image
                src="/office.png"
                alt="Working at a computer in a home office"
                fill
                priority
                sizes="(max-width: 768px) 92vw, 630px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Desktop logo */}
          <div className="absolute -top-[165px] right-[10px] hidden w-[180px] lg:block">
            <Image
              src="/images/logo.png"
              alt="Business logo"
              width={180}
              height={90}
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Lower panel */}
          <div className="flex flex-col gap-12 px-7 pb-12 pt-[170px] md:flex-row md:items-start md:justify-between md:px-[70px] md:pt-[205px]">
            <div className="flex-1 md:pt-2">
              <Services />
            </div>

            <div className="md:-mt-[190px] md:ml-8 md:w-[200px] md:shrink-0">
              <Latest />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
