// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Products() {
//     type Anime = {
//   mal_id: number;
//   title: string;
//   url: string;
//   images: {
//     webp: {
//       image_url: string;
//     };
//   };
// };

//   const [data, setData] = useState<Anime[]>([]);

//   async function getAnime(): Promise<void> {
//     const res = await fetch("https://api.jikan.moe/v4/anime?status=airing");
//     const result = await res.json();
//     setData(result.data);
//   }

//   useEffect(() => {
//     getAnime();
//   }, []);

//   return (
//     <section className="">
//       <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
//         {data.map( item => (
//           <Link
//   key={item.mal_id}
//   href={item.url}
//   className="p-4 border border-white text-white rounded cursor-pointer hover:shadow-lg transition"
// >
//   <div>
//     <div
//       className="w-64 h-80 rounded-lg shadow-lg bg-cover bg-center"
//       style={{ backgroundImage: `url(${item.images.webp.image_url})` }}
//     >
//       <h2 className="text-white font-bold text-xl">{item.title}</h2>
//     </div>

//     <h3 className="text-center mt-2">
//       {item.title.split(" ", 2).join(" ")}
//     </h3>
//   </div>
// </Link>

//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

// نوع البيانات
type Anime = {
  mal_id: number;
  title: string;
  url: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  genres?: { name: string }[];
};

// Component للنجوم
function StarsRow() {
  const totalStars = 5;
  const transparentIndex = 5; // الرابعة شفافة
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, i) => (
        <FaStar
          key={i}
          size={18}
          className={`${
            i === transparentIndex ? "text-white/0 drop-shadow-[0_0_2px_white]" : "text-white"
          }`}
        />
      ))}
    </div>
  );
}

export default function AnimeList() {
  const [data, setData] = useState<Anime[]>([]);

  async function getAnime(): Promise<void> {
    const res = await fetch("https://api.jikan.moe/v4/anime?status=airing");
    const result = await res.json();
    setData(result.data);
  }

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <section className="py-14">
      <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link
            key={item.mal_id}
            href={item.url}
            className="group relative block rounded-lg overflow-hidden shadow-lg border border-white cursor-pointer transition hover:scale-105"
          >
            {/* Background Image */}
            <div
              className="w-full h-100 bg-cover bg-center relative"
              style={ {backgroundImage: `url(${item.images.webp.large_image_url})`} }
            >
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/30"></div> */}

              {/* Rating Stars */}
              <div className="absolute top-3 left-3">
                <StarsRow />
              </div>

              {/* Title */}
              <h2 className="absolute bottom-3 left-3 text-white font-bold text-lg">
                {item.title}
              </h2>
            </div>

            {/* Genres */}
            <div className="p-3 flex flex-wrap gap-2">
              {item.genres?.map((genre) => (
                <span
                  key={genre.name}
                  className="border border-white rounded-full px-2 py-1 text-sm text-white hover:bg-white hover:text-black transition"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Watch Now Button */}
            <div className="w-full text-center p-3">
              <span className="px-3 py-1 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition cursor-pointer">
                Watch Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
