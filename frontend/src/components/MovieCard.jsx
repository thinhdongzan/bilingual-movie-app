function MovieCard({ movie }) {
	return (
		<div className="group bg-neutral-900/40 rounded-xl overflow-hidden shadow-md border border-neutral-800 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-neutral-700 cursor-pointer">
			<div className="relative aspect-[2/3] w-full bg-neutral-800 overflow-hidden">
				<img src={movie.posterUrl} alt={movie.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]" />
				<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
			</div>
			<div className="px-3 py-2">
				<p className="truncate text-sm font-medium text-white">{movie.title}</p>
			</div>
			<div className="px-3 pb-3">
				<p className="text-xs text-white/60">⭐ {movie.voteAverage.toFixed(1)} | {movie.releaseDate.split('-')[0]}</p>
			</div>
		</div>
	);
}

export default MovieCard;