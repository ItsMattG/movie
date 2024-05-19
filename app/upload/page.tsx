'use client'

import React, { useEffect, useState, ChangeEvent } from 'react';

const App: React.FC = () => {
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [uploadFailed, setUploadFailed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
	const [service, setService] = useState<string | null>(null);
	const [isLocalStorageEmpty, setIsLocalStorageEmpty] = useState(true);
	const [fileName, setFileName] = useState('No file chosen');

	useEffect(() => {
		setIsLocalStorageEmpty(!(typeof window !== 'undefined' && window.localStorage && window.localStorage.length > 1));
	}, []);

	const handleClose = () => {
		setUploadSuccess(false);
		setUploadFailed(false);
	};

	console.log('local', typeof window !== 'undefined' && window.localStorage ? window.localStorage : {});
	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target && event.target.files && event.target.files.length > 0) {
			setFileName(event.target.files[0].name);
			const reader = new FileReader();
			reader.onload = function(e) {
				if (e.target) {
					console.log('asdad');
					try {
						console.log('fff')
						localStorage.setItem(`${service}UploadedFile`, e.target.result as string);
						setUploadSuccess(true);
						setIsLocalStorageEmpty(!(typeof window !== 'undefined' && window.localStorage && window.localStorage.length > 1));
						console.log('uipload', uploadSuccess)
					} catch (e) {
						setUploadFailed(true);
					}
					console.log(localStorage);
				}
			};
			console.log('asdadeee')
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
		setIsLocalStorageEmpty(!(typeof window !== 'undefined' && window.localStorage && window.localStorage.length > 1));
		console.log('after', localStorage)
	};

  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center bg-background-brown">
			<div className="flex justify-center">
				<h1 className="text-4xl mb-8 font-semibold text-main-text">Upload your document</h1>
			</div>

			<div className="flex flex-col justify-center items-center gap-4 w-6/12">
				<div className="flex items-center border border-gray-300 p-2 rounded-lg w-full bg-button-color max-w-sm">
					<label
						className={`text-button-text font-medium whitespace-nowrap ${
							!service ? 'opacity-50 cursor-not-allowed disabled' : 'cursor-pointer'
						}`}
					>
						Choose File
						<input
							type="file"
							className="hidden"
							onChange={handleFileUpload}
							disabled={!service}
						/>
					</label>
					<div className="border-l border-gray-300 h-5 mx-2"></div>
					<span className="text-button-text">{fileName}</span>
				</div>

				<button
					className={`px-2 py-1 bg-button-color-secondary text-sm text-black rounded-lg ${
						isLocalStorageEmpty ? 'invisible' : 'block'
					}`}
					onClick={handleLocalStorageClear}
				>
					Remove files
				</button>

				{ (uploadSuccess || uploadFailed) && (
					<div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
						<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
							<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

							<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

							<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
												{uploadSuccess ? 'Success' : 'Error'}
											</h3>
											<div className="mt-2">
												<p className="text-sm text-gray-500">
													{uploadSuccess ? 'File uploaded successfully!' : 'Failed to upload file.'}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									<button
										type="button"
										className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-button-color-tertiary text-base font-medium text-white hover:bg-button-color-tertiary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={handleClose}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="mt-8 space-x-4">
					<button
						className={`px-4 py-2 ${
							service === 'netflix'
								? 'bg-button-color-tertiary text-white'
								: 'bg-button-color-tertiary text-white opacity-50'
						} rounded-lg`}
						onClick={() => handleServiceSelect('netflix')}
					>
						Netflix
					</button>
					<button
						className={`px-4 py-2 ${
							service === 'prime'
								? 'bg-button-color-tertiary text-white'
								: 'bg-button-color-tertiary text-white opacity-50'
						} rounded-lg`}
						onClick={() => handleServiceSelect('prime')}
					>
						Prime
					</button>
				</div>

			</div>

			<div className="flex justify-center items-center gap-3">
				<button
					className={`mt-8 px-4 py-2 bg-button-color text-button-text text-2xl font-bold rounded-lg ${
						isLocalStorageEmpty && 'opacity-50 cursor-not-allowed'
					}`}
					onClick={() => window.location.href='/'}
					disabled={isLocalStorageEmpty}
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
