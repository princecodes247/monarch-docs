
// import { IconGithub } from "components/icons";
import { ChevronRight } from "lucide-react";
import LinkItem from "@/components/ui/link-item";
import BgGradient from "@/components/ui/bg-gradient";
import HeroAnimated from "@/components/hero-animated";

export default function Hero2() {
  return (
    <>
      <section className=" section min-h-[800px] w-full flex flex-col md:flex-row items-center  mt-0 relative">
        <div className="absolute -top-0 inset-x-0 opacity-45">
          <BgGradient />
        </div>

        <svg
          className="absolute inset-0 z-1 h-full w-full  stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_left  ,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#9c80ff] to-[#e546d5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        {/* <div className="absolute -z-1 inset-0 opacity-15  h-[600px] w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}


          <div className="relative z-10 max-w-4xl md:-translate-y-[33%]  mr-auto  space-y-4">
            <h1 className="text-sm  text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              <pre className="tracking-tight uppercase">
                Building Monarch Studio
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </pre>
            </h1>
            <HeroAnimated
              header="More Performance in less code"
              headerClassName="ml-2 text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-black dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
              description=""
              descriptionClassName="  "
            >
              <div className="mr-auto text-[0.84rem] ml-2 text-zinc-400 text-left md:text-lg lg:max-w-2xl md:py-5">
                <pre className="tracking-tight uppercase max-w-md md:max-w-3xl text-wrap">
                  Use MongoDB without losing the type safety we all love.
                Experience the perfect balance of speed, type safety, and flexibility.
                </pre>
              </div>
            </HeroAnimated>
            <div className="mr-auto ml-2  flex flex-wrap gap-y-4 items-start justify-start gap-x-3">
              <LinkItem
                href="/docs"
                className="inline-flex rounded-none uppercase font-mono text-white  text-center group items-center w-full justify-center bg-background  border-input border-[1px] hover:bg-white/10 transition-colors sm:w-auto py-6 px-10"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>
              <LinkItem
                href="https://github.com/princecodes247/monarch"
                variant="shiny"
                className="inline-flex font-mono uppercase tracking-tight rounded-none w-full justify-center items-center gap-x-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-6 px-10"
                target="_blank"
              >
                {/* <IconGithub className="w-5 h-5 " /> */}
                View Documentation
              </LinkItem>
            </div>
          </div>
          <div className="flex-1 border border-white">
            hihi
          </div>

      </section>

    </>
  );
};



