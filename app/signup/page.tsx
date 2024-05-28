"use client"

export default function SignUp() {
	return (
		<section className="bg-background-primary">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-background-tertiary/50 border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-main-text md:text-2xl">
							Create an account
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-main-text">Your email</label>
								<input type="email" name="email" id="email" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" placeholder="name@company.com" required={true} />
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-main-text">Password</label>
								<input type="password" name="password" id="password" placeholder="••••••••" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" required={true} />
							</div>
							<div>
								<label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-main-text">Confirm password</label>
								<input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" required={true} />
							</div>
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-background-secondary rounded bg-background-primary focus:ring-3 focus:ring-background-secondary" required={true} style={{ color: '#65372A' }}/>
								</div>
								<div className="ml-3 text-sm">
									<label htmlFor="terms" className="font-light text-main-text">I accept the <a className="font-medium text-main-text hover:underline" href="/tos">Terms and Conditions</a></label>
								</div>
							</div>
							<button type="submit" className="w-full text-button-text bg-button-color/90 hover:bg-button-color/50 focus:ring-4 focus:outline-none focus:ring-button-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create account</button>
							<p className="text-sm font-light text-main-text">
								Already have an account? <a href="/signin" className="font-medium text-main-text hover:underline">Login here</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}