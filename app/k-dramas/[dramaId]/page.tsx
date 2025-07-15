import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function DramaPage({ params }: { params: { dramaId: string } }) {
    const dramas = [
        {
            id: 1,
            title: "Alchemy of Souls",
            episodes: 16,
            image: "/drama1.jpg",
            description: "Set in a fictional country called Daeho that does not exist in history or on maps, it is about the love and growth of young mages as they overcome their twisted fates.",
            genre: "Fantasy, Romance, Drama",
            year: 2022,
            rating: 8.7
        },
        {
            id: 2,
            title: "Lovely Runner",
            episodes: 16,
            image: "/drama2.jpg",
            description: "A story about a fan who goes back in time to save her favorite idol from a tragic fate.",
            genre: "Romance, Time Travel, Drama",
            year: 2024,
            rating: 9.1
        },
        {
            id: 3,
            title: "Undercover High School",
            episodes: 16,
            image: "/drama3.jpg",
            description: "A detective goes undercover as a high school student to solve a case.",
            genre: "Action, Comedy, School",
            year: 2024,
            rating: 8.3
        },
        {
            id: 4,
            title: "Tale of the Nine Tailed",
            episodes: 16,
            image: "/drama4.jpg",
            description: "A nine-tailed fox settles down in the city. A female television producer encounters the nine-tailed fox.",
            genre: "Fantasy, Romance, Supernatural",
            year: 2020,
            rating: 8.5
        }
    ]

    const drama = dramas.find(d => d.id === parseInt(params.dramaId))

    if (!drama) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-[#2C3E50] list-container">
            <div className="container mx-auto">
                <div className="flex items-center justify-between gap-8 max-w-2xl">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src={drama.image}
                            alt={drama.title}
                            width={600}
                            height={800}
                            className="object-cover"
                        />
                    </div>
                    
                    <div className="text-white description">
                        <h1 className="text-4xl font-bold">{drama.title}</h1>
                        <div className="info-description">
                            <p className="text-lg"><span className="text-[#FF6B6B] font-semibold">Year:</span> {drama.year}</p>
                            <p className="text-lg"><span className="text-[#FF6B6B] font-semibold">Episodes:</span> {drama.episodes}</p>
                            <p className="text-lg"><span className="text-[#FF6B6B] font-semibold">Genre:</span> {drama.genre}</p>
                            <p className="text-lg"><span className="text-[#FF6B6B] font-semibold">Rating:</span> {drama.rating}/10</p>
                        </div>
                        
                        <div className="info-description">
                            <h2 className="text-2xl font-semibold text-[#FF6B6B]">Synopsis</h2>
                            <p className="text-white/80 leading-relaxed">{drama.description}</p>
                        </div>
                        
                        <button className="bg-[#FF6B6B] text-white rounded-full hover:bg-[#e55555] transition-colors duration-200 font-medium">
                            Watch Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}