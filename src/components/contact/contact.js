import React from 'react'

const Contact = () => (
	<section className="section" id="contact">
		<div className="container" data-aos="fade-up">
			<div className="columns">
				<div className="column" data-aos="fade-up">
					<h1 className="title has-text-centered" data-aos="zoom-in">Contact</h1>
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-three-quarters">
					<form className="container">
						<div className="field" data-aos="fade-up">
							<label className="label">Nom</label>
							<div className="control has-icons-left">
								<input className="input" type="text"></input>
								<span className="icon is-small is-left">
									<i className="fas fa-user"></i>
								</span>
							</div>
						</div>
						<div className="field" data-aos="fade-up">
							<label className="label">Email</label>
							<div className="control has-icons-left">
								<input className="input" type="text"></input>
								<span className="icon is-small is-left">
									<i className="fas fa-envelope"></i>
								</span>
							</div>
						</div>
						<div className="field" data-aos="fade-up">
							<label className="label">Message</label>
							<div className="control">
								<textarea className="textarea"></textarea>
							</div>
						</div>
						<div className="control" data-aos="fade-up">
							<button className="button is-primary">Envoyer</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
)

export default Contact
