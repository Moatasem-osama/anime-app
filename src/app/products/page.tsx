// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

export default function Products() {
    // const [data, setData] = useState([]);

    // async function getAnime() {
    //     const res = await fetch("https://api.jikan.moe/v4/anime");
    //     const result = await res.json();
    //     setData(result.data);
    // }

    // useEffect(() => {
    //     getAnime();
    // }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* {data.map(item => (
                <Link
            key={item.mal_id}
            href={item.url}
            className="p-4 border rounded cursor-pointer hover:shadow-lg transition"
            >
            <img src={item. images.webp.image_url} alt="" className="w-full object-cover h-80" />
            <h3 className="text-center">{item.title.split(" ",2).join(" ")}</h3>
        </Link>
            ))} */}
        </div>
    );
}
