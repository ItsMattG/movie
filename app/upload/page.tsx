'use client'

import React, { useState, ChangeEvent } from 'react';

const App: React.FC = () => {
  const [docType, setDocType] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileUpload = () => {
    // Simulate file upload process
    setLoading(true);
    setTimeout(() => {
      setUploadSuccess(true);
      setLoading(false);
    }, 2000); // Simulate 2 seconds delay
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setDocType(event.target.files[0].type);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center">
			<div className="flex justify-center">
				<h1 className="text-3xl mb-8">Upload your document</h1>
			</div>

			<div className="flex flex-col justify-center items-center gap-12">
				<input
					type="file"
					className="file-input file-input-bordered w-full max-w-xs"
					disabled={!docType}
				/>

				{uploadSuccess && (
					<p className="text-green-500 mt-4">File uploaded successfully!</p>
				)}

				<div className="mt-8 space-x-4">
					<button
						className={`px-4 py-2 ${
							docType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								? 'bg-blue-500 text-white'
								: 'bg-gray-300 text-gray-600'
						} rounded-lg`}
						onClick={() =>
							setDocType(
								'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
							)
						}
					>
						Netflix
					</button>
					<button
						className={`px-4 py-2 ${
							docType === 'application/pdf' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
						} rounded-lg`}
						onClick={() => setDocType('application/pdf')}
					>
						Prime
					</button>
				</div>

			</div>

			<div className="flex justify-center items-center">
				<button
					className={`mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg ${
						!uploadSuccess && 'opacity-50 cursor-not-allowed'
					}`}
					onClick={handleFileUpload}
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
