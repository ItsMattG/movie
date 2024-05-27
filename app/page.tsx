"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import Logo from '../public/S.png';

export default function LandingPage() {
	const [expanded, setExpanded] = useState<number>(1);
	const [expandedFAQ, setExpandedFAQ] = useState<number>(0);

	const handleFAQClick = (num: number) => {
		if (expandedFAQ === num) {
			setExpandedFAQ(0);
		} else {
			setExpandedFAQ(num);
		}
	};

	const handlePricingScroll = (event: React.MouseEvent<HTMLAnchorElement>, padding: number) => {
		event.preventDefault();
		const pricingElement = document.getElementById('pricing');
		if (pricingElement) {
			console.log('Scrolling to pricing element...');
			pricingElement.scrollIntoView({ behavior: 'smooth' });
			setTimeout(() => {
				console.log('Adjusting scroll position...');
				window.scrollBy(0, +padding);
				console.log('Adjusted scroll position');
			}, 500); // Adjust this delay as needed
		}
	};

	const handleFAQScroll = (event: React.MouseEvent<HTMLAnchorElement>, padding: number) => {
		event.preventDefault();
		const pricingElement = document.getElementById('faq');
		if (pricingElement) {
			console.log('Scrolling to pricing element...');
			pricingElement.scrollIntoView({ behavior: 'smooth' });
			setTimeout(() => {
				console.log('Adjusting scroll position...');
				window.scrollBy(0, +padding);
				console.log('Adjusted scroll position');
			}, 500); // Adjust this delay as needed
		}
	};

	return (
		<div>
			<header className="absolute w-full">
				<nav className="container flex items-center justify-between px-8 pb-4 pt-6 mx-auto" aria-label="Global">
					<div className="flex lg:flex-1">
						<a className="flex items-center gap-2 shrink-0 " title="WatchWise hompage" href="/">
							<span className="text-2xl">📺</span>
							<span className="font-extrabold text-lg text-main-text">WatchWise</span>
						</a>
					</div>
					<div className="lg:flex lg:justify-center lg:gap-12 lg:items-center">
						<a className="link link-hover text-main-text" title="Pricing" onClick={(event) => handlePricingScroll(event, 575)}>Pricing</a>
						<a className="link link-hover text-main-text" title="FAQ" onClick={(event) => handleFAQScroll(event, 640)}>FAQ</a>
					</div>
					<div className="lg:flex lg:justify-end lg:flex-1">
						<button className="px-4 py-4 bg-button-color text-button-text text-sm font-semibold rounded-lg hover:bg-button-color/85 rounded-[66px]">Get Started</button>
					</div>
				</nav>
			</header>
			<section className="min-h-screen bg-background-primary mx-auto py-8 lg:pb-8 lg:pt-20 text-black flex items-center justify-center">
				<div className="max-w-5xl px-8 flex flex-col gap-10 lg:gap-9 items-center justify-center text-center">
					<div className="flex flex-col gap-4 items-center">
						<h1 className="lg:backdrop:-mb-4 group text-6xl font-extrabold leading-[1.3em]">
							<span className="">
								Discover where your<br />
							</span>
							<span className="">
								favourite&nbsp;
							</span>
							<span className="border-b-8 border-dashed border-primary/50 whitespace-nowrap duration-200 group-hover:border-accent">
								shows and movies<br />
							</span>
							<span className="">
								&nbsp;are streaming
							</span>
						</h1>
					</div>
					<p className="text-lg paragraph max-w-xl">Upload your Netflix and Prime watch history, and our tool will analyse your viewing habits. Discover which platform hosts the most content and find new options for your favourite shows and movies.</p>
					<ul className="hidden md:block text-main-text-secondary leading-relaxed space-y-1.5">
							<li className="flex items-center justify-center lg:justify-start gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] text-accent">
										<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
								</svg>
								Easy upload of Netflix and Prime watch history
							</li>
							<li className="flex items-center justify-center lg:justify-start gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] text-accent">
										<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
								</svg>
								Comprehensive analysis across multiple streaming platforms
							</li>
							<li className="flex items-center justify-center lg:justify-start gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] text-accent">
										<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
								</svg>
								<div className="relative">
										<p>Find the most popular streaming provider for your content</p>
								</div>
							</li>
					</ul>
						<a href="#pricing" className="btn bg-button-color btn-wide group text-button-text hover:bg-button-color/85 rounded-[33px] border-none">
							Get WatchWise
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 fill-button-text group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
								<path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd"></path>
							</svg>
						</a>
				</div>
			</section>
			<section className="min-h-screen bg-background-secondary">
				<div className="max-w-7xl mx-auto px-8 py-16 md:py-40 text-center">
					<h2 className="font-extrabold mb-6 md:mb-8 text-5xl text-button-color-secondary">88% of people can downsize and save</h2>
					<p className="max-w-xl mx-auto text-lg opacity-80 leading-relaxed mb-12 md:mb-20 text-button-color-secondary">Save money and simplify your subscriptions: Most of your favorite shows and movies can be found on fewer streaming services. Switch now and start saving!</p>
					<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
							<div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
								<span className="text-4xl">🫤</span>
								<p className="font-bold text-button-color-secondary">User seeks streaming options</p>
							</div>
							<svg className="shrink-0 w-12 fill-neutral-content opacity-70 max-md:-scale-x-100 md:-rotate-90" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"></path>
								</g>
							</svg>
							<div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
								<span className="text-4xl">🤔</span>
								<p className="font-bold text-button-color-secondary">Finds comprehensive <u>analysis tool</u></p>
							</div>
							<svg className="shrink-0 w-12 fill-neutral-content opacity-70 md:-scale-x-100 md:-rotate-90" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"></path>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"></path>
								</g>
							</svg>
							<div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
								<span className="text-4xl">🤗</span>
								<p className="font-bold text-button-color-secondary">Makes informed viewing choices</p>
							</div>
					</div>
				</div>
			</section>
			<section className="min-h-screen bg-background-primary">
				<div className="max-w-7xl mx-auto px-8 py-16 md:py-40 text-center">
					<div className="mb-16 md:mb-32 space-y-8 md:space-y-10">
							<h2 className="md:text-center max-w-4xl md:mx-auto text-main-text text-5xl font-black">Discover the perfect entertainment destination today,<span className="bg-button-text text-background-tertiary px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">not tomorrow</span></h2>
							<p className="max-w-2xl mx-auto text-lg md:text-center text-secondary-text leading-relaxed">Our intuitive tool provides instant insights into your favourite shows and movies, helping you find the best streaming platforms effortlessly.</p>
					</div>
					<div className=" flex flex-col md:flex-row gap-12 md:gap-24">
						<div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
							<ul className="w-full">
									<li>
										<button onClick={() => setExpanded(1)} className="group relative flex gap-5 items-center w-full py-5 text-main-text font-medium text-left md:text-lg" aria-expanded="false">
												<span className={`scale-150 duration-100 ${expanded === 1 ? 'text-primary' : ''}`}>📁</span>
												<span className="group-hover:translate-x-1 duration-150 flex-1 text-main-text">
													<h3 className={`inline ${expanded === 1 ? 'text-button-color' : 'text-main-text'} text-2xl font-bold`}>Upload Your Viewing Data</h3>
												</span>
												<span className="ml-auto">
													<svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
														<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
														<rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expanded === 1 ? 'rotate-0' : 'rotate-90'}`}></rect>
													</svg>
												</span>
										</button>
										<div className="transition-all duration-5000 ease-in-out text-main-text-secondary overflow-hidden" style={{ opacity: expanded === 1 ? 1 : 0, maxHeight: expanded === 1 ? '110px' : '0px' }}>
											<div className="pb-5 leading-relaxed text-secondary-text">Take the first step towards optimising your streaming experience by uploading your Netflix and Prime watch history. Our intuitive process ensures that you can share your data with ease.</div>
										</div>
									</li>
									<li>
										<button onClick={() => setExpanded(2)} className="group relative flex gap-5 items-center w-full py-5 text-main-text font-medium text-left md:text-lg" aria-expanded="false">
												<span className={`scale-150 duration-100 ${expanded === 2 ? 'text-primary' : ''}`}>🔍</span>
												<span className="group-hover:translate-x-1 duration-150 flex-1 text-main-text">
													<h3 className={`inline ${expanded === 2 ? 'text-button-color' : 'text-main-text'} text-2xl font-bold`}>Analyse Your Viewing Habits</h3>
												</span>
												<span className="ml-auto">
													<svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
														<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
														<rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expanded === 2 ? 'rotate-0' : 'rotate-90'}`}></rect>
													</svg>
												</span>
										</button>
										<div className="transition-all duration-5000 ease-in-out text-main-text-secondary overflow-hidden" style={{ opacity: expanded === 2 ? 1 : 0, maxHeight: expanded === 2 ? '110px' : '0px' }}>
											<div className="pb-5 leading-relaxed text-secondary-text">Sit back and let our tool analyze your viewing habits. From identifying where your favorite shows are available to uncovering new streaming options, we provide comprehensive insights to empower your entertainment decisions.</div>
										</div>
									</li>
									<li>
										<button onClick={() => setExpanded(3)} className="group relative flex gap-5 items-center w-full py-5 text-main-text font-medium text-left md:text-lg" aria-expanded="true">
												<span className={`scale-150 duration-100 ${expanded === 3 ? 'text-primary' : ''}`}>🎬</span>
												<span className="group-hover:translate-x-1 duration-150 flex-1 text-main-text">
													<h3 className={`inline ${expanded === 3 ? 'text-button-color' : 'text-main-text'} text-2xl font-bold`}>Discover Your Perfect Streaming Fit</h3>
												</span>
												<span className="ml-auto">
													<svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
														<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
														<rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expanded === 3 ? 'rotate-0' : 'rotate-90'}`}></rect>
													</svg>
												</span>
										</button>
										<div className="transition-all duration-5000 ease-in-out text-main-text-secondary overflow-hidden" style={{ opacity: expanded === 3 ? 1 : 0, maxHeight: expanded === 3 ? '110px' : '0px' }}>
											<div className="pb-5 leading-relaxed text-secondary-text">Armed with insights, uncover the ideal streaming platform tailored to your preferences. Whether finding the platform with the most extensive library for your favorite shows or discovering new options based on your viewing history, we help you navigate effortlessly.</div>
										</div>
									</li>
							</ul>
							{expanded === 1 &&
								<video className="rounded-box aspect-square w-full sm:w-[26rem] sm:-m-2 sm:p-2 border-2 border-background-secondary bg-background-primary" autoPlay={true} loop={true} playsInline={true} muted={true} width="500" height="500">
									<source src="/Save.mp4" type="video/mp4" />
								</video>
							}
							{expanded === 2 &&
								<Image alt="Placeholder" loading="lazy" width={500} height={500} decoding="async" data-nimg="1" className="rounded-box aspect-square w-full sm:w-[26rem] sm:-m-2 sm:p-2 border-2 border-background-secondary bg-background-primary object-contain object-center" src="/image.png" style={{ color: 'transparent' }} />
							}
							{expanded === 3 &&
								<Image alt="Placeholder" loading="lazy" width={500} height={500} decoding="async" data-nimg="1" className="rounded-box aspect-square w-full sm:w-[26rem] sm:-m-2 sm:p-2 border-2 border-background-secondary bg-background-primary object-contain object-center" src="/save.png" style={{ color: 'transparent' }} />
							}
						</div>
					</div>
				</div>
			</section>
			<section className="min-h-screen bg-background-fourthly overflow-hidden" id="pricing">
				<div className="py-24 px-8 max-w-5xl mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
							<p className="font-medium text-green-text mb-8">Pricing</p>
							<h2 className="font-black text-5xl text-main-text tracking-tight">Maximise your streaming for less</h2>
					</div>
					<div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
							<div className="relative w-full max-w-lg">
								<div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-background-primary p-8 rounded-box">
										<div className="flex justify-between items-center gap-4">
											<div>
													<p className="text-lg lg:text-xl font-bold text-main-text">Appetizer</p>
													<p className="text-main-second-text mt-2">Start with a taste of WatchWise</p>
											</div>
										</div>
										<div className="flex gap-2">
											<div className="flex flex-col justify-end mb-[4px] text-lg ">
													<p className="relative">
														<span className="absolute bg-main-text h-[1.5px] inset-x-0 top-[53%]"></span>
														<span className="text-main-second-text">
																$2
														</span>
													</p>
											</div>
											<p className="text-5xl tracking-tight font-extrabold text-main-text">
													$1
											</p>
											<div className="flex flex-col justify-end mb-[4px]">
													<p className="text-xs text-main-third-text uppercase font-semibold">aud</p>
											</div>
										</div>
										<ul className="space-y-2.5 leading-relaxed text-main-text flex-1">
											<li className="flex items-center gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
														<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
													</svg>
													<span>
														Unlimited WatchWise
													</span>
											</li>
											<li className="flex items-center gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
														<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
													</svg>
													<span>
														12 month assessment
													</span>
											</li>
											<li className="flex items-center gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
														<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
													</svg>
													<span>
														Simple analytics
													</span>
											</li>
										</ul>
										<div className="space-y-2">
											<button className="btn bg-button-color text-button-color-tertiary btn-block group rounded-[33px] border-none hover:bg-button-color/85">
													Get WatchWise
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 fill-button-text group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
														<path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd"></path>
													</svg>
											</button>
											<p className="flex items-center justify-center gap-2 text-sm text-center text-main-second-text font-medium relative">Pay once. Access forever.</p>
										</div>
								</div>
							</div>
							<div className="relative w-full max-w-lg">
								<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"><span className="badge text-xs text-button-text font-semibold border-0 bg-button-color text-button-color-tertiary">POPULAR</span></div>
								<div className="absolute -inset-[1.5px] rounded-[33px] bg-button-color z-10"></div>
								<div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-background-primary p-8 rounded-[33px]">
										<div className="flex justify-between items-center gap-4">
											<div>
													<p className="text-lg lg:text-xl font-bold text-main-text">Main Course</p>
													<p className="text-main-second-text mt-2">Assess your lifetime watch history, let's go!</p>
											</div>
										</div>
										<div className="flex gap-2">
											<div className="flex flex-col justify-end mb-[4px] text-lg ">
													<p className="relative">
														<span className="absolute bg-main-text h-[1.5px] inset-x-0 top-[53%]"></span>
														<span className="text-main-second-text">
																$10
														</span>
													</p>
											</div>
											<p className="text-5xl tracking-tight font-extrabold text-main-text">
													$5
											</p>
											<div className="flex flex-col justify-end mb-[4px]">
													<p className="text-xs text-main-third-text uppercase font-semibold">aud</p>
											</div>
										</div>
										<ul className="space-y-2.5 leading-relaxed text-main-text flex-1">
											<li className="flex items-center gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
														<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
													</svg>
													<span>
														Unlimited WatchWise
													</span>
											</li>
											<li className="flex items-center gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
														<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
													</svg>
													<span>
														<span className="bg-accent/20 px-1">Lifetime</span> watch history
													</span>
											</li>
											<li className="flex items-center gap-2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px] opacity-80 shrink-0">
														<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
													</svg>
													<span>
														Simple analytics
													</span>
											</li>
										</ul>
										<div className="space-y-2">
											<button className="btn bg-button-color text-button-color-tertiary btn-block group rounded-[33px] border-none hover:bg-button-color/85">
													Get WatchWise
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 fill-button-text group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
														<path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd"></path>
													</svg>
											</button>
											<p className="flex items-center justify-center gap-2 text-sm text-center text-main-second-text font-medium relative">Pay once. Access forever.</p>
										</div>
								</div>
							</div>
					</div>
					<div className="text-center text-xs text-secondary-text mt-8">*With great power comes great responsibility. Use WatchWise responsibly.</div>
				</div>
			</section>
			<section className="bg-background-primary" style={{ minHeight: '80vh' }} id="faq">
				<div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
					<div className="flex flex-col text-left basis-1/2">
						<p className="inline-block font-semibold text-green-text mb-4">FAQ</p>
						<p className="sm:text-4xl text-3xl font-extrabold text-main-text">Frequently Asked Questions</p>
					</div>
					<ul className="basis-1/2">
						<li>
							<button onClick={() => handleFAQClick(1)} className="relative flex gap-2 items-center w-full py-5 text-main-text font-semibold text-left border-t md:text-lg border-main-text/10" aria-expanded="false">
								<span className={`flex-1 ${expandedFAQ === 1 ? 'text-green-text' : 'text-main-text'}`}>Is it a subscription?</span>
								<svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
									<rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expandedFAQ === 1 ? 'rotate-0' : 'rotate-90'}`}></rect>
								</svg>
							</button>
							<div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{ opacity: expandedFAQ === 1 ? 1 : 0, maxHeight: expandedFAQ === 1 ? '110px' : '0px' }}>
									<div className="pb-5 leading-relaxed">
										<div className="space-y-2 leading-relaxed text-main-text">Nope. You pay once and it's yours forever.</div>
									</div>
							</div>
						</li>
						<li>
							<button onClick={() => handleFAQClick(2)} className="relative flex gap-2 items-center w-full py-5 text-main-text font-semibold text-left border-t md:text-lg border-main-text/10" aria-expanded="false">
								<span className={`flex-1 ${expandedFAQ === 2 ? 'text-green-text' : 'text-main-text'}`}>What streaming services does WatchWise support?</span>
								<svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
									<rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expandedFAQ === 2 ? 'rotate-0' : 'rotate-90'}`}></rect>
								</svg>
							</button>
							<div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{ opacity: expandedFAQ === 2 ? 1 : 0, maxHeight: expandedFAQ === 2 ? '110px' : '0px' }}>
									<div className="pb-5 leading-relaxed">
										<div className="space-y-2 leading-relaxed text-main-text">
												At the moment WatchWise only supports Netflix & Amazon Prime as the other platforms do not provide the necessary data for us to analyse.
										</div>
									</div>
							</div>
						</li>
						<li>
							<button onClick={() => handleFAQClick(3)} className="relative flex gap-2 items-center w-full py-5 text-main-text font-semibold text-left border-t md:text-lg border-main-text/10" aria-expanded="false">
								<span className={`flex-1 ${expandedFAQ === 3 ? 'text-green-text' : 'text-main-text'}`}>Does WatchWise work on mobile?</span>
								<svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
									<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
									<rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expandedFAQ === 3 ? 'rotate-0' : 'rotate-90'}`}></rect>
								</svg>
							</button>
							<div className="transition-all duration-300 ease-in-out opacity-80 overflow-hidden" style={{ opacity: expandedFAQ === 3 ? 1 : 0, maxHeight: expandedFAQ === 3 ? '110px' : '0px' }}>
									<div className="pb-5 leading-relaxed">
										<div className="space-y-2 leading-relaxed text-main-text">Unfortunately, no, as WatchWise requires you to upload your watch history via excel spreadsheet.</div>
									</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className="min-h-screen bg-background-fourthly overflow-hidden flex justify-center items-center"  style={{ minHeight: '80vh' }}>
				<div className="px-8">
					<div className="max-w-3xl bg-background-primary mx-auto rounded-box">
							<div className="flex flex-col items-center p-12 md:p-16 text-center">
								<h2 className="text-3xl md:text-5xl mb-8 md:mb-12 text-main-text font-black">Unlock your streaming insights now</h2>
								<p className="text-lg text-secondary-text mb-12 md:mb-16">Upload your watch history and start discovering where to find your favorite content!</p>
								<a href="#pricing" className="btn bg-button-color btn-wide group text-button-text hover:bg-button-color/85 rounded-[33px] border-none">
										Get WatchWise
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 fill-primary-content group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
											<path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd"></path>
										</svg>
								</a>
							</div>
					</div>
				</div>
			</section>
			<footer className="bg-background-tertiary" style={{ minHeight: '30vh' }}>
				<div className="max-w-7xl mx-auto px-8 py-24">
					<div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
						<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
							<a aria-current="page" className="flex gap-2 justify-center md:justify-start items-center" href="/#">
								<span className="text-2xl">📺</span>
								<strong className="font-extrabold tracking-tight text-main-text md:text-lg">WatchWise</strong>
							</a>
							<p className="mt-3 text-sm text-main-text/80">Gain clarity and control over your streaming choices today!</p>
							<p className="mt-3 text-sm text-main-text/60">
									Copyright © 2024 - All rights reserved
							</p>
						</div>
						<div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center md:pl-24">
							<div className="lg:w-1/3 md:w-1/2 w-full px-4">
								<div className="footer-title font-semibold text-main-text tracking-widest text-sm md:text-left mb-3">LINKS</div>
								<div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
									<a className="link link-hover text-main-text">Login</a>
									<a className="link link-hover text-main-text" onClick={(event) => handlePricingScroll(event, -280)}>Pricing</a>
								</div>
							</div>
							<div className="lg:w-1/3 md:w-1/2 w-full px-4">
								<div className="footer-title font-semibold text-main-text tracking-widest text-sm md:text-left mb-3">LEGAL</div>
								<div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
									<a className="link link-hover text-main-text" href="/tos">Terms of services</a>
									<a className="link link-hover text-main-text" href="/privacy-policy">Privacy policy</a>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-12 md:mt-16 text-sm">
						<div className="flex flex-row justify-start items-center gap-4">
							<Image alt="Marc Lou" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="rounded-full w-8 aspect-square" style={{ color: 'transparent' }} src="/me.jpg" />
							<div className="text-left text-secondary-text leading-relaxed">
								Hola Amigos 👋 I'm <span className="text-main-text font-medium">Matt</span>, the creator of WatchWise.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}