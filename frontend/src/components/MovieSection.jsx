import { useRef } from "react";
import MovieCard from "./MovieCard";
import MovieCard2 from "./MovieCard2";

function MovieSection({ title, movies, type }) {
	const scrollerRef = useRef(null);

	const scrollByAmount = (dir) => {
		const el = scrollerRef.current;
		if (!el) return;
		const amount = Math.round(el.clientWidth * 0.9) * (dir === "right" ? 1 : -1);
		el.scrollBy({ left: amount, behavior: "smooth" });
	};
	return (
		<div className="space-y-5 px-10">
			<h2 className="text-2xl font-semibold text-white">{title}</h2>
			<div className="relative">
				<button
					type="button"
					className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/60"
					onClick={() => scrollByAmount("left")}
					aria-label="Scroll left"
				>
					{/* Left */}
					<span className="inline-block rotate-180">➤</span>
				</button>
				<div ref={scrollerRef} className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory px-2">
					{movies.map((movie) => (
						<div key={movie.id} className="min-w-[220px] max-w-[220px] snap-start">
							{type === "card" ? <MovieCard movie={movie} /> : <MovieCard2 movie={movie} />}
						</div>
					))}
				</div>
				<button
					type="button"
					className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-black/60"
					onClick={() => scrollByAmount("right")}
					aria-label="Scroll right"
				>
					{/* Right */}
					<span className="inline-block">➤</span>
				</button>
			</div>
		</div>
	);
}

export default MovieSection;