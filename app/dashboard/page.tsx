'use client'

import withAuth from "../auth/page";
import supabase from '../utils/supabase';

const Dashboard = () => {
	return (
		<section className="min-h-screen flex flex-col justify-evenly items-center bg-background-primary">
			<div className="flex justify-center">
				<h1 className="text-4xl font-semibold text-main-text">Dashboard</h1>
			</div>

			<div className="flex justify-center items-center gap-4 w-6/12">
				<button
					className="px-4 py-2 bg-button-color text-button-text text-2xl font-bold rounded-lg"
					onClick={() => window.location.href = "/results"}
				>
					See Results
				</button>
				<button
					className="px-4 py-2 bg-button-color text-button-text text-2xl font-bold rounded-lg"
					onClick={() => window.location.href = "/upload"}
				>
					Upload Data
				</button>
				<button
					className="px-4 py-2 bg-button-color text-button-text text-2xl font-bold rounded-lg"
					onClick={async () => {
						const { error } = await supabase.auth.signOut();
						if (error) console.error('Error logging out:', error.message);
						else window.location.href = '/signin';
					}}
				>
					Logout
				</button>
			</div>
		</section>
	);
}

export default withAuth(Dashboard);