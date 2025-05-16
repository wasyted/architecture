export default function Header() {
  return(
    <header className="gap-x-4 text-sm flex justify-end w-full absolute z-99 left-0 right-0 top-0 p-4 text-zinc-900">
      <p className="font-bold">
        archdeo
      </p>
      <div className="flex gap-x-4 items-center justify-center">
        <div>/</div>
        <a href="/#vision">Our Vision</a>
        <div>/</div>
        <a href="/#value">Value</a>
        <div>/</div>
        <a href="/#contact">Get in touch</a>
      </div>
    </header>
  )
}