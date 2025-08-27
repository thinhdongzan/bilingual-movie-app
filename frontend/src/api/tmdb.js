const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMG_BASE = "https://image.tmdb.org/t/p";

export function getPosterUrl(path, size = "w500") {
	if (!path) return "";
	return `${TMDB_IMG_BASE}/${size}${path}`;
}

export async function fetchNowPlaying(apiKey, language = "en-US", page = 1, region = "US") {
	const url = `${TMDB_BASE_URL}/movie/now_playing?language=${encodeURIComponent(language)}&page=${page}&region=${encodeURIComponent(region)}`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json;charset=utf-8",
		},
	});
	if (!res.ok) {
		throw new Error(`TMDB error ${res.status}`);
	}
	const data = await res.json();
	return data.results || [];
}

export async function fetchPopular(apiKey, language = "en-US", page = 1) {
	const url = `${TMDB_BASE_URL}/movie/popular?language=${encodeURIComponent(language)}&page=${page}`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json;charset=utf-8",
		},
	});
	if (!res.ok) {
		throw new Error(`TMDB error ${res.status}`);
	}
	const data = await res.json();
	return data.results || [];
}

export async function fetchUpcoming(apiKey, language = "en-US", page = 1, region = "US") {
	const url = `${TMDB_BASE_URL}/movie/upcoming?language=${encodeURIComponent(language)}&page=${page}&region=${encodeURIComponent(region)}`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json;charset=utf-8",
		},
	});
	if (!res.ok) {
		throw new Error(`TMDB error ${res.status}`);
	}
	const data = await res.json();
	return data.results || [];
}

export async function fetchTopRated(apiKey, language = "en-US", page = 1) {
	const url = `${TMDB_BASE_URL}/movie/top_rated?language=${encodeURIComponent(language)}&page=${page}`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json;charset=utf-8",
		},
	});
	if (!res.ok) {
		throw new Error(`TMDB error ${res.status}`);
	}
	const data = await res.json();
	return data.results || [];
}

