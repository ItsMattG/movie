"use client"
import { useState } from 'react'
import supabase from '../utils/supabase'

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = async (e: React.FormEvent) => {
			e.preventDefault();

			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});

			if (error) {
				console.error('Error signing in:', error.message);
			} else {
				// Redirect the user to the upload page
				window.location.href = '/dashboard';
			}
	};

	return (
		<section className="bg-background-primary">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-background-tertiary/50 border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-main-text md:text-2xl">
							Sign in to your account
						</h1>
						<form onSubmit={handleSignIn} className="space-y-4 md:space-y-6" action="#">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-main-text">Your email</label>
								<input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" placeholder="name@company.com" required={true} style={{ WebkitTextFillColor: '#24130F', transition: 'background-color 5000s ease-in-out 0s' }} />
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-main-text">Password</label>
								<input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" required={true} />
							</div>
							<div className="flex items-start">
								<div className="text-sm">
									<label htmlFor="terms" className="font-light text-main-text"><a className="font-medium text-main-text hover:underline" href="/forgotpassword">Forgot password?</a></label>
								</div>
							</div>
							<button type="submit" className="w-full text-button-text bg-button-color/90 hover:bg-button-color/50 focus:ring-4 focus:outline-none focus:ring-button-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
							<p className="text-sm font-light text-main-text">
								Don't have an account? <a href="/signup" className="font-medium text-main-text hover:underline">Sign up for free here</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}