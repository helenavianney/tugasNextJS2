import Image from 'next/image'
import Link from 'next/link'

export default function Kdramas() {
    const dramas = [
        {
            id: 1,
            title: "Alchemy of Souls",
            episodes: 16,
            image: "/drama1.jpg"
        },
        {
            id: 2,
            title: "Lovely Runner",
            episodes: 16,
            image: "/drama2.jpg"
        },
        {
            id: 3,
            title: "Undercover High School",
            episodes: 16,
            image: "/drama3.jpg"
        },
        {
            id: 4,
            title: "Tale of the Nine Tailed",
            episodes: 16,
            image: "/drama4.jpg"
        }
    ]

    return (
        <div className=" min-h-screen list-container">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white">Baru Dirilis</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dramas.map((drama) => (
                        <Link href={`/k-dramas/${drama.id}`} key={drama.id} className="cursor-pointer">                           <div key={drama.id} className="relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 aspect-[3/4]">
                                <Image
                                    src={drama.image}
                                    alt={drama.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm p-4">
                                    <h3 className="text-lg font-semibold text-white mb-1">{drama.title}</h3>
                                    <p className="text-sm text-white/80">{drama.episodes} Episodes</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}