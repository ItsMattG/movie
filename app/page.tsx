import React from 'react';
import Image from 'next/image'
import Logo from '../public/S.png';

export default function LandingPage() {
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
      <section className="min-h-screen bg-background-primary mx-auto py-8 lg:pb-16 lg:pt-20 text-black flex items-center justify-center">
				<div className="max-w-5xl px-8 flex flex-col gap-10 lg:gap-12 items-center justify-center text-center">
					<div className="flex flex-col gap-8 items-center">
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