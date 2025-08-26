import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [acceptedTerms, setAcceptedTerms] = useState(false);

	const canSubmit =
		username.trim().length > 0 &&
		email.trim().length > 0 &&
		password.trim().length > 0 &&
		confirmPassword.trim().length > 0 &&
		acceptedTerms;

    const checkPassword = () => {
        if (password !== confirmPassword) {
            return false;
        }
        return true;
    }

	const onSubmit = (e) => {
		e.preventDefault();
        if (!checkPassword()) {
            alert("Passwords do not match");
            return;
        }
		// TODO: wire up real auth call
		console.log("Registering with", { username, email, password, confirmPassword });
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
							<p className="text-xs text-white/60">Register to enjoy the features</p>
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
							<label htmlFor="username" className="block text-sm text-white/80 mb-2">
								Username
							</label>
							<input
								id="username"
								type="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="Username"
								className="w-full rounded-md border border-white/10 bg-neutral-800/80 px-3 py-2 text-sm placeholder-white/40 outline-none ring-0 focus:border-white/20"
							/>
						</div>
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
                                    tabIndex={-1}
								>
									{showPassword ? "🙈" : "👁️"}
								</button>
							</div>
						</div>

						<div className="space-y-1">
							<label htmlFor="password" className="block text-sm text-white/80 mb-2">
								Confirm Password
							</label>
							<div className="relative">
								<input
									id="confirmPassword"
									type={showPassword ? "text" : "password"}
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									placeholder="Confirm Password"
									className="w-full rounded-md border border-white/10 bg-neutral-800/80 px-3 py-2 pr-10 text-sm placeholder-white/40 outline-none ring-0 focus:border-white/20"
								/>
								<button
									type="button"
									onClick={() => setShowPassword((v) => !v)}
									className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white"
									aria-label="Toggle password visibility"
                                    tabIndex={-1}
								>
									{showPassword ? "🙈" : "👁️"}
								</button>
							</div>
						</div>

						<div className="pt-1 flex items-center gap-3">
                            <label htmlFor="terms" className="relative inline-flex items-center cursor-pointer select-none">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    checked={acceptedTerms}
                                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                                    className="peer sr-only"
                                />
                                <span className="h-5 w-5 rounded-full bg-neutral-900/50 ring-1 ring-[#FBBF24]/40 flex items-center justify-center text-transparent peer-checked:bg-[#FBBF24] peer-checked:text-white transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                                        <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 0 1.42l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 0 1 1.414-1.42l2.543 2.543 6.543-6.543a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </label>
                            <p className="text-xs text-white/70">
                                I agree to our <a href="/privacy" className="font-semibold text-white hover:underline">Privacy Policy</a> and <a href="/terms" className="font-semibold text-white hover:underline">Terms & Conditions</a>
                            </p>
                        </div>

						<button
							type="submit"
							disabled={!canSubmit}
							className="w-full rounded-md bg-[#FBBF24] py-2 text-sm font-medium text-black transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#FBBF24]/80"
						>
							Register
						</button>

						<p className="pt-1 text-center text-[11px] text-white/60">
							Already have an account? <a href="/login" className="cursor-pointer font-medium text-white hover:underline">Login</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;