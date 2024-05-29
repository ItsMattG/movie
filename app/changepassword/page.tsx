"use client"

export default function ChangePassword() {
	return (
		<section className="bg-background-primary">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-background-tertiary/50 border rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-main-text md:text-2xl">
							Change Password
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label htmlFor="new-password" className="block mb-2 text-sm font-medium text-main-text">New Password</label>
								<input type="password" name="new-password" id="new-password" placeholder="••••••••" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" required={true} />
							</div>
							<div>
								<label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-main-text">Confirm password</label>
								<input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-background-primary border border-background-secondary text-main-text sm:text-sm rounded-lg focus:ring-background-secondary focus:border-background-secondary block w-full p-2.5" required={true} />
							</div>
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-background-secondary rounded bg-background-primary focus:ring-3 focus:ring-background-secondary" required={true} style={{ color: '#65372A' }}/>
								</div>
								<div className="ml-3 text-sm">
									<label htmlFor="terms" className="font-light text-main-text">I accept the <a className="font-medium text-main-text hover:underline" href="/tos">Terms and Conditions</a></label>
								</div>
							</div>
							<button type="submit" className="w-full text-button-text bg-button-color/90 hover:bg-button-color/50 focus:ring-4 focus:outline-none focus:ring-button-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset password</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}