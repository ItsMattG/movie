import React from 'react';
import Image from 'next/image'
import Logo from '../public/S.png';

export default function LandingPage() {
  return (
    <div>
			<header className="absolute w-full">
				<nav className="container flex items-center justify-between px-8 py-4 mx-auto" aria-label="Global">
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
      <section className="min-h-screen bg-background-primary mx-auto py-8 lg:pb-24 lg:pt-28 text-black flex items-center justify-center">
				<div className="max-w-5xl px-8 flex flex-col gap-10 lg:gap-12 items-center justify-center text-center">
					<div className="flex flex-col gap-8 items-center">
						<h1 className="lg:backdrop:-mb-4 group text-6xl font-extrabold">
							Discover where your<br />
							<span className="">
								favourite&nbsp;
							</span>
							<span className="border-b-8 border-dashed border-primary/50 whitespace-nowrap duration-200 group-hover:border-accent">
								shows and movies<br />
							</span>
							&nbsp;are streaming
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
        {/* Content for section 2 */}
      </section>
      <section className="min-h-screen bg-background-primary">
        {/* Content for section 3 */}
      </section>
      <section className="min-h-screen bg-background-secondary">
        {/* Content for section 4 */}
      </section>
      <section className="min-h-screen bg-background-primary">
        {/* Content for section 5 */}
      </section>
      <section className="min-h-screen bg-background-secondary">
        {/* Content for section 6 */}
      </section>
      <section className="min-h-screen bg-background-primary">
        {/* Content for section 7 */}
      </section>
      <section className="min-h-screen bg-background-secondary">
        {/* Content for section 8 */}
      </section>
			<footer className="h-[42vh] bg-background-tertiary">
        {/* Content for footer */}
      </footer>
    </div>
  );
}