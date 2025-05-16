import Image from "next/image";

export default function Contact(){
  return(
    <div className="p-8 py-12">
      <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-4xl font-bold">Get in touch with Archdeo</p>
      <p className="text-2xl max-w-4xl md:text-center">
        Our professional team is ready to respond to all of your questions, leave us your email and we'll text you for free!
      </p>
      <label className="max-w-4xl w-full" htmlFor="phone">
        <input className="text-2xl w-full p-4 border rounded-full" id="phone" type="email" placeholder="jhondoe@example.com"/>
      </label>
      <p className="text-xs md:text-md text-neutral-600">
        Don't worry, we don't believe in spamming our customers into submision.
      </p>
      </div>
    </div>
  )
}