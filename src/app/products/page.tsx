"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [data, setData] = useState([]);

    async function getAnime() {
        const res = await fetch("https://api.jikan.moe/v4/anime?status=airing");
        const result = await res.json();
        setData(result.data);
    }

    useEffect(() => {
        getAnime();
    }, []);

    return (
        <section className="">
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
            {data.map(item => (
                <Link
            key={item.mal_id}
            href={item.url}
            className="p-4 border border-white text-white rounded cursor-pointer hover:shadow-lg transition"
            >
             <div
  className="w-64 h-80 bg-cover bg-center rounded-lg shadow-lg"
  style={{ backgroundImage: `url(${item.images.webp.image_url})` }}
>
            <h3 className="text-center">{item.title.split(" ",2).join(" ")}</h3>
</div>

        </Link>
            ))}
        </div>
        </section>
    );
}
