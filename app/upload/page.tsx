'use client'
import withAuth from "../auth/page";
import React, { useEffect, useState, ChangeEvent } from 'react';
import primeInstructions from './data/primeInstructions';

const Upload: React.FC = () => {
	const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
	const [uploadFailed, setUploadFailed] = useState<boolean>(false);
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [service, setService] = useState<string | null>(null);
	const [isLocalStorageEmpty, setIsLocalStorageEmpty] = useState(true);
	const [fileName, setFileName] = useState('No file chosen');
	const [fileNamesUploaded, setFileNamesUploaded] = useState<string[]>([]);
	const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState<boolean>(false);
	const [selectedInstruction, setSelectedInstruction] = useState<string | null>('netflix');

	const handleInstructionsModalOpen = () => {
		setIsInstructionsModalOpen(true);
	};
	console.log('pspdf')
	useEffect(() => {
		console.log('arar')
		setIsLocalStorageEmpty(!(typeof window !== 'undefined' && window.localStorage && window.localStorage.length > 1));
		console.log('arardfsdfsf')
		const storedFileNames = localStorage.getItem('fileNames');
		if (storedFileNames) {
				const fileNamesArray = JSON.parse(storedFileNames);
				setFileNamesUploaded(fileNamesArray);
		}
	}, []);

	const handleClose = () => {
		setUploadSuccess(false);
		setUploadFailed(false);
	};

	const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target && event.target.files && event.target.files.length > 0) {
			setFileName(event.target.files[0].name.replace('.csv', ''));
			const reader = new FileReader();
			reader.onload = function(e) {
				if (e.target) {
					try {
						console.log('ofsoiufd')
						localStorage.setItem(`${service}UploadedFile`, e.target.result as string);
						console.log('ofsoiufdasdasdasd')
						localStorage.setItem(`${service}FileUploadedFlag`, 'true');
						setUploadSuccess(true);
						setIsLocalStorageEmpty(!(typeof window !== 'undefined' && window.localStorage && window.localStorage.length > 1));
						const files = event.target.files;
						if (files) {
							setUploadedFiles(prevFiles => [...prevFiles, ...Array.from(files)]);
							const fileName = files[0].name;
							let fileNames = localStorage.getItem('fileNames');
							let fileNamesArray = fileNames ? JSON.parse(fileNames) : [];
							fileNamesArray.push(fileName);
							localStorage.setItem('fileNames', JSON.stringify(fileNamesArray));
						}
					} catch (e) {
						setUploadFailed(true);
					}
				}
			};
			reader.readAsText(event.target.files[0]);
		}
	};

	const handleServiceSelect = (selectedService: string) => {
		setService(selectedService);
		const fileUploadedFlag = localStorage.getItem(`${selectedService}FileUploadedFlag`);
	};

	const handleLocalStorageClear = () => {
		localStorage.clear();
		setIsLocalStorageEmpty(!(typeof window !== 'undefined' && window.localStorage && window.localStorage.length > 1));
		setUploadedFiles([]);
		setFileNamesUploaded([]);
	};

	return (
		<div className="min-h-screen flex flex-col justify-evenly items-center bg-background-primary">
			<div className="flex justify-center">
				<h1 className="text-4xl font-semibold text-main-text">Upload your document</h1>
			</div>

			<div className="flex flex-col justify-center items-center gap-4 w-6/12">
				<div className="flex items-center w-full max-w-sm text-xs">
					<span className="text-button-text font-normal">*CSV files only</span>
				</div>
				<div className="flex items-center border border-gray-300 p-2 rounded-lg w-full bg-button-color max-w-sm mt-[-10px]">
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
					className={`px-2 py-1 bg-button-color-secondary text-sm text-main-text rounded-lg ${
						isLocalStorageEmpty ? 'invisible' : 'block'
					}`}
					onClick={handleLocalStorageClear}
				>
					Remove files
				</button>

				<div className="flex flex-col p-2 text-left rounded-lg w-full max-w-sm text-main-text">
						<h3 className="text-md font-semibold text-secondary-text">Uploaded Files:</h3>
						{fileNamesUploaded.length > 0 && (
								<ul>
										{Array.from(fileNamesUploaded).map((fileName, index) => (
												<li key={index}>{fileName.replace('.csv', '')}</li>
										))}
								</ul>
						)}
						{uploadedFiles.length > 0 && (
								<ul>
										{Array.from(uploadedFiles).map((file, index) => (
												<li key={index}>{file.name.replace('.csv', '')}</li>
										))}
								</ul>
						)}
						{(fileNamesUploaded.length === 0 && uploadedFiles.length === 0) && (
								<p>No files uploaded.</p>
						)}
				</div>

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

				<div className="mt-8 w-full max-w-sm">
						<div className="flex space-x-4">
								<button
										className={`px-4 py-2 ${
											service === 'netflix'
												? 'bg-button-color-tertiary text-white'
												: 'bg-button-color-tertiary text-white opacity-50'
											} rounded-lg w-full ${
											(() => {
												try {
													return window.localStorage.getItem('netflixFileUploadedFlag') === 'true' ? 'cursor-not-allowed' : '';
												} catch (e) {
													return '';
												}
											})()
										}`}
										onClick={() => handleServiceSelect('netflix')}
										disabled={(() => {
											try {
												return window.localStorage.getItem('netflixFileUploadedFlag') === 'true';
											} catch (e) {
												return false;
											}
										})()}
									>
									Netflix
								</button>
								<button
									className={`px-4 py-2 ${
										service === 'prime'
											? 'bg-button-color-tertiary text-white'
											: 'bg-button-color-tertiary text-white opacity-50'
										} rounded-lg w-full ${
										(() => {
											try {
												return window.localStorage.getItem('primeFileUploadedFlag') === 'true' ? 'cursor-not-allowed' : '';
											} catch (e) {
												return '';
											}
										})()
									}`}
									onClick={() => handleServiceSelect('prime')}
									disabled={(() => {
										try {
											return window.localStorage.getItem('primeFileUploadedFlag') === 'true';
										} catch (e) {
											return false;
										}
									})()}
								>
									Prime
								</button>
						</div>
						<button
								className="mt-4 px-4 py-2 bg-button-color-tertiary text-white rounded-lg w-full"
								onClick={handleInstructionsModalOpen}
						>
								Instructions
						</button>

						<div className={`fixed z-10 inset-0 overflow-y-auto ${isInstructionsModalOpen ? 'block' : 'hidden'}`}>
							<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
								<div className="fixed inset-0 transition-opacity" aria-hidden="true">
										<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
								</div>

									<div className="relative inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full" style={{ minHeight: '490px'}}>
											<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
												<div className="sm:flex sm:items-start">
													<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left min-h-96 w-full">
														<div className="flex gap-4 justify-center sm:justify-start">
																<button
																		className={`text-md bg-button-color-tertiary px-2 py-1 rounded-md text-white ${ selectedInstruction === 'prime' && 'opacity-50' }`}
																		onClick={() => setSelectedInstruction('netflix')}
																>
																		Netflix
																</button>
																<button
																		className={`text-md bg-button-color-tertiary px-2 py-1 rounded-md text-white  ${ selectedInstruction === 'netflix' && 'opacity-50' }`}
																		onClick={() => setSelectedInstruction('prime')}
																>
																		Prime
																</button>
																<button
																		className="ml-auto text-main-text rounded-md self-start text-lg"
																		onClick={() => setIsInstructionsModalOpen(false)}
																>
																		X
																</button>
														</div>

														{selectedInstruction === 'netflix' && (
																<div className="mt-6">
																		<h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Netflix Instructions</h3>
																		<p className="text-md text-gray-500 mb-1">
																			1. Follow the Netflix help link: <a className="text-blue-400 ml-1" href="https://help.netflix.com/en/node/101917" target="_blank" rel="noopener noreferrer">
																				https://help.netflix.com/en/node/101917
																			</a>
																		</p>
																		<p className="text-md text-gray-500 mb-1">2. Once on the watch history page click &apos;Download all&apos; at the bottom right of the page</p>
																		<p className="text-md text-gray-500 mb-1">3. Once downloaded close this dialog, select Netflix and upload the document</p>
																</div>
														)}

														{selectedInstruction === 'prime' && (
																<div className="mt-6">
																		<h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Prime Instructions</h3>
																		<p className="text-md text-gray-500 mb-1">1. Log into your Amazon Prime account</p>
																		<p className="text-md text-gray-500 mb-1">2. Go to this link: <a className="text-blue-400 ml-1" href="https://www.primevideo.com/settings/watch-history" target="_blank" rel="noopener noreferrer">
																			https://www.primevideo.com/settings/watch-history
																			</a>
																		</p>
																		<p className="text-md text-gray-500 mb-1">3. Click the button below which will copy a code snippet to your clipboard</p>
																		<button
																				className="mt-1 mb-2 bg-button-color text-main-text px-2 py-1 text-sm rounded"
																				onClick={() => navigator.clipboard.writeText(primeInstructions)}
																		>
																				Copy Code to Clipboard
																		</button>
																		<p className="text-md text-gray-500 mb-1">4. Press F12, click Console tab, type &apos;allow pasting&apos;, press enter</p>
																		<p className="text-md text-gray-500 mb-1">5. Paste in the code snippet from clipboard, press enter</p>
																		<p className="text-md text-gray-500 mb-1">6. Once downloaded close this dialog, select Prime and upload the document</p>
																</div>
														)}
													</div>
												</div>
												<p className="absolute bottom-0 sm:ml-4 mb-5 text-md text-gray-500"><span className="font-bold">Note:</span> The expected format are 2 columns (Title, Date)</p>
											</div>
									</div>
							</div>
						</div>
				</div>
			</div>

			<div className="flex justify-center items-center gap-3">
				<button
					className={`px-4 py-2 bg-button-color text-button-text text-2xl font-bold rounded-lg ${
						isLocalStorageEmpty && 'opacity-50 cursor-not-allowed'
					}`}
					onClick={() => window.location.href='/results'}
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

export default withAuth(Upload);
