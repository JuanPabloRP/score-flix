

const Footer = () => {
	return (
		<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{' '}
					<a
						href="https://github.com/JuanPabloRP"
						className="hover:underline"
						target="_blank"
					>
						JuanPabloRP™
					</a>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<a
							href="https://github.com/JuanPabloRP"
							className="mr-4 hover:underline md:mr-6"
							target="_blank"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/juan-pablo-rold%C3%A1n-pati%C3%B1o/"
							className="mr-4 hover:underline md:mr-6"
							target="_blank"
						>
							Linkedin
						</a>
					</li>
					<li>
						<a
							href="https://jprp-portfolio.vercel.app/"
							className="hover:underline"
							target="_blank"
						>
							Portfolio
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
