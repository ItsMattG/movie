import type { Metadata } from "next";
import "./globals.css";
import { Recursive } from "next/font/google"

const roboto = Recursive({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900', '1000']
});

export const metadata: Metadata = {
	title: "WatchWise",
	description: "WatchWise Analysis is a web application that allows you to analyse your streaming service watch history data.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📺</text></svg>"></link>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
