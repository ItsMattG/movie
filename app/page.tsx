'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import netflixIcon from '../public/netflix.png';
import foxtelIcon from '../public/foxtel.png';
import stanIcon from '../public/stan.png';
import amazonPrimeIcon from '../public/amazon.jpg';
import appleIcon from '../public/apple.png';
import britboxIcon from '../public/britbox.png';
import bingeIcon from '../public/binge.png';
import { json } from 'stream/consumers';

interface DataItem {
	Title: string;
	Date: string;
}

interface Provider {
	logo_path: string;
	provider_id: number;
	provider_name: string;
}

const Home: React.FC = () => {
	const [movieData, setMovieData] = useState<DataItem[]>([]);
	const [tvShowData, setTvShowData] = useState<DataItem[]>([]);
	const [providerCounts, setProviderCounts] = useState<{ [providerName: string]: number }>({});
	const encounteredProviders = new Set<string>(); // Set to store encountered provider IDs
	const [highestProvider, setHighestProvider] = useState('');
	const [highestProviderCount, setHighestProviderCount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const storedMovies = JSON.parse(localStorage.getItem('mergedMovies') || '[]');
			const storedTvShows = JSON.parse(localStorage.getItem('mergedTvShows') || '[]');
			const storedCounts = JSON.parse(localStorage.getItem('mergedCounts') || '[]');
			const storedMaxProvider = JSON.parse(localStorage.getItem('maxProvider') || '[]');
			const storedMaxCount = JSON.parse(localStorage.getItem('maxCount') || '[]');
			const primeDataLocal = localStorage.getItem('primeUploadedFile');
			const netflixDataLocal = localStorage.getItem('netflixUploadedFile');

			if (storedMovies.length === 0 || storedTvShows.length === 0 || storedCounts.length === 0 || storedMaxProvider.length === 0 || storedMaxCount.length === 0) {
				if (primeDataLocal && netflixDataLocal) {
					try {
						const primeData = await fetchPrimeData(primeDataLocal);
						const netflixData = await fetchNetflixData(netflixDataLocal);

						const mergedMovies = [...movieData, ...primeData.movies, ...(netflixData.formattedMovies ?? [])];
						const mergedTvShows = [...tvShowData, ...primeData.tvShows, ...(netflixData.formattedTvShows ?? [])];
						const mergedCounts = mergeProviderCounts(providerCounts, primeData.mergedCounts, netflixData.mergedCounts);

						setMovieData(mergedMovies);
						setTvShowData(mergedTvShows);
						setProviderCounts(mergedCounts);

						localStorage.setItem('mergedMovies', JSON.stringify(mergedMovies));
						localStorage.setItem('mergedTvShows', JSON.stringify(mergedTvShows));
						localStorage.setItem('mergedCounts', JSON.stringify(mergedCounts));

						// Find the provider with the highest count
						let maxCount = 0;
						let maxProvider = '';
						for (const [providerName, count] of Object.entries(mergedCounts)) {
								if (count > maxCount) {
										maxCount = count;
										maxProvider = providerName;
								}
						}
						setHighestProvider(maxProvider);
						setHighestProviderCount(maxCount);

						localStorage.setItem('maxProvider', JSON.stringify(maxProvider));
						localStorage.setItem('maxCount', JSON.stringify(maxCount));
					} catch (error) {
						console.error('Error fetching data:', error);
					}
				}
			} else {
				setMovieData(storedMovies);
				setTvShowData(storedTvShows);
				const sortedCounts = Object.entries(storedCounts)
					.map(([provider, count]) => ({ provider, count: Number(count) }))
					.sort((a, b) => b.count - a.count);

				console.log('stored', sortedCounts);
				const sortedCountsObject = sortedCounts.reduce((obj: { [key: string]: number }, item) => {
					obj[item.provider] = item.count;
					return obj;
				}, {});

setProviderCounts(sortedCountsObject);
				setHighestProvider(storedMaxProvider);
				setHighestProviderCount(storedMaxCount);
				console.log('storedcounts', storedCounts)
			}
		}
		fetchData();
	}, []);

	const fetchPrimeData = async (primeData: string) => {
		try {
			const response = await fetch('/api/prime', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ primeData })
			});
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const jsonData: DataItem[] = await response.json();
			const filteredData = jsonData.filter(item => {
				const [day, month, year] = item.Date.split('/');
				const itemDate = new Date(`${year}-${month}-${day}`);
				const today = new Date();
				today.setHours(0, 0, 0, 0);
				const twelveMonthsAgo = new Date();
				twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1);

				return itemDate >= twelveMonthsAgo && itemDate <= today;
			});

			const movies = filteredData.filter(item => !/Season\s\d+/i.test(item.Title) && !/\s*-\s*SEASON\s*\d+/i.test(item.Title));
			const tvShows = filterTvShows(filteredData, 'prime');
			// Calculate counts for current data
			const counts: { [providerName: string]: number } = {};

			await fetchMediaStats(tvShows, 'tv', counts);
			await fetchMediaStats(movies, 'movie', counts);

			const mergedCounts: { [providerName: string]: number } = {};
			for (const providerName in counts) {
					mergedCounts[providerName] = (mergedCounts[providerName] || 0) + counts[providerName];
			}

			setMovieData(prevMovieData => [...prevMovieData, ...movies]);
			setTvShowData(prevTvShowData => [...prevTvShowData, ...tvShows]);

			const mergedProviderCounts = mergeProviderCounts(providerCounts, mergedCounts);
			setProviderCounts(mergedProviderCounts);
			return { movies, tvShows, mergedCounts };
		} catch (error) {
			console.error('Error fetching data:', error);
			return { movies: [], tvShows: [], mergedCounts: {} };
		}
	};

	const fetchNetflixData = async (netflixData: string) => {
		try {
			const response = await fetch('/api/netflix', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ netflixData })
			});
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const jsonData: DataItem[] = await response.json();

			const filteredData = jsonData.filter(item => {
				const [day, month, year] = item.Date.split('/');
				const itemDate = new Date(`${year}-${month}-${day}`);
				const today = new Date();
				today.setHours(0, 0, 0, 0);
				const twelveMonthsAgo = new Date();
				twelveMonthsAgo.setFullYear(twelveMonthsAgo.getFullYear() - 1);

				return itemDate >= twelveMonthsAgo && itemDate <= today;
			});
			const movies = filteredData.filter(item => item.Title && !item.Title.includes('Season') && !item.Title.includes('Limited Series') && !item.Title.includes(': Chapter') && !item.Title.includes(': Part') && !item.Title.includes(': Series') && !item.Title.includes(': Collection'));
			const tvShows = filterTvShows(filteredData, 'netflix');
			// Calculate counts for current data
			const counts: { [providerName: string]: number } = {};

			await fetchMediaStats(tvShows, 'tv', counts);
			await fetchMediaStats(movies, 'movie', counts);

			// Merge counts with existing counts
			const mergedCounts: { [providerName: string]: number } = {};
			for (const providerName in counts) {
					mergedCounts[providerName] = (mergedCounts[providerName] || 0) + counts[providerName];
			}

			// Format dates and merge new data with existing data based on title
			const formattedMovies = movies.map(item => ({
				...item,
				Date: formatDate(item.Date)
			}));
			const formattedTvShows = tvShows.map(item => ({
				...item,
				Date: formatDate(item.Date)
			}));

			// Merge new data with existing data
			setMovieData(prevMovieData => [...prevMovieData, ...formattedMovies]);
			setTvShowData(prevTvShowData => [...prevTvShowData, ...formattedTvShows]);

			const mergedProviderCounts = mergeProviderCounts(providerCounts, mergedCounts);
			setProviderCounts(mergedProviderCounts);
			return { formattedMovies, formattedTvShows, mergedCounts };
		} catch (error) {
			console.error('Error fetching data:', error);
			return { movies: [], tvShows: [], mergedCounts: {} };
		}
	};

	const formatDate = (dateString: string): string => {
		const [day, month, year] = dateString.split('/');
		const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const formattedDate: string = `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
		return formattedDate;
	};

	// Define a helper function to merge provider counts
	const mergeProviderCounts = (
		existingCounts: { [providerName: string]: number },
		...counts: { [providerName: string]: number }[]
	): { [providerName: string]: number } => {
		const mergedCounts = { ...existingCounts };

		counts.forEach((count) => {
			for (const providerName in count) {
				mergedCounts[providerName] = (mergedCounts[providerName] || 0) + count[providerName];
			}
		});

		return mergedCounts;
	};

	const filterTvShows = (data: DataItem[], provider: string): DataItem[] => {
		const tvShowsSet = new Set<string>();
		const tvShows: DataItem[] = [];

		data.forEach(item => {
				let titleParts: string[] = [];
				const separators = [': Season', ' - Season', ' – SEASON', ': Limited Series', ': Chapter', ': Part', ': Series', ': Collection'];
			for (const separator of separators) {
					titleParts = provider === 'netflix' ? item.Title.split(separator) : item.Title.split(separator);
						if (titleParts.length > 1) {
								// Found a valid split
								break;
						}
				}

				if (titleParts && titleParts.length >= 2) {
						const tvShowName = titleParts[0];

						if (!tvShowsSet.has(tvShowName) && tvShowName !== '') {
							tvShowsSet.add(tvShowName);
								tvShows.push({ Title: tvShowName, Date: item.Date });
						}
				}
		});

		return tvShows;
	};

	const fetchProviders = async (title: string, mediaType: string): Promise<Provider[]> => {
		try {
			const response = await fetch(`https://api.themoviedb.org/3/search/${mediaType}?query=${title}&include_adult=false&language=en-US&page=1&api_key=a0be022ea13fc1bb27bdfb6795b3537a`, {
				method: 'GET',
			});
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();
			const providers: Provider[] = [];

			if (data.results.length > 0) {
				const id = data.results[0].id;
				const providersData = await fetchPlatforms(mediaType, id, title);
				providers.push(...providersData);
			}

			return providers;
		} catch (error) {
			console.error('Error fetching providers:', error);
			return [];
		}
	};

	const fetchPlatforms = async (mediaType: string, id: number, title: string): Promise<Provider[]> => {
		try {
			const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/watch/providers?api_key=a0be022ea13fc1bb27bdfb6795b3537a`, {
				method: 'GET',
			});
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}

			const data = await response.json();
			const providers: Provider[] = [];

			const addProviderIfNotEncountered = (provider: Provider) => {
				const providerKey = `${provider.provider_name}_${provider.provider_id}_${title}`;
				if (!encounteredProviders.has(providerKey)) {
					if (
						provider.provider_name === 'Netflix'
						|| provider.provider_name === 'Foxtel Now'
						|| provider.provider_name === 'Stan'
						|| provider.provider_name === 'Amazon Prime Video'
						|| provider.provider_name === 'Apple TV'
						|| provider.provider_name === 'BritBox'
						|| provider.provider_name === 'BINGE'
					) {
						providers.push(provider);
						encounteredProviders.add(providerKey);
					}
				}
			};

			const flatrateProviders = data.results.AU?.flatrate;
			const rentProviders = data.results.AU?.rent;
			const buyProviders = data.results.AU?.buy;

			if (flatrateProviders) {
				flatrateProviders.forEach((provider: Provider) => {
					addProviderIfNotEncountered(provider);
				});
			}

			if (rentProviders) {
				rentProviders.forEach((provider: Provider) => {
					addProviderIfNotEncountered(provider);
				});
			}

			if (buyProviders) {
				buyProviders.forEach((provider: Provider) => {
					addProviderIfNotEncountered(provider);
				});
			}
			return providers;
		} catch (error) {
			console.error('Error fetching platforms:', error);
			return [];
		}
	};

	const fetchMediaStats = async (mediaData: DataItem[], mediaType: string, counts: { [providerName: string]: number }) => {
		for (const media of mediaData) {
				const providers = await fetchProviders(media.Title, mediaType);
				for (const provider of providers) {
					counts[provider.provider_name] = (counts[provider.provider_name] || 0) + 1;
				}
			}
	};

	return (
		<div className="h-screen flex items-center justify-center bg-background-primary px-8">
			<div className="h-5/6 md:max-w-3xl sm:max-w-xl flex flex-col justify-evenly items-center">
				<div className="flex justify-center">
					<h1 className="text-5xl font-bold text-main-text">Streaming Platforms</h1>
				</div>

				{highestProvider && (
					<div className="flex flex-col justify-between mx-auto w-full">
						<h2 className="text-3xl font-semibold mb-2 text-secondary-text">
							Recommended Streaming Platform based on data:
						</h2>
						<p className="text-xl text-main-text font-normal">
							{highestProvider} is the best provider with {highestProviderCount} counts
						</p>
					</div>
				)}

				<div className="flex flex-col justify-between gap-4 mx-auto">

					<h2 className="text-3xl font-bold mb-4 text-secondary-text">Providers</h2>

					{/* Provider List */}
					<div className="grid grid-cols-2 gap-6 w-full">
						{Object.entries(providerCounts).map(([providerName, count]) => (
							<div key={providerName} className="grid grid-cols-8 gap-1 w-full">
								<div className="col-span-1">
									{providerName === 'Netflix' && <Image src={netflixIcon} alt="Netflix" className="w-16 h-10 rounded-lg" />}
									{providerName === 'Foxtel Now' && <Image src={foxtelIcon} alt="Foxtel Now" className="w-16 h-10 rounded-lg" />}
									{providerName === 'Stan' && <Image src={stanIcon} alt="Stan" className="w-16 h-10 rounded-lg" />}
									{providerName === 'Amazon Prime Video' && <Image src={amazonPrimeIcon} alt="Stan" className="w-16 h-10 rounded-lg" />}
									{providerName === 'Apple TV' && <Image src={appleIcon} alt="Stan" className="w-16 h-10 rounded-lg" />}
									{providerName === 'BritBox' && <Image src={britboxIcon} alt="Stan" className="w-16 h-10 rounded-lg" />}
									{providerName === 'BINGE' && <Image src={bingeIcon} alt="Stan" className="w-16 h-10 rounded-lg" />}
								</div>
									<div className="flex flex-col w-full col-span-4 pl-2">
										<span className="text-main-text font-bold">{providerName}</span>
										{providerName === 'Netflix' && <span className="text-main-text">$16.99 per month</span>}
										{providerName === 'Foxtel Now' && <span className="text-main-text">$45.00 per month</span>}
										{providerName === 'Stan' && <span className="text-main-text">$16.00 per month</span>}
										{providerName === 'Amazon Prime Video' && <span className="text-main-text">$9.99 per month</span>}
										{providerName === 'Apple TV' && <span className="text-main-text">$12.99 per month</span>}
										{providerName === 'BritBox' && <span className="text-main-text">$9.99 per month</span>}
										{providerName === 'BINGE' && <span className="text-main-text">$10.00 per month</span>}
									</div>
									<span className="flex col-span-1 justify-center items-center text-main-text">-</span>
									<div className="flex w-full col-span-2 justify-center items-center">
										<span className="text-main-text">{count}</span>
										<span className="text-main-text">&nbsp;counts</span>
									</div>
							</div>
						))}
					</div>

				</div>
			</div>
		</div>
	);
};

export default Home;
