import { images } from '../../assets';

export const Header = () => {
	return (
		<header id="header">
			<div className="container d-flex">
				<div className="logo mr-auto">
					<h1 className="text-light">
						<a href="/">
							<img src={images.whiteLogo} alt="" /> ShinyDexTracker
						</a>
					</h1>
				</div>

				<nav className="nav-menu d-none d-lg-block ">
					<ul>
						<li className="active">
							<a href="/">
								<i className="fas fa-home"></i> Home
							</a>
						</li>
						<li>
							<a href="/#about">
								<i className="fab fa-ethereum"></i> About Us
							</a>
						</li>
						<li>
							<a href="/#recentShinies">
								<i className="fas fa-star"></i> Recent Shinies
							</a>
						</li>
						<li>
							<a href="/#socials">
								<i className="fas fa-comment"></i> Socials
							</a>
						</li>
						if(isLoged === true)
						{
							<li>
								<a href="/profile/<%= userName %>">
									<i className="fas fa-user-circle"></i> Profile
								</a>
							</li>
						}
						<li className="drop-down">
							<a href="">
								<i className="fas fa-tools"></i> Tools
							</a>
							<ul>
								<li>
									<a href="counter">
										<i className="fas fa-calculator"></i> Counter
									</a>
								</li>
								<li>
									<a href="faq">
										<i className="fas fa-question-circle"></i> F.A.Q
									</a>
								</li>
								<li>
									<a href="https://shinybot.dev/">
										<i className="fas fa-robot"></i> ShinyBot
									</a>
								</li>
							</ul>
							if(isLoged === false)
							{
								<li>
									<a href="login">
										<i className="fas fa-sign-in-alt"></i> Login
									</a>
								</li>
							}
							else
							{
								<li>
									<a href="logout">
										<i className="fas fa-sign-in-alt"></i> Logout
									</a>
								</li>
							}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
