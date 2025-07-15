import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="hero">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50] via-[#2c3e50]/30 to-transparent z-10"></div>
      <div className='flex flex-col justify-center h-full w-1/2 relative z-20'>
        <h1 className="text-5xl font-bold text-white">Extraordinary You</h1>
        <p className="text-base text-white mt-5">2019 | Romance, Comedy, Drama Mystery</p>
        <Link href="/login" className="w-50 h-10 bg-[#FF6B6B] mt-2.5 rounded-full flex justify-around text-lg items-center">
          <Image
            src="/play.png"
            alt="play"
            width={20}
            height={20}
          />
          Watch trailer
        </Link>
      </div>      
    </div>
  );
}
