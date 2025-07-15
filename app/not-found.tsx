import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#2C3E50] flex items-center justify-center px-8">
            <div className="text-center not-found">
                <h1 className="text-6xl font-bold text-white">404</h1>
                <h2 className="text-2xl font-semibold text-white">Drama Not Found</h2>
                <p className="text-white/70">The drama you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                <Link 
                    href="/k-dramas" 
                    className="rounded-md font-medium inline-block text-[#FF6B6B] hover:text-white"
                >
                    Back to K-Dramas
                </Link>
            </div>
        </div>
    )
}