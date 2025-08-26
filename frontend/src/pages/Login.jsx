import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const canSubmit = email.trim().length > 0 && password.trim().length > 0;

	const onSubmit = (e) => {
		e.preventDefault();
		// TODO: wire up real auth call
		console.log("Logging in with", { email, password });
	};

	return (
		<div
			className="relative min-h-screen bg-black text-white"
			style={{
				backgroundImage: "url(/src/assets/backdrop-login.jpg)",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

			{/* Modal container */}
			<div className="relative z-10 flex items-center justify-center min-h-screen px-4">
				<div className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900/80 shadow-2xl">
					<div className="flex items-start justify-between p-5 pb-3">
						<div className="space-y-1">
							<div className="flex items-center gap-2">
								<div className="h-6 w-6 rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/40 flex items-center justify-center text-xs font-bold text-emerald-300">
									NF
								</div>
								<h1 className="text-lg font-semibold tracking-wide">NihongoFlix</h1>
							</div>
							<p className="text-xs text-white/60">Login to your account</p>
						</div>
						<button
							type="button"
							className="h-8 rounded-md bg-white/10 px-3 text-sm text-white/80 transition hover:bg-white/15"
                            onClick={() => navigate("/")}
						>
							Close
						</button>
					</div>

					<form onSubmit={onSubmit} className="space-y-4 px-5 pb-5">
						<div className="space-y-1">
							<label htmlFor="email" className="block text-sm text-white/80 mb-2">
								Email
							</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								className="w-full rounded-md border border-white/10 bg-neutral-800/80 px-3 py-2 text-sm placeholder-white/40 outline-none ring-0 focus:border-white/20"
							/>
						</div>

						<div className="space-y-1">
							<label htmlFor="password" className="block text-sm text-white/80 mb-2">
								Password
							</label>
							<div className="relative">
								<input
									id="password"
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
									className="w-full rounded-md border border-white/10 bg-neutral-800/80 px-3 py-2 pr-10 text-sm placeholder-white/40 outline-none ring-0 focus:border-white/20"
								/>
								<button
									type="button"
									onClick={() => setShowPassword((v) => !v)}
									className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white"
									aria-label="Toggle password visibility"
								>
									{showPassword ? "🙈" : "👁️"}
								</button>
							</div>
						</div>

						<div className="pt-1">
							<button type="button" className="mx-auto block text-xs text-white/70 hover:text-white">
								Forgot Password
							</button>
						</div>

						<button
							type="submit"
							disabled={!canSubmit}
							className="w-full rounded-md bg-[#FBBF24] py-2 text-sm font-medium text-black transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#FBBF24]/80"
						>
							Login
						</button>

						<p className="pt-1 text-center text-[11px] text-white/60">
							Don't have an account? <a href="/register" className="cursor-pointer font-medium text-white hover:underline">Sign up</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;