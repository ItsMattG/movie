"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import Logo from '../public/S.png';

export default function LandingPage() {
	const [expanded, setExpanded] = useState<number>(1);
console.log('expanded', expanded)
  return (
    <div>
			<header className="absolute w-full">
				<nav className="container flex items-center justify-between px-8 pb-4 pt-6 mx-auto" aria-label="Global">
					<div className="flex lg:flex-1">
						<a className="flex items-center gap-2 shrink-0 " title="Stream Data hompage" href="/">
							<Image src={Logo} alt="Stream Data logo" width={32} height={32} decoding="async" data-nimg="1" className="w-8" />
							<span className="font-extrabold text-lg text-main-text">Stream Data</span>
						</a>
					</div>
					<div className="lg:flex lg:justify-center lg:gap-12 lg:items-center">
						<a className="link link-hover text-main-text" title="Pricing" href="/#pricing">Pricing</a>
						<a className="link link-hover text-main-text" title="FAQ" href="/#faq">FAQ</a>
					</div>
					<div className="lg:flex lg:justify-end lg:flex-1">
						<button className="px-4 py-2 bg-button-color text-button-text text-lg font-bold rounded-lg hover:bg-button-color/50">Get Started</button>
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
					<ul className="hidden md:block text-base-content-secondary leading-relaxed space-y-1.5">
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
						<a href="#pricing" className="btn bg-button-color btn-wide group text-button-text hover:bg-button-color/50">
							Get Stream Data
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 fill-primary-content group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
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
				<div className="px-8 py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto">
					<div className="mb-16 md:mb-32 space-y-8 md:space-y-10">
							<h2 className="md:text-center max-w-4xl md:mx-auto text-main-text text-5xl font-black">Discover the perfect entertainment destination today,<span className="bg-button-text text-background-tertiary px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">not tomorrow</span></h2>
							<p className="max-w-2xl mx-auto text-lg md:text-center text-secondary-text leading-relaxed">Our intuitive tool provides instant insights into your favourite shows and movies, helping you find the best streaming platforms effortlessly.</p>
					</div>
					<div className=" flex flex-col md:flex-row gap-12 md:gap-24">
						<div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
							<ul className="w-full">
									<li>
										<button onClick={() => setExpanded(1)} className="group relative flex gap-5 items-center w-full py-5 text-base font-medium text-left md:text-lg" aria-expanded="false">
												<span className={`scale-150 duration-100 ${expanded === 1 ? 'text-primary' : ''}`}>📁</span>
												<span className="group-hover:translate-x-1 duration-150 flex-1 text-base-content">
													<h3 className={`inline ${expanded === 1 ? 'text-button-color' : 'text-main-text'} text-2xl font-bold`}>Upload Your Viewing Data</h3>
												</span>
												<span className="ml-auto">
													<svg className={`flex-shrink-0 w-[14px] h-[14px] ml-auto fill-base-content-secondary ${expanded === 1 ? 'hidden' : ''}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
															<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
															<rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
													</svg>
												</span>
										</button>
										<div className="transition-all duration-5000 ease-in-out text-base-content-secondary overflow-hidden" style={{ opacity: expanded === 1 ? 1 : 0, maxHeight: expanded === 1 ? '110px' : '0px' }}>
											<div className="pb-5 leading-relaxed text-secondary-text">Take the first step towards optimising your streaming experience by uploading your Netflix and Prime watch history. Our intuitive process ensures that you can share your data with ease.</div>
										</div>
									</li>
									<li>
										<button onClick={() => setExpanded(2)} className="group relative flex gap-5 items-center w-full py-5 text-base font-medium text-left md:text-lg" aria-expanded="false">
												<span className={`scale-150 duration-100 ${expanded === 2 ? 'text-primary' : ''}`}>🔍</span>
												<span className="group-hover:translate-x-1 duration-150 flex-1 text-base-content">
													<h3 className={`inline ${expanded === 2 ? 'text-button-color' : 'text-main-text'} text-2xl font-bold`}>Analyse Your Viewing Habits</h3>
												</span>
												<span className="ml-auto">
													<svg className={`flex-shrink-0 w-[14px] h-[14px] ml-auto fill-base-content-secondary ${expanded === 2 ? 'hidden' : ''}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
															<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
															<rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
													</svg>
												</span>
										</button>
										<div className="transition-all duration-5000 ease-in-out text-base-content-secondary overflow-hidden" style={{ opacity: expanded === 2 ? 1 : 0, maxHeight: expanded === 2 ? '110px' : '0px' }}>
											<div className="pb-5 leading-relaxed text-secondary-text">Sit back and let our tool analyze your viewing habits. From identifying where your favorite shows are available to uncovering new streaming options, we provide comprehensive insights to empower your entertainment decisions.</div>
										</div>
									</li>
									<li>
										<button onClick={() => setExpanded(3)} className="group relative flex gap-5 items-center w-full py-5 text-base font-medium text-left md:text-lg" aria-expanded="true">
												<span className={`scale-150 duration-100 ${expanded === 3 ? 'text-primary' : ''}`}>🎬</span>
												<span className="group-hover:translate-x-1 duration-150 flex-1 text-base-content">
													<h3 className={`inline ${expanded === 3 ? 'text-button-color' : 'text-main-text'} text-2xl font-bold`}>Discover Your Perfect Streaming Fit</h3>
												</span>
												<span className="ml-auto">
													<svg className={`flex-shrink-0 w-[14px] h-[14px] ml-auto fill-base-content-secondary ${expanded === 3 ? 'hidden' : ''}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
														<rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
														<rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
													</svg>
												</span>
										</button>
										<div className="transition-all duration-5000 ease-in-out text-base-content-secondary overflow-hidden" style={{ opacity: expanded === 3 ? 1 : 0, maxHeight: expanded === 3 ? '110px' : '0px' }}>
											<div className="pb-5 leading-relaxed text-secondary-text">Armed with insights, uncover the ideal streaming platform tailored to your preferences. Whether finding the platform with the most extensive library for your favorite shows or discovering new options based on your viewing history, we help you navigate effortlessly.</div>
										</div>
									</li>
							</ul>
							{expanded === 1 &&
								<video className="rounded-box aspect-square w-full sm:w-[26rem] sm:-m-2 sm:p-2 border-2 border-primary/10 bg-base-200" autoPlay={true} loop={true} playsInline={true} muted={true} width="500" height="500">
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
      <section className="min-h-screen bg-background-secondary">
        {/* Pricing */}
      </section>
      <section className="min-h-screen bg-background-primary">
        {/* FAQ */}
      </section>
			<footer className="h-[42vh] bg-background-tertiary">
        {/* Content for footer */}
      </footer>
    </div>
  );
}