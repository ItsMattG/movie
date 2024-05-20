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
					<div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
						<a className="link link-hover text-main-text" title="Pricing" href="/#pricing">Pricing</a>
						<a className="link link-hover text-main-text" title="FAQ" href="/#faq">FAQ</a>
					</div>
					<div className="hidden lg:flex lg:justify-end lg:flex-1">
						<button className="px-4 py-2 bg-button-color text-button-text text-lg font-bold rounded-lg hover:bg-button-color-tertiary-lighter">Get Started</button>
					</div>
				</nav>
			</header>
      <section className="min-h-screen bg-background-primary">
        {/* Content for section 1 */}
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