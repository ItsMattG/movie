import type { Metadata } from "next";
import "./globals.css";
import { Recursive } from "next/font/google"

const roboto = Recursive({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900', '1000']
});

export const metadata: Metadata = {
	title: "Stream Data Analysis",
	description: "Stream Data Analysis is a web application that allows you to analyse your streaming service watch history data.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
