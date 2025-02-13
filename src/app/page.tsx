import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  const templates = [
    {
      id: 1,
      image: "https://media.giphy.com/media/MpJJ7gWng24bjxrMiK/giphy.gif?cid=790b7611gkipwhm2amvemiansb1jd3d0ka11ynvg3dddgaki&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      title: "Penguin Valentine",
    },
    {
      id: 2,
      image: "https://media.giphy.com/media/MpJJ7gWng24bjxrMiK/giphy.gif?cid=790b7611gkipwhm2amvemiansb1jd3d0ka11ynvg3dddgaki&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      title: "Presence Template",
    },
    {
      id: 3,
      image: "https://media.giphy.com/media/MpJJ7gWng24bjxrMiK/giphy.gif?cid=790b7611gkipwhm2amvemiansb1jd3d0ka11ynvg3dddgaki&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      title: "Panda Valentine",
    },
    {
      id: 4,
      image: "https://media.giphy.com/media/MpJJ7gWng24bjxrMiK/giphy.gif?cid=790b7611gkipwhm2amvemiansb1jd3d0ka11ynvg3dddgaki&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
      title: "Monkey Valentine",
    },
  ];

  return (
    <div className="h-screen max-w-7xl md:max-w-screen-2xl mx-auto  overflow-hidden">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Celebrate valentine&apos;s day with Zenuz Studios</h1>
        <nav className="space-x-4">
          <a href="#" className="text-pink-600 hover:text-pink-700">
            Home
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-700">
            About
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-700">
            Contact
          </a>
        </nav>
      </header>
      <hr className="border-t border-pink-400" />

      <main className=" mx-auto ">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-400 to-pink-700 text-center mb-8 mt-6 drop-shadow-lg animate-bounce">
          Beautiful Picks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/create?template=${template.id} `}>
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <h3 className="absolute bottom-5 left-5 text-white from-slate-400 to-slate-900 bg-slate-400 bg-opacity-60 px-3 py-1 rounded-md font-bold shadow-lg transform hover:scale-105 transition-transform bg-[url('/texture.png')] bg-cover bg-center">
                      {template.title}
                    </h3>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
