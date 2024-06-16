import ThemeSwitcher from "../theme/ThemeSwitcher";

function Home() {
	return (
		<main>
			<div className="mx-auto max-w-6xl py-36">
				<h1 className="text-center text-6xl font-bold">
					Comprehensive ReactJS Template - Best Practices & Advanced
					Technologies
				</h1>
				<ThemeSwitcher />
				{/* <p className="mt-4 text-center text-4xl">
					Kickstart your project with our cutting-edge ReactJS template.
				</p> */}
			</div>
		</main>
	);
}

export default Home;
