import React from 'react';

function Footer() {
	return (
		<footer className="bg-neutral-900 border border-white/10 px-10 py-12">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					{/* Left side - Platform description */}
					<div className="space-y-4">
						<p className="text-white text-xl leading-relaxed max-w-md">
							Our platform is trusted<br />
							by millions & features<br />
							best updated movies<br />
							all around the world.
						</p>
					</div>

					{/* Right side - Navigation and social */}
					<div className="space-y-6 md:text-right">
						{/* Navigation links */}
						<div className="flex flex-wrap gap-6 text-white md:justify-end">
							<a href="#" className="hover:text-[#FBBF24] transition-colors">Home</a>
							<a href="#" className="hover:text-[#FBBF24] transition-colors">Movies</a>
							<a href="#" className="hover:text-[#FBBF24] transition-colors">Learning</a>
						</div>

						{/* Social media icons */}
						<div className="flex gap-4 md:justify-end">
							<a href="#" className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
								<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
								<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
								<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
								</svg>
							</a>
							<a href="#" className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
								<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
									<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
									<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
									<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom section */}
				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
					{/* Left - Privacy links */}
					<div className="flex flex-wrap gap-4 text-sm text-white/70 mb-4 md:mb-0">
						<a href="#" className="hover:text-[#FBBF24] transition-colors">Privacy policy</a>
						<a href="#" className="hover:text-[#FBBF24] transition-colors">Term of service</a>
						<a href="#" className="hover:text-[#FBBF24] transition-colors">Language</a>
					</div>

					{/* Right - Copyright */}
					<div className="text-sm text-white/70">
						Copyright © 2025
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
