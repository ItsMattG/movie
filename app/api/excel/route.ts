import path from 'path';
import fs from 'fs';
import csvParser from 'csv-parser';

export async function GET(request: Request): Promise<Response> {
  try {
    // Get the absolute path to the CSV file
    const csvFilePath = path.resolve('public/NetflixViewingHistory.csv');

    // Read the CSV file using csv-parser
    const data: any[] = [];
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csvParser())
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
