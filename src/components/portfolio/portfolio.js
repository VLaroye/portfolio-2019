import React from 'react'

import PortfolioItem from './partials/portfolio-item'

const Portfolio = () => (
	<section className="section" id="portfolio">
		<div className="container">
			<div className="columns">
				<div className="column" data-aos="fade-up">
					<h3 className="title has-text-centered" data-aos="zoom-in">Portfolio</h3>
				</div>
			</div>
			<div className="columns is-multiline is-mobile">
				<PortfolioItem title="Projet 1" description="Projet description 1" skills={[{ name: 'VueJS' }, { name: 'VueX' }]}/>
			</div>
		</div>
	</section>
)

export default Portfolio
