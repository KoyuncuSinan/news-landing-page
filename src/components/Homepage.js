import Image from "next/image";

export default function Homepage() {
  return (
    <main className="w-[90%] md:w-[85%] mx-auto umd:w-[75%]">
    <div className="umd:grid umd:grid-cols-4 umd">
      <section className="mt-8 umd:col-span-2">
        <Image src="/image-web-3-desktop.jpg" width={900} height={300} className="object-cover"/>
        <div className="umd:flex umd:flex-row umd:mt-3 umd:justify-between umd:items-start">
        <h2 className="font-extrabold text-[42px] leading-10 text mt-3 umd:text-[50px] umd:w-[45%] umd:leading-[70px] umd:font-bold">
          The Bright Future of Web 3.0?
        </h2>
        <div className="umd:flex umd:flex-col umd:w-[60%] umd:mr-2 text-left items-start justify-between umd:ml-4">
        <p className="mt-5 text-slate-700 umd:w-[80%] umd:text-xl">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="uppercase bg-[#F15E50] text-white mt-5 py-2 umd:w-[50%]
        umd:hover:bg-[#000019] umd:tracking-wider">
          Read More
        </button>
            </div>
        </div>
      </section>

      <section className="mt-8 bg-[#000019] umd:col-span-2 umd:ml-2">
        <article className="w-[90%] mx-auto mt-5 p-1 umd:w-[90%]">
          <h2 className="text-[#E9AB53] mt-3 mb-4 umd:mb-8 font-bold text-3xl umd:text-lg xl:text-2xl">New</h2>
          <div>
            <h3 className="text-xl umd:text-lg font-bold xl:text-2xl text-white umd:hover:text-[#E9AB53] hover:cursor-pointer">
              Hydrogen VS Electric Cars
            </h3>
            <p className="mt-2 mb-8 text-slate-400 xl:text-2xl font-thin text-base umd:text-lg">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr className="my-6"></hr>
          <div>
            <h3 className="text-xl umd:text-lg xl:text-2xl font-bold text-white umd:hover:text-[#E9AB53] hover:cursor-pointer">
              The Downsides of AI Artistry
            </h3>
            <p className="mt-2 mb-8 text-slate-400 font-thin text-base umd:text-lg xl:text-2xl">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr className="my-6"></hr>
          <div>
            <h3 className="text-xl umd:text-lg xl:text-2xl font-bold text-white umd:hover:text-[#E9AB53] hover:cursor-pointer">
              Is VC Funding Drying Up?
            </h3>
            <p className="mt-2 mb-8 text-slate-400 font-thin text-base umd:text-lg xl:text-2xl">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </article>
      </section>
    </div>
      <section className="mt-16 umd:grid umd:grid-cols-3 mb-8">
        <article className="flex flex-row justify-between mb-8 items-center" >
            <Image src="/image-retro-pcs.jpg" width={600} height={600} className="umd:h-[100%] object-cover umd:w-[50%]"/>
          <div className="ml-3">
            <span className="font-bold text-4xl text-slate-300 umd:mt-0">01</span>
            <h3 className="mt-2 font-black umd:hover:text-[#F15E50] hover:cursor-pointer umd:text-lg ">Reviving Retro PCs</h3>
            <p className="mt-2 text-slate-500 umd:text-lg umd:w-[95%]">
            What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>

        <article className="flex flex-row justify-between mb-8 center">
          <Image src="/image-top-laptops.jpg" width={600} height={600} className="umd:h-[100%] object-cover umd:w-[50%]" />
          <div className="ml-3">
            <span className="font-bold text-4xl text-slate-300 umd:mt-0">02</span>
            <h3 className="mt-2 font-black umd:hover:text-[#F15E50] hover:cursor-pointer 
            umd:text-lg "> Top 10 Laptops of 2022</h3>
            <p className="mt-2 text-slate-500 umd:text-lg umd:w-[95%]">Our best picks for various needs and budgets.</p>
          </div>
        </article>

        <article className="flex flex-row justify-between mb-8 items-center">
          <Image src="/image-gaming-growth.jpg" width={600} height={600} className="umd:h-[100%] object-cover umd:w-[50%]" />
          <div className="ml-3">
            <span className="font-bold text-4xl text-slate-300 umd:mt-0">03</span>
            <h3 className="mt-2 font-black umd:hover:text-[#F15E50] hover:cursor-pointer umd:text-lg ">The Growth of Gaming</h3>
            <p className="mt-2 text-slate-500 umd:text-lg umd:w-[95%]">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </section>
    </main>
  );
}
