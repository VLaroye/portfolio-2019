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
					<form class="container">
						<div class="field" data-aos="fade-up">
							<label class="label">Nom</label>
							<div class="control has-icons-left">
								<input class="input" type="text"></input>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</div>
						</div>
						<div class="field" data-aos="fade-up">
							<label class="label">Email</label>
							<div class="control has-icons-left">
								<input class="input" type="text"></input>
								<span class="icon is-small is-left">
									<i class="fas fa-envelope"></i>
								</span>
							</div>
						</div>
						<div class="field" data-aos="fade-up">
							<label class="label">Message</label>
							<div class="control">
								<textarea class="textarea"></textarea>
							</div>
						</div>
						<div class="control" data-aos="fade-up">
							<button class="button is-primary">Envoyer</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
)

export default Contact
