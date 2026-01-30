import { FaStar } from "react-icons/fa";

export default function Home() {
    const totalStars = 5;
  const transparentIndex = 4;
  return (
  <section className="min-h-screen bg-cover bg-center bg-[url(/bg.png)]">
    <div className="flex items-center justify-between min-h-screen bg-black/60 bg-opacity-50 text-white text-center p-4">
      <article className="w-full md:w-1/2 text-left p-4 space-y-4">
        <span>Season 1  |  2020</span>
      <h1 className="text-5xl font-bold my-4">JUJUTSU JAISEN</h1>
       <div className="flex gap-2">
      {[...Array(totalStars)].map((_, i) => (
        <FaStar
          key={i}
          size={30}
          className={`${
            i === transparentIndex
              ? "text-transparent stroke-white stroke-4" // شفافة بس فيها outline
              : "text-white"
          }`}
        />
      ))}
    </div>
      <div className="flex items-center  gap-2">
        <span className="border-2 border-white rounded-full px-3 py-1 cursor-pointer hover:bg-white hover:text-black transition">Action</span>
        <span className="border-2 border-white rounded-full px-3 py-1 cursor-pointer hover:bg-white hover:text-black transition">Supernatural</span>
        <span className="border-2 border-white rounded-full px-3 py-1 cursor-pointer hover:bg-white hover:text-black transition">Dark Fantasy</span>  
      </div>
      <p className="text-xl mb-8">The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host</p>
      <div className="flex justify-between items-center">
        <div className="border-2 border-white rounded-bl-4xl rounded-se-4xl px-4 py-2 cursor-pointer hover:bg-white hover:text-black transition">
          <span className="capitalize font-semibold text-xl p-3">watch now</span>
        </div>
      </div>
      </article>
      <article>

      </article>
    </div>
  </section>
  );
}
