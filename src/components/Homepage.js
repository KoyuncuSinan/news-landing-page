import Image from "next/image";

export default function Homepage() {
  return (
    <main className="w-[90%] mx-auto md:w-[75%]">
    <div className="md:grid md:grid-cols-3">

      <section className="mt-8 md:col-span-2">
        <Image
          src="/image-web-3-mobile.jpg"
          width={350}
          height={350}
          className="object-cover md:hidden"
        />  
        <Image src="/image-web-3-desktop.jpg" width={900} height={300} className="object-cover xs:hidden md:block"/>
        <div className="md:flex md:flex-row md:mt-3 md:justify-between md:items-start">
        <h2 className="font-extrabold text-[42px] leading-10 text mt-3 md:text-[65px] md:w-[45%] md:leading-[70px] md:font-bold">
          The Bright Future of Web 3.0?
        </h2>
        <div className="md:flex md:flex-col md:w-[50%] md:mr-2">
        <p className="mt-5 text-slate-700 md:w-[88%] md:text-xl">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="uppercase bg-[#F15E50] text-white mt-5 py-2 px-10 md:w-[40%] md:mt-10 
        md:hover:bg-[#000019] md:tracking-wider">
          Read More
        </button>
            </div>
        </div>
      </section>

      <section className="mt-8 bg-[#000019] xl:col-span-1">
        <article className="w-[90%] mx-auto mt-5 p-1">
          <h2 className="text-[#E9AB53] mt-3 mb-4 md:mb-8 font-bold text-3xl md:text-5xl">New</h2>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white md:hover:text-[#E9AB53] hover:cursor-pointer">
              Hydrogen VS Electric Cars
            </h3>
            <p className="mt-2 mb-8 text-slate-400 font-thin text-base md:text-2xl">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr className="my-6"></hr>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white md:hover:text-[#E9AB53] hover:cursor-pointer">
              The Downsides of AI Artistry
            </h3>
            <p className="mt-2 mb-8 text-slate-400 font-thin text-base md:text-2xl">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr className="my-6"></hr>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white md:hover:text-[#E9AB53] hover:cursor-pointer">
              Is VC Funding Drying Up?
            </h3>
            <p className="mt-2 mb-8 text-slate-400 font-thin text-base md:text-2xl">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </article>
      </section>
    </div>
      <section className="mt-16 md:grid md:grid-cols-3 mb-8">
        <article className="grid grid-cols-3 mb-8" >
            <Image src="/image-retro-pcs.jpg" width={100} height={150} className="col-span-1 md:h-[100%]"/>
          <div className="col-span-2 ml-3 md:-ml-4">
            <span className="font-bold text-4xl text-slate-300 md:mt-0">01</span>
            <h3 className="mt-2 font-black md:hover:text-[#F15E50] hover:cursor-pointer md:text-lg ">Reviving Retro PCs</h3>
            <p className="mt-2 text-slate-500 text-base md:text-lg md:w-[95%]">
            What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>

        <article className="grid grid-cols-3 mb-8">
          <Image src="/image-top-laptops.jpg" width={100} height={150} className="col-span-1 md:h-[100%]"/>
          <div className="col-span-2 ml-3 md:-ml-4">
            <span className="font-bold text-4xl text-slate-300 md:mt-0">02</span>
            <h3 className="mt-2 font-black md:hover:text-[#F15E50] hover:cursor-pointer 
            md:text-lg "> Top 10 Laptops of 2022</h3>
            <p className="mt-2 text-slate-500 md:text-lg md:w-[95%]">Our best picks for various needs and budgets.</p>
          </div>
        </article>

        <article className="grid grid-cols-3 mb-8">
          <Image src="/image-gaming-growth.jpg" width={100} height={150} className="col-span-1 md:h-[100%]" />
          <div className="col-span-2 ml-3 md:-ml-4">
            <span className="font-bold text-4xl text-slate-300 md:mt-0">03</span>
            <h3 className="mt-2 font-black md:hover:text-[#F15E50] hover:cursor-pointer md:text-lg ">The Growth of Gaming</h3>
            <p className="mt-2 text-slate-500 md:text-lg md:w-[95%]">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </section>
    </main>
  );
}
