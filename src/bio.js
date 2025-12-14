import React from 'react'
import './css/bio.css'

function Bio() {
	return (
		<section className="bio" id="bio">
			<div className="bio-intro">
				<div className="bio-photo-placeholder" aria-label="Your photo placeholder" />
				<div className="bio-text">
					<p>
						This is your space for a personal bio. Share a brief story about who you are,
						what you enjoy building, and the perspective you bring to projects and teams.
						Swap this placeholder with your own words to add personality and context.
					</p>
					<p>
						You can include a few highlights, motivations, or fun facts here. Keep it short
						and genuine—enough for readers to connect with you beyond the bullets on a resume.
					</p>
				</div>
			</div>

			<div className="bio-personal">
				<div className="bio-personal-text">
					<p>
						Replace this with a short, personal story—what you enjoy outside of coding,
						what motivates you, or the quirks that make you, you. Keep it friendly and
						human; this section is meant to add warmth and personality.
					</p>
					<p>
						You might mention favorite hobbies, a recent challenge you enjoyed, or why your
						cats are the true managers of this portfolio.
					</p>
				</div>
				<div className="bio-personal-images">
					<div className="bio-cat-frame">
						<img src="./imgs/tree2.png" alt="Cat 1" className="bio-cat" />
					</div>
					<div className="bio-cat-frame">
						<img src="./imgs/tree3.png" alt="Cat 2" className="bio-cat" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bio
