import React, { useEffect } from "react"
import AOS from 'aos'

import "./styles.scss"

import Header from './header/header'
import About from './about/about'
import Skills from './skills/skills'

const Layout = () => {
	useEffect(() => {
		AOS.init({
			// Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 450, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		})
	}, [])

  return (
    <>
      <Header/>
      <main>
				<About/>
				<Skills/>
			</main>
      <footer></footer>
    </>
  )
}

export default Layout
