import demonSlayer from '../assets/demon-slayer-backdrop.jpg';

function HeroSection({ onStartWatching }) {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <img 
                src={demonSlayer} 
                alt="Demon Slayer" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Top Gradient Overlay for Header Readability */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
            
            {/* Main Content Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Welcome to NihongoFlix
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                    Discover amazing Japanese movies and anime while learning the language
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={onStartWatching} className="bg-[#FBBF24] text-[#111827] px-8 py-3 rounded-lg font-semibold hover:bg-[#FBBF24]/80 transition-all duration-300">
                        Start Watching
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;