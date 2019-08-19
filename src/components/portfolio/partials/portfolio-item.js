import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ title, description, previewLink, sourceCodeLink, skills }) => (
	<div className="column is-12-mobile is-half-tablet is-one-third-desktop">
		<div className="card">
			<div className="card-header">
				<h4 className="card-header-title">{ title }</h4>
			</div>
			<div className="card-image">
				<figure className="image is-4by3">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
				</figure>
			</div>
			<div className="card-content">
				<p>{ description }</p>
				<div>
					{
						skills ?
							skills.map(skill => {
								return (<span className="tag is-success" key={skill.name}>{ skill.name }</span>)
							})
						: null
					}
				</div>
			</div>
			<div className="card-footer">
				{ previewLink ? <a className="card-footer-item" href="/">Preview</a> : null }
				{ sourceCodeLink ? <a className="card-footer-item" href="/">Source code</a> : null }
			</div>
		</div>
	</div>
)

PortfolioItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	previewLink: PropTypes.string,
	sourceCodeLink: PropTypes.string,
	skills: PropTypes.arrayOf(PropTypes.object),
}

export default PortfolioItem
