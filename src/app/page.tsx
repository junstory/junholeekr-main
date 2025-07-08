// src/app/page.tsx

import Image from "next/image";

export default function HomePage() {
	return (
		<div className="bg-slate-50 dark:bg-slate-900">
			{/* 1. Header Section */}
			<header className="bg-white dark:bg-slate-800 shadow-md">
				<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
					<div className="text-2xl font-bold text-sky-500">MyPortfolio</div>
					<div className="flex space-x-4">
						<a
							href="/"
							className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
						>
							Home
						</a>
						<a
							href="/"
							className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
						>
							Projects
						</a>
						<a
							href="/"
							className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400"
						>
							Contact
						</a>
					</div>
				</nav>
			</header>

			{/* 2. Main Content */}
			<main className="container mx-auto px-6 py-12">
				{/* Hero Section with Flexbox */}
				<section className="flex flex-col md:flex-row items-center gap-12">
					<div className="md:w-1/2 text-center md:text-left">
						<h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
							안녕하세요,
							<span className="text-sky-500"> 이준호</span>입니다.
						</h1>
						<p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
							최적의 기술을 고민하는 백엔드 개발자입니다. 안정적인 서버 운영에 관심이 많습니다.
						</p>
						<button
              type= "button"
							className="mt-8 px-8 py-3 bg-sky-500 text-white font-bold rounded-full
                         hover:bg-sky-600 transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
						>
							프로젝트 보기
						</button>
					</div>
					<div className="md:w-1/2 flex justify-center">
						<Image
							src="/profile.jpeg"
							alt="프로필 이미지"
							width={300}
							height={300}
							className="rounded-full shadow-lg"
							priority
						/>
					</div>
				</section>

				{/* Projects Section with Grid */}
				<section className="mt-24">
					<h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">
						주요 프로젝트
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Card 1 */}
						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
							<div className="p-8">
								<div className="uppercase tracking-wide text-sm text-sky-500 font-semibold">
									기술 블로그
								</div>
								<p className="mt-4 text-slate-600 dark:text-slate-400">
									Next.js와 SSG를 활용하여 제작한 SEO에 최적화된 블로그입니다.
								</p>
							</div>
						</div>
						{/* Card 2 */}
						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
							<div className="p-8">
								<div className="uppercase tracking-wide text-sm text-sky-500 font-semibold">
									URL 단축기
								</div>
								<p className="mt-4 text-slate-600 dark:text-slate-400">
									준비중...
									{/* Spring Boot 기반의 안정적인 REST API 서비스입니다. (예정) */}
								</p>
							</div>
						</div>
						{/* Card 3 */}
						<div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
							<div className="p-8">
								<div className="uppercase tracking-wide text-sm text-sky-500 font-semibold">
									실시간 채팅
								</div>
								<p className="mt-4 text-slate-600 dark:text-slate-400">
									준비중...
									{/* Node.js와 WebSocket을 사용한 실시간 통신 프로젝트입니다.
									(예정) */}
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
