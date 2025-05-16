import Image from "next/image"
export default function Vision() {
  return (
    <div id="vision" className="relative bg-white flex p-8 min-h-screen">
      <div className="flex flex-col items-center justify-between flex-3">
        <p className="text-3xl tracking-tight max-w-4xl place-self-center pt-10 pb-10">
          The <span className="font-black">Archdeo</span> vision
        </p>
        <a className="max-w-max self-end hover:border-neutral-950 border-neutral-600 transition-all border-b-2 mb-2" href="/story">See story ⇾</a>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 items-start justify-center">
          <div className="max-w-sm">
            <Image className="" src={"/assets/images/pexels-introspectivedsgn-8266993.jpg"} alt={""} width={3648} height={5472} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="max-w-sm">
              <Image className="" src={"/assets/images/pexels-moii-12236018.jpg"} alt={""} width={2839} height={3500} />
            </div>
          </div>
          <div className="max-w-sm">
            <Image className="" src={"/assets/images/pexels-grrbrr-snts-323519936-31804342.jpg"} alt={""} width={2780} height={3503} />
          </div>
        </div>
      </div>
    </div>
  )
}