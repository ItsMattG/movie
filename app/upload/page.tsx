'use client'

import React, { useState, ChangeEvent } from 'react';

const App: React.FC = () => {
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
	const [service, setService] = useState<string | null>(null);
	// localStorage.clear();
	console.log('local', localStorage)
	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target && event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.onload = function(e) {
				if (e.target) {
					console.log('asdad');
					localStorage.setItem(`${service}UploadedFile`, e.target.result as string);
					setUploadSuccess(true);
					console.log(localStorage);
				}
			};
			reader.readAsText(event.target.files[0]);
		}
	};

	const handleServiceSelect = (service: string) => {
		setService(service);
		console.log('ser', service)
	};

	const handleLocalStorageClear = () => {
		console.log('before', localStorage)
		localStorage.clear();
		console.log('after', localStorage)
	};

  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center">
			<div className="flex justify-center">
				<h1 className="text-3xl mb-8">Upload your document</h1>
			</div>

			<div className="flex flex-col justify-center items-center gap-12">
				<input
					type="file"
					className="file-input file-input-bordered w-full max-w-xl"
					onChange={handleFileUpload}
					disabled={!service}
				/>

				{uploadSuccess && (
					<p className="text-green-500 mt-4">File uploaded successfully!</p>
				)}

				<div className="mt-8 space-x-4">
					<button
						className={`px-4 py-2 ${
							service === 'netflix'
								? 'bg-blue-500 text-white'
								: 'bg-gray-300 text-gray-600'
						} rounded-lg`}
						onClick={() => handleServiceSelect('netflix')}
					>
						Netflix
					</button>
					<button
						className={`px-4 py-2 ${
							service === 'prime'
								? 'bg-blue-500 text-white'
								: 'bg-gray-300 text-gray-600'
						} rounded-lg`}
						onClick={() => handleServiceSelect('prime')}
					>
						Prime
					</button>
				</div>

			</div>

			<div className="flex justify-center items-center gap-3">
				<button
					className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg"
					onClick={handleLocalStorageClear}
				>
					Remove files
				</button>
				<button
					className={`mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg ${
						!uploadSuccess && 'opacity-50 cursor-not-allowed'
					}`}
					onClick={() => window.location.href='/'}
					disabled={!uploadSuccess}
				>
					Get Results
				</button>

				{loading && (
					<div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<p className="text-lg font-semibold mb-4">Loading...</p>
							{/* Place your loading indicator component here */}
						</div>
					</div>
				)}
			</div>
		</div>
  );
};

export default App;
