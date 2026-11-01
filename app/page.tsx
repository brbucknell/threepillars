
import Image from "next/image";
import Header from "./components/Header";
import Services from "./components/Services";
import Latest from "./components/Latest";
import Link from "next/link";
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

          
{/* Portfolio and Qualifications links */}
<nav
  aria-label="Professional information"
  className="absolute -top-[165px] right-[40px] z-20 hidden flex-col gap-7 lg:flex"
>
  <Link
    href="/portfolio"
    className="text-[32px] font-medium tracking-tight text-black transition-colors duration-200 hover:text-[#365c74]"
  >
    Portfolio
  </Link>

  <Link
    href="/qualifications"
    className="text-[32px] font-medium tracking-tight text-black transition-colors duration-200 hover:text-[#365c74]"
  >
    Qualifications
  </Link>
</nav>


          {/* Lower panel */}
          <div className="flex flex-col gap-12 px-7 pb-12 pt-[170px] md:flex-row md:items-start md:justify-between md:px-[70px] md:pt-[205px]">
            <div className="flex-1 md:pt-2">

<nav
  aria-label="Professional information mobile"
  className="mb-8 flex flex-wrap gap-6 lg:hidden"
>
  <Link href="/portfolio" className="text-2xl font-medium">
    Portfolio
  </Link>
  <Link href="/qualifications" className="text-2xl font-medium">
    Qualifications
  </Link>
</nav>

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
