import Image from "next/image"
export default function Value() {
  return (
    <>
      <div id="value" className="flex p-8">
        <div className="flex flex-col justify-between flex-3">
          <p className="text-lg md:text-3xl tracking-tight max-w-4xl place-self-start">
            At <span className="font-black">Archdeo</span> we are dedicated to designing sustainable, eco-friendly and innovative concepts, that combines enviromental councious and high quality design language.
          </p>
          <p className="text-sm md:text-md max-w-xl">
            As a leading company in sustainable housing design, we've come to a breakpoint in our beliefs into the future. The objectives are set and we are ready to meet and surpass them. Join us.
          </p>
        </div>
        <div className="flex-2 flex flex-col justify-between items-end text-end ">
          <a className="hover:border-b-2 border-b" href="/story">See story ⇾</a>
          <div className="max-w-sm">
            <Image className="" src={"/assets/images/pexels-moii-12236018.jpg"} alt={""} width={2839} height={3500} />
          </div>
        </div>
      </div>
      <div>
        <div className="z-[-1] absolute opacity-15">
          <Image className="" src={"/assets/images/pexels-pixabay-159045.jpg"} alt={""} width={4288} height={2848} />
        </div>
        <div className="z-10 flex-1 flex justify-end">
          <div className="p-8 text-3xl max-w-lg text-start font-regular tracking-tight">
            <p>CRAFTING <span className="font-black">SUSTAINABLE</span> solutions for every space.</p>
          </div>
        </div>
        <div className="z-10 gap-4 px-4 grid grid-cols-1 md:grid-cols-3">
          <div className="rounded-tl-sm rounded-tr-sm bg-white">
            <div className="h-full p-4 flex flex-col justify-between">
              <div className="text-wrap items-start flex-3 flex justify-between w-full">
                <p className="max-w-32 text-2xl font-thin tracking-tight">Architecture Design.</p>
                <button className="bg-zinc-800 text-xl text-white w-12 h-12">{">"}</button>
              </div>
              <p className="text-justify w-full flex-1">We design innovative and eco-friendly spaces that balance beauty, functionality, and enviroment responsability.</p>
            </div>
          </div>
          <div className="rounded-tl-sm rounded-tr-sm bg-white">
            <div className="h-full p-4 flex flex-col justify-between">
              <div className="text-wrap items-start flex-3 flex justify-between w-full">
                <p className="max-w-32 text-2xl font-thin tracking-tight">Green building consulting.</p>
                <button className="bg-zinc-800 text-xl text-white w-12 h-12">{">"}</button>
              </div>
              <p className="text-justify w-full flex-1">Our experts will guide you through the proccess of creating a structure that align with your goals.</p>
            </div>
          </div>
          <div className="rounded-tl-sm rounded-tr-sm bg-white">
            <div className="h-full p-4 flex flex-col justify-between">
              <div className="text-wrap items-start flex-3 flex justify-between w-full">
                <p className="max-w-32 text-2xl font-thin tracking-tight">Project Planning & Development.</p>
                <button className="bg-zinc-800 text-xl text-white w-12 h-12">{">"}</button>
              </div>
              <p className="text-justify w-full flex-1">From planning to completion, we provide comprehensive and extensive advise to ensure optimal results.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}