import React from 'react'
import './css/bio.css'
import mycats from './imgs/mycats.jpg'

function Bio() {
	return (
		<section className="bio" id="bio">
			<div className="bio-intro">
				<div className="bio-photo-placeholder" aria-label="Your photo placeholder" />
				<div className="bio-text">
					<p>
						I graduated from the University of Florida with a B.S. in Computer Science.
                        I used the opportunity to explore a variety of fields, including cybersecurity, machine learning, and app development.
                        I enjoy building projects from the ground up, with experience in both front-end and back-end development.
                        I lead a few projects through my coursework and research, and I am always looking for new challenges to tackle.
					</p>
					<p>
						Beyond coding, I have experience in research and reverse engineering.
                        While working as an undergraduate research assistant at the Florida Institute of Cybersecurity, I focused on network analysis and privacy vulnerabilities in mobile applications.
                        The research experience honed my analyticial skills while dealing with sensitive topics, as the research focused on the intersection of technology and interpersonal abuse.
                        This experience has made me a more thoughtful and careful developer. 
                        Although I stopped working as an undergrad research assistant in May 2025, I continued working with my advisors as they sponsored my senior project (Crouton iOS Network Logger and CLI Tool for Real-time Location Access Detection).
                        I lead the team as the project manager, gaining leadership experience while continuing to develop my technical and research skills.
                    </p>
				</div>
			</div>

			<div className="bio-personal">
				<div className="bio-personal-text">
					<p>
						Beyond coding, I am as nerdy as they come.
                        I love video games, and enjoy modding games and playing randomizers competitively.
                        My favorite game is Spelunky 2, and if you know anything about that game, you know how intense and absurd it can get.
                        You can also find me playing strategy board games (Shogi was my last obsession), completing complex logic puzzles, reading nonfiction books, or listening to podcasts and music.
                        I also have an encyclopedic knowledge of completely useless and irrevelant trivia, none of which would actually show up in a trivia night.
                        Feel free to ask me to tell you a random fact sometime!
					</p>
					<p>
						On the right, here are my cats, Mimi and Oreo.
                        They are the true project managers of my life and code, as they always having these judging eyes when I work.
                        They also enjoy sitting on my keyboard and walking across my laptop while I code, which always makes for an interesting time.
					</p>
                    <p>
                        If you had made it this far, thanks for exploring my portfolio! If you would like to reach out, my email and resume are at the bottom of the page.
                    </p>
				</div>
				<div className="bio-personal-images">
					<div className="bio-cat-frame">
						<img src={mycats} alt="My Cats" className="bio-cat" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bio
