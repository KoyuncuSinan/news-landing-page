import Image from "next/image";

export default function Homepage(){
    return(
        <main className="w-[90%] mx-auto">
            <section className="mt-8">
                <Image src="/image-web-3-mobile.jpg" width={350} height={350} className="object-cover" />
                <h2 className="font-extrabold text-[42px] leading-10 text mt-5">The Bright Future of Web 3.0?</h2>
                <p className="mt-5 text-slate-700">We dive into the next evolution of the web that 
                claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
                <button className="uppercase bg-[#F15E50] text-white mt-5 py-2 px-10">Read More</button>
            </section>
            <section className="mt-8 bg-[#000019]">
            <article className="w-[90%] mx-auto mt-5 p-1">
                <h2 className="text-[#E9AB53] mt-3 mb-4 font-bold text-3xl">New</h2>
                <div>
                    <h3 className="text-xl font-bold text-white">Hydrogen VS Electric Cars</h3>
                    <p className="mt-2 mb-8 text-slate-400 font-thin text-base">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr className="my-2"></hr>
                <div>
                    <h3 className="text-xl font-bold text-white">The Downsides of AI Artistry</h3>
                    <p className="mt-2 mb-8 text-slate-400 font-thin text-base">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <hr className="my-2"></hr>
                <div>
                    <h3 className="text-xl font-bold text-white">Is VC Funding Drying Up?</h3>
                    <p className="mt-2 mb-8 text-slate-400 font-thin text-base">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </article>
            </section>
            <section className="mt-16">
                <article className="grid grid-cols-2 mb-8 ">
                <Image src="/image-retro-pcs.jpg"  width={100} height={150}/>
                    <div className>
                        <span>01</span>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>

                <article className="grid grid-cols-2 mb-8">
                <Image src="/image-top-laptops.jpg"  width={100} height={150}/>
                    <div>
                        <span>02</span>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </article>

                <article className="grid grid-cols-2 mb-8">
                <Image src="/image-gaming-growth.jpg" width={100} height={150}/>
                    <div>
                        <span>03</span>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>

            </section>
        </main>
    )
}