import path from 'path';
import fs from 'fs';
import csvParser from 'csv-parser';

export async function POST(request: Request, csvFilePath: string): Promise<Response> {
	try {
		// Parse the request body to get primeData
		const { primeData } = await request.json();

		// Read the CSV file using csv-parser with appropriate configuration
		const data: any[] = [];
		await new Promise<void>((resolve, reject) => {
			require('stream').Readable.from(primeData)
				.pipe(csvParser({
					mapHeaders: ({ header }) => header.trim(), // Trim whitespace from headers
					mapValues: ({ header, value }) => header === 'Title' ? value.trim() : value // Trim whitespace from values in the 'Title' column
				}))
				.on('data', (row: any) => {
					data.push(row);
				})
				.on('end', () => {
					resolve();
				})
				.on('error', (error: Error) => {
					reject(error);
				});
		});

		// Return the data as JSON response
		return new Response(JSON.stringify(data), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error reading CSV file:', error);
		// Return an internal server error response
		return new Response('Internal server error', { status: 500 });
	}
}
