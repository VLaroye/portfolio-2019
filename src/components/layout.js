import React, { useEffect } from "react"

import AOSInit from '../utils/aos-init'

import "./styles.scss"

import Header from './header/header'
import About from './about/about'
import Skills from './skills/skills'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact'

const Layout = () => {
	useEffect(() => {
		AOSInit()
	}, [])

  return (
    <>
      <Header/>
      <main>
				<About/>
				<Skills/>
				<Portfolio/>
				<Contact/>
			</main>
      <footer></footer>
    </>
  )
}

export default Layout
