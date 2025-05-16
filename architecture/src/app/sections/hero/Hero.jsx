import Image from "next/image"
export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen overflow-hidden flex items-center justify-start">
      <div className="text-start text-4xl md:text-8xl absolute p-4 min-w-xl md:min-w-4xl justify-end items-end grid grid-cols-1 grid-rows-2">
        <p className="tracking-tight self-end">
          Sustenainable
        </p>
        <div className="flex">
          <p className="text-start font-thin tracking-tighter">
            Living
          </p>
          <div className="border-b-2 min-w-32 md:border-b-4" />
          <p className="font-bold self-end flex-1">
            Spaces
          </p>
        </div>
      </div>
      <Image
        src="/assets/images/pexels-scottwebb-1029615.jpg"
        alt=""
        fill
        className="object-cover z-[-1]"
        priority
      />
    </div>
  )
}