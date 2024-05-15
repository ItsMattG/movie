import path from 'path';
import fs from 'fs';
import csvParser from 'csv-parser';

export async function POST(request: Request, csvFilePath: string): Promise<Response> {
	try {
		// Parse the request body to get primeData
		const { netflixData } = await request.json();
		console.log('asdasd')
		// Read the CSV file using csv-parser
		const data: any[] = [];
		await new Promise<void>((resolve, reject) => {
			require('stream').Readable.from(netflixData)
				.pipe(csvParser())
				.on('data', (row: any) => {
					console.log('row', row)
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
