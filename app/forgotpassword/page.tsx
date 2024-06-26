"use client"
import { useState } from 'react';
import supabase from '../utils/supabase';

export default function ForgotPassword() {
	const [email, setEmail] = useState('');

	const handleResetPassword = async (e: React.FormEvent) => {
		e.preventDefault();

		const { data: user, error } = await supabase.auth.resetPasswordForEmail(email);

		if (error) {
			console.error('Error resetting password:', error.message);
		} else {
			console.log('email sent')
			// // Send welcome email
			// await fetch('/api/email', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify({
			// 		email: email,
			// 	}),
			// });
		}
	};

	return (
		<section className="bg-background-primary">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-background-tertiary/50 border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-main-text md:text-2xl">
							Reset Password
						</h1>
						<form onSubmit={handleResetPassword} className="space-y-4 md:space-y-6" action="#">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-main-text">Your email</label>
								<input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" placeholder="name@company.com" required={true} />
							</div>
							<button type="submit" className="w-full text-button-text bg-button-color/90 hover:bg-button-color/50 focus:ring-4 focus:outline-none focus:ring-button-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send reset password email</button>
							<p className="text-sm font-light text-main-text">
								Remember your password? <a href="/signin" className="font-medium text-main-text hover:underline">Login here</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}