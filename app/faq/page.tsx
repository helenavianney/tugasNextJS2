export default function FAQ() {
    return (
        <div className="min-h-screen bg-[#2C3E50] faq-container">
            <div className="container lg:flex lg:max-w-full items-center justify-between gap-5 max-w-4xl">
                <div className="text-center faq-header">
                    <h1 className="text-4xl font-bold text-white faq-title">Frequently Asked Questions</h1>
                    <p className="text-lg text-white/70 faq-subtitle">Temukan jawaban untuk pertanyaan yang sering diajukan tentang DramaNest</p>
                </div>

                <div className="faq-list">
                    <div className="bg-white rounded-lg faq-card">
                        <h3 className="text-xl font-semibold text-[#2C3E50] faq-question">Apa itu DramaNest?</h3>
                        <p className="text-[#2C3E50]/80 faq-answer">DramaNest adalah platform streaming yang menyediakan koleksi lengkap drama Korea terbaru. Kami menawarkan berbagai genre mulai dari romance, comedy, thriller, hingga historical drama dengan subtitle berkualitas tinggi.</p>
                    </div>

                    <div className="bg-white rounded-lg faq-card">
                        <h3 className="text-xl font-semibold text-[#2C3E50] faq-question">Bagaimana cara menonton drama di DramaNest?</h3>
                        <p className="text-[#2C3E50]/80 faq-answer">Untuk menonton drama di DramaNest, Anda perlu membuat akun terlebih dahulu dengan mendaftar menggunakan email. Setelah login, Anda dapat menjelajahi koleksi drama kami dan mulai menonton secara gratis dengan iklan, atau berlangganan premium untuk pengalaman tanpa iklan.</p>
                    </div>

                    <div className="bg-white rounded-lg faq-card">
                        <h3 className="text-xl font-semibold text-[#2C3E50] faq-question">Apakah DramaNest tersedia di perangkat mobile?</h3>
                        <p className="text-[#2C3E50]/80 faq-answer">Ya, DramaNest dapat diakses melalui browser di perangkat mobile Anda. Website kami telah dioptimalkan untuk pengalaman mobile yang responsif. Kami juga sedang mengembangkan aplikasi mobile yang akan segera tersedia di App Store dan Google Play Store.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}