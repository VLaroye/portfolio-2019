import React from 'react'

const Portfolio = () => (
	<section className="section" id="portfolio">
		<div className="container">
			<div className="columns">
				<div className="column" data-aos="fade-up">
					<h3 className="title has-text-centered" data-aos="zoom-in">Portfolio</h3>
				</div>
			</div>
			<div className="columns is-multiline is-mobile">
				<div className="column is-12-mobile is-half-tablet is-one-third-desktop">
					<div className="card">
						<div className="card-header">
							<h4 className="card-header-title">Projet 1</h4>
						</div>
						<div className="card-image">
							<figure class="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
							</figure>
						</div>
						<div className="card-content">
							<p>Project description</p>
							<div>
								<span class="tag is-success">VueJS</span>
								<span class="tag is-success">VueX</span>
							</div>
						</div>
						<div className="card-footer">
							<a className="card-footer-item" href="/">Preview</a>
							<a className="card-footer-item" href="/">Source code</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Portfolio
