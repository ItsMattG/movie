import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

export default function Loading() {
	return (
		<div className="h-screen flex items-center justify-center bg-background-primary px-8">
			<PacmanLoader color="#000000" size={24} />
		</div>
	);
}
