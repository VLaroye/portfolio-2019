import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Navbar from '../navbar'

const Header = () => (
	<>
		<Navbar />
		<StaticQuery
		query={graphql`
		query HeaderQuery {
			headerImg: file(relativePath: {eq: "header-background.jpg"}) {
				childImageSharp {
					fluid(quality: 90){
						...GatsbyImageSharpFluid
					}
				}
			}
		}
		`}
		render={data => (
			<header>
			<section id="home" className="hero is-fullheight">
				<div className="hero-body">
					<div className="container">
						<h2 className="title is-1">Vincent</h2>
						<h1 className="subtitle is-2">Développeur Front-End</h1>
					</div>
				</div>
				<Img fluid={data.headerImg.childImageSharp.fluid} className="header-bg" alt="Header image" style={{ position: "absolute" }} />
			</section>
  	</header>
		)}
		/>
	</>
)

export default Header
