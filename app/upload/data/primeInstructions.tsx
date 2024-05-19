const primeInstructions: string = `
	// Function to parse the watch history
	const parseWatchHistory = () => {
			// Initialize an empty array to store the watch history
			const watchHistoryArray = [];
			// Select all list items within the watch history
			const watchHistoryItems = document.querySelectorAll('div[data-automation-id=activity-history-items] > ul > li');

			watchHistoryItems.forEach(item => {
					const itemDetails = item.querySelector('ul > li');

					// Extract information and store in the array
					const dateWatched = item.querySelector('[data-automation-id^="wh-date"]').textContent;
					const title = itemDetails.querySelector('img').alt;

					watchHistoryArray.push([
						\`\${title}\`,
							dateWatched,
					]);
			});

			// Log the parsed watch history array
			console.log("Watch history parsed successfully:", watchHistoryArray);

			return watchHistoryArray;
	};

	// Function to scroll to the bottom of the page
	const scrollToBottom = () => {
			window.scrollTo(0, document.body.scrollHeight);
	};

	// Recursive function to force lazy loading of watch history
	const forceLoadWatchHistory = (previousScrollHeight, attempts) => {
			// Scroll to the bottom of the page
			scrollToBottom();
			// Check if new content is loaded
			setTimeout(() => {
					const currentScrollHeight = document.body.scrollHeight;
					if (currentScrollHeight !== previousScrollHeight) {
							// New content loaded, scroll again
							forceLoadWatchHistory(currentScrollHeight, 0);
					} else {
							// No new content loaded
							if (attempts < 1) { // Limit number of attempts
									// Scroll again after a delay
									setTimeout(() => {
											forceLoadWatchHistory(currentScrollHeight, attempts + 1);
									}, 1000); // Adjust delay if needed
							} else {
									// Reached maximum number of attempts, execute parseWatchHistory
									console.log("Maximum attempts reached. Downloading watch history...");
									downloadCSV(parseWatchHistory());
							}
					}
			}, 1000); // Adjust delay if needed
	};

	// Function to download the watch history as a CSV file
	const downloadCSV = (inputArray) => {
			const csvContent = \`Title,Date\\n\${inputArray.map(([title, date]) => \`"\${title}","\${date}"\`).join('\\n')}\`;

			const blob = new Blob([csvContent], { type: 'text/csv' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'watch_history.csv';
			a.click();
			URL.revokeObjectURL(url);
			console.log("CSV file downloaded successfully.");
	};

	// Entry point
	forceLoadWatchHistory(0, 0);
`

export default primeInstructions;