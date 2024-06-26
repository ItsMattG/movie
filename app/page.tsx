'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import netflixIcon from '../public/netflix.png';
import foxtelIcon from '../public/foxtel.png';
import stanIcon from '../public/stan.png';
import amazonPrimeIcon from '../public/amazon.jpg';
import appleIcon from '../public/apple.png';
import microsoftIcon from '../public/microsoft.png';
import telstraIcon from '../public/telstra.png';
import fetchIcon from '../public/fetch.jpg';
import amazonIcon from '../public/amazon.png';
import googleIcon from '../public/google.png';
import youtubeIcon from '../public/youtube.jpg';
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
				setProviderCounts(storedCounts);
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
					if (provider.provider_name === 'Amazon Prime Video'
						|| provider.provider_name === 'Apple TV'
						|| provider.provider_name === 'Amazon Video'
						|| provider.provider_name === 'Google Play Movies'
						|| provider.provider_name === 'Microsoft Store'
						|| provider.provider_name === 'YouTube'
						|| provider.provider_name === 'Telstra TV'
						|| provider.provider_name === 'Fetch TV'
						|| provider.provider_name === 'Stan'
						|| provider.provider_name === 'Foxtel Now'
						|| provider.provider_name === 'BINGE'
						|| provider.provider_name === 'Netflix'
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
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-4 text-orange-500">Streaming Platforms</h1>

			<div className="container mx-auto py-8">
				{highestProvider && (
					<div className="mb-8">
						<h1 className="text-2xl font-bold mb-2 text-orange-500">
							Streaming platform with the Highest Movie/TV Show Count:
						</h1>
						<p>
							{highestProvider} ({highestProviderCount})
						</p>
						<p className="font-bold text-orange-700">
							You should use this information to save $$$
						</p>
					</div>
				)}

				<h2 className="text-xl font-bold mb-4 text-orange-500">Providers</h2>

				{/* Provider List */}
				<div className="grid grid-cols-2 gap-4">
					{Object.entries(providerCounts).map(([providerName, count]) => (
						<div key={providerName} className="flex items-center">
							{providerName === 'Netflix' && <Image src={netflixIcon} alt="Netflix" className="w-12 h-12 mr-2" />}
							{providerName === 'Foxtel Now' && <Image src={foxtelIcon} alt="Foxtel Now" className="w-12 h-12 mr-2" />}
							{providerName === 'Stan' && <Image src={stanIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'Amazon Prime Video' && <Image src={amazonPrimeIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'Apple TV' && <Image src={appleIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'Microsoft Store' && <Image src={microsoftIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'Telstra TV' && <Image src={telstraIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'Fetch TV' && <Image src={fetchIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'Amazon Video' && <Image src={amazonIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'Google Play Movies' && <Image src={googleIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'YouTube' && <Image src={youtubeIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'BritBox' && <Image src={britboxIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							{providerName === 'BINGE' && <Image src={bingeIcon} alt="Stan" className="w-12 h-12 mr-2" />}
							<span>{providerName}</span>
							<span className="ml-2 text-gray-500">({count})</span>
						</div>
					))}
				</div>

			</div>

			{/* Movie List */}
			<div>
				<h2 className="text-xl font-bold mb-2 text-red-500">Movies</h2>
				<div className="grid grid-cols-2 gap-4">
					<div className="font-bold">Title</div>
					<div className="font-bold">Date</div>
					{movieData.map((item, index) => (
						<React.Fragment key={index}>
							<div>{item.Title}</div>
							<div>{item.Date}</div>
						</React.Fragment>
					))}
				</div>
			</div>

			{/* TV Show List */}
			<div>
				<h2 className="text-xl font-bold mb-2 pt-4 text-red-500">TV Shows</h2>
				<div className="grid grid-cols-2 gap-4">
					<div className="font-bold">Title</div>
					<div className="font-bold">Date</div>
					{tvShowData.map((item, index) => (
						<React.Fragment key={index}>
							<div>{item.Title}</div>
							<div>{item.Date}</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
