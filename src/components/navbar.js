import React from 'react'

const Navbar = () => (
	<nav className="navbar is-transparent is-fixed-top">
		<div className="navbar-brand">
			<a data-view="#home" className="navbar-item logo" href="/"  data-aos="fade-left">
				<b>Vincent Laroye</b>
			</a>
			<div className="navbar-burger burger ">
				<span></span><span></span><span></span>
			</div>
		</div>
		<div className="navbar-menu ">
			<div className="navbar-end">
				<div data-aos="fade-left" className="navbar-item">
					<a data-view="#about" className="navbar-item" href="#about">Présentation</a>
				</div>
				<div data-aos="fade-left" className="navbar-item">
					<a data-view="#skills" className="navbar-item" href="#skills">Compétences</a>
				</div>
				<div data-aos="fade-left" className="navbar-item">
					<a data-view="#portfolio" className="navbar-item" href="#portfolio">Portfolio</a>
				</div>
				<div data-aos="fade-left" className="navbar-item">
					<a data-view="#contact" className="navbar-item" href="#contact">Contact</a>
				</div>
				<div data-aos="fade-up" className="navbar-item is-hidden">
					<button className="button is-primary" data-view="#contact">
						<span>Say hello
							<span role="img" aria-label="emoji">👋</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	</nav>
)

export default Navbar
