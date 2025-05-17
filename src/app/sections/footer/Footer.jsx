export default function Footer() {
  return (
    <div className="p-4 py-12 grid grid-cols-2 bg-yellow-950/90 text-white">
      <div className="flex flex-col gap-4 border-r-1 pr-2">
        <p className="md:text-2xl font-bold">About Archdeo</p>
        <p className="text-xs text-neutral-300 md:text-xl max-w-xl ">
          This is a architecture magazine-inspired landing page prototype. If you want to see my other proyects please visit my portfolio or checkout my github.
        </p>
        <a href="https://matiaswasyluk.vercel.app">matiaswasyluk.vercel.app</a>
        <a href="https://github.com/wasyted">github.com/wasyted</a>
        <p className="text-xs text-neutral-300">
          This site was designed and developed by Matías Wasyluk in 2025.
        </p>
      </div>
      <div className="border-l-1 border-white pl-4 flex flex-col justify-start items-start gap-4 z-20">
        Site Links:
        <ul className="text-sm text-neutral-300">
          <li><a href="#home">Home ›</a></li>
          <li><a href="#value">Value ›</a></li>
          <li><a href="#vision">Our vision ›</a></li>
        </ul>
      </div>
    </div>
  )
}